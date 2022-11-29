import React, { useState } from "react";
import { Container } from "../../components/Container/Container";
import { HeaderExperience } from "../../components/HeaderExperience/HeaderExperience";
import { ExperienceTabs } from "../../components/ExperienceTabs/ExperienceTabs";
import { PFlogoExp } from "../../components/PFlogoExp/PFlogoExp";
import { ExperienceContent } from "../../components/ExperienceContent/ExperienceContent";

import styles from "./Experience.module.css";

export const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <Container>
      <HeaderExperience />
      <ExperienceTabs handler={setActiveTabId} activeTabId={activeTabId} />
      <section className={styles.flexContainer}>
        <PFlogoExp />
        <ExperienceContent activeTabId={activeTabId} />
      </section>
    </Container>
  );
};
