import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { slide as Menu } from "react-burger-menu";

export const Header = () => {
  return (
    <>
      <div className={styles.mobileMenu}>
        <Menu>
          <Link href="/contact">
            <a> Me contacter</a>
          </Link>
          <Link href="/tarification">
            <a> Prix</a>
          </Link>
          <Link href="/histoire">
            <a> Un peu d'histoire</a>
          </Link>
        </Menu>
      </div>
      <div className={styles.desktopMenu}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <Link href="/contact">
              <li className={styles.navItem}>
                <a className={styles.navLink}> Me contacter</a>
              </li>
            </Link>
            <Link href="/tarification">
              <li className={styles.navItem}>
                <a className={styles.navLink}> Prix</a>
              </li>
            </Link>
            <Link href="/histoire">
              <li className={styles.navItem}>
                <a className={styles.navLink}> Un peu d'histoire</a>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};
