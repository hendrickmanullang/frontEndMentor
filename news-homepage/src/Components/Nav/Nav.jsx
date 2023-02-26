import { useState } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  const navItems = ["Home", "New", "Popular", "Trending", "Categories"];
  const [showNavMenu, setShowNavMenu] = useState(false);

  const iconMenuSrc = showNavMenu
    ? "./assets/icon-menu-close.svg"
    : "./assets/icon-menu.svg";

  const handleMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <header className={styles.header}>
      <a href="/">
        <img className={styles.logo} src="./assets/logo.svg" alt="" />
      </a>
      <nav className={styles["nav-container"]}>
        <ul className={`${styles["main-nav"]} ${!showNavMenu && styles.hidden}`}>
          <div
            className={`${styles["nav-items"]} ${showNavMenu && styles.open}`}
          >
            {navItems.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </div>
        </ul>
        <button className={styles["icon-menu"]} onClick={handleMenu}>
          <img src={iconMenuSrc} alt="" />
        </button>
      </nav>
    </header>
  );
};

export default Nav;
