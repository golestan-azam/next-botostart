import connectDB from "@/utils/connectDb";

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

    res
      .status(201)
      .json({ status: "success", message: "Data Created", data: { name } });
  }
}

// *******************
// import mongoose from "mongoose";

// // **** url: /api/data
// export default function handler(req, res) {
//   if (req.method === "POST") {
//     const { name } = req.body;

//     if (!name || name.length <= 3) {
//       //  422 دیتای غیرمعتبر
//       res.status(422).json({ status: "failed", message: "Invalid Data" });
//       return;
//     }

//     //  connect to DB
//     mongoose.connect(
//       "mongodb+srv://azam:12345@cluster0.yoy4spn.mongodb.net/?retryWrites=true&w=majority",
//       () => console.log("Connected to DB")
//     );

//     res
//       .status(201)
//       .json({ status: "success", message: "Data Created", data: { name } });
//   }
// }
