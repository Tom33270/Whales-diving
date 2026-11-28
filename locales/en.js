const en = {
  nav: {
    activities: 'Activities',
    pricing: 'Pricing',
    cetaceans: 'Whales',
    reviews: 'Reviews',
    about: 'Paco',
    contact: 'Contact',
  },

  hero: {
    title: 'Dive into\nthe extraordinary',
    subtitle:
      'Dive centre in Saint-Gilles-les-Bains: first dives, courses and dolphin trips with a state-certified instructor.',
    cta_call: 'Call Paco',
    cta_instagram: 'Instagram',
    location: 'Saint-Gilles-les-Bains · Réunion Island',
  },

  stats: {
    rating: '5.0',
    rating_label: '100+ Google reviews',
    rating_count: '',
    experience: '20+ years',
    experience_label: 'of international experience',
    languages: '3 languages',
    languages_label: 'Français · English · Español',
    group: 'Small group',
    group_label: 'per trip, private guiding',
  },

  activities: {
    eyebrow: 'Our activities',
    title: 'Which adventure suits you?',
    subtitle: `Choose the experience that fits you. Try diving, meet cetaceans with an in-water encounter, take a course or explore the best dive sites of Réunion Island.`,
    items: [
      {
        slug: 'bapteme-initiation',
        emoji: '🤿',
        title: 'Discovery & First Dive',
        description: `Try scuba diving with two experiences tailored to what you want, open from age 8.`,
        price: 'From €90',
      },
      {
        slug: 'exploration',
        emoji: '🌊',
        title: 'Guided Exploration',
        description: `Explore the best dive sites of Réunion Island in small groups, guided by a state-certified instructor.`,
        price: 'From €65',
      },
      {
        slug: 'formations',
        emoji: '📋',
        title: 'Courses',
        description: `From Level 1 to Level 3, build your skills with internationally recognised ANMP courses. Nitrox and further courses on request.`,
        price: 'From €270',
      },
      {
        slug: 'cetaces',
        emoji: '🐋',
        title: 'Whale & Dolphin Trips',
        description: `Dolphins all year round and humpback whales from July to September. In-water encounters with respect for the animals.`,
        price: 'From €90',
      },
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Clear prices, all inclusive',
    subtitle: `All prices include VAT. Equipment provided depending on the activity.`,
    note1: '* For any other course or speciality - on request',
    note2: 'Prices valid in 2026 · Certification included in courses · Equipment provided',
    categories: [
      {
        title: 'Whale & Dolphin Trips',
        rows: [
          { label: '1 person · 3h · low whale season (max. 6 people)', price: '€90' },
          { label: '1 person · 3h · high whale season (Jul–Sep) · private trip possible', price: '€120' },
        ],
      },
      {
        title: 'Discovery & First Dive',
        rows: [
          { label: 'Discovery dive · 30 min · 6m max · Try scuba diving', price: '€90' },
          { label: 'First dive (initiation) · 60 min · 6m max · alternative to the discovery dive · counts as the first dive of your PE12 or Level 1', price: '€120' },
        ],
      },
      {
        title: 'Guided Exploration',
        rows: [
          { label: '1 dive', price: '€65' },
          { label: '3 dives', price: '€180' },
          { label: '6 dives', price: '€345' },
          { label: '10 dives', price: '€550' },
        ],
      },
      {
        title: 'Courses',
        rows: [
          { label: 'Supervised Diver 12m (PE12) · 3 dives · certification + theory included', price: '€270' },
          { label: 'Level 1 / Open Water 20m · 5 dives · certification + theory included', price: '€450' },
          { label: 'Level 2 / Advanced Open Water · 10 dives · certification + logbook included', price: '€800' },
          { label: 'Supervised Diver 40m (PE40) · 4 dives · certification + theory included', price: '€320' },
          { label: 'Autonomous Diver 20m (PA20) · 6 dives · certification + theory included', price: '€480' },
          { label: 'Nitrox · 2 dives · enriched air · certification + theory included', price: '€180' },
        ],
      },
    ],
  },

  cetacean: {
    eyebrow: 'Peak season · July to September',
    title: 'Whale season',
    text: `Every austral winter, humpback whales migrate from their Antarctic feeding grounds to the tropical waters of the Indian Ocean, especially around Réunion Island.



They come mainly to breed and give birth. Females that were fertilised the previous season also return to calve.



A stay of 3 to 4 months without feeding



During their stay in Réunion, which can last 3 to 4 months, humpback whales do not feed. They live on the reserves built up in their southern feeding grounds.



They feed in the cold, plankton-rich waters of Antarctica, mainly on krill and other zooplankton. Phytoplankton is the base of this food chain.



Calves are nursed by their mothers during their stay in the tropical waters.



After their stay in the warm waters of the Indian Ocean, the whales head back to their southern feeding grounds.`,
    text2: `CAP IN-WATER PROTOCOL:



Understand • Approach • Protect



At Whale Diving, we chose to put observation and respect for the animals first.



Before every in-water encounter, a briefing explains how cetaceans behave and the rules of approach. We follow the CAP protocol — Understand, Approach, Protect — to keep disturbance to a minimum and encourage respectful observation.



We offer an interaction. The animals decide.



We never chase whales or force an interaction. If they come to us on their own and want to stay close, we enjoy that exceptional moment.



If they swim away, we let them go on their way.



The encounter happens at their pace, never ours.`,
    cta: 'Book a trip',
  },

  reviews: {
    eyebrow: 'Google Reviews',
    title: '5.0 ⭐ · 100+ Google reviews',
    subtitle: 'What people who dived with Paco say.',
    see_all: 'See all 100+ Google reviews →',
    leave: 'Leave a Google review',
    items: [
      {
        name: 'Julie Pérez',
        text: "I did my PADI Level 1 with Paco and it was an incredible experience. Whale Diving is a perfect mix of kindness and professionalism: a relaxed spirit that puts you at ease and technical expertise that builds confidence. Highly recommended!",
      },
      {
        name: 'Clément Ogor',
        text: "Paco is a top instructor and guide! I hadn't dived in a while, he was a great teacher and put me at ease very quickly. 2 dives done and both were amazing! Great atmosphere and top-quality equipment.",
      },
      {
        name: 'Peter Adam',
        text: "I want to thank Paco for his patience and professionalism on this trip that will stay in our memories. Paco is very respectful towards the cetaceans and gives us lots of explanations. I recommend him 200%.",
      },
      {
        name: 'Antoine Guinot',
        badge: 'Local Guide',
        text: "A superb experience for an introduction to diving with Paco. Even with no experience you are well supervised and safe, and there are beautiful places to discover. Highly recommended without hesitation.",
      },
    ],
  },

  about: {
    eyebrow: 'The instructor',
    title: 'Paco',
    quote: `"True luxury today is calm, the quality of the experience and respect for the ocean."`,
    bio: `My name is François, but everyone calls me Paco. Born in Réunion Island, I am a state-certified E3 diving instructor (DEJEPS) and a PADI Master Scuba Diver Trainer (MSDT).

For 15 years I built an international career working in some of the most beautiful destinations in the world, including Mexico, the Philippines and Thailand. These experiences let me guide divers from all backgrounds and gain an international view of diving.

In the Philippines, I created my own dive centre. The project later became Ocean Farmers, an NGO dedicated to planting corals and restoring coral reefs. This adventure strengthened my conviction that diving must also help protect the marine environment.

In 2020, I chose to return to my native island to create Whale Diving, with a simple philosophy: offer authentic experiences, in small groups, far from mass tourism, where quality, safety and respect for the ocean always come first.

Whether it is a first dive, a cetacean trip, a course or an exploration dive, every outing is designed to suit your level, your wishes and your pace.`,
    credentials: [
      'DEJEPS Scuba Diving — State Diploma, Level E3',
      'PADI Master Scuba Diver Trainer (MSDT)',
      'SDI and TDI instructor',
      'ANMP instructor and trainer – internationally recognised certifications',
      '20+ years of experience — France, Philippines, international',
      'Founder of a dive centre in the Philippines, which became the NGO Ocean Farmers, specialised in coral reef restoration',
      'Coastal boat licence',
      'Up-to-date PSE1 first aid certificate',
      'Responsible cetacean observation training (CEDTM)',
      'Professional liability insurance',
    ],
    languages: 'Français · English · Español',
  },

  contact: {
    eyebrow: 'Book',
    title: 'Contact Paco',
    subtitle: 'No complicated form. One call or WhatsApp message, and we\'re off.',
    cta_call: 'Call Paco',
    cta_whatsapp: 'WhatsApp',
    cta_instagram: 'Instagram',
    address: 'Marina, Saint-Gilles-les-Bains · Réunion Island',
    email: 'whalediving.re@gmail.com',
  },

  footer: {
    review_cta: 'Leave a Google review',
    location: 'Saint-Gilles-les-Bains · Réunion Island',
    links: [
      { label: 'Legal notice', href: '/mentions-legales' },
      { label: 'Terms', href: '/cgv' },
      { label: 'Privacy policy', href: '/politique-confidentialite' },
    ],
    copyright: '© 2026 Whale Diving. All rights reserved.',
  },
};

export default en;
