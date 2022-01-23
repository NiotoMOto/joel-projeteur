import React from "react";
import style from "./footer.module.scss";
import Linkedin from "../icons/linkedin.svg";
import { communData } from "../data/commun";

export const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.description}>
        {communData.personName} | Dessinateur mécanique freelance
      </div>
      <div className={style.links}>
        <a href="https://www.linkedin.com/in/jo%C3%ABl-guibert/?originalSubdomain=fr">
          <Linkedin height={"40px"} width={"40px"} color="rgb(255, 255, 255)" />
        </a>
      </div>
    </div>
  );
};
