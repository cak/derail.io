import type { NextPage } from "next";
import Head from "next/head";
import Main from "../main";

const Home: NextPage = () => (
  <div className='app'>
    <Head>
      <title>derail.io</title>
      <meta name='description' content='derail.io' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className='main'>
      <Main />
    </main>
  </div>
);

export default Home;
