import type { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import { Histogram } from "@/components/Histogram";

import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      slug: params!.slug as string,
    }
  }
}

const Home: NextPage = ({ slug }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Pet Month</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col items-center justify-center">
        <h1 className="bg-black text-white">Check out the stats</h1>
        <p>Looking at the stats for people with {slug} pets</p>

        <Histogram />
      </main>
    </>
  );
};

export default Home;
