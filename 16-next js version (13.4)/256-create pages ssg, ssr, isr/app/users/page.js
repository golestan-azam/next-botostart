import React from "react";

async function Users(props) {
  // SSG
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");

  // SSR
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //     cache: "no-store",
  //   });

  //   ISR
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 5 },
  });

  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

// ***********************
// This request should be cached until manually invalidated.
// Similar to `getStaticProps`.
// `force-cache` is the default and can be omitted.
// ^^^^^ fetch(URL, { cache: 'force-cache' });

// This request should be refetched on every request.
// Similar to `getServerSideProps`.
// ^^^^^ fetch(URL, { cache: 'no-store' });

// This request should be cached with a lifetime of 10 seconds.
// Similar to `getStaticProps` with the `revalidate` option.
// ^^^^^ fetch(URL, { next: { revalidate: 10 } });
