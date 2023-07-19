import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Home() {

  const logOutHandler = () => {
    signOut();
  }

  return (
    <>
      <h1>Next-Auth Cridentials</h1>
      <button>
        <Link href="/dashboard">Dashboard</Link>
      </button>
      <button>
        <Link href="/signup">Register</Link>
      </button>
      <button>
        <Link href="/signin">Log in</Link>
      </button>
      <button onClick={logOutHandler}>Log Out</button>
    </>
  );
}
