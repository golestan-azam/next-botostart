function UserDetail({ data }) {
  return (
    <div>
      <h1>UserDetail</h1>
      <h3>{data.name}</h3>
      <h3>{data.email}</h3>
    </div>
  );
}

export default UserDetail;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3001/users");
  const data = await res.json();
  const userData = data.slice(0, 4);
  const paths = userData.map((user) => ({
    params: {
      userId: user.id.toString(),
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
  //   return {
  //     paths: [
  //       { params: { userId: "1" } },
  //       { params: { userId: "2" } },
  //       { params: { userId: "3" } },
  //       { params: { userId: "4" } },
  //       { params: { userId: "5" } },
  //       { params: { userId: "6" } },
  //       { params: { userId: "7" } },
  //       { params: { userId: "8" } },
  //       { params: { userId: "9" } },
  //       { params: { userId: "10" } },
  //     ],
  //     fallback: false,
  //   };
}

export async function getStaticProps(context) {
  console.log("Regenerating User Details Page!");
  const { params } = context;
  const res = await fetch(`http://localhost:3001/users/${params.userId}`);
  const data = await res.json();

  // ***** notFound ******
  // if (!data.name) {
  //   return {
  //     notFound: true,
  //   };
  // }

  // **** redirect *****
  if (!data.name) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: { data },
    revalidate: 5,
  };
}
