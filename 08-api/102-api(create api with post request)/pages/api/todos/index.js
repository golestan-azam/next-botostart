import { todos } from "@/data/todos";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { todo } = req.body;
    // store data in a DataBase
    const newTodo = {
      id: todos.length + 1,
      title: todo,
    };
    res.status(201).json({
      message: "Success",
      data: newTodo,
      // name: "azam",
    });
  }
}
