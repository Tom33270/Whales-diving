import { LangProvider } from '../context/LangContext';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <LangProvider>
      <Head>
          {/* Google Ads Tag */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18353131007" />
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-18353131007');
      `
    }}
  />
        {/* SEO de base */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D2137" />

        {/* Open Graph global */}
        <meta property="og:site_name" content="Whale Diving" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.whale-diving.re/images/hero-photo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="es_ES" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.whale-diving.re/images/hero-photo.jpg" />

        {/* JSON-LD — Données structurées */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Whale Diving",
              "description": "Centre de plongée sous-marine à Saint-Gilles-les-Bains, La Réunion. Baptêmes, formations, exploration et sorties cétacés avec un moniteur diplômé d'État.",
              "url": "https://www.whale-diving.re",
              "telephone": "+262693873336",
              "email": "whalediving.re@gmail.com",
              "image": "https://www.whale-diving.re/images/hero-photo.jpg",
              "logo": "https://www.whale-diving.re/images/logo.png",
              "priceRange": "€€",
              "currenciesAccepted": "EUR",
              "paymentAccepted": "Cash, Bank Transfer",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Port de plaisance",
                "addressLocality": "Saint-Gilles-les-Bains",
                "addressRegion": "La Réunion",
                "postalCode": "97434",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -21.0554,
                "longitude": 55.2231
              },
              "sameAs": [
                "https://www.instagram.com/whale.diving/"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Activités de plongée",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Baptême de plongée",
                      "description": "Découverte de la plongée sous-marine dès 8 ans"
                    },
                    "price": "90",
                    "priceCurrency": "EUR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Exploration encadrée",
                      "description": "Plongées d'exploration sur les sites de Saint-Gilles-les-Bains"
                    },
                    "price": "60",
                    "priceCurrency": "EUR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Formation plongée",
                      "description": "Formations N1, N2, PE40, PA20, Nitrox — certifications ANMP et PADI"
                    },
                    "price": "260",
                    "priceCurrency": "EUR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sortie cétacés",
                      "description": "Observation des dauphins et baleines à bosse à La Réunion"
                    },
                    "price": "90",
                    "priceCurrency": "EUR"
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "80",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
    </LangProvider>
  );
}