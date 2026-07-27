import { createContext, useContext, useState } from 'react';
import fr from '../locales/fr';
import en from '../locales/en';
import es from '../locales/es';

const translations = { fr, en, es };

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}