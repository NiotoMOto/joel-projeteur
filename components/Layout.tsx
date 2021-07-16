import React from "react";
import { Header } from "./Header";
import classnames from "classnames";
import styles from "../styles/Layout.module.css";

type LayoutProps = {
  children: React.ReactChild;
  noPadding?: boolean;
};

export const Layout = ({ children, noPadding }: LayoutProps) => {
  return (
    <div
      className={classnames(styles.layoutContainer, styles.noPadding, {
        [styles.noPadding]: noPadding,
      })}
    >
      <Header />
      <div
        className={classnames(styles.layoutContent, styles.noPadding, {
          [styles.noPadding]: noPadding,
        })}
      >
        {children}
      </div>
    </div>
  );
};
