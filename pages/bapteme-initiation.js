import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useLang } from '../context/LangContext';
import styles from '../styles/ActivityDetail.module.css';

export default function BaptemeInitiation() {
  const { t } = useLang();

  return (
    <>
      <Head>
        <title>Baptême & Initiation — Whale Diving La Réunion</title>
        <meta name="description" content="Découvrez la plongée sous-marine à Saint-Gilles-les-Bains avec Paco, moniteur DEJEPS. Baptême dès 90€, initiation dès 110€. Petits groupes, encadrement privé." />
      </Head>

      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.hero__overlay} />
        <div className={styles.hero__bg} style={{ backgroundImage: "url('/images/bapteme.jpg')" }} />
        <div className={styles.hero__content}>
          <p className={styles.hero__eyebrow}>🤿 Baptême & Initiation</p>
          <h1 className={styles.hero__title}>Votre première respiration sous l'eau</h1>
          <p className={styles.hero__subtitle}>Dès 8 ans · 6m de profondeur max · Encadrement privé avec Paco</p>
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
                <h2 className={styles.section__title}>Une découverte en toute sécurité</h2>
                <p className={styles.text}>Le baptême de plongée, c'est votre première immersion dans le monde sous-marin. En moins d'une heure, Paco vous emmène à 6 mètres de profondeur découvrir les récifs coralliens de Saint-Gilles-les-Bains.</p>
                <p className={styles.text}>Aucune expérience n'est requise. Paco s'adapte à votre rythme, à votre niveau de confort et à vos envies. L'objectif : que vous repartiez avec le sourire et l'envie de recommencer.</p>
                <p className={styles.text}>L'initiation est une alternative au baptême — plus longue (60 min), elle vous permet de valider officiellement votre première plongée de Niveau 1 si vous souhaitez continuer vers une certification.</p>
              </div>
              <div className={styles.intro__highlights}>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>👶</span>
                  <div>
                    <strong>Dès 8 ans</strong>
                    <p>Accessible à toute la famille</p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>👥</span>
                  <div>
                    <strong>6 personnes max</strong>
                    <p>Encadrement personnalisé</p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🎓</span>
                  <div>
                    <strong>Moniteur DEJEPS</strong>
                    <p>Diplôme d'État niveau 5</p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🛡️</span>
                  <div>
                    <strong>Matériel fourni</strong>
                    <p>Combinaison, masque, bouteille</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className={`${styles.pricing} ${styles.section__alt}`}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Tarifs 2026</p>
            <h2 className={styles.section__title}>Formules baptême</h2>
            <div className={styles.pricing__grid}>
              <div className={styles.pricing__card}>
                <div className={styles.pricing__header}>
                  <h3>Baptême</h3>
                  <span className={styles.pricing__price}>90€</span>
                </div>
                <ul className={styles.pricing__features}>
                  <li>✓ 30 minutes en immersion</li>
                  <li>✓ Profondeur max 6m</li>
                  <li>✓ Matériel complet fourni</li>
                  <li>✓ Briefing sécurité inclus</li>
                  <li>✓ Accompagnement Paco</li>
                </ul>
                <a href="https://wa.me/262693873336" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__primary}`}>Réserver</a>
              </div>
              <div className={`${styles.pricing__card} ${styles.pricing__card__featured}`}>
                <div className={styles.pricing__badge}>Recommandé</div>
                <div className={styles.pricing__header}>
                  <h3>Initiation</h3>
                  <span className={styles.pricing__price}>110€</span>
                </div>
                <ul className={styles.pricing__features}>
                  <li>✓ 60 minutes en immersion</li>
                  <li>✓ Profondeur max 6m</li>
                  <li>✓ Matériel complet fourni</li>
                  <li>✓ Briefing sécurité inclus</li>
                  <li>✓ Valide la 1ère plongée N1</li>
                  <li>✓ Plonger à 2 possible</li>
                </ul>
                <a href="https://wa.me/262693873336" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__primary}`}>Réserver</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA retour */}
        <section className={styles.back}>
          <div className={styles.container}>
            <Link href="/#activites">
              <a className={styles.backLink}>← Voir toutes les activités</a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}