import Head from 'next/head';
import Home from '../components/Home';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Whale Diving | Centre de plongée à Saint-Gilles-les-Bains — La Réunion</title>
        <meta name="description" content="Centre de plongée à La Réunion. Baptêmes, formations N1/N2/PADI, explorations et sorties baleines & dauphins avec Paco, moniteur DEJEPS. 5★ · +80 avis Google · Saint-Gilles-les-Bains." />
        <meta name="keywords" content="plongée La Réunion, centre de plongée Saint-Gilles, baptême plongée Réunion, formation plongée Réunion, sortie baleines Réunion, dauphins Réunion, PADI Réunion, moniteur plongée Réunion" />
        <meta property="og:title" content="Whale Diving | Centre de plongée — La Réunion" />
        <meta property="og:description" content="Baptêmes, formations et sorties cétacés avec Paco — moniteur DEJEPS. Saint-Gilles-les-Bains, La Réunion. 5★ +80 avis Google." />
        <meta property="og:url" content="https://www.whale-diving.re" />
        <meta property="og:image" content="https://www.whale-diving.re/images/hero-photo.jpg" />
        <meta name="twitter:title" content="Whale Diving | Centre de plongée — La Réunion" />
        <meta name="twitter:description" content="Baptêmes, formations et sorties cétacés avec Paco — moniteur DEJEPS. Saint-Gilles-les-Bains." />
        <link rel="canonical" href="https://www.whale-diving.re" />
      </Head>
      <Home />
    </>
  );
}