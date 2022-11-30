import React from "react";
import styles from "./Container.module.css";

interface containerI {
  children?: React.ReactNode;
  black?: boolean;
}

export const Container = ({ children, black }: containerI) => {
  return (
    <section
      className={
        black ? `${styles.container} ${styles.black}` : `${styles.container}`
      }
    >
      {children}
    </section>
  );
};
