import { useEffect, useState } from "react";
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

  useEffect(() => {}, [showNavMenu]);

  return (
    <header className={styles["header"]}>
      <a href="#">
        <img className={styles["logo"]} src="./assets/logo.svg" alt="" />
      </a>
      <nav className="flex-container">
        <ul className={styles["main-nav"]}>
          {navItems.map((entry) => (
            <li className={styles["nav-items"]} key={entry}>
              {entry}
            </li>
          ))}
        </ul>
        <button className={styles["icon-menu"]} onClick={handleMenu}>
          <img src={iconMenuSrc} alt="" />
        </button>
      </nav>
    </header>
  );
};

export default Nav;
