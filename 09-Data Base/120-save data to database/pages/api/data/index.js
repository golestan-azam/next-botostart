import connectDB from "@/utils/connectDb";
import User from "@/models/User";

// ****************************
//  strin connection
// MONGO_URI=mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.yoy4spn.mongodb.net/?retryWrites=true&w=majority
// ************************

// **** url: /api/data
export default async function handler(req, res) {
  //  connect to DB
  await connectDB();

  if (req.method === "POST") {
    const { name } = req.body;

    if (!name || name.length <= 3) {
      //  422 دیتای غیرمعتبر
      res.status(422).json({ status: "failed", message: "Invalid Data" });
      return;
    }

    //  save data to DB
    // The first method:

    // const user = new User({ name });
    // await user.save();

    // res
    //   .status(201)
    //   .json({ status: "success", message: "Data Created", data: { name } });

    // ********************

    // The second method:
    const user = await User.create({ name });
    console.log(user);

    res
      .status(201)
      .json({ status: "success", message: "Data Created", data: user });
  }
}
