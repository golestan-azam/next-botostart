export async function generateStaticParams() {
  //   return [{ userId: "1" }, { userId: "2" }];

  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await users.json();
  const params = data.map((user) => ({ userId: String(user.id) }));
  return params;
}

async function UserDetails({ params }) {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await user.json();
  return (
    <div>
      UserDetails - {params.userId} - {data.name}
    </div>
  );
}

export default UserDetails;
