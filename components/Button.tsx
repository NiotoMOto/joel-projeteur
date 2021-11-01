import Link from "next/link";
import React from "react";
import styles from "./button.module.scss";

export const Button = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <a className={styles.button}>{children}</a>
    </Link>
  );
};
