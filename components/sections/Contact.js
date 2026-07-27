import { useLang } from '../../context/LangContext';
import styles from '../../styles/Contact.module.css';

export default function Contact() {
  const { t } = useLang();

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        {/* Colonne gauche : texte + CTAs */}
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>{t('contact.eyebrow')}</p>
          <h2 className={styles.title}>{t('contact.title')}</h2>
          <p className={styles.subtitle}>{t('contact.subtitle')}</p>

          <div className={styles.ctas}>
            <a href="tel:+262693873336" className={`${styles.btn} ${styles.btn__primary}`}>
              📞 {t('contact.cta_call')}
            </a>
            <a
              href="https://wa.me/262693873336"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btn__whatsapp}`}
            >
              💬 {t('contact.cta_whatsapp')}
            </a>
            <a
              href="https://www.instagram.com/whale.diving/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btn__insta}`}
            >
              📷 {t('contact.cta_instagram')}
            </a>
          </div>

          <div className={styles.info}>
            <p>📍 {t('contact.address')}</p>
            <p>
              ✉️{' '}
              <a href="mailto:whalediving.re@gmail.com" className={styles.emailLink}>
                {t('contact.email')}
              </a>
            </p>
          </div>
        </div>

        {/* Colonne droite : Google Maps */}
        <div className={styles.mapCol}>
          <iframe
            title="Whale Diving — Saint-Gilles-les-Bains"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.0!2d55.2167!3d-21.0569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAzJzI0LjkiUyA1NcKwMTMnMDAuMSJF!5e0!3m2!1sfr!2sfr!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}