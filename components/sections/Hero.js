import { useLang } from '../../context/LangContext';
import styles from '../../styles/Hero.module.css';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay} />
      <div className={styles.bg} />
      <div className={styles.content}>
        <p className={styles.tagline}>{t('hero.tagline')}</p>
        <h1 className={styles.title}>
          {t('hero.title').split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h1>
        <p className={styles.subtitle}>{t('hero.subtitle')}</p>
        <div className={styles.ctas}>
          <a href="tel:+262693873336" className={`${styles.btn} ${styles.btn__primary}`}>
            📞 {t('hero.cta_call')}
          </a>
          <a href="https://wa.me/262693873336" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__whatsapp}`}>
            💬 WhatsApp
          </a>
          <a href="https://www.instagram.com/whale.diving/" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btn__outline}`}>
            📷 {t('hero.cta_instagram')}
          </a>
        </div>
        <p className={styles.location}>📍 {t('hero.location')}</p>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
}