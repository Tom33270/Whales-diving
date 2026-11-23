import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import content from '../content.config';
import styles from '../styles/ActivityDetail.module.css';

export default function BaptemeInitiation() {
  const { tarifs, contact } = content;

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

      <section className={styles.hero}>
        <div className={styles.hero__overlay} />
        <div className={styles.hero__bg} style={{ backgroundImage: "url('/images/bapteme.jpg')" }} />
        <div className={styles.hero__content}>
          <p className={styles.hero__eyebrow}>🤿 Baptême & Initiation</p>
          <h1 className={styles.hero__title}>Votre première respiration sous l'eau</h1>
          <p className={styles.hero__subtitle}>Dès 8 ans · 6m de profondeur max · Encadrement privé avec Paco</p>
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
                <h2 className={styles.section__title}>Une découverte en toute sécurité</h2>
                <p className={styles.lead}>Votre première plongée, sans aucune expérience, avec Paco à vos côtés.</p>
                <ul className={styles.points}>
                  <li><span className={styles.points__icon}>🤿</span><span><strong>Baptême :</strong> 30 min sous l'eau, 6 m max</span></li>
                  <li><span className={styles.points__icon}>⏱️</span><span><strong>Initiation :</strong> 60 min, plus de temps pour profiter</span></li>
                  <li><span className={styles.points__icon}>🎓</span><span><strong>L'initiation compte</strong> comme la 1re plongée de votre PE12 ou de votre Niveau 1</span></li>
                  <li><span className={styles.points__icon}>🐠</span><span><strong>Les récifs coralliens</strong> de Saint-Gilles-les-Bains</span></li>
                  <li><span className={styles.points__icon}>😊</span><span><strong>À votre rythme :</strong> Paco s'adapte à votre confort</span></li>
                </ul>
              </div>
              <div className={styles.intro__highlights}>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>👶</span>
                  <div><strong>Dès 8 ans</strong><p>Accessible à toute la famille</p></div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>👥</span>
                  <div><strong>6 personnes max</strong><p>Encadrement personnalisé</p></div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🎓</span>
                  <div><strong>Moniteur DEJEPS</strong><p>Diplôme d'État E3</p></div>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlight__icon}>🛡️</span>
                  <div><strong>Matériel fourni</strong><p>Combinaison, masque, bouteille</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.pricing} ${styles.section__alt}`}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Tarifs</p>
            <h2 className={styles.section__title}>Formules baptême</h2>
            <div className={styles.pricing__grid}>
              <div className={styles.pricing__card}>
                <div className={styles.pricing__header}>
                  <h3>Baptême</h3>
                  <span className={styles.pricing__price}>{tarifs.bapteme}€</span>
                </div>
                <ul className={styles.pricing__features}>
                  <li>✓ 30 minutes en immersion</li>
                  <li>✓ Profondeur max 6m</li>
                  <li>✓ Matériel complet fourni</li>
                  <li>✓ Briefing sécurité inclus</li>
                  <li>✓ Accompagnement Paco</li>
                </ul>
                <a href={contact.whatsapp_url} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__primary}`}onClick={() => window.gtag_report_conversion('https://wa.me/262693873336')}>Réserver</a>
              </div>
              <div className={`${styles.pricing__card} ${styles.pricing__card__featured}`}>
                <div className={styles.pricing__badge}>Recommandé</div>
                <div className={styles.pricing__header}>
                  <h3>Initiation</h3>
                  <span className={styles.pricing__price}>{tarifs.initiation}€</span>
                </div>
                <ul className={styles.pricing__features}>
                  <li>✓ 60 minutes en immersion</li>
                  <li>✓ Profondeur max 6m</li>
                  <li>✓ Matériel complet fourni</li>
                  <li>✓ Briefing sécurité inclus</li>
                  <li>✓ Compte comme la 1re plongée de votre PE12 ou de votre Niveau 1</li>
                  <li>✓ Plonger à 2 possible</li>
                </ul>
                <a href={contact.whatsapp_url} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__primary}`}onClick={() => window.gtag_report_conversion('https://wa.me/262693873336')}>Réserver</a>
              </div>
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