import type { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import { PetGraph } from "@/components/PetGraph";
import { GetServerSideProps } from 'next'
import { PetData } from "@/utils/PetData";



export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data: PetData[] = [
    {
      name: '1 Pet',
      families: 2400,
    },
    {
      name: '2 Pets',
      families: 1398,
    },
    {
      name: '3 Pets',
      families: 9800,
    },
    {
      name: '4 Pets',
      families: 3908,
    },
    {
      name: '5 Pets',
      families: 4800,
    },
    {
      name: '6+ Pets',
      families: 3800,
    },
  ];
  return {
    props: {
      slug: params!.slug as string,
      data
    }
  }
}

const Home: NextPage = ({ slug, data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Pet Month</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col items-center justify-center">
        {/* <h1 className="bg-black text-white">Check out the stats</h1> */}
        {/* <p>Looking at the stats for people with {slug} pets</p> */}

        <PetGraph data={data} slug={slug} />

      </main>
    </>
  );
};

export default Home;
