import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <h1>Next-Auth Cridentials</h1>
      <button>
        <Link href="/signup">Register</Link>
      </button>
      <button onClick={() => signIn()}>Log in</button>
    </>
  );
}
