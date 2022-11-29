import React from "react";
import { HeroHeader } from "../../components/HeroHeader/HeroHeader";
HeroHeader;
import { AboutCourse } from "../../components/AboutCourse/AboutCourse";
import { StartButton } from "../../components/StartButton/StartButton";

import styles from "./Hero.module.css";
import { HeroImage } from "../../components/HeroImage/HeroImage";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <section className={styles.content__description}>
          <HeroHeader />
          <AboutCourse />
          <StartButton />
        </section>
        <HeroImage />
      </section>
    </section>
  );
};
