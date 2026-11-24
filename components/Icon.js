// Icônes du site : trait fin, couleur du texte, touche de rose (classe "a").
// On écrit toujours un emoji dans les textes ; il est remplacé ici par l'icône correspondante.
import styles from '../styles/Icon.module.css';

const P = {
  whale: '<path d="M12 12c-1-3.500-4-5.500-9-6 .5 4.500 3 7 7 7.500M12 12c1-3.500 4-5.500 9-6-.5 4.500-3 7-7 7.500M12 12v4.500"/><path class="a" d="M3 19.500c1.500-1.200 3-1.200 4.500 0s3 1.200 4.500 0 3-1.200 4.500 0 3 1.200 4.500 0"/>',
  mask: '<path d="M5 9h14a2 2 0 0 1 2 2v2a3 3 0 0 1-3 3h-2.200a2 2 0 0 1-1.700-1l-.6-1a1.700 1.700 0 0 0-3 0l-.6 1a2 2 0 0 1-1.700 1H6a3 3 0 0 1-3-3v-2a2 2 0 0 1 2-2z"/><path class="a" d="M19 9V5.500a1.500 1.500 0 0 1 3 0"/>',
  wave: '<path d="M2 8c1.700-1.500 3.300-1.500 5 0s3.300 1.500 5 0 3.300-1.500 5 0 3.300 1.500 5 0"/><path class="a" d="M2 13c1.700-1.500 3.300-1.500 5 0s3.300 1.500 5 0 3.300-1.500 5 0 3.300 1.500 5 0"/><path d="M2 18c1.700-1.500 3.300-1.500 5 0s3.300 1.500 5 0 3.300-1.500 5 0 3.300 1.500 5 0"/>',
  star: '<path class="a af" d="M12 3.500l2.600 5.300 5.900.9-4.300 4.100 1 5.800-5.200-2.700-5.200 2.700 1-5.800-4.300-4.100 5.900-.9z"/>',
  pin: '<path d="M12 21s-6.500-5.600-6.500-11a6.500 6.500 0 0 1 13 0c0 5.400-6.500 11-6.500 11z"/><circle class="a af" cx="12" cy="10" r="2"/>',
  phone: '<path d="M6.500 3.500h3l1.500 4-2 1.500a11 11 0 0 0 5 5l1.500-2 4 1.500v3a2 2 0 0 1-2.200 2A16 16 0 0 1 4.500 5.700a2 2 0 0 1 2-2.200z"/>',
  cap: '<path d="M12 4l10 5-10 5L2 9z"/><path d="M6 11.500V16c1.600 1.600 3.600 2.400 6 2.400s4.400-.8 6-2.400v-4.500"/><path class="a" d="M22 9v6"/>',
  fish: '<path d="M3 14c2.500-4.500 6.500-6.500 11-5.500 2.500.6 4.500 2.200 6 4.500-1.500 2.300-3.500 3.900-6 4.500-4.500 1-8.500-1-11-3.500z"/><path d="M3 14l-1.500-3M3 14l-1.500 3"/><circle class="a af" cx="15.500" cy="12.500" r="1"/>',
  group: '<circle cx="8.500" cy="8" r="3"/><path d="M2.500 19c.5-3.500 2.700-5.500 6-5.500s5.500 2 6 5.500"/><circle class="a" cx="17" cy="9" r="2.400"/><path class="a" d="M16 13.600c2.800 0 4.800 1.800 5.500 5"/>',
  shield: '<path d="M12 3l7.500 3v5.500c0 4.500-3 8-7.500 9.500-4.500-1.500-7.500-5-7.500-9.500V6z"/><path class="a" d="M8.800 12l2.300 2.300 4.200-4.500"/>',
  turtle: '<ellipse cx="11" cy="12.500" rx="6.500" ry="4.500"/><path d="M17.300 11.500c1.700-1.200 3.200-1.200 4.200.2-.8 1.400-2.300 1.800-4 1.200M7 16.200l-2 2.800M14.500 16.500l1.700 2.500M6.500 9l-2-2.500M14.500 8.500l1.500-2.500"/><path class="a" d="M8 12.500h6M11 9.800v5.400"/>',
  calendar: '<rect x="3.500" y="5" width="17" height="15.500" rx="2"/><path d="M3.500 10h17M8 3v4M16 3v4"/><circle class="a af" cx="12" cy="15" r="1.600"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path class="a" d="M15.500 8.500l-2 5-5 2 2-5z"/>',
  boat: '<path d="M3 14h18l-2.500 5h-13z"/><path d="M12 14V4l6 7h-6"/><path class="a" d="M2 21.500c1.700-1 3.300-1 5 0s3.300 1 5 0 3.300-1 5 0 3.300 1 5 0"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.700 2.700 4 5.700 4 9s-1.300 6.300-4 9c-2.700-2.700-4-5.700-4-9s1.300-6.300 4-9z"/><circle class="a af" cx="15.500" cy="14.500" r="1.300"/>',
  chat: '<path d="M4 5.500h16v10.500H10l-4.500 3.500V16H4z"/><path class="a" d="M8 9.500h8M8 12.500h5"/>',
  timer: '<circle cx="12" cy="13" r="8"/><path class="a" d="M12 8.500V13l3 2"/><path d="M9.500 2.500h5"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path class="a" d="M8 14c1 1.700 2.300 2.500 4 2.500s3-.8 4-2.500"/><path d="M9 9.500v.5M15 9.500v.5"/>',
  family: '<circle cx="7" cy="6.500" r="2.500"/><path d="M2.500 19v-4.500a4.500 4.500 0 0 1 9 0V19"/><circle class="a" cx="17" cy="11" r="2"/><path class="a" d="M13.500 19v-1.500a3.500 3.500 0 0 1 7 0V19"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle class="a af" cx="12" cy="12" r="1.500"/>',
  tag: '<path d="M3.500 12.500V4.500h8l9 9-8 8z"/><circle class="a af" cx="8" cy="9" r="1.500"/>',
  dolphin: '<path d="M2.500 15.500c2-6.500 8-9.500 14.500-7 1.500.6 3 1.600 4.500 3-2.500-.3-4.500.2-6 1.500-1.200 1-2 2.500-2.500 4.500-1-2.200-2.700-3.200-5-3-2 .1-3.800.5-5.500 1z"/><path d="M11 7.800l1.500-3.300 2.500 3.800"/><path class="a" d="M3 20.500c1.500-1 3-1 4.500 0s3 1 4.500 0 3-1 4.500 0 3 1 4.500 0"/>',
  heart: '<path class="a" d="M12 20s-7.500-4.600-7.500-10a4.200 4.200 0 0 1 7.500-2.500A4.200 4.200 0 0 1 19.500 10c0 5.400-7.500 10-7.500 10z"/>',
  hourglass: '<path d="M6 3h12M6 21h12M7 3c0 4 2.500 6 5 9-2.500 3-5 5-5 9M17 3c0 4-2.500 6-5 9 2.500 3 5 5 5 9"/><path class="a" d="M9.500 18.500h5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path class="a" d="M12 7v5H8"/>',
  forbidden: '<circle cx="12" cy="12" r="9"/><path class="a" d="M5.700 5.700l12.600 12.600"/>',
  island: '<path d="M3 19.500c3-2.500 15-2.500 18 0"/><path d="M12 18c0-4 .5-7 2-10"/><path class="a" d="M14 8c-2.500-2-5-2-7 0M14 8c2.500-2 5-1.500 6.500 1M14 8c-1-2.500-.5-4 1-5.500"/>',
  coral: '<path d="M12 21v-7M12 14c-3 0-5-2-5-5.500M12 14c3 0 5-2 5-5.500M7 11c-2 0-3.500-1-3.500-3M17 11c2 0 3.500-1 3.500-3"/><path class="a" d="M12 14V4M12 8l-2.500-2.500M12 9l2.500-2.500"/>',
  aid: '<rect x="3.500" y="5.500" width="17" height="14" rx="2.500"/><path class="a" d="M12 9v7M8.500 12.500h7"/>',
  plane: '<path d="M21 3L3 10.500l7 2.500 2.500 7z"/><path class="a" d="M10 13l5-4.500"/>',
  scale: '<path d="M12 4v16M7 20h10M5 7h14"/><path class="a" d="M5 7l-2.500 6a2.700 2.700 0 0 0 5 0zM19 7l-2.500 6a2.700 2.700 0 0 0 5 0z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path class="a" d="M3 7l9 6 9-6"/>',
  check: '<path class="a" d="M5 12.500l4.500 4.500L19 7.500"/>',
};

