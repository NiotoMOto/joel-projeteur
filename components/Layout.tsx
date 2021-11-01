import React from "react";
import { Header } from "./Header";
import classnames from "classnames";
import styles from "../styles/Layout.module.scss";

type LayoutProps = {
  children: React.ReactChild;
  noPadding?: boolean;
};

export const Layout = ({ children, noPadding }: LayoutProps) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div
        className={classnames(styles.content, {
          [styles.noPadding]: noPadding,
        })}
      >
        {children}
      </div>
    </div>
  );
};
