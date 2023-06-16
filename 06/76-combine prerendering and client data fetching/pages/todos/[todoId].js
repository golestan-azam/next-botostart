import React, { useState } from "react";

function TodoDetails({ todo }) {
  const [data, setData] = useState(todo);

  const updateHandler = async (id) => {
    const res = await fetch(`http://localhost:3001/todos/${id}`);
    const data = await res.json();
    setData(data)
  };

  return (
    <div>
      <h1>{data.title}</h1>
      <h2>{`${data.completed}`}</h2>
      <button onClick={() => updateHandler(data.id)}>Update</button>
    </div>
  );
}

export default TodoDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:3001/todos/${params.todoId}`);
  const data = await res.json();
  
  return {
    props: { todo: data },
  };
}
