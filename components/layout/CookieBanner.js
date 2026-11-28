import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLang } from '../../context/LangContext';
import styles from '../../styles/CookieBanner.module.css';

// Bandeau cookies : rien n'est suivi avant l'accord. Refuser est aussi simple qu'accepter.
// Le choix est gardé 6 mois ; le lien « Cookies » du pied de page rouvre le bandeau.
const TXT = {
  fr: { text: 'On utilise un cookie Google Ads pour savoir si nos publicités amènent des contacts. Rien d\'autre. Vous choisissez.', more: 'En savoir plus', no: 'Refuser', yes: 'Accepter' },
  en: { text: 'We use one Google Ads cookie to know whether our ads bring enquiries. Nothing else. Your choice.', more: 'Learn more', no: 'Decline', yes: 'Accept' },
  es: { text: 'Usamos una cookie de Google Ads para saber si nuestros anuncios generan contactos. Nada más. Tú eliges.', more: 'Saber más', no: 'Rechazar', yes: 'Aceptar' },
};

export default function CookieBanner() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const t = TXT[lang] || TXT.fr;

  useEffect(() => {
    if (typeof window.wdConsent === 'function' && window.wdConsent() === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener('wd-cookies-open', reopen);
    return () => window.removeEventListener('wd-cookies-open', reopen);
  }, []);

  const choose = (v) => {
    try { localStorage.setItem('wd-consent', JSON.stringify({ v, t: Date.now() })); } catch (e) {}
    if (v === 'yes' && typeof window.wdLoadAds === 'function') window.wdLoadAds();
    setOpen(false);
    // Après un refus qui suit un accord, on recharge pour arrêter le suivi déjà lancé.
    if (v === 'no' && window.wdAdsOn) window.location.reload();
  };

  if (!open) return null;
  return (
    <div className={styles.banner} role="dialog" aria-label="Cookies">
      <p className={styles.text}>
        {t.text}{' '}
        <Link href="/politique-confidentialite"><a className={styles.more}>{t.more}</a></Link>
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.btn} onClick={() => choose('no')}>{t.no}</button>
        <button type="button" className={`${styles.btn} ${styles.btn__yes}`} onClick={() => choose('yes')}>{t.yes}</button>
      </div>
    </div>
  );
}
