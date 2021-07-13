import React from "react";
import { Header } from "./Header";
import styles from "../styles/Layout.module.css";

type LayoutProps = {
  children: React.ReactChild;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      {children}
    </div>
  );
};
