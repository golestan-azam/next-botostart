import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getSession } from "next-auth/react";

async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "failed",
      message: "Error in connecting DB",
    });
  }

  //  authenticate user
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({
      status: "failed",
      message: "You are not logged in!",
    });
  }

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return res.status(404).json({
      status: "failed",
      message: "User doesn't exist!",
    });
  }

  if (req.method === "POST") {
    const { title, status } = req.body;

    if (!title || !status) {
      return res.status(422).json({
        status: "failed",
        message: "Invalid Data!",
      });
    }

    user.todos.push({ title, status });
    user.save();

    res.status(201).json({
      status: "success",
      message: "Todo Created!",
    });
  }
}

export default handler;
