import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import content from '../content.config';
import styles from '../styles/ActivityDetail.module.css';

export default function Cetaces() {
  const { tarifs, contact, saison_cetaces } = content;

  return (
    <>
      <Head>
        <title>Sorties baleines et dauphins La Réunion — Whale Diving</title>
        <meta name="description" content="Nagez avec les baleines à bosse et les dauphins à La Réunion. Protocole CAP respecté. Dauphins toute l'année, baleines de juillet à septembre. Dès 90€." />
        <meta property="og:title" content="Sorties cétacés — Baleines et dauphins à La Réunion" />
        <meta property="og:description" content="Observation et mise à l'eau avec les cétacés à La Réunion. Protocole CAP. Dès 90€." />
        <meta property="og:url" content="https://www.whale-diving.re/cetaces" />
        <meta property="og:image" content="https://www.whale-diving.re/images/cetaces.jpg" />
        <link rel="canonical" href="https://www.whale-diving.re/cetaces" />
        <meta name="description" content="Sorties dauphins et baleines à La Réunion avec Paco. Haute saison baleines juillet–septembre. Protocole CAP respecté." />
      </Head>

      <Navbar />

      <section className={styles.hero}>
        <div className={styles.hero__overlay} />
        <div className={styles.hero__bg} style={{ backgroundImage: "url('/images/cetaces.jpg')" }} />
        <div className={styles.hero__content}>
          <p className={styles.hero__eyebrow}>🐋 Sorties cétacés</p>
          <h1 className={styles.hero__title}>Nager avec les baleines et les dauphins</h1>
          <p className={styles.hero__subtitle}>Dauphins toute l'année · Baleines {saison_cetaces.mois_debut} à {saison_cetaces.mois_fin} · Protocole CAP</p>
          <div className={styles.hero__ctas}>
            <a href={contact.telephone_url} className={`${styles.btn} ${styles.btn__primary}`}>📞 Appeler Paco</a>
            <a href={contact.whatsapp_url} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__whatsapp}`}>💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <main>
        <section className={styles.intro}>
          <div className={styles.container}>
            <div className={styles.intro__grid}>
              <div>
                <h2 className={styles.section__title}>Une rencontre unique, dans le respect</h2>
                <p className={styles.text}>La Réunion est l'un des rares endroits au monde où il est possible de nager avec les baleines à bosse dans leurs eaux naturelles. Chaque été austral ({saison_cetaces.mois_debut} à {saison_cetaces.mois_fin}), ces géants des mers font escale au large de Saint-Gilles pour mettre bas et se reproduire.</p>
                <p className={styles.text}>Les dauphins spinners sont présents toute l'année dans le lagon et au large. Dociles et curieux, ils accompagnent souvent le bateau sur de longues distances.</p>
                <p className={styles.text}>Paco est titulaire de l'attestation d'observation des cétacés délivrée par le CEDTM. Chaque sortie est conduite dans le strict respect du protocole CAP.</p>
              </div>
              <div className={styles.intro__highlights}>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🐋</span>
                  <div><strong>Baleines à bosse</strong><p>{saison_cetaces.mois_debut} à {saison_cetaces.mois_fin} — haute saison</p></div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🐬</span>
                  <div><strong>Dauphins spinners</strong><p>Présents toute l'année</p></div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🛡️</span>
                  <div><strong>Protocole CAP</strong><p>Attestation CEDTM officielle</p></div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>⏱️</span>
                  <div><strong>3 heures</strong><p>Sortie en mer · 6 pers. max</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section__alt}>
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
                <p>Si un animal montre des signes de stress, on s'éloigne immédiatement. La protection de l'espèce passe avant tout.</p>
              </div>
            </div>
          </div>
        </section>

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
                <span className={styles.table__price}>{tarifs.cetaces_hors_saison}€</span>
              </div>
              <div className={`${styles.table__row} ${styles.table__row__featured}`}>
                <div>
                  <span className={styles.table__label}>Haute saison baleine</span>
                  <p className={styles.table__sublabel}>{saison_cetaces.mois_debut} à {saison_cetaces.mois_fin} · Sortie privée possible</p>
                </div>
                <span className={styles.table__price}>{tarifs.cetaces_haute_saison}€</span>
              </div>
            </div>
            <div className={styles.pricing__cta}>
              <a href={contact.telephone_url} className={`${styles.btn} ${styles.btn__primary}`}>📞 Appeler Paco</a>
              <a href={contact.whatsapp_url} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__whatsapp}`}>💬 WhatsApp</a>
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