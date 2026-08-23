import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import styles from '../styles/Legal.module.css';

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions légales — Whale Diving</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/"><a className={styles.back}>← Retour à l'accueil</a></Link>

          <h1 className={styles.title}>Mentions légales</h1>

          <section className={styles.section}>
            <h2 className={styles.heading}>Éditeur du site</h2>
            <p>Whale Diving</p>
            <p>Numéro de SIRET: 803 103 761 00042</p>
            <p>Exploitant individuel : François Fournier (dit Paco)</p>
            <p>Saint-Gilles-les-Bains, La Réunion (974)</p>
            <p>Email : <a href="mailto:whalediving.re@gmail.com" className={styles.link}>whalediving.re@gmail.com</a></p>
            <p>Téléphone : +262 6 93 87 33 36</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Activité</h2>
            <p>Whale Diving est un centre de plongée sous-marine proposant des baptêmes, formations, explorations et sorties cétacés à La Réunion.</p>
            <p>Moniteur diplômé d'État — DEJEPS Plongée sous-marine</p>
            <p>Certifications : ANMP · SDI/TDI</p>
            <p>Assurance RC professionnelle : Aqua Med / MHW — couverture 5 M€</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Hébergement</h2>
            <p>Ce site est hébergé par :</p>
            <p>o2switch</p>
            <p>222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand</p>
            <p>Téléphone : 04 44 44 60 40</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété exclusive de Whale Diving, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Responsabilité</h2>
            <p>Whale Diving s'efforce de maintenir les informations du site à jour mais ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'utilisateur est seul responsable de l'utilisation qu'il fait de ces informations.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Droit applicable</h2>
            <p>Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront compétents.</p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}