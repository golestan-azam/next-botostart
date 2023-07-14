import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  try {
    await connectDB();
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      status: "failed",
      message: "Error in connecting DB",
    });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ status: "failed", message: "Invalid Data" });
  }

  const existingUser = await User.findOne({ email: email });
  
  if (existingUser) {
    return res
      .status(422)
      .json({ status: "failed", message: "User exists already!" });
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await User.create({ email: email, password: hashedPassword });
  console.log("newUser: ", newUser);

  res.status(201).json({
    status: "success",
    message: "User Created!",
  });
}

export default handler;
