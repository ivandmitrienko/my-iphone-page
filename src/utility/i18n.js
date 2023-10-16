import de from "./localTranslations/de.json" assert { type: "json" };
import en from "./localTranslations/en.json" assert { type: "json" };
import pt from "./localTranslations/pt.json" assert { type: "json" };
import ja from "./localTranslations/ja.json" assert { type: "json" };
import fr from "./localTranslations/fr.json" assert { type: "json" };
import es from "./localTranslations/es.json" assert { type: "json" };

const availableLanguages = ["pt", "ja", "fr", "es", "en", "de"];
const defaultLanguage = "en";
let language = (
  window.navigator.userLanguage || window.navigator.language
).substr(0, 2);
let pageLanguage = defaultLanguage;
if (availableLanguages.includes(language)) {
  pageLanguage = language;
}
const localTranslations = {
  de,
  en,
  pt,
  ja,
  fr,
  es,
};
let elements = document.querySelectorAll('[data-i18n]');

elements.forEach((el,i)=>{
    const key = el.innerHTML;
    console.log(key)
})