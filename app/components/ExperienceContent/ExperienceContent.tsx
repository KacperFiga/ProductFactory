import React from "react";
import { useMemo } from "react";

import styles from "./ExperienceContent.module.css";

interface experienceContentI {
  activeTabId: number;
}

export const ExperienceContent = ({ activeTabId }: experienceContentI) => {
  const tabsContentAsset = useMemo(
    () => [
      {
        text: "1st tab This course has been attempted by zero people who are eager to learn product design, especially user experience and user interface, so it is not a prerequisite, but due to the limited capacity of the priority course with early enrolled people, others can participate in future courses. Obviously, the ability to use tools like Adobe Photoshop and Adobe Illustrator as well as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy, ",
        id: 0,
      },
      {
        text: " 2nd tab his course has been attempted by zero people who are eager to learn product design, especially user experience and user interface, so it is not a prerequisite, but due to the limited capacity of the priority course with early enrolled people, others can participate in future courses. Obviously, the ability to use tools like Adobe Photoshop and Adobe Illustrator as well as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy,",
        id: 1,
      },
      {
        text: " 3rd tab This course has been attempted by zero people who are eager to learn product design, especially user experience and user interface, so it is not a prerequisite, but due to the limited capacity of the priority course with early enrolled people, others can participate in future courses. Obviously, the ability to use tools like Adobe Photoshop and Adobe Illustrator as well as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy, ",
        id: 2,
      },
    ],
    []
  );

  const tabContent = tabsContentAsset.map(({ text, id }) => (
    <section
      key={id}
      className={
        activeTabId === id
          ? `${styles.content}  ${styles.active_content}`
          : `${styles.content}`
      }
    >
      <p>{text}</p>
    </section>
  ));

  return <section className={styles.content_tabs}>{tabContent}</section>;
};
