import Head from "next/head";

function NextJS({data}) {
  return (
    <div>
      <Head>
        <title>NextJS Page</title>
      </Head>
      <h1>NextJS Course - {data.name}</h1>
    </div>
  );
}

export default NextJS;

export async function getServerSideProps() {
  return {
    props: {
      data: {
        name: "Azam",
        title: "Azam Page",
        description: "She is a body builder",
      },
    },
  };
}
