// <?xml version="1.0" encoding="utf-8"?>
// <!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
// <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

import styles from "./Hamburger.module.css";

interface hamburgerI {
  handler: () => void;
  isActive: boolean;
}

export const Hamburger = ({ handler, isActive }: hamburgerI) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      enable-background="new 0 0 50 50"
      xmlSpace="preserve"
      className={styles.svg}
      onClick={handler}
    >
      <path
        fill="#f46632"
        d="M8.667,15h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,15,8.667,15z"
        className={`${isActive ? styles.crossLeft : null} ${
          styles.animSettings
        }`}
      />
      <path
        fill="#f46632"
        d="M8.667,37h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,37,8.667,37z"
        className={`${isActive ? styles.hide : null} ${styles.animSettings}`}
      />
      <path
        fill="#f46632"
        d="M8.667,26h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,26,8.667,26z"
        className={`${isActive ? styles.crossRight : null} ${
          styles.animSettings
        }`}
      />
    </svg>
  );
};
