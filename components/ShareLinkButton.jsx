"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";
import { useLanguage } from "./LanguageProvider";

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);
  const { t } = useLanguage();
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };
  return (
    <button
      onClick={handleClick}
      className='flex items-center px-2 py-1 text-sm border rounded hover:bg-gray-100 text-slate-500 dark:text-white dark:hover:text-slate-500 hover:text-slate-700'>
      <LinkIcon className='w-4 h-4 ' />
      {clicked ? t("share.copied") : t("share.copy")}
    </button>
  );
}
