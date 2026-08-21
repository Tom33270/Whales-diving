import { useLang } from '../../context/LangContext';
import styles from '../../styles/Stats.module.css';

export default function Stats() {
  const { t } = useLang();

  const items = [
    {
      value: t('stats.rating'),
      label: t('stats.rating_label'),
      sub: t('stats.rating_count'),
      icon: (
      <svg width="28" height="28" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
    },
    {
      value: t('stats.experience'),
      label: t('stats.experience_label'),
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
  {/* Océan / vagues */}
  <path d="M2 17 Q5 14 8 17 Q11 20 14 17 Q17 14 22 17" stroke="#00B5B5" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  <path d="M2 20 Q5 17 8 20 Q11 23 14 20 Q17 17 22 20" stroke="#00B5B5" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>

  {/* Soleil */}
  <circle cx="12" cy="8" r="3" fill="#C8D400"/>
  <path d="M12 2 L12 4" stroke="#C8D400" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M12 12 L12 14" stroke="#C8D400" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M6 8 L8 8" stroke="#C8D400" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M16 8 L18 8" stroke="#C8D400" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M7.8 3.8 L9.2 5.2" stroke="#C8D400" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M14.8 10.8 L16.2 12.2" stroke="#C8D400" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M16.2 3.8 L14.8 5.2" stroke="#C8D400" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M9.2 10.8 L7.8 12.2" stroke="#C8D400" strokeWidth="1.5" strokeLinecap="round"/>

  {/* Bateau */}
  <path d="M8 17 L10 13 L14 13 L16 17" fill="#0D2137" opacity="0.8"/>
  <path d="M12 13 L12 10 L15 12" fill="#00B5B5" opacity="0.7"/>
</svg>,
    },
    {
      value: t('stats.languages'),
      label: t('stats.languages_label'),
      icon: <svg width="52" height="28" viewBox="0 0 52 28" fill="none">
  {/* Drapeau France */}
  <rect x="0" y="4" width="14" height="20" rx="2" fill="#002395"/>
  <rect x="4.5" y="4" width="5" height="20" fill="#EEEEEE"/>
  <rect x="9.5" y="4" width="4.5" height="20" rx="0" fill="#ED2939"/>
  <rect x="12" y="4" width="2" height="20" rx="1" fill="#ED2939"/>

  {/* Drapeau UK */}
  <rect x="19" y="4" width="14" height="20" rx="2" fill="#012169"/>
  <path d="M19 4 L33 24 M33 4 L19 24" stroke="white" strokeWidth="3"/>
  <path d="M26 4 L26 24 M19 14 L33 14" stroke="white" strokeWidth="4"/>
  <path d="M26 4 L26 24 M19 14 L33 14" stroke="#C8102E" strokeWidth="2.5"/>
  <path d="M19 4 L33 24 M33 4 L19 24" stroke="#C8102E" strokeWidth="1.5"/>

  {/* Drapeau Espagne */}
  <rect x="38" y="4" width="14" height="20" rx="2" fill="#AA151B"/>
  <rect x="38" y="9" width="14" height="10" fill="#F1BF00"/>
</svg>,
    },
    {
      value: t('stats.group'),
      label: t('stats.group_label'),
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
  {/* Masque */}
  <rect x="3" y="9" width="18" height="9" rx="4" fill="#00B5B5" opacity="0.9"/>
  <rect x="5" y="11" width="6" height="5" rx="2" fill="#0D2137"/>
  <rect x="13" y="11" width="6" height="5" rx="2" fill="#0D2137"/>
  <rect x="11" y="12.5" width="2" height="2" rx="0.5" fill="#00B5B5"/>
  {/* Sangle */}
  <path d="M3 13 Q1 13 1 11 Q1 8 3 9" stroke="#00B5B5" strokeWidth="1.5" fill="none"/>
  <path d="M21 13 Q23 13 23 11 Q23 8 21 9" stroke="#00B5B5" strokeWidth="1.5" fill="none"/>
  {/* Tuba */}
  <path d="M17 9 Q17 5 15 5 Q13 5 13 7" stroke="#C8D400" strokeWidth="2" fill="none" strokeLinecap="round"/>
  <circle cx="13" cy="7" r="1.5" fill="#C8D400"/>
  {/* Bulles */}
  <circle cx="8" cy="6" r="1" fill="#00B5B5" opacity="0.5"/>
  <circle cx="11" cy="4" r="0.7" fill="#00B5B5" opacity="0.4"/>
  <circle cx="6" cy="4" r="0.5" fill="#00B5B5" opacity="0.3"/>
</svg>,
    },
  ];

  return (
    <section className={styles.stats} id="stats">
      <div className={styles.inner}>
        {items.map((item, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.icon}>{item.icon}</span>
            <strong className={styles.value}>{item.value}</strong>
            <span className={styles.label}>{item.label}</span>
            {item.sub && <span className={styles.sub}>{item.sub}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}