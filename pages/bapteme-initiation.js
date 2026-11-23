import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import content from '../content.config';
import { useLang } from '../context/LangContext';
import activites from '../locales/activites';
import { ActivityHero, ActivityIntro, BackLink, WhatsappBtn } from '../components/activity/ActivityParts';
import styles from '../styles/ActivityDetail.module.css';

export default function BaptemeInitiation() {
  const { tarifs, contact } = content;
  const { lang } = useLang();
  const t = activites[lang] || activites.fr;
  const common = t.common;
  const c = t.bapteme;

  return (
    <>
      <Head>
        <title>Baptême & Initiation à la plongée — Whale Diving La Réunion</title>
        <meta name="description" content="Découvrez la plongée sous-marine à La Réunion avec Paco, moniteur DEJEPS. Baptême dès 90€, initiation 120€. Dès 8 ans, Saint-Gilles-les-Bains." />
        <meta property="og:title" content="Baptême & Initiation — Whale Diving La Réunion" />
        <meta property="og:description" content="Votre première plongée à La Réunion avec un moniteur diplômé d'État. Dès 90€." />
        <meta property="og:url" content="https://www.whale-diving.re/bapteme-initiation" />
        <meta property="og:image" content="https://www.whale-diving.re/images/bapteme-initiation.jpg" />
        <link rel="canonical" href="https://www.whale-diving.re/bapteme-initiation" />
      </Head>

      <Navbar />

      <ActivityHero image="/images/bapteme.jpg" c={c} common={common} />

      <main>
        <ActivityIntro c={c} />

        <section className={`${styles.pricing} ${styles.section__alt}`}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>{common.pricing}</p>
            <h2 className={styles.section__title}>{c.pricingTitle}</h2>
            <div className={styles.pricing__grid}>
              {c.cards.map((card, i) => (
                <div key={i} className={`${styles.pricing__card} ${i === 1 ? styles.pricing__card__featured : ''}`}>
                  {i === 1 && <div className={styles.pricing__badge}>{c.badge}</div>}
                  <div className={styles.pricing__header}>
                    <h3>{card.name}</h3>
                    <span className={styles.pricing__price}>{i === 0 ? tarifs.bapteme : tarifs.initiation}€</span>
                  </div>
                  <ul className={styles.pricing__features}>
                    {card.features.map((f, j) => <li key={j}>✓ {f}</li>)}
                  </ul>
                  <WhatsappBtn className={styles.btn__primary}>{common.reserve}</WhatsappBtn>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BackLink common={common} />
      </main>

      <Footer />
    </>
  );
}
