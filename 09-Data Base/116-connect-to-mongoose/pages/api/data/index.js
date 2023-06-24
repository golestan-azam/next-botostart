import mongoose from "mongoose";

// **** url: /api/data
export default function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.body;

    if (!name || name.length <= 3) {
      //  422 دیتای غیرمعتبر
      res.status(422).json({ status: "failed", message: "Invalid Data" });
      return;
    }

    //  connect to DB
    mongoose.connect(
      "mongodb+srv://azam:12345@cluster0.yoy4spn.mongodb.net/?retryWrites=true&w=majority",
      () => console.log("Connected to DB")
    );

    res
      .status(201)
      .json({ status: "success", message: "Data Created", data: { name } });
  }
}
