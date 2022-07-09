import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Pet Month</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="bg-black text-white">Check out the stats</h1>
      </main>
    </>
  );
};

export default Home;
