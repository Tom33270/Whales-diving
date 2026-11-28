import Icon, { ico } from '../components/Icon';
import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import content from '../content.config';
import { useLang } from '../context/LangContext';
import activites from '../locales/activites';
import { ActivityHero, ActivityIntro, BackLink, WhatsappBtn } from '../components/activity/ActivityParts';
import styles from '../styles/ActivityDetail.module.css';

export default function Exploration() {
  const { tarifs, contact } = content;
  const { lang } = useLang();
  const t = activites[lang] || activites.fr;
  const common = t.common;
  const c = t.exploration;

  return (
    <>
      <Head>
        <title>Plongées d'exploration à La Réunion — Whale Diving</title>
        <meta name="description" content="Explorez les fonds sous-marins de Saint-Gilles-les-Bains avec Paco. Tortues, coraux, raies — dès 65€ la plongée. Petits groupes, moniteur DEJEPS." />
        <meta property="og:title" content="Exploration encadrée — Whale Diving La Réunion" />
        <meta property="og:description" content="Plongées d'exploration sur les plus beaux spots de La Réunion. À partir de 65€." />
        <meta property="og:url" content="https://www.whale-diving.re/exploration" />
        <meta property="og:image" content="https://www.whale-diving.re/images/exploration.jpg" />
        <link rel="canonical" href="https://www.whale-diving.re/exploration" />
      </Head>

      <Navbar />

      <ActivityHero image="/images/exploration.jpg" c={c} common={common} />

      <main>
        <ActivityIntro c={c} />

        <section className={`${styles.pricing} ${styles.section__alt}`}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>{common.pricing}</p>
            <h2 className={styles.section__title}>{c.pricingTitle}</h2>
            <div className={styles.pricing__table}>
              {[1, 3, 6, 10].map((n) => {
                const total = tarifs[`exploration_${n}`];
                return (
                  <div key={n} className={`${styles.table__row} ${n === 10 ? styles.table__row__featured : ''}`}>
                    <span className={styles.table__label}>{c.dives(n)}</span>
                    {n > 1 && <span className={styles.table__note}>{(total / n).toFixed(2)}€{common.perDive}</span>}
                    <span className={styles.table__price}>{total}€</span>
                  </div>
                );
              })}
            </div>
            <div className={styles.pricing__cta}>
              <WhatsappBtn>{ico(common.bookWhatsapp)}</WhatsappBtn>
            </div>
          </div>
        </section>

        <BackLink common={common} />
      </main>

      <Footer />
    </>
  );
}
