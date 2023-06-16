import Link from "next/link";
import React from "react";

function Albums({ albums }) {
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link href={`/albums/${album.id}`}>
              <h3>{album.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;

export async function getServerSideProps() {
  // fetch data from api
  // const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const response = await fetch("http://localhost:3001/albums");
  const data = await response.json();

  return {
    props: { albums: data },
  };
}
