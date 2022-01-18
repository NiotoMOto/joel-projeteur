import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import { slide as Menu } from "react-burger-menu";
import { communData } from "../data/commun";

export const Header = () => {
  return (
    <>
      <div className={styles.mobileMenu}>
        <div className={styles.content}>
          <Link passHref href="/">
            <li className={styles.brand}>
              <a href="/"> {communData.siteName}</a>
            </li>
          </Link>
        </div>
        <Menu>
          <Link passHref href="/pro">
            <a> Professionnels</a>
          </Link>
          <Link passHref href="/particulier">
            <a> Particuliers</a>
          </Link>
          <Link passHref href="/parcours">
            <a> Parcours</a>
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
            <Link passHref href="/pro">
              <li className={styles.navItem}>
                <a className={styles.navLink}>Professionnels</a>
              </li>
            </Link>
            <Link passHref href="/particulier">
              <li className={styles.navItem}>
                <a className={styles.navLink}> Particuliers</a>
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
