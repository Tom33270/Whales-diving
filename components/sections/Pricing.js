import { useState } from 'react';
import { useLang } from '../../context/LangContext';
import styles from '../../styles/Pricing.module.css';

export default function Pricing() {
  const { t } = useLang();
  const categories = t('pricing.categories');
  const [activeTab, setActiveTab] = useState(0);

  if (!Array.isArray(categories)) return null;

  return (
    <section className={styles.section} id="tarifs">
      <div className={styles.container}>
        <p className={styles.eyebrow}>{t('pricing.eyebrow')}</p>
        <h2 className={styles.title}>{t('pricing.title')}</h2>
        <p className={styles.subtitle}>{t('pricing.subtitle')}</p>

        {/* Onglets */}
        <div className={styles.tabs}>
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`${styles.tab} ${activeTab === i ? styles.tab__active : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Table active */}
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <tbody>
              {categories[activeTab].rows.map((row, j) => (
                <tr key={j} className={styles.row}>
                  <td className={styles.rowLabel}>{row.label}</td>
                  <td className={styles.rowPrice}>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.note}>ℹ️ {t('pricing.note')}</p>

        {/* CTA */}
        <div className={styles.cta}>
          <a href="tel:+262693873336" className={styles.ctaBtn}>
            📞 {t('hero.cta_call')}
          </a>
          <a
            href="https://wa.me/262693873336"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaBtn} ${styles.ctaBtn__wa}`}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}