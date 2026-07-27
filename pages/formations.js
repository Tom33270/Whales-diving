import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import styles from '../styles/ActivityDetail.module.css';

const FORMATIONS = [
  {
    id: 'n1',
    title: 'Niveau 1 / Open Water 20m',
    duration: '5 plongées',
    price: '450€',
    description: 'La certification de base pour plonger de manière autonome jusqu\'à 20m. Reconnue ANMP et équivalente PADI Open Water.',
    included: ['5 plongées en mer', 'Certification ANMP incluse', 'Manuel de formation', 'Carnet de plongée', 'Matériel fourni'],
  },
  {
    id: 'n2',
    title: 'Niveau 2 / Advanced Open Water',
    duration: '10 plongées',
    price: '720€',
    description: 'Pour plonger jusqu\'à 40m et accéder aux sites les plus profonds. Certification internationale reconnue SDI/TDI.',
    included: ['10 plongées en mer', 'Certification incluse (PA20 + PE40)', 'Plongées de spécialité', 'Matériel fourni'],
  },
  {
    id: 'pe40',
    title: 'Plongeur Encadré 40m (PE40)',
    duration: '4 plongées',
    price: '320€',
    description: 'Extension de votre certification pour plonger jusqu\'à 40m sous encadrement. Prestation seule, sans certification finale.',
    included: ['4 plongées encadrées', 'Profondeur jusqu\'à 40m', 'Matériel fourni'],
  },
  {
    id: 'pa20',
    title: 'Plongeur Autonome 20m (PA20)',
    duration: '6 plongées',
    price: '450€',
    description: 'Obtenez votre autonomie jusqu\'à 20m. Idéal pour plonger sans guide avec d\'autres plongeurs certifiés.',
    included: ['6 plongées autonomes', 'Navigation subaquatique', 'Gestion de la flottabilité', 'Matériel fourni'],
  },
  {
    id: 'pe12',
    title: 'Plongeur Encadré 12m',
    duration: '3 plongées',
    price: '260€',
    description: 'Premier niveau de certification pour les débutants souhaitant plonger jusqu\'à 12m sous encadrement.',
    included: ['3 plongées encadrées', 'Profondeur jusqu\'à 12m', 'Initiation aux techniques de base', 'Matériel fourni'],
  },
  {
    id: 'nitrox',
    title: 'Nitrox Simple',
    duration: '2 plongées',
    price: '180€',
    description: 'Plongez avec de l\'air enrichi en oxygène pour des paliers réduits et une meilleure gestion de la narcose.',
    included: ['2 plongées au nitrox', 'Théorie nitrox incluse', 'Certification nitrox', 'Matériel fourni'],
  },
];

export default function Formations() {
  const [active, setActive] = useState('n1');
  const formation = FORMATIONS.find(f => f.id === active);

  return (
    <>
      <Head>
        <title>Formations plongée — Whale Diving La Réunion</title>
        <meta name="description" content="Formations plongée N1, N2, PE40, PA20, Nitrox à La Réunion. Certifications ANMP et SDI/TDI avec Paco, moniteur DEJEPS. À partir de 180€." />
      </Head>

      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.hero__overlay} />
        <div className={styles.hero__bg} style={{ backgroundImage: "url('/images/formations.jpg')" }} />
        <div className={styles.hero__content}>
          <p className={styles.hero__eyebrow}>📋 Formations</p>
          <h1 className={styles.hero__title}>Obtenez votre certification à La Réunion</h1>
          <p className={styles.hero__subtitle}>ANMP · SDI/TDI · Reconnaissance internationale · Moniteur DEJEPS</p>
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
            <h2 className={styles.section__title}>Des formations reconnues internationalement</h2>
            <p className={styles.text}>Paco est certifié ANMP et SDI/TDI — deux des organismes de certification les plus reconnus dans le monde. Vos certifications obtenues avec Whale Diving sont valables partout sur la planète.</p>
            <p className={styles.text}>Chaque formation est dispensée en petit groupe (6 personnes max) et adaptée à votre rythme. Paco parle français, anglais et espagnol — idéal pour une clientèle internationale.</p>
          </div>
        </section>

        {/* Sélecteur de formations */}
        <section className={`${styles.section__alt}`}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Tarifs 2026</p>
            <h2 className={styles.section__title}>Choisissez votre formation</h2>

            {/* Tabs */}
            <div className={styles.formationTabs}>
              {FORMATIONS.map(f => (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`${styles.formationTab} ${active === f.id ? styles.formationTab__active : ''}`}
                >
                  {f.title.split('/')[0].trim()}
                </button>
              ))}
            </div>

            {/* Détail formation active */}
            {formation && (
              <div className={styles.formationDetail}>
                <div className={styles.formationDetail__header}>
                  <div>
                    <h3 className={styles.formationDetail__title}>{formation.title}</h3>
                    <p className={styles.formationDetail__desc}>{formation.description}</p>
                  </div>
                  <div className={styles.formationDetail__price}>
                    <span className={styles.formationDetail__duration}>{formation.duration}</span>
                    <strong>{formation.price}</strong>
                  </div>
                </div>
                <ul className={styles.formationDetail__included}>
                  {formation.included.map((item, i) => (
                    <li key={i}>✓ {item}</li>
                  ))}
                </ul>
                <a href="https://wa.me/262693873336" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__whatsapp}`}>
                  💬 Réserver cette formation
                </a>
              </div>
            )}
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