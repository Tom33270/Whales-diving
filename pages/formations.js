import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import content from '../content.config';
import styles from '../styles/ActivityDetail.module.css';

export default function Formations() {
  const { tarifs, contact } = content;
  const [active, setActive] = useState('n1');

  const formations = [
    {
      id: 'n1',
      title: 'Niveau 1 / Open Water 20m',
      duration: '5 plongées',
      price: `${tarifs.niveau_1}€`,
      description: "La certification de base pour plonger de manière autonome jusqu'à 20m. Reconnue ANMP et équivalente PADI Open Water.",
      included: ['5 plongées en mer', 'Certification ANMP incluse', 'Manuel de formation', 'Carnet de plongée', 'Matériel fourni'],
    },
    {
      id: 'n2',
      title: 'Niveau 2 / Advanced Open Water',
      duration: '10 plongées',
      price: `${tarifs.niveau_2}€`,
      description: "Pour plonger jusqu'à 40m et accéder aux sites les plus profonds. Certification internationale reconnue SDI/TDI.",
      included: ['10 plongées en mer', 'Certification incluse (PA20 + PE40)', 'Plongées de spécialité', 'Matériel fourni'],
    },
    {
      id: 'pe40',
      title: 'Plongeur Encadré 40m (PE40)',
      duration: '4 plongées',
      price: `${tarifs.pe40}€`,
      description: "Extension de votre certification pour plonger jusqu'à 40m sous encadrement.",
      included: ["4 plongées encadrées", "Profondeur jusqu'à 40m", "Matériel fourni"],
    },
    {
      id: 'pa20',
      title: 'Plongeur Autonome 20m (PA20)',
      duration: '6 plongées',
      price: `${tarifs.pa20}€`,
      description: "Obtenez votre autonomie jusqu'à 20m. Idéal pour plonger sans guide avec d'autres plongeurs certifiés.",
      included: ['6 plongées autonomes', 'Navigation subaquatique', 'Gestion de la flottabilité', 'Matériel fourni'],
    },
    {
      id: 'pe12',
      title: 'Plongeur Encadré 12m',
      duration: '3 plongées',
      price: `${tarifs.pe12}€`,
      description: "Premier niveau de certification pour plonger jusqu'à 12m sous encadrement.",
      included: ["3 plongées encadrées", "Profondeur jusqu'à 12m", "Initiation aux techniques de base", "Matériel fourni"],
    },
    {
      id: 'nitrox',
      title: 'Nitrox Simple',
      duration: '2 plongées',
      price: `${tarifs.nitrox}€`,
      description: "Plongez avec de l'air enrichi en oxygène pour des paliers réduits et une meilleure gestion de la narcose.",
      included: ['2 plongées au nitrox', 'Théorie nitrox incluse', 'Certification nitrox', 'Matériel fourni'],
    },
  ];

  const formation = formations.find(f => f.id === active);

  return (
    <>
      <Head>
        <title>Formations plongée La Réunion — N1, N2, PADI, Nitrox — Whale Diving</title>
        <meta name="description" content="Passez votre brevet de plongée à La Réunion. N1, N2, PE40, PA20, Nitrox — certifications ANMP et PADI avec Paco, moniteur DEJEPS. À partir de 260€." />
        <meta property="og:title" content="Formations plongée — N1, N2, PADI, Nitrox — Whale Diving La Réunion" />
        <meta property="og:description" content="Certifications ANMP et PADI avec un moniteur diplômé d'État à La Réunion." />
        <meta property="og:url" content="https://www.whale-diving.re/formations" />
        <meta property="og:image" content="https://www.whale-diving.re/images/formations.jpg" />
        <link rel="canonical" href="https://www.whale-diving.re/formations" />
        <meta name="description" content="Formations plongée N1, N2, PE40, PA20, Nitrox à La Réunion. Certifications ANMP et SDI/TDI avec Paco, moniteur DEJEPS." />
      </Head>

      <Navbar />

      <section className={styles.hero}>
        <div className={styles.hero__overlay} />
        <div className={styles.hero__bg} style={{ backgroundImage: "url('/images/formations.jpg')" }} />
        <div className={styles.hero__content}>
          <p className={styles.hero__eyebrow}>📋 Formations</p>
          <h1 className={styles.hero__title}>Obtenez votre certification à La Réunion</h1>
          <p className={styles.hero__subtitle}>ANMP · SDI/TDI · Reconnaissance internationale · Moniteur DEJEPS</p>
          <div className={styles.hero__ctas}>
            <a href={contact.telephone_url} className={`${styles.btn} ${styles.btn__primary}`}>📞 Appeler Paco</a>
            <a href={contact.whatsapp_url} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__whatsapp}`}>💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <main>
        <section className={styles.intro}>
          <div className={styles.container}>
            <h2 className={styles.section__title}>Des formations reconnues internationalement</h2>
            <p className={styles.text}>Paco est certifié ANMP et SDI/TDI — deux des organismes de certification les plus reconnus dans le monde. Vos certifications obtenues avec Whale Diving sont valables partout sur la planète.</p>
            <p className={styles.text}>Chaque formation est dispensée en petit groupe (6 personnes max) et adaptée à votre rythme. Paco parle français, anglais et espagnol.</p>
          </div>
        </section>

        <section className={styles.section__alt}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Tarifs 2026</p>
            <h2 className={styles.section__title}>Choisissez votre formation</h2>
            <div className={styles.formationTabs}>
              {formations.map(f => (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`${styles.formationTab} ${active === f.id ? styles.formationTab__active : ''}`}
                >
                  {f.title.split('/')[0].trim()}
                </button>
              ))}
            </div>
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
                <a href={contact.whatsapp_url} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__whatsapp}`}>
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