const es = {
  nav: {
    activities: 'Actividades',
    pricing: 'Precios',
    cetaceans: 'Ballenas',
    reviews: 'Opiniones',
    about: 'Paco',
    contact: 'Contacto',
  },

  hero: {
    tagline: 'Wild Well Dive',
    title: 'Sumérgete en\nlo extraordinario',
    subtitle:
      'Formaciones, exploración y avistamiento de cetáceos con un monitor titulado por el Estado. Una experiencia privada y personalizada, lejos del turismo masivo.',
    cta_call: 'Llamar a Paco',
    cta_instagram: 'Instagram',
    location: 'Saint-Gilles-les-Bains · Isla de la Reunión',
  },

  stats: {
    rating: '5.0',
    rating_label: 'opiniones Google',
    rating_count: '73 opiniones verificadas',
    experience: '+20 años',
    experience_label: 'de experiencia internacional',
    languages: '3 idiomas',
    languages_label: 'Français · English · Español',
    group: 'Máx. 6',
    group_label: 'por salida, acompañamiento privado',
  },

  activities: {
    eyebrow: 'Actividades',
    title: 'Una inmersión para cada proyecto',
    subtitle: 'Principiante, buceador experimentado o amante de los cetáceos — cada salida está construida a tu medida.',
    items: [
      {
        slug: 'bapteme-initiation',
        emoji: '🤿',
        title: 'Bautismo & Iniciación',
        description: 'Descubre el buceo con total seguridad, guiado por Paco. Desde 8 años.',
        price: 'Desde 90€',
      },
      {
        slug: 'exploration',
        emoji: '🌊',
        title: 'Exploración guiada',
        description: 'Explora los fondos coralinos de Saint-Gilles. Spots excepcionales, grupos pequeños.',
        price: 'Desde 60€',
      },
      {
        slug: 'formations',
        emoji: '📋',
        title: 'Formaciones',
        description: 'N1, N2, PE40, PA20, Nitrox — certificación reconocida ANMP, SDI/TDI.',
        price: 'Desde 260€',
      },
      {
        slug: 'cetaces',
        emoji: '🐋',
        title: 'Avistamiento de cetáceos',
        description: 'Delfines todo el año · Ballenas jorobadas de julio a septiembre. Protocolo CAP respetado.',
        price: 'Desde 90€',
      },
    ],
  },

  pricing: {
    eyebrow: 'Precios 2026',
    title: 'Precios claros, todo incluido',
    subtitle: 'Todos los precios incluyen IVA. Sin costes ocultos.',
    note: 'Válido en 2026 · Certificación incluida en formaciones · Material proporcionado',
    categories: [
      {
        title: '🐋 Avistamiento de cetáceos',
        rows: [
          { label: '1 persona · 3h · fuera de temporada ballena (máx. 6)', price: '90€' },
          { label: '1 persona · 3h · temporada ballena (jul.–sep.) · salida privada posible', price: '120€' },
        ],
      },
      {
        title: '🤿 Bautismo & Iniciación',
        rows: [
          { label: 'Bautismo · 30 min · 6m máx', price: '90€' },
          { label: 'Iniciación · 60 min · 6m máx · válida como 1ª inmersión N1', price: '110€' },
        ],
      },
      {
        title: '🌊 Exploración guiada',
        rows: [
          { label: '1 inmersión', price: '60€' },
          { label: '3 inmersiones', price: '165€' },
          { label: '6 inmersiones', price: '315€' },
          { label: '10 inmersiones', price: '500€' },
        ],
      },
      {
        title: '📋 Formaciones',
        rows: [
          { label: 'Nivel 1 / Open Water 20m · 5 inmersiones · certificación incluida', price: '450€' },
          { label: 'Nivel 2 / Advanced Open Water · 10 inmersiones · certificación incluida', price: '720€' },
          { label: 'Buceador Acompañado 40m (PE40) · 4 inmersiones', price: '320€' },
          { label: 'Buceador Autónomo 20m (PA20) · 6 inmersiones', price: '450€' },
          { label: 'Buceador Acompañado 12m · 3 inmersiones', price: '260€' },
          { label: 'Nitrox · 2 inmersiones · aire enriquecido', price: '180€' },
        ],
      },
    ],
  },

  cetacean: {
    eyebrow: 'Temporada alta · Julio a Septiembre',
    title: 'La temporada de las ballenas',
    text:
      "Cada verano austral, las ballenas jorobadas hacen escala en La Reunión para dar a luz y reproducirse. Paco te lleva a su encuentro con pleno respeto al protocolo CAP — Comprender, Acercarse, Proteger.",
    cta: 'Reservar una salida',
  },

  reviews: {
    eyebrow: 'Opiniones Google',
    title: '5.0 ⭐ · 73 opiniones verificadas',
    subtitle: 'Lo que dicen quienes han buceado con Paco.',
    items: [
      { name: 'Julie Pérez', text: "Saqué mi PADI nivel 1 con Paco y fue una experiencia increíble. Whale Diving es una perfecta mezcla de amabilidad y profesionalidad. ¡Lo recomiendo totalmente!" },
      { name: 'Clément Ogor', text: "¡Paco es un monitor y guía de primera! Llevaba tiempo sin bucear y me puso en confianza rápidamente. 2 inmersiones realizadas, las 2 geniales. ¡A repetir!" },
      { name: 'Peter Adam', text: "Quiero agradecer a Paco su paciencia y profesionalismo en una salida que quedará grabada en nuestra memoria. Muy respetuoso con los cetáceos. Lo recomiendo al 200%." },
      { name: 'Antoine Guinot', badge: 'Local Guide', text: "Experiencia genial para una iniciación al buceo con Paco. Incluso sin experiencia, uno se siente bien acompañado y seguro. Recomendado sin dudarlo." },
    ],
  },

  about: {
    eyebrow: 'El monitor',
    title: 'Paco',
    quote: '«El verdadero lujo hoy en día es la calma y la calidad de la experiencia.»',
    bio: "Me llamo François, pero todo el mundo me llama Paco. Monitor de buceo titulado DEJEPS, certificado ANMP y SDI/TDI, vivo y trabajo en La Reunión desde hace más de 20 años.\n\nFundé Whale Diving con una idea sencilla: ofrecer un buceo privado, personalizado y de verdadera calidad — para quienes no quieren una experiencia estandarizada.\n\nAquí no hay grupos saturados. Cada salida está construida alrededor de ti, de tu nivel, de tus deseos y del respeto por el océano.",
    credentials: [
      'DEJEPS Buceo — Diploma de Estado nivel 5',
      'Certificado ANMP y SDI/TDI (reconocimiento internacional)',
      'Más de 20 años de experiencia — Francia, Filipinas, internacional',
      'Patrón de embarcación costera y de altura',
      'Primeros auxilios PSE1 (2026)',
      'Autorización de observación de cetáceos — CEDTM',
      'Seguro RC profesional Aqua Med / MHW (cobertura 5M€)',
    ],
    languages: 'Français · English · Español',
  },

  contact: {
    eyebrow: 'Reservar',
    title: 'Contacta con Paco',
    subtitle: 'Sin formularios complicados. Una llamada o un mensaje de WhatsApp, y ¡nos vamos!',
    cta_call: 'Llamar a Paco',
    cta_whatsapp: 'WhatsApp',
    cta_instagram: 'Instagram',
    address: 'Saint-Gilles-les-Bains · Isla de la Reunión',
    email: 'whalediving.re@gmail.com',
  },

  footer: {
    tagline: 'Wild Well Dive',
    location: 'Saint-Gilles-les-Bains · Isla de la Reunión',
    links: [
      { label: 'Aviso legal', href: '/mentions-legales' },
      { label: 'Condiciones', href: '/cgv' },
      { label: 'Privacidad', href: '/politique-confidentialite' },
    ],
    copyright: '© 2026 Whale Diving. Todos los derechos reservados.',
  },
};

export default es;