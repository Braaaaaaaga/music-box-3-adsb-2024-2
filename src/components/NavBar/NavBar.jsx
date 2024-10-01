import React from "react";
import styles from "./NavBar.module.css";
const NavBar = ({ logoInicio, textoBotao }) => {
  return (
    <nav className={styles["navbar"]}>
      <img
        src={logoInicio}
        className={styles["logo-inicio"]}
        alt="Logo Início"
      />
      <button className={styles["logo-fim"]}>{ textoBotao ? textoBotao : "Texto default"  }</button>
    </nav>
  );
};
export default NavBar;
