import React from "react";
import Link from "next/link";

import styles from "./StartButton.module.css";

export const StartButton = () => {
  return (
    <Link href="/" className={styles.button}>
      Start Register
    </Link>
  );
};
