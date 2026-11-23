import { useLang } from '../../context/LangContext';
import styles from '../../styles/Reviews.module.css';

export default function Reviews() {
  const { t } = useLang();
  const items = t('reviews.items');

  return (
    <section className={styles.section} id="avis">
      <div className={styles.container}>
        <p className={styles.eyebrow}>{t('reviews.eyebrow')}</p>
        <h2 className={styles.title}>{t('reviews.title')}</h2>
        <p className={styles.subtitle}>{t('reviews.subtitle')}</p>

        <div className={styles.grid}>
          {Array.isArray(items) && items.map((review, i) => (
            <div key={i} className={styles.card}>
                
              <p className={styles.card__text}>« {review.text} »</p>
              <div className={styles.card__footer}>
                <span className={styles.card__name}>{review.name}</span>
                {review.badge && (
                  <span className={styles.card__badge}>{review.badge}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Gros boutons vers la fiche Google */}
        <div className={styles.googleLink}>
          <a
            href="https://g.page/r/CdSyR55qdAJUEBE"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bigBtn}
          >
            {t('reviews.see_all')}
          </a>
          <a
            href="https://g.page/r/CdSyR55qdAJUEBE/review"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.bigBtn} ${styles.bigBtn__review}`}
          >
            ⭐ {t('reviews.leave')}
          </a>
        </div>
      </div>
    </section>
  );
}