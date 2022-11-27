import React from "react";
import Link from "next/link";
import styles from "./RegisterButton.module.css";

export const RegisterButton = () => {
  return (
    <Link className={styles.button} href="/">
      Register
    </Link>
  );
};
