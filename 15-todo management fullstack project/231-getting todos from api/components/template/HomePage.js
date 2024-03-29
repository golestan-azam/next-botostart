import { useEffect, useState } from "react";

function HomePage(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();

    if (data.status === "success") setTodos(data.data.todos)
  };

  return <div className="home-page">
    <div className="home-page--todo">
        <p>Todo</p>
    </div>
    <div className="home-page--inProgress">
        <p>In Progress</p>
    </div>
    <div className="home-page--review">
        <p>Review</p>
    </div>
    <div className="home-page--done">
        <p>Done</p>
    </div>
  </div>;
}

export default HomePage;
