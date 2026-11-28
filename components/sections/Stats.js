import { useLang } from '../../context/LangContext';
import styles from '../../styles/Stats.module.css';

export default function Stats() {
  const { t } = useLang();

  const W = 'rgba(255,255,255,0.92)';
  const PINK = '#EE2E60';
  const common = { width: 46, height: 46, viewBox: '0 0 48 48', fill: 'none', 'aria-hidden': true };

  const items = [
    {
      href: 'https://g.page/r/CdSyR55qdAJUEBE',
      value: t('stats.rating'),
      label: t('stats.rating_label'),
      sub: t('stats.rating_count'),
      // « G » Google officiel, conservé
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
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
      // Globe, avec un petit point rose sur La Réunion
      icon: (
        <svg {...common}>
          <circle cx="24" cy="24" r="15" stroke={W} strokeWidth="1.4" />
          <ellipse cx="24" cy="24" rx="6.5" ry="15" stroke={W} strokeWidth="1.2" />
          <path d="M9 24h30M11 17h26M11 31h26" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
          <circle cx="33" cy="15" r="3" stroke={PINK} strokeWidth="1.4" fill="rgba(238,46,96,0.25)" />
        </svg>
      ),
    },
    {
      value: t('stats.languages'),
      label: t('stats.languages_label'),
      // Drapeaux FR / UK / ES en petits ronds aux couleurs adoucies
      icon: (
        <svg {...common}>
          <defs>
            <clipPath id="wdFlagFr"><circle cx="10.5" cy="24" r="6" /></clipPath>
            <clipPath id="wdFlagUk"><circle cx="24" cy="24" r="6" /></clipPath>
            <clipPath id="wdFlagEs"><circle cx="37.5" cy="24" r="6" /></clipPath>
          </defs>
          <g clipPath="url(#wdFlagFr)">
            <rect x="4.5" y="18" width="4" height="12" fill="#5B79C4" />
            <rect x="8.5" y="18" width="4" height="12" fill="#F2F2F2" />
            <rect x="12.5" y="18" width="4" height="12" fill="#E2677A" />
          </g>
          <g clipPath="url(#wdFlagUk)">
            <rect x="18" y="18" width="12" height="12" fill="#3F5A9E" />
            <path d="M18 18l12 12M30 18L18 30" stroke="#F2F2F2" strokeWidth="2.4" />
            <path d="M18 18l12 12M30 18L18 30" stroke="#E2677A" strokeWidth="1" />
            <path d="M24 18v12M18 24h12" stroke="#F2F2F2" strokeWidth="3.6" />
            <path d="M24 18v12M18 24h12" stroke="#E2677A" strokeWidth="2" />
          </g>
          <g clipPath="url(#wdFlagEs)">
            <rect x="31.5" y="18" width="12" height="3.2" fill="#D9606B" />
            <rect x="31.5" y="21.2" width="12" height="5.6" fill="#EBC567" />
            <rect x="31.5" y="26.8" width="12" height="3.2" fill="#D9606B" />
          </g>
          <circle cx="10.5" cy="24" r="6" stroke={W} strokeWidth="0.8" opacity="0.7" />
          <circle cx="24" cy="24" r="6" stroke={W} strokeWidth="0.8" opacity="0.7" />
          <circle cx="37.5" cy="24" r="6" stroke={W} strokeWidth="0.8" opacity="0.7" />
        </svg>
      ),
    },
    {
      value: t('stats.group'),
      label: t('stats.group_label'),
      // Deux silhouettes sur l'eau
      icon: (
        <svg {...common}>
          <circle cx="18" cy="16" r="4" stroke={W} strokeWidth="1.4" />
          <path d="M10 31c0-5 3.6-8 8-8s8 3 8 8" stroke={W} strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="31" cy="18" r="3.4" stroke={W} strokeWidth="1.4" />
          <path d="M26 31c.3-4.2 2.6-6.6 5.6-6.6 3.6 0 6.4 2.8 6.4 6.6" stroke={W} strokeWidth="1.4" strokeLinecap="round" />
          <path d="M6 36c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0 4 1.6 6 0 4-1.6 6 0 4 1.6 6 0" stroke={PINK} strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="40" cy="12" r="1.2" stroke={PINK} strokeWidth="1" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.stats} id="stats">
      <div className={styles.inner}>
        {items.map((item, i) => {
          const inner = (
            <>
              <span className={styles.icon}>{item.icon}</span>
              <strong className={styles.value}>{item.value}</strong>
              <span className={styles.label}>{item.label}</span>
              {item.sub && <span className={styles.sub}>{item.sub}</span>}
            </>
          );
          return item.href ? (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.stat} ${styles.stat__link}`}
            >
              {inner}
            </a>
          ) : (
            <div key={i} className={styles.stat}>{inner}</div>
          );
        })}
      </div>
    </section>
  );
}