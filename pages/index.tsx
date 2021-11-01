import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { communData } from "../data/commun";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import classNames from "classnames";

export default function Home() {
  return (
    <>
      <Head>
        <title>{communData.siteName}</title>
        <meta
          key="description"
          name="    "
          content="Joel Guibert - Projeteur mécanique freelance"
        />
        <meta key="no-folow" name="robots" content="noindex, follow" />
        <link rel="icon" href="/fmbmecanics.png" />
      </Head>
      <Layout noPadding>
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                Joël Guibert, dessinateur mécanique au service des
                <span className={classNames(styles.proTitle)}>
                  {" "}
                  professionnels
                </span>{" "}
                et des{" "}
                <span className={classNames(styles.particulierTitle)}>
                  particuliers
                </span>
              </h1>
            </div>
          </main>
          <div className={styles.productsContainer}>
            <section className={styles.productSection}>
              <div>
                Vous êtes un{" "}
                <span className={styles.proWord}>professionnel</span> ?
                <ul>
                  <li>Modélisation 3D urgente</li>
                  <li>Conception mécanique</li>
                  <li>Rétro conception</li>
                </ul>
              </div>
              <Button href="/pro">En savoir plus</Button>
            </section>
            <section className={styles.productSection}>
              <div>
                Vous êtes un{" "}
                <span className={styles.particulierWord}>particulier</span> ? Je
                vous propose ...
                <ul>
                  <li>
                    Illustration 3D pour faciliter l'acceptation à la mairie
                  </li>
                  <li>Fichier pour imprimante 3D</li>
                  <li>Rétro conception</li>
                </ul>
              </div>
              <Button href="/particuliers">En savoir plus</Button>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
