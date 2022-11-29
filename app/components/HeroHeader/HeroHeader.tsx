import React from "react";
import styles from "./HeroHeader.module.css";

export const HeroHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__h1}> Product Design Course </h1>
      <h3 className={styles.header__h3}> Product Factory </h3>
    </header>
  );
};
