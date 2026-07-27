import Head from 'next/head';
import Home from '../components/Home';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Whale Diving | Club de plongée à Saint-Gilles-les-Bains — La Réunion</title>
        <meta
          name="description"
          content="Formations plongée N1/N2/N3, baptêmes et sorties cétacés à La Réunion. Encadrement privé et personnalisé à Saint-Gilles-les-Bains. Moniteur diplômé DEJEPS · 5★ 73 avis Google."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Whale Diving | Plongée à La Réunion" />
        <meta property="og:description" content="Baptêmes, formations et sorties cétacés avec Paco — moniteur DEJEPS. Saint-Gilles-les-Bains." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whale-diving.re" />
        <link rel="canonical" href="https://whale-diving.re" />
      </Head>
      <Home />
    </>
  );
}