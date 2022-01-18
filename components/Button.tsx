import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

export const ButtonLink = ({
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

export const Button = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
};
