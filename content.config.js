// ============================================================
//  WHALE DIVING — Fichier de configuration du contenu
//  Modifie ce fichier pour mettre à jour le site.
//  Envoie-le ensuite à Tom pour mise en ligne.
// ============================================================

const content = {

  // ----------------------------------------------------------
  //  CONTACT & RÉSEAUX SOCIAUX
  // ----------------------------------------------------------
  contact: {
    telephone:       '+262 6 93 87 33 36',
    telephone_url:   'tel:+262693873336',
    whatsapp_url:    'https://wa.me/262693873336',
    email:           'whalediving.re@gmail.com',
    instagram_url:   'https://www.instagram.com/whale.diving/',
    instagram_handle: '@whale.diving',
    adresse:         'Saint-Gilles-les-Bains, La Réunion',
  },

  // ----------------------------------------------------------
  //  STATISTIQUES (bandeau sous le hero)
  // ----------------------------------------------------------
  stats: {
    note_google:   '5.0',
    nombre_avis:   '+80',
    experience:    '+20 ans',
    langues:       '3 langues',
    groupe_max:    '6 pers. max',
  },

  // ----------------------------------------------------------
  //  TARIFS 2026 (en euros, sans le symbole €)
  // ----------------------------------------------------------
  tarifs: {
    // Cétacés
    cetaces_hors_saison:  90,
    cetaces_haute_saison: 120,

    // Baptême & Initiation
    bapteme:    90,
    initiation: 110,

    // Exploration encadrée
    exploration_1:  60,
    exploration_3:  165,
    exploration_6:  315,
    exploration_10: 500,

    // Formations
    niveau_1:  450,
    niveau_2:  720,
    pe40:      320,
    pa20:      450,
    pe12:      260,
    nitrox:    180,
  },

  // ----------------------------------------------------------
  //  AVIS GOOGLE (4 avis affichés sur le site)
  //  Tu peux modifier le texte ou changer les noms.
  // ----------------------------------------------------------
  avis: [
    {
      nom:   'Julie Pérez',
      badge: '',
      texte: "J'ai passé mon PADI niveau 1 avec Paco et ce fut une expérience incroyable. Whale Diving c'est un parfait mix de gentillesse et de professionnalisme, un esprit détente qui met à l'aise et une expertise technique qui met en confiance. Je recommande à fond !",
    },
    {
      nom:   'Clément Ogor',
      badge: '',
      texte: "Paco est un moniteur/guide au top ! Je n'avais pas plongé depuis quelques temps, il a été pédagogue et m'a mis en confiance très rapidement. 2 plongées effectuées et les 2 étaient top ! Superbe ambiance et matériel au top. À refaire dès un retour à La Réunion.",
    },
    {
      nom:   'Peter Adam',
      badge: '',
      texte: "Je tiens à remercier Paco pour la patience et votre professionnalisme pour cette sortie qui restera gravée dans nos mémoires. Paco est très respectueux envers les cétacés et nous apporte beaucoup d'explications. Je recommande à 200%.",
    },
    {
      nom:   'Antoine Guinot',
      badge: 'Local Guide',
      texte: "Superbe expérience pour une initiation à la plongée avec Paco. Même sans expérience on est bien encadrés, en sécurité, et il y a de très beaux endroits à découvrir. Je recommande sans hésiter.",
    },
  ],

  // ----------------------------------------------------------
  //  À PROPOS — PACO
  //  Modifie la bio ou les diplômes si besoin.
  // ----------------------------------------------------------
  paco: {
    prenom:   'François',
    surnom:   'Paco',
    citation: "« Le vrai luxe aujourd'hui, c'est le calme et la qualité de l'expérience. »",
    bio: [
      `Je m'appelle François, mais tout le monde m'appelle Paco. Originaire de La Réunion, je suis moniteur de plongée diplômé d'État (DEJEPS) et PADI Master Scuba Diver Trainer (MSDT).

Pendant 15 ans, j'ai construit une carrière internationale en exerçant dans plusieurs destinations parmi les plus belles au monde, notamment au Mexique, aux Philippines et en Thaïlande. Ces expériences m'ont permis d'accompagner des plongeurs de tous horizons et d'acquérir une vision internationale de la plongée.

Aux Philippines, j'ai créé mon propre centre de plongée. Ce projet a ensuite évolué pour devenir Ocean Farmers, une ONG dédiée à la plantation de coraux et à la réhabilitation des récifs coralliens. Cette aventure a renforcé ma conviction que la plongée doit aussi contribuer à la protection du milieu marin.

Il y a 5 ans, j'ai choisi de revenir sur mon île natale pour créer Whale Diving, avec une philosophie simple : proposer des expériences authentiques, en petits groupes, loin du tourisme de masse, où la qualité, la sécurité et le respect de l'océan sont toujours prioritaires.

Que ce soit pour un baptême, une sortie cétacés, une formation ou une plongée d'exploration, chaque sortie est pensée pour s'adapter à votre niveau, à vos envies et à votre rythme.`,
    ],
    diplomes: [
      "DEJEPS Plongée sous-marine — Diplôme d'État niveau 5",
      "Certifié ANMP et SDI/TDI (reconnaissance internationale)",
      "Plus de 20 ans d'expérience — France, Philippines, international",
      "Permis bateau côtier et hauturier",
      "PSE1 secouriste à jour (2026)",
      "Attestation d'observation des cétacés — CEDTM",
      "Assurance RC pro Aqua Med / MHW (5 M€ de couverture)",
    ],
    langues: 'Français · English · Español',
  },

  // ----------------------------------------------------------
  //  SAISON CÉTACÉS (bandeau saisonnier)
  // ----------------------------------------------------------
  saison_cetaces: {
    mois_debut: 'juillet',
    mois_fin:   'septembre',
  },

};

export default content;