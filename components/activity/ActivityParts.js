import Icon, { ico } from '../Icon';
import Link from 'next/link';
import content from '../../content.config';
import styles from '../../styles/ActivityDetail.module.css';

const { contact } = content;
const track = () => { if (typeof window !== 'undefined' && window.gtag_report_conversion) window.gtag_report_conversion('https://wa.me/262693873336'); };

export function WhatsappBtn({ children, className }) {
  return (
    <a href={contact.whatsapp_url} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${className || styles.btn__whatsapp}`} onClick={track}>
      {children}
    </a>
  );
}

export function ActivityHero({ image, c, common }) {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__overlay} />
      <div className={styles.hero__bg} style={{ backgroundImage: `url('${image}')` }} />
      <div className={styles.hero__content}>
        <p className={styles.hero__eyebrow}>{ico(c.eyebrow)}</p>
        <h1 className={styles.hero__title}>{c.title}</h1>
        <p className={styles.hero__subtitle}>{c.subtitle}</p>
        <div className={styles.hero__ctas}>
          <a href={contact.telephone_url} className={`${styles.btn} ${styles.btn__primary}`}>{ico(common.call)}</a>
          <WhatsappBtn>{ico(common.whatsapp)}</WhatsappBtn>
        </div>
      </div>
    </section>
  );
}

export function Points({ points }) {
  return (
    <ul className={styles.points}>
      {points.map(([e, b, t], i) => (
        <li key={i}><span className={styles.points__icon}><Icon e={e} /></span><span><strong>{b}</strong>{t ? ` ${t}` : ''}</span></li>
      ))}
    </ul>
  );
}

export function ActivityIntro({ c }) {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <div className={c.highlights ? styles.intro__grid : undefined}>
          <div>
            <h2 className={styles.section__title}>{c.introTitle}</h2>
            <p className={styles.lead}>{c.lead}</p>
            <Points points={c.points} />
          </div>
          {c.highlights && (
            <div className={styles.intro__highlights}>
              {c.highlights.map(([e, s, p], i) => (
                <div key={i} className={styles.highlight}>
                  <span className={styles.highlight__icon}><Icon e={e} /></span>
                  <div><strong>{s}</strong><p>{p}</p></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function BackLink({ common }) {
  return (
    <section className={styles.back}>
      <div className={styles.container}>
        <Link href="/#activites"><a className={styles.backLink}>{common.back}</a></Link>
      </div>
    </section>
  );
}
