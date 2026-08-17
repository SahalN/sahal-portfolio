"use client";

import PropTypes from "prop-types";
import { useLanguage } from "./LanguageProvider";

// For content that is not in the dictionary — project titles and bodies come
// from markdown, so both versions are handed in as props.
function pick(values, lang) {
  return values[lang] || values.en;
}

export default function Localized({ values }) {
  const { lang } = useLanguage();
  return <>{pick(values, lang)}</>;
}

export function LocalizedHtml({ values, className }) {
  const { lang } = useLanguage();
  return (
    <article
      className={className}
      dangerouslySetInnerHTML={{ __html: pick(values, lang) }}
    />
  );
}

const valuesShape = PropTypes.shape({
  en: PropTypes.string.isRequired,
  id: PropTypes.string,
});

Localized.propTypes = { values: valuesShape.isRequired };
LocalizedHtml.propTypes = {
  values: valuesShape.isRequired,
  className: PropTypes.string,
};
