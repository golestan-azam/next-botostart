import connectDB from "@/utils/connectDb";
import User from "@/models/User";

// **** url: /api/data
export default async function handler(req, res) {
  try {
    //  connect to DB
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "Error connecting to database" });
  }

  if (req.method === "POST") {
    const { name } = req.body;

    if (!name || name.length <= 3) {
      //  422 دیتای غیرمعتبر
      res.status(422).json({ status: "failed", message: "Invalid Data" });
      return;
    }

    try {
      //  save data to DB
      const user = await User.create({
        name: "sahar",
        age: 25,
        email: "sahar@gmail.com",
        phone: "09125470002",
        address: {
          city: "tehran",
          street: "azadi",
        },
        courses: ["next js", "react js", "node js"],
      });
      console.log(user);

      res
        .status(201)
        .json({ status: "success", message: "Data Created", data: user });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "Error in storing data in database",
      });
    }
  }
}
