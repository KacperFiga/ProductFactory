import React, { useState } from "react";
import { Hamburger } from "../../components/Hamburger/Hamburger";
import { Navigation } from "../../components/Navigation/Navigation";
import { PFicon } from "../../components/PFicon/PFicon";
import styles from "./Topbar.module.css";

export const Topbar = () => {
  const [isActive, toggle] = useState(false);

  const handleActive = () => toggle((prev) => !prev);

  return (
    <section className={styles.topbar}>
      <Hamburger handler={handleActive} isActive={isActive} />
      <PFicon />
      <Navigation isActive={isActive} />
    </section>
  );
};
