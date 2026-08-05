import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '../../context/LangContext';
import styles from '../../styles/Navbar.module.css';

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: t('nav.activities'), href: '/#activites' },
    { label: t('nav.pricing'),    href: '/#tarifs' },
    { label: t('nav.cetaceans'),  href: '/#cetaces' },
    { label: t('nav.reviews'),    href: '/#avis' },
    { label: t('nav.about'),      href: '/#paco' },
    { label: t('nav.contact'),    href: '/#contact' },
  ];

  const LANGS = [
    { code: 'fr', flag: 'https://flagcdn.com/w40/fr.png', label: 'Français' },
    { code: 'en', flag: 'https://flagcdn.com/w40/gb.png', label: 'English' },
    { code: 'es', flag: 'https://flagcdn.com/w40/es.png', label: 'Español' },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/">
          <a className={styles.logo}>
            <img src="/images/logo.png" alt="Whale Diving" className={styles.logo__img} />
            <span className={styles.logo__text}>Whale Diving</span>
          </a>
        </Link>

        {/* Nav desktop */}
        <nav className={styles.nav}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Droite : langue + CTA */}
        <div className={styles.right}>
          <div className={styles.langSwitcher}>
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`${styles.langBtn} ${lang === l.code ? styles.langBtn__active : ''}`}
                title={l.label}
              >
                <img src={l.flag} alt={l.label} className={styles.langFlag} />
              </button>
            ))}
          </div>
          <a href="tel:+262693873336" className={styles.ctaBtn}>
            {t('nav.contact')}
          </a>
        </div>

        {/* Burger mobile */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className={styles.mobileLang}>
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setMenuOpen(false); }}
                className={`${styles.langBtn} ${lang === l.code ? styles.langBtn__active : ''}`}
                title={l.label}
              >
                <img src={l.flag} alt={l.label} className={styles.langFlag} />
              </button>
            ))}
          </div>
          <a href="tel:+262693873336" className={styles.mobileCta}>
            📞 Appeler Paco
          </a>
        </div>
      )}
    </header>
  );
}