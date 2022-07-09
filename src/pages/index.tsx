import Header from "@/components/Header";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pet Month</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <h1 className="bg-black text-white">Pet Month</h1> */}
        <Header />

      </main>
    </>
  );
};

export default Home;
