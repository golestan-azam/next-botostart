import styles from "@/styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { status } = useSession();

  const signInHandler = () => {
    signIn("github");
  };

  const signOutHandler = () => {
    signOut();
  };

  return (
    <>
      <h1>Next-Auth | GitHub</h1>
      {status === "unauthenticated" ? (
        <button onClick={signInHandler}>Sign In</button>
      ) : null}

      {status === "authenticated" ? (
        <>
          <button onClick={signOutHandler}>Sign Out</button>
          <button>
            <Link href="/dashboard">Dashboard</Link>
          </button>
          <button>
            <Link href="/ssrdashboard">SSR Dashboard</Link>
          </button>
        </>
      ) : null}
    </>
  );
}
