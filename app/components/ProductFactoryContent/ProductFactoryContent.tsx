import React from "react";

import styles from "./ProductFactoryContent.module.css";

export const ProductFactoryContent = () => {
  return (
    <section>
      <p className={styles.about}>
        Today, given the economic and labor market conditions, the best and
        least risky way to invest is to invest in personal assets and skills.
        <br className={styles.about__desktop_break} /> UI / UX Product Design
        Course covers all aspects of product design from product thinking and
        design to user-centric research and product research
        <br className={styles.about__desktop_break} />
        and business vision and digital marketing to product designers and
        creators, designing the end-user experience and interface of the product
        and <br className={styles.about__desktop_break} />
        how to deliver it. Includes.
      </p>
    </section>
  );
};
