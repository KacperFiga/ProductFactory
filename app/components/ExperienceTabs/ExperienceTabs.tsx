import React, { useState, useMemo } from "react";
import styles from "./ExperienceTabs.module.css";

interface experienceTabI {
  handler: (value: number) => void;
  activeTabId: number;
}

export const ExperienceTabs = ({ handler, activeTabId }: experienceTabI) => {
  const tabButtonsContent = useMemo(
    () => [
      { text: "After attending the course", id: 0 },
      { text: "During the period", id: 1 },
      { text: "Before attending the course", id: 2 },
    ],
    []
  );

  const tabButtons = tabButtonsContent.map(({ id, text }) => (
    <button
      key={id}
      onClick={() => handler(id)}
      className={
        activeTabId === id
          ? `${styles.tab} ${styles.active_tab}`
          : `${styles.tab}`
      }
    >
      {text}
    </button>
  ));

  return <section className={styles.bloc_tabs}>{tabButtons}</section>;
};
