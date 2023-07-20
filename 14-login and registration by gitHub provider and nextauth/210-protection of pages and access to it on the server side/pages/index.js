import styles from "@/styles/Home.module.css";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const signInHandler = () => {
    signIn("github");
  };

  const signOutHandler = () => {
    signOut();
  };

  return (
    <>
      <h1>Next-Auth | GitHub</h1>
      <button onClick={signInHandler}>Sign In</button>
      <button onClick={signOutHandler}>Sign Out</button>
      <button>
        <Link href="/dashboard">Dashboard</Link>
      </button>
      <button>
        <Link href="/ssrdashboard">SSR Dashboard</Link>
      </button>
    </>
  );
}
