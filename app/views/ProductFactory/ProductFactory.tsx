import React from "react";
import { ProductFactoryHeader } from "../../components/ProductFactoryHeader/ProductFactoryHeader";
import { ProductFactoryImage } from "../../components/ProductFactoryImage/ProductFactoryImage";
import { ProductFactoryContent } from "../../components/ProductFactoryContent/ProductFactoryContent";
import { SocialIcons } from "../../components/SocialIcons/SocialIcons";

import { Container } from "../../components/Container/Container";

export const ProductFactory = () => {
  return (
    <Container>
      <ProductFactoryImage />
      <ProductFactoryHeader />
      <ProductFactoryContent />
      <SocialIcons />
    </Container>
  );
};
