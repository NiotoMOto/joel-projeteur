import React, { useState } from "react";
import { Layout } from "../components/Layout";
import style from "../styles/Parcours.module.scss";

import Head from "next/head";
import { Experience } from "../components/Experience";
import { Hr } from "../components/Hr";

export default function Parcours() {
  const items = [
    {
      title: "Dessinateur industriel CAO",
      dates: "juin 2020 - août 2021",
      duration: "1 ans 2 mois",
      place: "Andrésy",
      client: {
        name: "HYDAC Group",
        href: "https://www.hydac.com/en/",
      },
      descriptions: [
        "Unique dessinateur au sein du bureau d'étude.",
        "Conception d'équipements hydraulique pour divers clients : Chantier de l'Atlantique (ex : STX), General Electric, ...",
        " Conception 3D sous Solidworks / Mise en plan / Création d'outils d'optimisation de la conception (Pilotage Excel / VBA Solidworks)",
      ],
      id: 5,
    },
    {
      title: "Dessinateur industriel CAO",
      dates: "septembre 2019 - juin 2020",
      duration: "10 mois",
      place: "Conflans-Sainte-Honorine",
      client: {
        name: "AXEAU",
        href: "http://www.axeau.fr/",
      },
      descriptions: [
        "Entreprise dans le secteur de la vantellerie.",
        "Conception réalisée avec le logiciel Solidworks + EPDM.",
        " Conception de vannes secteur, batardeaux pour le Grand Paris.",
        " Création d'outils d'optimisation du temps de conception via Excel.",
      ],
      id: 4,
    },
    {
      title: "Dessinateur industriel CAO",
      dates: "fécvrier 2019 - septembre 2019",
      duration: "8 mois",
      place: "Sartrouville",
      client: {
        name: "Electric Station Climatisation",
        href: "https://shop.autoclima.com/fr",
      },
      descriptions: [
        "Entreprise dans le secteur de la climatisation embarquée.",
        "Conception réalisée avec le logiciel Solidworks + EPDM.",
        "Conception d'une unité HVAC sur le toit d'un véhicule électrique (Projet LOHR Strasbourg)",
      ],
      id: 3,
    },
    {
      title: "Dessinateur industriel CAO",
      dates: "juin 2016 - fécvrier 2019",
      duration: "2 ans 9 mois",
      place: "Suresnes",
      client: {
        name: "KAEFER WANNER",
        href: "https://www.kaeferwanner.fr/",
      },
      descriptions: [
        "Conception d'isolation thermique dans le secteur du nucléaire ",
        "Projet Barracuda (DGA sous-marin) conception du calorifuge d'un générateur de vapeur",
        "Projet CEPR (DGA) conception du calorifuge d'un banc d'essai",
        "Méthode (PZR EH, Flamanville) réalisation d'une procédure de montage d'une armature de pressuriseur<br>Conception réalisé avec le logiciel Solidworks + EPDM",
      ],
      id: 2,
    },
    {
      title: "Dessinateur mécanique",
      dates: "Octobre 2012 - juin 2016",
      duration: "3 ans 9 mois",
      place: "Nantes",
      descriptions: ["Secteur : BTP, Ferroviaire, Naval"],
      id: 1,
    },
  ];

  return (
    <>
      <Head>
        <meta key="no-folow" name="robots" content="noindex, follow" />
      </Head>
      <Layout noPadding={true}>
        <div className={style.wrapper}>
          <div className={style.container}>
            <h1 className={style.title}>Mon parcours</h1>
            <div>
              {items.map((experience) => (
                <>
                  <Experience experience={experience} />
                  <Hr />
                </>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
