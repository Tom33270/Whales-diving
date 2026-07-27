import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import styles from '../styles/ActivityDetail.module.css';

export default function Exploration() {
  return (
    <>
      <Head>
        <title>Exploration encadrée — Whale Diving La Réunion</title>
        <meta name="description" content="Plongées d'exploration sur les spots de Saint-Gilles-les-Bains. À partir de 60€ la plongée. Packs 3, 6 ou 10 plongées disponibles. Moniteur DEJEPS." />
      </Head>

      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.hero__overlay} />
        <div className={styles.hero__bg} style={{ backgroundImage: "url('/images/exploration.jpg')" }} />
        <div className={styles.hero__content}>
          <p className={styles.hero__eyebrow}>🌊 Exploration encadrée</p>
          <h1 className={styles.hero__title}>Les fonds de Saint-Gilles comme vous ne les avez jamais vus</h1>
          <p className={styles.hero__subtitle}>Plongeurs certifiés · Spots exceptionnels · Petits groupes</p>
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
                <h2 className={styles.section__title}>Explorez les récifs de La Réunion</h2>
                <p className={styles.text}>Saint-Gilles-les-Bains est l'un des rares endroits à La Réunion où la plongée est praticable toute l'année. Ses fonds abritent une biodiversité exceptionnelle : tortues marines, raies pastenagues, murènes, bancs de poissons tropicaux et coraux remarquablement préservés.</p>
                <p className={styles.text}>Avec Paco, chaque sortie est construite autour de votre niveau et de vos envies. Pas de plongée à la chaîne : il connaît les spots sur le bout des doigts et sait toujours où trouver la vie marine la plus spectaculaire.</p>
                <p className={styles.text}>Les packs multi-plongées vous permettent de progresser à votre rythme tout en réalisant des économies significatives.</p>
              </div>
              <div className={styles.intro__highlights}>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🐢</span>
                  <div>
                    <strong>Faune exceptionnelle</strong>
                    <p>Tortues, raies, murènes, coraux</p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>📅</span>
                  <div>
                    <strong>Toute l'année</strong>
                    <p>Conditions parmi les meilleures de l'île</p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🎯</span>
                  <div>
                    <strong>Sur mesure</strong>
                    <p>Spots choisis selon votre niveau</p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>💳</span>
                  <div>
                    <strong>Packs économiques</strong>
                    <p>Jusqu'à 500€ pour 10 plongées</p>
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
            <h2 className={styles.section__title}>Plongées & packs</h2>
            <div className={styles.pricing__table}>
              {[
                { label: '1 plongée', price: '60€', note: '' },
                { label: '3 plongées', price: '165€', note: '55€/plongée' },
                { label: '6 plongées', price: '315€', note: '52,50€/plongée' },
                { label: '10 plongées', price: '500€', note: '50€/plongée', featured: true },
              ].map((row, i) => (
                <div key={i} className={`${styles.table__row} ${row.featured ? styles.table__row__featured : ''}`}>
                  <span className={styles.table__label}>{row.label}</span>
                  {row.note && <span className={styles.table__note}>{row.note}</span>}
                  <span className={styles.table__price}>{row.price}</span>
                </div>
              ))}
            </div>
            <div className={styles.pricing__cta}>
              <a href="https://wa.me/262693873336" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__whatsapp}`}>
                💬 Réserver sur WhatsApp
              </a>
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