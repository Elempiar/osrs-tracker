import React from "react";
import Head from "next/head";
import First from "../components/first/First";
import Second from "../components/second/Second";
import Third from "../components/third/Third";
import Fourth from "../components/fourth/Fourth";
import Footer from "../components/footer/Footer";
import hiscores from "osrs-json-hiscores";

export async function getStaticProps() {
  const stats = await hiscores.getStats("Huell");

  return {
    props: {
      stats,
    },
    revalidate: 10,
  };
}

export default function App({ stats }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <First />
        <Second />
        <Third />
        <Fourth />
      </main>
      {JSON.stringify(stats, null, 2)}
      <Footer />
    </>
  );
}