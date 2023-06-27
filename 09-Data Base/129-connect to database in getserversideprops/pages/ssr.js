import User from "@/models/User";
import connectDB from "@/utils/connectDb";
import React from "react";

function SSR({ users }) {
  console.log(users);
  return <div>SSR</div>;
}

export default SSR;

export async function getServerSideProps() {
  try {
    await connectDB();
    const users = await User.find();

    return {
      props: {
        users: JSON.parse(JSON.stringify(users)),
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
