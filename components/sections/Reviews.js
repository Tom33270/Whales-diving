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

        {/* Lien vers Google */}
        <div className={styles.googleLink}>
          <a
            href="https://www.google.com/search?sca_esv=10e6a75516b6f51d&sxsrf=APpeQnveaiUMEW9jNAkhIEF646azm_Hqdw:1785174309099&q=Whale+Diving+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MzA1NjWysDA1MDE0MAICS6MNjIyvGAXDMxJzUhVcMssy89IVHMsyixexYooBAO0woBdCAAAA&rldimm=6053528850410222292&tbm=lcl&hl=fr-FR&sa=X&ved=2ahUKEwi47rjEtPOVAxU2hv0HHSnXCqEQ9fQKegQIShAG&biw=1536&bih=695&dpr=1.25#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleBtn}
          >
            Voir tous les avis sur Google →
          </a>
        </div>
      </div>
    </section>
  );
}