const MAP = {
  '🐋': 'whale', '🤿': 'mask', '🌊': 'wave', '⭐': 'star', '📋': 'cap', '📍': 'pin', '📞': 'phone',
  '🎓': 'cap', '🐠': 'fish', '👥': 'group', '🛡': 'shield', '🐢': 'turtle', '📅': 'calendar',
  '🧭': 'compass', '🚤': 'boat', '🌍': 'globe', '💬': 'chat', '⏱': 'timer', '😊': 'smile',
  '👶': 'family', '🎯': 'target', '💳': 'tag', '🐬': 'dolphin', '🤝': 'heart', '🗣': 'chat',
  '🍼': 'heart', '⏳': 'hourglass', '🕘': 'clock', '🚫': 'forbidden', '🏝': 'island', '🪸': 'coral',
  '⛑': 'aid', '✈': 'plane', '⚖': 'scale', '✉': 'mail', '✓': 'check',
};

const RE = new RegExp(`(${Object.keys(MAP).join('|')})\\uFE0F?`, 'gu');

export default function Icon({ name, e, className = '' }) {
  const key = name || MAP[(e || '').replace(/️/g, '')];
  const body = P[key];
  if (!body) return e ? <>{e}</> : null;
  return (
    <svg
      className={`${styles.icon} ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: body.replace(/(\d)00\b/g, '$1') }}
    />
  );
}

// Remplace les emojis d'un texte par les icônes : ico('📞 Appeler Paco')
export function ico(text) {
  if (typeof text !== 'string') return text;
  const parts = text.split(RE);
  if (parts.length === 1) return text;
  return parts.map((part, i) => (MAP[part] ? <Icon key={i} e={part} /> : part));
}
