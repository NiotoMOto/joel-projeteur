import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { slide as Menu } from "react-burger-menu";

export const Header = () => {
  return (
    <>
      <div className={styles.mobileMenu}>
        <div className={styles.content}>
          <Link passHref href="/">
            <li className={styles.brand}>
              <a> IM</a>
            </li>
          </Link>
        </div>
        <Menu>
          <Link passHref href="/contact">
            <a> Me contacter</a>
          </Link>
          <Link passHref href="/prix">
            <a> Prix</a>
          </Link>
          <Link passHref href="/parcours">
            <a> Parour</a>
          </Link>
        </Menu>
      </div>
      <div className={styles.desktopMenu}>
        <Link passHref href="/">
          <li className={styles.brand}>
            <a> IM</a>
          </li>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <Link passHref href="/contact">
              <li className={styles.navItem}>
                <a className={styles.navLink}> Me contacter</a>
              </li>
            </Link>
            <Link passHref href="/prix">
              <li className={styles.navItem}>
                <a className={styles.navLink}> Prix</a>
              </li>
            </Link>
            <Link passHref href="/parcours">
              <li className={styles.navItem}>
                <a className={styles.navLink}> Parcours</a>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};
