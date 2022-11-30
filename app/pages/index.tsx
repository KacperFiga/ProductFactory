import Head from "next/head";
import { Header } from "../views/Header/Header";
import { Hero } from "../views/Hero/Hero";
import { ProductFactory } from "../views/ProductFactory/ProductFactory";
import { Experience } from "../views/Experience/Experience";
import { Mailing } from "../views/Mailing/Mailing";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <section className={styles.container}>
      <Head>
        <title>Product Factory</title>
        <meta name="description" content="Product Factory page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero />
        <ProductFactory />
        <Experience />
        <Mailing />
      </main>
    </section>
  );
};

export default Home;
