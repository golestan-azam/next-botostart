import useSWR from "swr";

const url = "http://localhost:3001/todos";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Todos(props) {
  // const { data, error } = useSWR("http://localhost:3001/todos", (url) =>
  //   fetch(url).then((res) => res.json())
  // );

  const { data, error } = useSWR(url, fetcher);

  return (
    <div>
      {data ? (
        data.map((todo) => <h3 key={todo.id}>{todo.title}</h3>)
      ) : (
        <h1>Loading ....</h1>
      )}
    </div>
  );
}

export default Todos;
