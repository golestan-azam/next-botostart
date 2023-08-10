export default function Home({ posts }) {
  // console.log(posts);
  return (
    <div>
      <h3>Next.js Course</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id}- {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // fetch data from api
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetch("http://localhost:3001/posts");
  const data = await res.json();

  // console.log("**:",data);

  return {
    props: {
      posts: data,
    },
  };
}
