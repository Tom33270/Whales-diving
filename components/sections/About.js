import { useLang } from '../../context/LangContext';
import styles from '../../styles/About.module.css';

export default function About() {
  const { t } = useLang();
  const credentials = t('about.credentials');

  return (
    <section className={styles.section} id="paco">
      <div className={styles.container}>
        {/* Colonne gauche : photo */}
        <div className={styles.imageCol}>
          <div className={styles.photoWrap}>
            {/* Placeholder — remplacer par next/image quand photo dispo */}
             <img src="/images/paco.jpg" alt="Paco — moniteur Whale Diving" className={styles.photo} />
          </div>
          <p className={styles.languages}>🗣️ {t('about.languages')}</p>
        </div>

        {/* Colonne droite : contenu */}
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>{t('about.eyebrow')}</p>
          <h2 className={styles.title}>{t('about.title')}</h2>

          <blockquote className={styles.quote}>{t('about.quote')}</blockquote>

          {t('about.bio').split('\n\n').map((para, i) => (
            <p key={i} className={styles.bio}>{para}</p>
          ))}

          <ul className={styles.credentials}>
            {Array.isArray(credentials) && credentials.map((cred, i) => (
              <li key={i} className={styles.cred}>
                <span className={styles.cred__dot} />
                {cred}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}