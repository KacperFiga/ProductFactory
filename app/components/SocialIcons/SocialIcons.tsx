import React from "react";
import { FacebookIcon } from "../FacebookIcon/FacebookIcon";
import { InstagramIcon } from "../InstagramIcon/InstagramIcon";
import { TwitterIcon } from "../TwitterIcon/TwitterIcon";

import styles from "./SocialIcons.module.css";

export const SocialIcons = () => {
  return (
    <section className={styles.container}>
      <FacebookIcon />
      <TwitterIcon />
      <InstagramIcon />
    </section>
  );
};
