import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import content from '../content.config';
import { useLang } from '../context/LangContext';
import activites from '../locales/activites';
import { ActivityHero, ActivityIntro, BackLink, WhatsappBtn } from '../components/activity/ActivityParts';
import styles from '../styles/ActivityDetail.module.css';

const ORDER = ['n1', 'n2', 'pe40', 'pa20', 'pe12', 'nitrox'];
const PRICE = { n1: 'niveau_1', n2: 'niveau_2', pe40: 'pe40', pa20: 'pa20', pe12: 'pe12', nitrox: 'nitrox' };

export default function Formations() {
  const { tarifs, contact } = content;
  const { lang } = useLang();
  const t = activites[lang] || activites.fr;
  const common = t.common;
  const c = t.formations;
  const [active, setActive] = useState('n1');
  const f = c.items[active];
  const L = c.labels;

  return (
    <>
      <Head>
        <title>Formations plongée ANMP La Réunion — N1, N2, PE40, Nitrox — Whale Diving</title>
        <meta name="description" content="Passez votre brevet de plongée à La Réunion. N1, N2, PE40, PA20, Nitrox — certifications ANMP avec Paco, moniteur DEJEPS E3. À partir de 180€." />
        <meta property="og:title" content="Formations plongée ANMP — N1, N2, Nitrox — Whale Diving La Réunion" />
        <meta property="og:description" content="Certifications ANMP avec un moniteur diplômé d'État à La Réunion." />
        <meta property="og:url" content="https://www.whale-diving.re/formations" />
        <meta property="og:image" content="https://www.whale-diving.re/images/formations.jpg" />
        <link rel="canonical" href="https://www.whale-diving.re/formations" />
      </Head>

      <Navbar />

      <ActivityHero image="/images/formations.jpg" c={c} common={common} />

      <main>
        <ActivityIntro c={c} />

        <section className={styles.section__alt}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>{common.pricing}</p>
            <h2 className={styles.section__title}>{c.chooseTitle}</h2>
            <div className={styles.formationTabs}>
              {ORDER.map((id) => (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`${styles.formationTab} ${active === id ? styles.formationTab__active : ''}`}
                >
                  {c.items[id].title.split('/')[0].trim()}
                </button>
              ))}
            </div>
            {f && (
              <div className={styles.formationDetail}>
                <div className={styles.formationDetail__header}>
                  <div>
                    <h3 className={styles.formationDetail__title}>{f.title}</h3>
                    <p className={styles.formationDetail__qui}><span>{L.pourQui}</span>{f.pourQui}</p>
                  </div>
                  <div className={styles.formationDetail__price}>
                    <span className={styles.formationDetail__duration}>{f.duration}</span>
                    <strong>{tarifs[PRICE[active]]}€</strong>
                  </div>
                </div>
                <div className={styles.formationDetail__cols}>
                  <div>
                    <p className={styles.formationDetail__label}>{L.apprendre}</p>
                    <ul className={styles.formationDetail__list}>
                      {f.apprendre.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className={styles.formationDetail__label}>{L.inclus}</p>
                    <ul className={styles.formationDetail__included}>
                      {f.included.map((item, i) => <li key={i}>✓ {item}</li>)}
                    </ul>
                  </div>
                </div>
                {f.equivalent && <p className={styles.formationDetail__eq}>🌍 {L.equivalent} : {f.equivalent}</p>}
                <WhatsappBtn>{L.reserve}</WhatsappBtn>
              </div>
            )}
          </div>
        </section>

        <BackLink common={common} />
      </main>

      <Footer />
    </>
  );
}
