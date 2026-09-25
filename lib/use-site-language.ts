"use client";

import { useCallback, useEffect, useState } from "react";

export type SiteLanguage = "ru" | "en";

const STORAGE_KEY = "saleon-language";
const CHANGE_EVENT = "saleon-language-change";
const TRANSLATIONS_ENABLED = false;

function readStoredLanguage(): SiteLanguage {
  if (!TRANSLATIONS_ENABLED) return "ru";
  if (typeof window === "undefined") return "ru";
  return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "ru";
}

export function useSiteLanguage() {
  const [language, setLanguageState] = useState<SiteLanguage>("ru");

  useEffect(() => {
    const sync = () => {
      const next = readStoredLanguage();
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
      document.documentElement.dataset.language = next;
      setLanguageState(next);
    };
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener(CHANGE_EVENT, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(CHANGE_EVENT, sync);
    };
  }, []);

  const setLanguage = useCallback((next: SiteLanguage) => {
    const resolvedLanguage = TRANSLATIONS_ENABLED ? next : "ru";
    window.localStorage.setItem(STORAGE_KEY, resolvedLanguage);
    document.documentElement.lang = resolvedLanguage;
    document.documentElement.dataset.language = resolvedLanguage;
    setLanguageState(resolvedLanguage);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "ru" ? "en" : "ru");
  }, [language, setLanguage]);

  return { language, setLanguage, toggleLanguage };
}

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const apply = () => {
      if (document.title !== title) document.title = title;
    };
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [title]);
}
