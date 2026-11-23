import { useLang } from '../../context/LangContext';
import sections from '../../locales/sections';
import styles from '../../styles/About.module.css';

export default function About() {
  const { t, lang } = useLang();
  const p = (sections[lang] || sections.fr).paco;

  return (
    <section className={styles.section} id="paco">
      <div className={styles.container}>
        {/* Colonne gauche : photo */}
        <div className={styles.imageCol}>
          <div className={styles.photoWrap}>
            {/* Placeholder — remplacer par next/image quand photo dispo */}
             <img src="/images/paco.jpg" alt="Paco — moniteur Whale Diving" className={styles.photo} />
          </div>
          <p className={styles.languages}>
            <img src="https://flagcdn.com/w40/fr.png" alt="Français" className={styles.langFlag} />
            <img src="https://flagcdn.com/w40/gb.png" alt="English" className={styles.langFlag} />
            <img src="https://flagcdn.com/w40/es.png" alt="Español" className={styles.langFlag} />
          </p>
        </div>

        {/* Colonne droite : contenu */}
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>{t('about.eyebrow')}</p>
          <h2 className={styles.title}>{t('about.title')}</h2>

          <blockquote className={styles.quote}>{t('about.quote')}</blockquote>

          <p className={styles.intro}>{p.intro}</p>

          <p className={styles.blockTitle}>{p.timelineTitle}</p>
          <ol className={styles.timeline}>
            {p.timeline.map((step, i) => (
              <li key={i} className={styles.step}>
                <span className={styles.step__icon}>
                  {step.flags ? '✈️' : step.icon}
                </span>
                <div>
                  <strong>{step.title}</strong>
                  {step.flags ? (
                    <span className={styles.step__flags}>
                      {step.flags.map(([code, name]) => (
                        <span key={code} className={styles.flag}>
                          <img src={`/images/flags/${code}.svg`} alt="" />
                          {name}
                        </span>
                      ))}
                    </span>
                  ) : (
                    <span className={styles.step__text}>{step.text}</span>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.values}>
            {p.values.map((v) => <span key={v} className={styles.value}>{v}</span>)}
          </div>

          <p className={styles.blockTitle}>{p.credsTitle}</p>
          <div className={styles.creds}>
            {p.creds.map(([icon, title, sub]) => (
              <div key={title} className={styles.credTile}>
                <span className={styles.credTile__icon}>{icon}</span>
                <strong>{title}</strong>
                <span>{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}