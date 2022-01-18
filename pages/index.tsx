import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { communData } from "../data/commun";
import { Layout } from "../components/Layout";
import { Button, ButtonLink } from "../components/Button";
import classNames from "classnames";
import { ContactForm } from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>{communData.siteName}</title>
        <meta
          key="description"
          name="description"
          content="Joel Guibert - Projeteur mécanique freelance"
        />
        <meta key="no-folow" name="robots" content="noindex, follow" />
        <link rel="icon" href="/fmbmecanics.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              email: "contact@innov-meca.fr",
              name: "Innov-meca",
              founder: "Joël Guibert",
              telephone: "+33 6 71 50 62 19",
            }),
          }}
        />
      </Head>
      <Layout noPadding>
        <>
          <div className={styles.container}>
            <main className={styles.main}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                  Joël Guibert, dessinateur mécanique au service des
                  <a
                    href="#pro-section"
                    className={classNames(styles.proTitle)}
                  >
                    {" "}
                    professionnels
                  </a>{" "}
                  et des{" "}
                  <a
                    href="#particulier-section"
                    className={classNames(styles.particulierTitle)}
                  >
                    particuliers
                  </a>
                </h1>
              </div>
            </main>
            <section className={styles.productsContainer}>
              <div id="pro-section" className={styles.productSection}>
                <div>
                  Vous êtes un{" "}
                  <span className={styles.proWord}>professionnel</span> ?
                  <ul>
                    <li>Modélisation 3D urgente</li>
                    <li>Conception mécanique</li>
                    <li>Rétro conception</li>
                  </ul>
                </div>
                <ButtonLink href="/pro">En savoir plus</ButtonLink>
              </div>
              <div id="particulier-section" className={styles.productSection}>
                <div>
                  Vous êtes un{" "}
                  <span className={styles.particulierWord}>particulier</span> ?
                  Je vous propose ...
                  <ul>
                    <li>
                      Illustration 3D pour faciliter l'acceptation à la mairie
                    </li>
                    <li>Fichier pour imprimante 3D</li>
                    <li>Rétro conception</li>
                  </ul>
                </div>
                <ButtonLink href="/particuliers">En savoir plus</ButtonLink>
              </div>
            </section>
          </div>
          <ContactForm />
        </>
      </Layout>
    </>
  );
}
