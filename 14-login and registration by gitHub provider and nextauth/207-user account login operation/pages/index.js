import styles from "@/styles/Home.module.css";
import { signIn } from "next-auth/react";

export default function Home() {
  const signInHandler = () => {
    signIn("github");
  };

  return ( 
    <>
      <h1>Next-Auth | GitHub</h1>
      <button onClick={signInHandler}>Sign In</button>
    </>
  );
}
