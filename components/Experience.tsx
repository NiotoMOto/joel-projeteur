import React from "react";
import style from "./experience.module.scss";

interface Experience {
  title: string;
  dates: string;
  duration: string;
  place: string;
  client?: {
    name: string;
    href: string;
  };
  descriptions: string[];
  id: number;
}

type ExperienceProps = {
  experience: Experience;
};

export const Experience = ({ experience }: ExperienceProps) => (
  <div className={style.container}>
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.time}>
          <div className={style.dates}>{experience.dates}</div>
          <div>{experience.duration}</div>
        </div>
        <div className={style.titleContainer}>
          <div className={style.title}>{experience.title}</div>
          {experience.client && (
            <div>
              Client:{" "}
              <a
                className={style.link}
                href={experience.client.href}
                target="_blank"
                rel="noreferrer"
              >
                {experience.client.name}
              </a>
            </div>
          )}
        </div>
      </div>
      <div className={style.content}>
        {experience.descriptions.map((description, key) => (
          <p key={key} className={style.description}>
            {description}
          </p>
        ))}
      </div>
    </div>
  </div>
);
