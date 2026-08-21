import Link from 'next/link';
import { useLang } from '../../context/LangContext';
import styles from '../../styles/Activities.module.css';

export default function Activities() {
  const { t } = useLang();
  const items = t('activities.items');

  return (
    <section className={styles.section} id="activites">
      <div className={styles.container}>
        <p className={styles.eyebrow}>{t('activities.eyebrow')}</p>
        <h2 className={styles.title}>{t('activities.title')}</h2>
        <p className={styles.subtitle}>{t('activities.subtitle')}</p>

        <div className={styles.grid}>
          {Array.isArray(items) && items.map((item) => (
            <Link key={item.slug} href={`/${item.slug}`}>
              <a className={styles.card}>
                <div className={styles.card__img}>
                  <img src={`/images/${item.slug}.jpg`} alt={item.title} className={styles.card__imgPhoto} />
                </div>      
                <div className={styles.card__body}>
                  <h3 className={styles.card__title}>{item.title}</h3>
                  <p className={styles.card__desc}>{item.description}</p>
                  <span className={styles.card__price}>{item.price}</span>
                </div>
                <div className={styles.card__arrow}>→</div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}