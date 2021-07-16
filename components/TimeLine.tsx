import React, { useState } from "react";
import styles from "../styles/TimeLine.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type Item = {
  title: string;
  subTitle?: string;
  text: string;
  dates: string;
  skills?: string[];
  id: number;
};

type TimeLineProps = {
  items: Item[];
  onClickSkill: (skill: string) => any;
};
export const TimeLine = ({ items, onClickSkill }: TimeLineProps) => {
  return (
    <VerticalTimeline>
      {items.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          className={styles.container}
          contentStyle={{ background: "#4f7dc7", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Février 2019 - Aout 2021"
          iconStyle={{ background: "#4f7dc7", color: "#fff" }}
        >
          <h3 className={styles.title}>{item.title}</h3>
          <h4 className={styles.subtitle}>{item.subTitle}</h4>
          <p>{item.text}</p>
          <p>
            {item?.skills?.map((skill) => (
              <span
                key={skill}
                onClick={() => onClickSkill(skill)}
                className={styles.skill}
              >
                {skill}{" "}
              </span>
            ))}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
