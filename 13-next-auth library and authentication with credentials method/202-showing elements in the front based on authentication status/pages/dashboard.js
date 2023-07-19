import { getSession } from "next-auth/react";

function Dashboard(props) {
  return <div>Dashboard</div>;
}

export default Dashboard;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanennt: false,
      },
    };
  }

  return {
    props: {session},
  };
}
