import React, { useState } from "react";
import { Layout } from "../components/Layout";
import flatten from "lodash/fp/flatten";
import flow from "lodash/fp/flow";
import uniq from "lodash/fp/uniq";

import Head from "next/head";

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

  const [availableSkills, setAvailableSkills] = useState(
    flow(flatten, uniq)(items.map((i) => i.skills))
  );
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
      updateAvailableSkills();
    } else {
      removeSkill(skill);
    }
  };

  const removeSkill = (skill: string) => {
    const newSkills = skillFiltred.filter((s) => s !== skill);
    setSkillFiltred(newSkills);
    updatedTimeLine(newSkills);
    updateAvailableSkills();
  };

  const updateAvailableSkills = () => {
    setAvailableSkills(
      flow(
        flatten,
        uniq
      )(items.map((i) => i.skills)).filter((s) => !skillFiltred.includes(s))
    );
  };

  return (
    <>
      <Head>
        <meta key="no-folow" name="robots" content="noindex, follow" />
      </Head>
      <Layout noPadding={false}>
        <div>
          <h1>Mon parcours</h1>
          <div>
            {skillFiltred.map((skill) => (
              <span key={skill} onClick={() => removeSkill(skill)}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
