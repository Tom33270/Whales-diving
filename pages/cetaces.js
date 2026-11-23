import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import content from '../content.config';
import { useLang } from '../context/LangContext';
import activites from '../locales/activites';
import { ActivityHero, ActivityIntro, BackLink, WhatsappBtn } from '../components/activity/ActivityParts';
import styles from '../styles/ActivityDetail.module.css';

export default function Cetaces() {
  const { tarifs, contact } = content;
  const { lang } = useLang();
  const t = activites[lang] || activites.fr;
  const common = t.common;
  const c = t.cetaces;

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
      </Head>

      <Navbar />

      <ActivityHero image="/images/cetaces.jpg" c={c} common={common} />

      <main>
        <ActivityIntro c={c} />

        <section className={styles.section__alt}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>{c.capEyebrow}</p>
            <h2 className={styles.section__title}>{c.capTitle}</h2>
            <div className={styles.cap__grid}>
              {c.cap.map(([letter, title, text]) => (
                <div key={title} className={styles.cap__item}>
                  <span className={styles.cap__letter}>{letter}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pricing}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>{common.pricing}</p>
            <h2 className={styles.section__title}>{c.pricingTitle}</h2>
            <div className={styles.pricing__table}>
              {c.rows.map((row, i) => (
                <div key={i} className={`${styles.table__row} ${i === 1 ? styles.table__row__featured : ''}`}>
                  <div>
                    <span className={styles.table__label}>{row.label}</span>
                    <p className={styles.table__sublabel}>{row.sub}</p>
                  </div>
                  <span className={styles.table__price}>{i === 0 ? tarifs.cetaces_hors_saison : tarifs.cetaces_haute_saison}€</span>
                </div>
              ))}
            </div>
            <div className={styles.pricing__cta}>
              <a href={contact.telephone_url} className={`${styles.btn} ${styles.btn__primary}`}>{common.call}</a>
              <WhatsappBtn>{common.whatsapp}</WhatsappBtn>
            </div>
          </div>
        </section>

        <BackLink common={common} />
      </main>

      <Footer />
    </>
  );
}
