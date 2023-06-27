import User from "@/models/User";
import connectDB from "@/utils/connectDb";
import React from "react";

function SSG({ users }) {
  console.log(users);
  return <div>SSG</div>;
}

export default SSG;

export async function getStaticProps() {
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
