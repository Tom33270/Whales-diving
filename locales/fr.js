const fr = {
  nav: {
    activities: 'Activités',
    pricing: 'Tarifs',
    cetaceans: 'Cétacés',
    reviews: 'Avis',
    about: 'Paco',
    contact: 'Contact',
  },

  hero: {
    tagline: 'Wild Well Dive',
    title: 'Plongez dans\nl\'extraordinaire',
    subtitle:
      `Vivez des expériences uniques : découverte de la plongée, sorties cétacés avec mise à l'eau et formations, encadrées par un moniteur diplômé d'État passionné`,
    cta_call: 'Appeler Paco',
    cta_instagram: 'Instagram',
    location: 'Saint-Gilles-les-Bains · La Réunion',
  },

  stats: {
    rating: '5.0',
    rating_label: 'avis Google',
    rating_count: '73 avis vérifiés',
    experience: '+20 ans',
    experience_label: "d'expérience internationale",
    languages: '3 langues',
    languages_label: 'Français · English · Español',
    group: '6 pers. max',
    group_label: 'par sortie, encadrement privé',
  },

  activities: {
    eyebrow: 'Nos activités',
    title: 'Quelle aventure vous ressemble ?',
    subtitle: `Choisissez l'expérience qui vous correspond. Découvrez la plongée, partez à la rencontre des cétacés lors d'une mise à l'eau, formez-vous ou explorez les plus beaux sites de plongée de La Réunion.`,
    items: [
      {
        slug: 'bapteme-initiation',
        emoji: '🤿',
        title: 'Baptême & Initiation',
        description: `Découvrez la plongée grâce à deux expériences adaptées à vos envies, accessibles dès 8 ans.`,
        price: 'À partir de 90€',
      },
      {
        slug: 'exploration',
        emoji: '🌊',
        title: 'Exploration encadrée',
        description: `Explorez les plus beaux sites de plongée de La Réunion, en petits groupes et encadré par un moniteur diplômé d'État.`,
        price: 'À partir de 60€',
      },
      {
        slug: 'formations',
        emoji: '📋',
        title: 'Formations',
        description: ` Du Niveau 1 au Niveau 3, développez vos compétences avec des formations ANMP reconnues à l'international. Nitrox et formations complémentaires sur demande.`,
        price: 'À partir de 260€',
      },
      {
        slug: 'cetaces',
        emoji: '🐋',
        title: 'Sorties cétacés',
        description: `Dauphins toute l'année et Baleines de juillet à septembre Sorties avec mise à l'eau dans le respect des animaux.`,
        price: 'À partir de 90€',
      },
    ],
  },

  pricing: {
    eyebrow: 'Tarifs 2026',
    title: 'Des prix clairs, tout compris',
    subtitle: 'Tous les prix sont TTC. Aucun frais caché.',
    note: 'Tarifs valables en 2026 · Certification incluse dans les formations · Matériel fourni',
    categories: [
      {
        title: '🐋 Sortie Cétacés',
        rows: [
          { label: '1 personne · 3h · hors saison baleine (6 pers. max)', price: '90€' },
          { label: '1 personne · 3h · haute saison baleine (juil.–sept.) · sortie privée possible', price: '120€' },
        ],
      },
      {
        title: '🤿 Baptême & Initiation',
        rows: [
          { label: 'Baptême · 30 min · 6m max · Découverte de la plongée', price: '90€' },
          { label: "Initiation · 60 min · 6m max · Valide la 1ère plongée du N1 · alternative au baptême", price: '110€' },
        ],
      },
      {
        title: '🌊 Exploration encadrée',
        rows: [
          { label: '1 plongée', price: '60€' },
          { label: '3 plongées', price: '165€' },
          { label: '6 plongées', price: '315€' },
          { label: '10 plongées', price: '500€' },
        ],
      },
      {
        title: '📋 Formations',
        rows: [
          { label: 'Niveau 1 / Open Water 20m · 5 plongées · certification incluse', price: '450€' },
          { label: 'Niveau 2 / Advanced Open Water · 10 plongées · certification incluse', price: '720€' },
          { label: 'Plongeur Encadré 40m (PE40) · 4 plongées', price: '320€' },
          { label: 'Plongeur Autonome 20m (PA20) · 6 plongées', price: '450€' },
          { label: 'Plongeur Encadré 12m · 3 plongées', price: '260€' },
          { label: 'Nitrox Simple · 2 plongées · air enrichi', price: '180€' },
        ],
      },
    ],
  },

  cetacean: {
    eyebrow: 'Haute saison · Juillet à Septembre',
    title: 'La saison des baleines',
    text:
      "Chaque été austral, les baleines à bosse font escale à La Réunion pour mettre bas et se reproduire. Paco vous emmène à leur rencontre dans le respect total du protocole CAP — Comprendre, Approcher, Protéger.",
    cta: 'Réserver une sortie',
  },

  reviews: {
    eyebrow: 'Avis Google',
    title: '5.0 ⭐ · 73 avis vérifiés',
    subtitle: 'Ce que disent ceux qui ont plongé avec Paco.',
    items: [
      {
        name: 'Julie Pérez',
        text: "J'ai passé mon PADI niveau 1 avec Paco et ce fut une expérience incroyable. Whale Diving c'est un parfait mix de gentillesse et de professionnalisme, un esprit détente qui met à l'aise et une expertise technique qui met en confiance. Je recommande à fond !",
      },
      {
        name: 'Clément Ogor',
        text: "Paco est un moniteur/guide au top ! Je n'avais pas plongé depuis quelques temps, il a été pédagogue et m'a mis en confiance très rapidement. 2 plongées effectuées et les 2 étaient top ! Superbe ambiance et matériel au top.",
      },
      {
        name: 'Peter Adam',
        text: "Je tiens à remercier Paco pour la patience et votre professionnalisme pour cette sortie qui restera gravée dans nos mémoires. Paco est très respectueux envers les cétacés et nous apporte beaucoup d'explications. Je recommande à 200%.",
      },
      {
        name: 'Antoine Guinot',
        badge: 'Local Guide',
        text: "Superbe expérience pour une initiation à la plongée avec Paco. Même sans expérience on est bien encadrés, en sécurité, et il y a de très beaux endroits à découvrir. Je recommande sans hésiter.",
      },
    ],
  },

  about: {
    eyebrow: 'Le moniteur',
    title: 'Paco',
    quote: '« Le vrai luxe aujourd\'hui, c\'est le calme et la qualité de l\'expérience. »',
    bio: "Je m'appelle François, mais tout le monde m'appelle Paco. Moniteur de plongée diplômé DEJEPS, certifié ANMP et SDI/TDI, je vis et travaille à La Réunion depuis plus de 20 ans.\n\nJ'ai fondé Whale Diving avec une idée simple : proposer une plongée privée, personnalisée et vraiment qualitative — pour ceux qui ne veulent pas d'une expérience standardisée.\n\nIci, pas de groupes surchargés. Pas de plongée à la chaîne. Chaque sortie est construite autour de vous, de votre niveau, de vos envies et du respect de l'océan.",
    credentials: [
      'DEJEPS Plongée sous-marine — Diplôme d\'État niveau 5',
      'Certifié ANMP et SDI/TDI (reconnaissance internationale)',
      'Plus de 20 ans d\'expérience — France, Philippines, international',
      'Permis bateau côtier et hauturier',
      'PSE1 secouriste à jour (2026)',
      'Attestation d\'observation des cétacés — CEDTM',
      'Assurance RC pro Aqua Med / MHW (5 M€ de couverture)',
    ],
    languages: 'Français · English · Español',
  },

  contact: {
    eyebrow: 'Réserver',
    title: 'Contactez Paco',
    subtitle: 'Pas de formulaire compliqué. Un appel ou un message WhatsApp, et c\'est parti.',
    cta_call: 'Appeler Paco',
    cta_whatsapp: 'WhatsApp',
    cta_instagram: 'Instagram',
    address: 'Saint-Gilles-les-Bains · La Réunion',
    email: 'whalediving.re@gmail.com',
  },

  footer: {
    tagline: 'Wild Well Dive',
    location: 'Saint-Gilles-les-Bains · La Réunion',
    links: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'CGV', href: '/cgv' },
      { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
    ],
    copyright: '© 2026 Whale Diving. Tous droits réservés.',
  },
};

export default fr;