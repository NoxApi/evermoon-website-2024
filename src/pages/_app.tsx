import { Josefin_Sans } from "next/font/google";
import { type AppType } from "next/app";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Index";

const Jose = Josefin_Sans({ subsets: ["latin"] });

import "evm/styles/globals.css";
import Layout from "evm/general/Layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>Evermoon</title>
        <meta name="description" content="Evermoon's NFT Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Evermoon-Account.ico" />
      </Head>
      <main
        className={
          "flex flex-col items-center justify-center text-[#F1E3B5]" +
          Jose.className
        }
      >
        <Component {...pageProps} />
        <Footer />
      </main>
    </Layout>
  );
};

export default MyApp;
