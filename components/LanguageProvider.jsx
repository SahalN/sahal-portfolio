"use client";

import PropTypes from "prop-types";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  STORAGE_KEY,
  translate,
} from "../lib/i18n";

const LanguageContext = createContext(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return context;
}

export default function LanguageProvider({ children }) {
  // Always starts at the default so the first client render matches the
  // prerendered HTML; the stored choice is applied right after mount.
  const [lang, setLangState] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(stored)) {
      setLangState(stored);
      return;
    }
    // No choice saved yet: follow the browser for Indonesian visitors.
    if (navigator.language?.toLowerCase().startsWith("id")) setLangState("id");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    if (!LANGUAGES.includes(next)) return;
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback((key) => translate(lang, key), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
