import React from "react";
import styles from "./NavigationElement.module.css";

interface navigationElementI {
  link: string;
  text: string;
}

export const NavigationElement = ({ link, text }: navigationElementI) => {
  return (
    <a href={link} className={styles.option}>
      {text}
    </a>
  );
};
