import Head from "next/head";

function NextJS({data}) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
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
