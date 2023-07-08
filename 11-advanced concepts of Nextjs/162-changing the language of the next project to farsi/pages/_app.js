import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>BotoStart</title>
    </Head>
      <Component {...pageProps} />
    </>
  );
}
