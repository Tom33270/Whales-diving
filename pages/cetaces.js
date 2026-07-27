import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import styles from '../styles/ActivityDetail.module.css';

export default function Cetaces() {
  return (
    <>
      <Head>
        <title>Sorties cétacés — Whale Diving La Réunion</title>
        <meta name="description" content="Sorties dauphins et baleines à La Réunion avec Paco. Haute saison baleines juillet–septembre. Protocole CAP respecté. À partir de 90€. Saint-Gilles-les-Bains." />
      </Head>

      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.hero__overlay} />
        <div className={styles.hero__bg} style={{ backgroundImage: "url('/images/cetaces.jpg')" }} />
        <div className={styles.hero__content}>
          <p className={styles.hero__eyebrow}>🐋 Sorties cétacés</p>
          <h1 className={styles.hero__title}>Nager avec les baleines et les dauphins</h1>
          <p className={styles.hero__subtitle}>Dauphins toute l'année · Baleines juillet à septembre · Protocole CAP</p>
          <div className={styles.hero__ctas}>
            <a href="tel:+262693873336" className={`${styles.btn} ${styles.btn__primary}`}>📞 Appeler Paco</a>
            <a href="https://wa.me/262693873336" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__whatsapp}`}>💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <main>
        {/* Intro */}
        <section className={styles.intro}>
          <div className={styles.container}>
            <div className={styles.intro__grid}>
              <div>
                <h2 className={styles.section__title}>Une rencontre unique, dans le respect</h2>
                <p className={styles.text}>La Réunion est l'un des rares endroits au monde où il est possible de nager avec les baleines à bosse dans leurs eaux naturelles. Chaque été austral (juillet à septembre), ces géants des mers font escale au large de Saint-Gilles pour mettre bas et se reproduire.</p>
                <p className={styles.text}>Les dauphins spinners, quant à eux, sont présents toute l'année dans le lagon et au large. Dociles et curieux, ils accompagnent souvent le bateau sur de longues distances.</p>
                <p className={styles.text}>Paco est titulaire de l'attestation d'observation des cétacés délivrée par le CEDTM (Centre d'Étude et de Découverte des Tortues Marines). Chaque sortie est conduite dans le strict respect du protocole CAP.</p>
              </div>
              <div className={styles.intro__highlights}>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🐋</span>
                  <div>
                    <strong>Baleines à bosse</strong>
                    <p>Juillet à septembre — haute saison</p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🐬</span>
                  <div>
                    <strong>Dauphins spinners</strong>
                    <p>Présents toute l'année</p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🛡️</span>
                  <div>
                    <strong>Protocole CAP</strong>
                    <p>Attestation CEDTM officielle</p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>⏱️</span>
                  <div>
                    <strong>3 heures</strong>
                    <p>Sortie en mer · 6 pers. max</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Protocole CAP */}
        <section className={`${styles.section__alt}`}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Éthique & respect</p>
            <h2 className={styles.section__title}>Le protocole CAP</h2>
            <div className={styles.cap__grid}>
              <div className={styles.cap__item}>
                <span className={styles.cap__letter}>C</span>
                <h3>Comprendre</h3>
                <p>Avant chaque sortie, Paco vous explique le comportement des cétacés, comment les identifier et comment interpréter leurs signaux pour ne jamais les perturber.</p>
              </div>
              <div className={styles.cap__item}>
                <span className={styles.cap__letter}>A</span>
                <h3>Approcher</h3>
                <p>L'approche se fait toujours en douceur, moteur coupé, à distance réglementaire. Jamais de poursuite, jamais de geste brusque. Les animaux choisissent le contact.</p>
              </div>
              <div className={styles.cap__item}>
                <span className={styles.cap__letter}>P</span>
                <h3>Protéger</h3>
                <p>Si un animal montre des signes de stress, on s'éloigne immédiatement. La protection de l'espèce passe avant tout — même devant la photo parfaite.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className={styles.pricing}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Tarifs 2026</p>
            <h2 className={styles.section__title}>Réservez votre sortie</h2>
            <div className={styles.pricing__table}>
              <div className={styles.table__row}>
                <div>
                  <span className={styles.table__label}>Hors saison baleine</span>
                  <p className={styles.table__sublabel}>1 personne · 3h · 6 pers. max · Dauphins</p>
                </div>
                <span className={styles.table__price}>90€</span>
              </div>
              <div className={`${styles.table__row} ${styles.table__row__featured}`}>
                <div>
                  <span className={styles.table__label}>Haute saison baleine</span>
                  <p className={styles.table__sublabel}>Juillet à septembre · Sortie privée possible</p>
                </div>
                <span className={styles.table__price}>120€</span>
              </div>
            </div>
            <div className={styles.pricing__cta}>
              <a href="tel:+262693873336" className={`${styles.btn} ${styles.btn__primary}`}>📞 Appeler Paco</a>
              <a href="https://wa.me/262693873336" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__whatsapp}`}>💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className={styles.back}>
          <div className={styles.container}>
            <Link href="/#activites"><a className={styles.backLink}>← Voir toutes les activités</a></Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}