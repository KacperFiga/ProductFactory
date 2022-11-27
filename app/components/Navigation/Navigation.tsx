import React, { useEffect, useMemo, useState } from "react";
import { NavigationElement } from "../NavigationElement/NavigationElement";
import { RegisterButton } from "../RegisterButton/RegisterButton";
import styles from "./Navigation.module.css";

interface navigationI {
  isActive: boolean;
}
export const Navigation = ({ isActive }: navigationI) => {
  const [displayDesktop, handleDisplay] = useState(false);
  const options = useMemo(
    () => [
      { text: "Projects", link: "/" },
      { text: "Partners", link: "/" },
      { text: "FAQ", link: "/" },
      { text: "Masters", link: "/" },
      { text: "Classes", link: "/" },
      { text: "Course Experience", link: "/" },
      { text: "About us", link: "/" },
    ],
    []
  );

  useEffect(() => {
    const userUsingDesktop = window.innerWidth > 624 ? true : false;
    handleDisplay(userUsingDesktop);
  }, []);

  const navigationOptions = options.map((el) => (
    <NavigationElement link={el.link} text={el.text} key={el.text} />
  ));

  return (
    <nav
      className={`${styles.nav} ${
        isActive || displayDesktop ? styles.active : styles.disabled
      }`}
    >
      {navigationOptions}
      <RegisterButton />
    </nav>
  );
};
