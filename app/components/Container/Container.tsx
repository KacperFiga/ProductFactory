import React from "react";
import styles from "./Container.module.css";

interface containerI {
  children?: React.ReactNode;
}

export const Container = ({ children }: containerI) => {
  return <section className={styles.container}>{children}</section>;
};
