import Link from 'next/link';
import { useLang } from '../../context/LangContext';
import styles from '../../styles/Footer.module.css';

export default function Footer() {
  const { t } = useLang();
  const links = t('footer.links');

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.badge}>🐋</div>
          <p className={styles.tagline}>{t('footer.tagline')}</p>
          <p className={styles.location}>📍 {t('footer.location')}</p>
          <a href="mailto:whalediving.re@gmail.com" className={styles.email}>
            whalediving.re@gmail.com
          </a>
        </div>

        <div className={styles.social}>
          <a href="tel:+262693873336" className={styles.socialLink}>
            📞 +262 6 93 87 33 36
          </a>
          <a href="https://wa.me/262693873336" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            💬 WhatsApp
          </a>
          <a href="https://www.instagram.com/whale.diving/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            📷 @whale.diving
          </a>
        </div>

        <div className={styles.legal}>
          {Array.isArray(links) && links.map((l) => (
            <Link key={l.href} href={l.href}>
              <a className={styles.legalLink}>{l.label}</a>
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}