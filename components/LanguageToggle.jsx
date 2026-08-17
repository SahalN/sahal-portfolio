"use client";

import { LANGUAGES } from "../lib/i18n";
import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className='flex items-center overflow-hidden text-xs border rounded-full border-black/20 dark:border-white/25'
      role='group'
      aria-label={t("lang.switch")}>
      {LANGUAGES.map((code) => (
        <button
          key={code}
          type='button'
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2 py-0.5 uppercase transition-colors ${
            lang === code
              ? "bg-[#6D9886] text-white"
              : "text-gray-500 dark:text-gray-300 hover:text-[#6D9886]"
          }`}>
          {code}
        </button>
      ))}
    </div>
  );
}
