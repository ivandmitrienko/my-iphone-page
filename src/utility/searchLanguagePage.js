import { i18n } from "./i18n.js"
import { languages } from "./localTranslations/languages.js"

export function searchLanguagePage () {
  const {
    en, de, pt, ja, fr, es
  } = languages
  const availableLanguages = ["pt", "ja", "fr", "es", "en", "de"]
  const defaultLanguage = "en"
  const language = (
    window.navigator.userLanguage || window.navigator.language
  ).substr(0, 2)
  let pageLanguage = defaultLanguage
  if (availableLanguages.includes(language)) {
    pageLanguage = language
  }
  const localTranslations = {
    de,
    en,
    pt,
    ja,
    fr,
    es
  }
  const json = localTranslations[pageLanguage]
  i18n(json)
}
