import React from "react";

function AlbumDetails({ album }) {
  return (
    <div>
      <h3>AlbumDetails</h3>
      <h2>{album.id} - {album.userId} - {album.title} </h2>
    </div>
  );
}

export default AlbumDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:3001/albums/${params.albumId}`);
  const data = await res.json();

  return {
    props: { album: data },
  };
}
