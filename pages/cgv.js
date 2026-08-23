import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import styles from '../styles/Legal.module.css';

export default function CGV() {
  return (
    <>
      <Head>
        <title>Conditions Générales de Vente — Whale Diving</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/"><a className={styles.back}>← Retour à l'accueil</a></Link>

          <h1 className={styles.title}>Conditions Générales de Vente</h1>
          <p className={styles.updated}>Dernière mise à jour : janvier 2026</p>

          <section className={styles.section}>
            <h2 className={styles.heading}>1. Objet</h2>
            <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Whale Diving (ci-après « le Prestataire ») et toute personne physique souhaitant réserver une prestation de plongée sous-marine (ci-après « le Client »).</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>2. Prestations proposées</h2>
            <p>Whale Diving propose les prestations suivantes :</p>
            <ul className={styles.list}>
              <li>Baptêmes et initiations à la plongée</li>
              <li>Plongées d'exploration encadrées</li>
              <li>Formations et certifications (N1, N2, PE40, PA20, Nitrox)</li>
              <li>Sorties cétacés (dauphins et baleines)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>3. Réservation</h2>
            <p>Toute réservation s'effectue par téléphone, WhatsApp ou email. La réservation est confirmée après accord verbal ou écrit du Prestataire et versement d'un acompte si applicable.</p>
            <p>Le Client s'engage à fournir des informations exactes concernant son niveau de plongée, son état de santé et toute contre-indication médicale éventuelle.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>4. Tarifs et paiement</h2>
            <p>Les tarifs sont indiqués en euros TTC sur le site. Ils peuvent être modifiés à tout moment, les réservations confirmées n'étant pas affectées par ces modifications.</p>
            <p>Le paiement s'effectue sur place, avant la prestation, en espèces ou par virement bancaire.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>5. Annulation et remboursement</h2>
            <ul className={styles.list}>
              <li><strong>Annulation par le Client à plus de 48h :</strong> remboursement intégral ou report de la prestation.</li>
              <li><strong>Annulation par le Client à moins de 48h :</strong> aucun remboursement, sauf cas de force majeure ou certificat médical.</li>
              <li><strong>Annulation par le Prestataire</strong> (conditions météo défavorables, raisons de sécurité) : remboursement intégral ou report sans frais.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>6. Conditions médicales et aptitude</h2>
            <p>La pratique de la plongée sous-marine nécessite une aptitude physique minimale. Le Client doit :</p>
            <ul className={styles.list}>
              <li>Être en bonne santé générale</li>
              <li>Savoir nager</li>
              <li>Ne pas présenter de contre-indications médicales à la plongée</li>
              <li>Être âgé d'au moins 8 ans pour les baptêmes</li>
            </ul>
            <p>En cas de doute, un certificat médical d'aptitude à la plongée peut être demandé.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>7. Responsabilité</h2>
            <p>Whale Diving est assuré en responsabilité civile professionnelle auprès de Aqua Med / MHW pour un montant de 5 millions d'euros. Le Prestataire ne saurait être tenu responsable des dommages résultant d'une fausse déclaration du Client concernant son état de santé ou son niveau de plongée.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>8. Protocole cétacés</h2>
            <p>Les sorties cétacés sont soumises au protocole CAP (Comprendre, Approcher, Protéger). Le Prestataire se réserve le droit d'interrompre ou de modifier la sortie si le comportement d'un Client met en danger les animaux ou les autres participants.</p>
            <p>La présence des cétacés n'est jamais garantie — aucun remboursement ne sera effectué en cas d'absence d'animaux.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>9. Droit applicable</h2>
            <p>Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les tribunaux compétents seront ceux du ressort de La Réunion.</p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}