import { useLang } from '../../context/LangContext';
import styles from '../../styles/Stats.module.css';

export default function Stats() {
  const { t } = useLang();

  const items = [
    {
      value: t('stats.rating'),
      label: t('stats.rating_label'),
      sub: t('stats.rating_count'),
      icon: '⭐',
    },
    {
      value: t('stats.experience'),
      label: t('stats.experience_label'),
      icon: '🌊',
    },
    {
      value: t('stats.languages'),
      label: t('stats.languages_label'),
      icon: '🗣️',
    },
    {
      value: t('stats.group'),
      label: t('stats.group_label'),
      icon: '🤿',
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