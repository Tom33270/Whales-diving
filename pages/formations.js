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
      description: "La formation idéale pour acquérir les bases de la plongée sous-marine et évoluer jusqu’à 20 mètres comme plongeur encadré (PE20). Vous apprendrez à utiliser votre matériel, maîtriser votre respiration et votre flottabilité, communiquer sous l’eau et adopter les bons réflexes de sécurité. Certification anmp internationale équivalent PADi Open Water",
      included: ['5 plongées en mer', `Certification ANMP reconnue à l'international`, 'Cours théorique', 'Carnet de plongée', 'Matériel fourni'],
    },
    {
      id: 'n2',
      title: 'Niveau 2 / Advanced Open Water',
      duration: '10 plongées',
      price: `${tarifs.niveau_2}€`,
      description: "Le Niveau 2 consolide les acquis du Niveau 1 et vous permet de progresser vers l’autonomie et la profondeur. La formation comprend le PA20 (plongeur autonome jusqu’à 20 m) et le PE40 (plongeur encadré jusqu’à 40 m). Elle vous permet également de découvrir les notions de décompression et de gagner en maturité dans la gestion de la sécurité et du sauvetage, notamment à travers les remontées d’urgence. Une formation complète pour développer votre autonomie, accéder à de nouvelles profondeurs et enrichir votre expérience de plongée. Équivalent au niveau Advanced Open Water",
      included: ['10 plongées en mer', `Certification ANMP reconnue à l'international`, 'Cours théorique', 'Matériel fourni'],
    },
    {
      id: 'pe40',
      title: 'Plongeur Encadré 40m (PE40) / spécialté profonde internationale',
      duration: '4 plongées',
      price: `${tarifs.pe40}€`,
      description: "Le PE40 vous permet de progresser vers la profondeur en consolidant vos acquis et en développant votre maîtrise de la plongée jusqu’à 40 mètres, toujours sous l’encadrement d’un moniteur. La formation aborde les notions de décompression et permet de renforcer la maîtrise de la sécurité grâce au travail des remontées d’urgence. Une formation idéale pour découvrir la plongée profonde et gagner en expérience. Equivalent spécialité profonde internationale.",
      included: ["4 plongées en mer","Notions de décompression abordées","Cours théorique", "Travail des remontées d’urgence","Certification anmp internationale", "Matériel fourni"],
    },
    {
      id: 'pa20',
      title: 'Plongeur Autonome 20m (PA20)',
      duration: '6 plongées',
      price: `${tarifs.pa20}€`,
      description: "Le PA20 vous permet de franchir une nouvelle étape après le Niveau 1 en développant votre autonomie jusqu’à 20 mètres. Vous apprenez à préparer et organiser vos plongées, à évoluer en binôme sans guide, à maîtriser votre orientation, tout en renforçant votre gestion de la sécurité sous l’eau.",
      included: ['6 plongées en mer', 'Orientation sous-marine', 'Organisation et préparation de la plongée', 'Gestion de la sécurité en autonomie', "Certification ANMP internationale", "Cours théorique", "Matériel fourni"],
    },
    {
      id: 'pe12',
      title: 'Plongeur Encadré 12m',
      duration: '3 plongées',
      price: `${tarifs.pe12}€`,
      description: "Une alternative au Niveau 1 pour les personnes qui disposent de moins de temps. Cette formation comprend 3 plongées encadrées jusqu’à 12 m et permet d’obtenir une certification PE12. Vous pourrez ensuite poursuivre votre formation où vous le souhaitez et compléter votre Niveau 1 avec 2 plongées supplémentaires. equivalent plongeur débutant international",
      included: ["3 plongées encadrées", "Certification anmp internationale","Cours théorique", "Initiation aux techniques de base", "Matériel fourni"],
    },
    {
      id: 'nitrox',
      title: 'Nitrox Simple',
      duration: '2 plongées',
      price: `${tarifs.nitrox}€`,
      description: "Apprenez à plonger avec un mélange d’air enrichi en oxygène, jusqu’à 40 % d’O₂. Le Nitrox permet, selon la profondeur et les paramètres de la plongée, de rester plus longtemps dans les limites de non-décompression et peut contribuer à réduire la fatigue lors de plongées successives. equivalent nitrox international",
      included: ['2 plongées au nitrox', 'Cours théorique', 'Certification ANMP international',"Air enrichi jusqu’à 40 % d’O₂", 'Matériel fourni'],
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