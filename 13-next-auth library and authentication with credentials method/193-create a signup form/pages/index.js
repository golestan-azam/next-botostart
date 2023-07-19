import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next-Auth Cridentials</h1>
      <button>
        <Link href="/signup">Register</Link>
      </button>
    </>
  );
}
