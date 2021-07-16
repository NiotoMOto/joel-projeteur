import React, { useState } from "react";
import { TimeLine } from "../components/TimeLine";
import { Layout } from "../components/Layout";
import some from "lodash/some";

export default function Parcours() {
  const items = [
    {
      title: "Projeteur",
      dates: "Janvier 2019 - Aout 2021",
      subTitle: "Eragny",
      text: "Dessins sur solid works",
      skills: ["solidworks", "excel", "autocad"],
      id: 1,
    },
    {
      title: "Projeteur",
      dates: "Janvier 2019 - Aout 2021",
      subTitle: "Eragny",
      text: "Dessins sur solid works",
      skills: ["katia"],
      id: 2,
    },
    {
      title: "Projeteur",
      dates: "Janvier 2019 - Aout 2021",
      subTitle: "Eragny",
      text: "Dessins sur solid works",
      skills: ["solidworks", "thermodynamic des fluildes"],
      id: 3,
    },
  ];
  const [currentSkils, setCurretnItems] = useState(items);
  const [skillFiltred, setSkillFiltred] = useState<string[]>([]);

  const updatedTimeLine = (sills: string[]) => {
    const filtredItems = items.filter((item) => {
      return sills.reduce((acc: boolean, s) => {
        return item.skills.includes(s) && acc;
      }, true);
    });
    setCurretnItems(filtredItems);
  };

  const onClickSkill = (skill: string) => {
    if (!skillFiltred.includes(skill)) {
      const newSkills = [...skillFiltred, skill];
      setSkillFiltred(newSkills);
      updatedTimeLine(newSkills);
    } else {
      removeSkill(skill);
    }
  };

  const removeSkill = (skill: string) => {
    const newSkills = skillFiltred.filter((s) => s !== skill);
    setSkillFiltred(newSkills);
    updatedTimeLine(newSkills);
  };

  return (
    <Layout>
      <div>
        <h1>Mon parcours</h1>
        <div>
          {skillFiltred.map((skill) => (
            <span key={skill} onClick={() => removeSkill(skill)}>
              {skill}
            </span>
          ))}
        </div>
        <TimeLine onClickSkill={onClickSkill} items={currentSkils} />
      </div>
    </Layout>
  );
}
