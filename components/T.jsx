"use client";

import PropTypes from "prop-types";
import { useLanguage } from "./LanguageProvider";

// Renders one dictionary entry. Lets server components stay server components:
// only this leaf needs to run on the client.
export default function T({ k }) {
  const { t } = useLanguage();
  return <>{t(k)}</>;
}

T.propTypes = {
  k: PropTypes.string.isRequired,
};
