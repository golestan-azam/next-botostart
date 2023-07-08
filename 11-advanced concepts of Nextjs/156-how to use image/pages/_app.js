import Head from "next/head";

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
