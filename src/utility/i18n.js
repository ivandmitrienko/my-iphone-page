import { languages } from "./localTranslations/languages.js";

const { en, de, pt, ja, fr, es } = languages;
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

let elements = document.querySelectorAll("[data-i18n]");

const json = localTranslations[pageLanguage];

elements.forEach((el, i) => {
  let text = el.innerHTML;
  let translate = json[text];
  el.innerHTML = translate;

  const variables = translate.match(/{({.*?})}/g);
  if (variables) {
    variables.forEach((variable) => {
      // Filter all `data-*` attributes for this element to find the matching key.
      Object.entries(el.dataset).filter(([key, value]) => {
        if (`{{${key}}}` === variable) {
          translate = translate.replace(
            `${variable}`,
            new Function(`return '$'+(${value})`)()
          );
          el.innerHTML = translate;
        }
      });
    });
  }
});
