import React from "react";
import { ProductFactoryHeader } from "../../components/ProductFactoryHeader/ProductFactoryHeader";
import { ProductFactoryImage } from "../../components/ProductFactoryImage/ProductFactoryImage";
import { ProductFactoryContent } from "../../components/ProductFactoryContent/ProductFactoryContent";
import { SocialIcons } from "../../components/SocialIcons/SocialIcons";

import styles from "./ProductFactory.module.css";

export const ProductFactory = () => {
  return (
    <section className={styles.container}>
      <ProductFactoryImage />
      <ProductFactoryHeader />
      <ProductFactoryContent />
      <SocialIcons />
    </section>
  );
};
