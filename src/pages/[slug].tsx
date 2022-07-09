import type { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import { PetGraph } from "@/components/PetGraph";
import { GetServerSideProps } from 'next'
import { PetData } from "@/utils/PetData";
import { getPetData } from "@/utils/firestore";



export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data: PetData[] = await getPetData();

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
