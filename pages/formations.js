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
      pourQui: "Débutants : vos premières vraies plongées, jusqu'à 20 m avec un moniteur (PE20)",
      apprendre: ["Utiliser votre matériel", "Respiration et flottabilité", "Communiquer sous l'eau", "Les bons réflexes de sécurité"],
      equivalent: "PADI Open Water",
      included: ['5 plongées en mer', `Certification ANMP reconnue à l'international`, 'Cours théorique', 'Carnet de plongée', 'Matériel fourni'],
    },
    {
      id: 'n2',
      title: 'Niveau 2 / Advanced Open Water',
      duration: '10 plongées',
      price: `${tarifs.niveau_2}€`,
      pourQui: "Après le Niveau 1 : plus d'autonomie et plus de profondeur",
      apprendre: ["PA20 : autonome jusqu'à 20 m", "PE40 : encadré jusqu'à 40 m", "Notions de décompression", "Sauvetage et remontées d'urgence"],
      equivalent: "Advanced Open Water",
      included: ['10 plongées en mer', `Certification ANMP reconnue à l'international`, 'Cours théorique', 'Matériel fourni'],
    },
    {
      id: 'pe40',
      title: 'Plongeur Encadré 40m (PE40) / spécialité profonde',
      duration: '4 plongées',
      price: `${tarifs.pe40}€`,
      pourQui: "Pour découvrir la plongée profonde, jusqu'à 40 m avec un moniteur",
      apprendre: ["Plonger jusqu'à 40 m", "Notions de décompression", "Remontées d'urgence"],
      equivalent: "spécialité profonde internationale",
      included: ["4 plongées en mer","Notions de décompression abordées","Cours théorique", "Travail des remontées d’urgence","Certification anmp internationale", "Matériel fourni"],
    },
    {
      id: 'pa20',
      title: 'Plongeur Autonome 20m (PA20)',
      duration: '6 plongées',
      price: `${tarifs.pa20}€`,
      pourQui: "Après le Niveau 1 : plonger en binôme, sans guide, jusqu'à 20 m",
      apprendre: ["Préparer et organiser vos plongées", "Évoluer en binôme", "Orientation sous-marine", "Gérer la sécurité en autonomie"],
      equivalent: "",
      included: ['6 plongées en mer', 'Orientation sous-marine', 'Organisation et préparation de la plongée', 'Gestion de la sécurité en autonomie', "Certification ANMP internationale", "Cours théorique", "Matériel fourni"],
    },
    {
      id: 'pe12',
      title: 'Plongeur Encadré 12m',
      duration: '3 plongées',
      price: `${tarifs.pe12}€`,
      pourQui: "Peu de temps ? 3 plongées pour être certifié jusqu'à 12 m",
      apprendre: ["Les techniques de base", "Plonger encadré jusqu'à 12 m", "Finir le Niveau 1 plus tard avec 2 plongées"],
      equivalent: "plongeur débutant international",
      included: ["3 plongées encadrées", "Certification anmp internationale","Cours théorique", "Initiation aux techniques de base", "Matériel fourni"],
    },
    {
      id: 'nitrox',
      title: 'Nitrox Simple',
      duration: '2 plongées',
      price: `${tarifs.nitrox}€`,
      pourQui: "Plonger à l'air enrichi en oxygène (jusqu'à 40 % d'O₂)",
      apprendre: ["Utiliser et analyser le Nitrox", "Plus de temps sans palier selon la plongée", "Peut réduire la fatigue sur les plongées successives"],
      equivalent: "Nitrox international",
      included: ['2 plongées au nitrox', 'Cours théorique', 'Certification ANMP international',"Air enrichi jusqu’à 40 % d’O₂", 'Matériel fourni'],
    },
  ];

  const formation = formations.find(f => f.id === active);

  return (
    <>
      <Head>
        <title>Formations plongée La Réunion — N1, N2, PADI, Nitrox — Whale Diving</title>
        <meta name="description" content="Passez votre brevet de plongée à La Réunion. N1, N2, PE40, PA20, Nitrox — certifications ANMP et PADI avec Paco, moniteur DEJEPS. À partir de 180€." />
        <meta property="og:title" content="Formations plongée — N1, N2, PADI, Nitrox — Whale Diving La Réunion" />
        <meta property="og:description" content="Certifications ANMP et PADI avec un moniteur diplômé d'État à La Réunion." />
        <meta property="og:url" content="https://www.whale-diving.re/formations" />
        <meta property="og:image" content="https://www.whale-diving.re/images/formations.jpg" />
        <link rel="canonical" href="https://www.whale-diving.re/formations" />
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
            <a href={contact.whatsapp_url} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__whatsapp}`}onClick={() => window.gtag_report_conversion('https://wa.me/262693873336')}>💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <main>
        <section className={styles.intro}>
          <div className={styles.container}>
            <h2 className={styles.section__title}>Des formations reconnues internationalement</h2>
            <p className={styles.lead}>Des certifications ANMP reconnues dans le monde entier.</p>
            <ul className={styles.points}>
              <li><span className={styles.points__icon}>🌍</span><span><strong>Valable partout :</strong> certification ANMP et SDI/TDI</span></li>
              <li><span className={styles.points__icon}>👥</span><span><strong>Petit groupe :</strong> 6 personnes max</span></li>
              <li><span className={styles.points__icon}>🐢</span><span><strong>À votre rythme,</strong> sans pression</span></li>
              <li><span className={styles.points__icon}>🗣️</span><span><strong>Cours en français,</strong> anglais ou espagnol</span></li>
            </ul>
          </div>
        </section>

        <section className={styles.section__alt}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Tarifs</p>
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
                    <p className={styles.formationDetail__qui}><span>Pour qui</span>{formation.pourQui}</p>
                  </div>
                  <div className={styles.formationDetail__price}>
                    <span className={styles.formationDetail__duration}>{formation.duration}</span>
                    <strong>{formation.price}</strong>
                  </div>
                </div>
                <div className={styles.formationDetail__cols}>
                  <div>
                    <p className={styles.formationDetail__label}>Vous apprenez</p>
                    <ul className={styles.formationDetail__list}>
                      {formation.apprendre.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className={styles.formationDetail__label}>Inclus</p>
                <ul className={styles.formationDetail__included}>
                  {formation.included.map((item, i) => (
                    <li key={i}>✓ {item}</li>
                  ))}
                </ul>
                  </div>
                </div>
                {formation.equivalent && (
                  <p className={styles.formationDetail__eq}>🌍 Équivalent : {formation.equivalent}</p>
                )}
                <a href={contact.whatsapp_url} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__whatsapp}`}onClick={() => window.gtag_report_conversion('https://wa.me/262693873336')}>
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