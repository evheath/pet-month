import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { PetGraph } from "@/components/PetGraph";
import { PetData } from "@/utils/PetData";
import { getPetData } from "@/utils/firestore";
import { useRouter } from 'next/router'



export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data: PetData[] = await getPetData();
  return {
    props: {
      data
    }
  }
}

const Home: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const { pets } = router.query as { pets: string }

  return (
    <>
      <Head>
        <title>Pet Month</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col items-center justify-center">
        {/* <h1 className="bg-black text-white">Check out the stats</h1> */}

        <PetGraph data={data} pets={pets} />

      </main>
    </>
  );
};

export default Home;
