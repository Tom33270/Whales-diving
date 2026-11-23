const es = {
  nav: {
    activities: 'Actividades',
    pricing: 'Precios',
    cetaceans: 'Cetáceos',
    reviews: 'Opiniones',
    about: 'Paco',
    contact: 'Contacto',
  },

  hero: {
    title: 'Sumérgete en\nlo extraordinario',
    subtitle:
      'Centro de buceo en Saint-Gilles-les-Bains: bautismos, formaciones y salidas con delfines con un monitor titulado de Estado.',
    cta_call: 'Llamar a Paco',
    cta_instagram: 'Instagram',
    location: 'Saint-Gilles-les-Bains · Isla de la Reunión',
  },

  stats: {
    rating: '5,0',
    rating_label: '+100 opiniones Google',
    rating_count: '',
    experience: '+20 años',
    experience_label: 'de experiencia internacional',
    languages: '3 idiomas',
    languages_label: 'Français · English · Español',
    group: 'Grupo pequeño',
    group_label: 'por salida, atención privada',
  },

  activities: {
    eyebrow: 'Nuestras actividades',
    title: '¿Qué aventura va contigo?',
    subtitle: `Elige la experiencia que te corresponde. Descubre el buceo, sal al encuentro de los cetáceos con una inmersión, fórmate o explora los mejores sitios de buceo de La Reunión.`,
    items: [
      {
        slug: 'bapteme-initiation',
        emoji: '🤿',
        title: 'Bautismo e Iniciación',
        description: `Descubre el buceo con dos experiencias adaptadas a tus ganas, desde los 8 años.`,
        price: 'Desde 90€',
      },
      {
        slug: 'exploration',
        emoji: '🌊',
        title: 'Exploración guiada',
        description: `Explora los mejores sitios de buceo de La Reunión, en grupos pequeños y con un monitor titulado de Estado.`,
        price: 'Desde 65€',
      },
      {
        slug: 'formations',
        emoji: '📋',
        title: 'Formaciones',
        description: `Del Nivel 1 al Nivel 3, desarrolla tus competencias con formaciones ANMP reconocidas internacionalmente. Nitrox y otras formaciones bajo petición.`,
        price: 'Desde 270€',
      },
      {
        slug: 'cetaces',
        emoji: '🐋',
        title: 'Salidas con cetáceos',
        description: `Delfines todo el año y ballenas de julio a septiembre. Salidas con inmersión, respetando a los animales.`,
        price: 'Desde 90€',
      },
    ],
  },

  pricing: {
    eyebrow: 'Precios',
    title: 'Precios claros, todo incluido',
    subtitle: `Todos los precios incluyen impuestos. Material incluido según la actividad.`,
    note1: '* Para cualquier otra formación o especialidad - bajo petición',
    note2: 'Precios válidos en 2026 · Certificación incluida en las formaciones · Material incluido',
    categories: [
      {
        title: 'Salidas con cetáceos',
        rows: [
          { label: '1 persona · 3h · temporada baja de ballenas (máx. 6 personas)', price: '90€' },
          { label: '1 persona · 3h · temporada alta de ballenas (jul.–sept.) · salida privada posible', price: '120€' },
        ],
      },
      {
        title: 'Bautismo e Iniciación',
        rows: [
          { label: 'Bautismo · 30 min · 6m máx. · Descubrimiento del buceo', price: '90€' },
          { label: 'Iniciación · 60 min · 6m máx. · alternativa al bautismo · cuenta como la 1.ª inmersión de tu PE12 o de tu Nivel 1', price: '120€' },
        ],
      },
      {
        title: 'Exploración guiada',
        rows: [
          { label: '1 inmersión', price: '65€' },
          { label: '3 inmersiones', price: '180€' },
          { label: '6 inmersiones', price: '345€' },
          { label: '10 inmersiones', price: '550€' },
        ],
      },
      {
        title: 'Formaciones',
        rows: [
          { label: 'Buceador Guiado 12m (PE12) · 3 inmersiones · certificación + clases teóricas incluidas', price: '270€' },
          { label: 'Nivel 1 / Open Water 20m · 5 inmersiones · certificación + clases teóricas incluidas', price: '450€' },
          { label: 'Nivel 2 / Advanced Open Water · 10 inmersiones · certificación + cuaderno de buceo incluidos', price: '800€' },
          { label: 'Buceador Guiado 40m (PE40) · 4 inmersiones · certificación + clases teóricas incluidas', price: '320€' },
          { label: 'Buceador Autónomo 20m (PA20) · 6 inmersiones · certificación + clases teóricas incluidas', price: '480€' },
          { label: 'Nitrox · 2 inmersiones · aire enriquecido · certificación + clases teóricas incluidas', price: '180€' },
        ],
      },
    ],
  },

  cetacean: {
    eyebrow: 'Temporada alta · Julio a Septiembre',
    title: 'La temporada de las ballenas',
    text: `Cada invierno austral, las ballenas jorobadas migran desde sus zonas de alimentación de la Antártida hacia las aguas tropicales del océano Índico, especialmente alrededor de La Reunión.



Vienen sobre todo para reproducirse y dar a luz. Las hembras fecundadas la temporada anterior también regresan para tener a su ballenato.



Una estancia de 3 a 4 meses sin alimentarse



Durante su estancia en La Reunión, que puede durar de 3 a 4 meses, las ballenas jorobadas no se alimentan. Viven de las reservas acumuladas en sus zonas de alimentación australes.



Se alimentan en las aguas frías de la Antártida, ricas en plancton, sobre todo krill y otros organismos del zooplancton. El fitoplancton es la base de esta cadena alimentaria.



Los ballenatos son amamantados por su madre durante su estancia en las aguas tropicales.



Tras su estancia en las aguas cálidas del océano Índico, las ballenas regresan a sus zonas de alimentación australes.`,
    text2: `PROTOCOLO DE INMERSIÓN CAP:



Comprender • Acercarse • Proteger



En Whale Diving hemos elegido dar prioridad a la observación y al respeto de los animales.



Antes de cada inmersión, un briefing explica el comportamiento de los cetáceos y las reglas de aproximación. Aplicamos el protocolo CAP — Comprender, Acercarse, Proteger — para limitar al máximo la molestia a los animales y favorecer una observación respetuosa.



Proponemos una interacción. Los animales deciden.



No perseguimos a las ballenas ni provocamos una interacción. Si se acercan por sí solas y quieren quedarse cerca, disfrutamos de ese momento excepcional.



Si se alejan, las dejamos seguir su camino.



El encuentro se hace a su ritmo, nunca al nuestro.`,
    cta: 'Reservar una salida',
  },

  reviews: {
    eyebrow: 'Opiniones Google',
    title: '5,0 ⭐ · +100 opiniones Google',
    subtitle: 'Lo que dicen quienes han buceado con Paco.',
    see_all: 'Ver las +100 opiniones de Google →',
    leave: 'Dejar una opinión en Google',
    items: [
      {
        name: 'Julie Pérez',
        text: "Hice mi PADI nivel 1 con Paco y fue una experiencia increíble. Whale Diving es una mezcla perfecta de amabilidad y profesionalidad: un ambiente relajado que te tranquiliza y una experiencia técnica que da confianza. ¡Lo recomiendo totalmente!",
      },
      {
        name: 'Clément Ogor',
        text: "¡Paco es un monitor y guía de primera! Llevaba tiempo sin bucear, fue pedagógico y me dio confianza enseguida. 2 inmersiones y las 2 geniales. Muy buen ambiente y material de primera.",
      },
      {
        name: 'Peter Adam',
        text: "Quiero dar las gracias a Paco por su paciencia y profesionalidad en esta salida que quedará grabada en nuestra memoria. Paco es muy respetuoso con los cetáceos y nos da muchas explicaciones. Lo recomiendo al 200%.",
      },
      {
        name: 'Antoine Guinot',
        badge: 'Local Guide',
        text: "Una experiencia genial para iniciarse en el buceo con Paco. Incluso sin experiencia estás bien acompañado y seguro, y hay lugares preciosos por descubrir. Lo recomiendo sin dudarlo.",
      },
    ],
  },

  about: {
    eyebrow: 'El monitor',
    title: 'Paco',
    quote: `«El verdadero lujo hoy es la calma, la calidad de la experiencia y el respeto por el océano.»`,
    bio: `Me llamo François, pero todo el mundo me llama Paco. Originario de La Reunión, soy monitor de buceo titulado de Estado E3 (DEJEPS) y PADI Master Scuba Diver Trainer (MSDT).

Durante 15 años construí una carrera internacional trabajando en algunos de los destinos más bonitos del mundo, entre ellos México, Filipinas y Tailandia. Estas experiencias me permitieron acompañar a buceadores de todo tipo y adquirir una visión internacional del buceo.

En Filipinas creé mi propio centro de buceo. Ese proyecto evolucionó hasta convertirse en Ocean Farmers, una ONG dedicada a plantar corales y rehabilitar los arrecifes de coral. Esta aventura reforzó mi convicción de que el buceo también debe contribuir a la protección del medio marino.

En 2020 decidí volver a mi isla natal para crear Whale Diving, con una filosofía sencilla: ofrecer experiencias auténticas, en grupos pequeños, lejos del turismo de masas, donde la calidad, la seguridad y el respeto por el océano son siempre la prioridad.

Ya sea un bautismo, una salida con cetáceos, una formación o una inmersión de exploración, cada salida está pensada para adaptarse a tu nivel, a tus ganas y a tu ritmo.`,
    credentials: [
      'DEJEPS Buceo — Diploma de Estado E3',
      'PADI Master Scuba Diver Trainer (MSDT)',
      'Monitor y formador ANMP – certificaciones reconocidas internacionalmente',
      'Más de 20 años de experiencia — Francia, Filipinas, internacional',
      'Fundador de un centro de buceo en Filipinas, convertido en la ONG Ocean Farmers, especializada en la restauración de arrecifes de coral',
      'Licencia de embarcación costera',
      'Socorrismo PSE1 al día',
      'Formación en observación responsable de cetáceos (CEDTM)',
      'Seguro de responsabilidad civil profesional',
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
    address: 'Puerto deportivo, Saint-Gilles-les-Bains · Isla de la Reunión',
    email: 'whalediving.re@gmail.com',
  },

  footer: {
    review_cta: 'Dejar una opinión en Google',
    location: 'Saint-Gilles-les-Bains · Isla de la Reunión',
    links: [
      { label: 'Aviso legal', href: '/mentions-legales' },
      { label: 'CGV', href: '/cgv' },
      { label: 'Política de privacidad', href: '/politique-confidentialite' },
    ],
    copyright: '© 2026 Whale Diving. Todos los derechos reservados.',
  },
};

export default es;
