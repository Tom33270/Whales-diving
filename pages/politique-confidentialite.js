import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import styles from '../styles/Legal.module.css';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Head>
        <title>Politique de confidentialité — Whale Diving</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/"><a className={styles.back}>← Retour à l'accueil</a></Link>

          <h1 className={styles.title}>Politique de confidentialité</h1>
          <p className={styles.updated}>Dernière mise à jour : janvier 2026</p>

          <section className={styles.section}>
            <h2 className={styles.heading}>1. Responsable du traitement</h2>
            <p>Whale Diving — François Fournier (Paco)</p>
            <p>Saint-Gilles-les-Bains, La Réunion</p>
            <p>Email : <a href="mailto:whalediving.re@gmail.com" className={styles.link}>whalediving.re@gmail.com</a></p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>2. Données collectées</h2>
            <p>Ce site ne collecte aucune donnée personnelle automatiquement. Aucun formulaire de contact n'est présent sur le site.</p>
            <p>Les seules données échangées sont celles que vous transmettez volontairement par :</p>
            <ul className={styles.list}>
              <li>Appel téléphonique</li>
              <li>Message WhatsApp</li>
              <li>Email direct</li>
            </ul>
            <p>Ces données (nom, prénom, coordonnées) sont utilisées uniquement pour la gestion de vos réservations et ne sont jamais transmises à des tiers.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>3. Cookies</h2>
            <p>Ce site n'utilise aucun cookie de tracking ou publicitaire. Des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés mais ne collectent aucune donnée personnelle.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>4. Services tiers</h2>
            <p>Le site intègre les services suivants susceptibles de collecter des données :</p>
            <ul className={styles.list}>
              <li><strong>Google Maps</strong> (section Contact) — soumis à la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={styles.link}>politique de confidentialité de Google</a></li>
              <li><strong>WhatsApp</strong> — soumis à la <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={styles.link}>politique de confidentialité de Meta</a></li>
              <li><strong>Instagram</strong> — soumis à la <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" className={styles.link}>politique de confidentialité de Meta</a></li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>5. Vos droits</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
            <ul className={styles.list}>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
            </ul>
            <p>Pour exercer ces droits, contactez-nous à : <a href="mailto:whalediving.re@gmail.com" className={styles.link}>whalediving.re@gmail.com</a></p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>6. Durée de conservation</h2>
            <p>Les données de réservation sont conservées pendant une durée maximale de 3 ans à compter de la dernière interaction, conformément aux obligations légales en vigueur.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>7. Contact CNIL</h2>
            <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className={styles.link}>www.cnil.fr</a></p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}