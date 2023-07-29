import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { sortTodos } from "@/utils/sortTodos";
import { getSession } from "next-auth/react";

async function handler(req, res) {
  // connect DB
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "failed",
      message: "Error in connecting DB",
    });
  }

  // authenticate user
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({
      status: "failed",
      message: "You are not logged in!",
    });
  }

  // find user
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
  } else if (req.method === "GET") {
    const sortedData = sortTodos(user.todos);
    res.status(200).json({
      status: "success",
      data: { todos: sortedData },
    });
  } else if (req.method === "PATCH") {
    const { id, status } = req.body;

    if (!id || !status) {
      return res.status(422).json({
        status: "failed",
        message: "Invalid Data!",
      });
    }

    //  updata in mongodb
    // update operators, such as $set , to modify field values
    // {
    //   <update operator>: { <field1>: <value1>, ... },
    //   <update operator>: { <field2>: <value2>, ... },
    //   ...
    // }

    const result = await User.updateOne(
      { "todos._id": id }, // Filter
      { $set: { "todos.$.status": status } } // Update
    );

    console.log(result);

    res.status(200).json({ status: "success" });
  }
}

export default handler;
