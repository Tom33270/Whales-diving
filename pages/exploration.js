import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import content from '../content.config';
import styles from '../styles/ActivityDetail.module.css';

export default function Exploration() {
  const { tarifs, contact } = content;

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

      <section className={styles.hero}>
        <div className={styles.hero__overlay} />
        <div className={styles.hero__bg} style={{ backgroundImage: "url('/images/exploration.jpg')" }} />
        <div className={styles.hero__content}>
          <p className={styles.hero__eyebrow}>🌊 Exploration encadrée</p>
          <h1 className={styles.hero__title}>Les fonds de Saint-Gilles comme vous ne les avez jamais vus</h1>
          <p className={styles.hero__subtitle}>Plongeurs certifiés · Spots exceptionnels · Petits groupes</p>
          <div className={styles.hero__ctas}>
            <a href={contact.telephone_url} className={`${styles.btn} ${styles.btn__primary}`}>📞 Appeler Paco</a>
            <a href={contact.whatsapp_url} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__whatsapp}`}onClick={() => window.gtag_report_conversion('https://wa.me/262693873336')}>💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <main>
        <section className={styles.intro}>
          <div className={styles.container}>
            <div className={styles.intro__grid}>
              <div>
                <h2 className={styles.section__title}>Explorez les récifs de La Réunion</h2>
                <p className={styles.lead}>Plongez toute l'année sur les plus beaux sites de Saint-Gilles-les-Bains.</p>
                <ul className={styles.points}>
                  <li><span className={styles.points__icon}>🐢</span><span><strong>Tortues, raies, murènes,</strong> bancs de poissons tropicaux, coraux</span></li>
                  <li><span className={styles.points__icon}>📅</span><span><strong>Toute l'année :</strong> l'un des rares coins de l'île plongeable en toute saison</span></li>
                  <li><span className={styles.points__icon}>🎯</span><span><strong>Sur mesure :</strong> sites choisis selon votre niveau et vos envies</span></li>
                  <li><span className={styles.points__icon}>🧭</span><span><strong>Paco connaît chaque site</strong> et où trouver la vie marine</span></li>
                  <li><span className={styles.points__icon}>💳</span><span><strong>Packs 3, 6 ou 10 plongées :</strong> moins cher par plongée</span></li>
                </ul>
              </div>
              <div className={styles.intro__highlights}>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🐢</span>
                  <div><strong>Faune exceptionnelle</strong><p>Tortues, raies, murènes, coraux</p></div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>📅</span>
                  <div><strong>Toute l'année</strong><p>Conditions parmi les meilleures de l'île</p></div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🎯</span>
                  <div><strong>Sur mesure</strong><p>Spots choisis selon votre niveau</p></div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>💳</span>
                  <div><strong>Packs économiques</strong><p>Jusqu'à {tarifs.exploration_10}€ pour 10 plongées</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.pricing} ${styles.section__alt}`}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Tarifs</p>
            <h2 className={styles.section__title}>Plongées & packs</h2>
            <div className={styles.pricing__table}>
              {[
                { label: '1 plongée', price: `${tarifs.exploration_1}€`, note: '' },
                { label: '3 plongées', price: `${tarifs.exploration_3}€`, note: `${(tarifs.exploration_3 / 3).toFixed(2)}€/plongée` },
                { label: '6 plongées', price: `${tarifs.exploration_6}€`, note: `${(tarifs.exploration_6 / 6).toFixed(2)}€/plongée` },
                { label: '10 plongées', price: `${tarifs.exploration_10}€`, note: `${(tarifs.exploration_10 / 10).toFixed(2)}€/plongée`, featured: true },
              ].map((row, i) => (
                <div key={i} className={`${styles.table__row} ${row.featured ? styles.table__row__featured : ''}`}>
                  <span className={styles.table__label}>{row.label}</span>
                  {row.note && <span className={styles.table__note}>{row.note}</span>}
                  <span className={styles.table__price}>{row.price}</span>
                </div>
              ))}
            </div>
            <div className={styles.pricing__cta}>
              <a href={contact.whatsapp_url} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__whatsapp}`}onClick={() => window.gtag_report_conversion('https://wa.me/262693873336')}>
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