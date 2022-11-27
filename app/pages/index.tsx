import Head from "next/head";
import { Topbar } from "../views/Topbar/Topbar";
import { AboutCourse } from "../views/AboutCourse/AboutCourse";
import { AboutUs } from "../views/AboutUs/AboutUs";
import { CourseFee } from "../views/CourseFee/CourseFee";
import { Experience } from "../views/Experience/Experience";
import { Sessions } from "../views/Sessions/Sessions";
import { Masters } from "../views/Masters/Masters";
import { FAQ } from "../views/FAQ/FAQ";
import { Mailing } from "../views/Mailing/Mailing";
import { Projects } from "../views/Projects/Projects";
import { Schedule } from "../views/Schedule/Schedule";
import { Footer } from "../views/Footer/Footer";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <section className={styles.container}>
      <Head>
        <title>Product Factory</title>
        <meta name="description" content="Product Factory page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <main className={styles.main}>
        <AboutCourse />
        <AboutUs />
        <Experience />
        <Sessions />
        <Masters />
        <FAQ />
        <CourseFee />
        <Mailing />
        <Projects />
        <Schedule />
      </main>

      <Footer />
    </section>
  );
};

export default Home;
