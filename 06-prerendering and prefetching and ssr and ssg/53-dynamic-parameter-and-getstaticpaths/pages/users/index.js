import Link from "next/link";

function Users({ users }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

export async function getStaticProps() {
  // fetch data from api
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await fetch("http://localhost:3001/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
