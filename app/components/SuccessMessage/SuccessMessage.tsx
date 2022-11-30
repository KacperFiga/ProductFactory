import React from "react";

import styles from "./SuccessMessage.module.css";

export const SuccessMessage = () => {
  return (
    <section className={styles.success}>
      Your email has been successfully registered, headlines will be sent to you
      soon
    </section>
  );
};
