import User from "@/models/User";
import { verifyPassword, verifyToken } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

async function handler(req, res) {
  if (req.method !== "POST") return;

  try {
    await connectDB();
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      status: "failed",
      message: "Error in connecting DB",
    });
  }

  const { name, lastName, password } = req.body;
  const { token } = req.cookies;
  const secretKey = process.env.SECRET_KEY;

  if (!token) {
    return res.status(401).json({
      status: "faliled",
      message: "You are not logged in",
    });
  }

  const result = verifyToken(token, secretKey);

  if (!result) {
    return res.status(401).json({
      status: "faliled",
      message: "You are unauthorized",
    });
  }

  const user = await User.findOne({ email: result.email });

  if (!user) {
    return res.status(404).json({
      status: "faliled",
      message: "User doesn't exist!",
    });
  }

  const isValid = await verifyPassword(password, user.password);

  if (!isValid) {
    return res.status(422).json({
      status: "faliled",
      message: "Password is incorrect!",
    });
  }

  user.name = name;
  user.lastName = lastName;
  user.save();
  res.status(200).json({
    status: "success",
    data: { name, lastName, email: result.email },
  });
}

export default handler;
