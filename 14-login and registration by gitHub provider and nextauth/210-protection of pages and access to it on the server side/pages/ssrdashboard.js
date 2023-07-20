import { getSession } from "next-auth/react";
import React from "react";

function SSRDashboard({ session }) {
  console.log(session);
  return <div>SSRDashboard</div>;
}

export default SSRDashboard;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
