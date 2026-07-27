import { useLang } from '../../context/LangContext';
import styles from '../../styles/CetaceanBanner.module.css';

export default function CetaceanBanner() {
  const { t } = useLang();

  return (
    <section className={styles.banner} id="cetaces">
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>{t('cetacean.eyebrow')}</p>
        <h2 className={styles.title}>{t('cetacean.title')}</h2>
        <p className={styles.text}>{t('cetacean.text')}</p>
        <a href="https://wa.me/262693873336" target="_blank" rel="noopener noreferrer" className={styles.cta}>
          💬 {t('cetacean.cta')}
        </a>
      </div>
    </section>
  );
}