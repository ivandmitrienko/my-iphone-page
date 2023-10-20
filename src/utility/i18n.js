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

let elements = document.querySelectorAll("[data-i18n]");

const json = localTranslations[pageLanguage];

elements.forEach((el, i) => {
  let text = el.innerHTML;
  const variables = text.match(/{({.*?})}/g);
  if (variables) {
    console.log(el.dataset);
    variables.forEach((variable) => {
      // Filter all `data-*` attributes for this element to find the matching key.
      Object.entries(el.dataset).filter(([key, value]) => {
        // console.log(`{{${key}}}`)
        if (`{{${key}}}` === variable) {
          text = text.replace(
            `${variable}`,
            new Function(`return (${value})`)()
          );
          el.innerHTML = text;
        }
        //   try {
        //     // Attempt to run actual JavaScript code.
        //     text = text.replace(
        //       `${variable}`,
        //       new Function(`return (${value})`)()
        //     );
        //   } catch (error) {
        //     // Probably just static text replacement.
        //     text = text.replace(`${variable}`, value);
        //   }
        // }
      });
    });
  }
  // console.log(el.dataset)

  // variables.forEach((variable) => {
  //   if(variable) console.log(variable)
  // })
  // Filter all `data-*` attributes for this element to find the matching key.
  //   Object.entries(el.dataset).filter(([key, value]) => {
  //     if (`{${key}}` === variable) {
  //       try {
  //         // Attempt to run actual JavaScript code.
  //         text = text.replace(`${variable}`, new Function(`return (${value})`)());
  //       } catch (error) {
  //         // Probably just static text replacement.
  //         text = text.replace(`${variable}`, value);
  //       }
  //     }
  //   })
  // });
  // const value = json[text];
  // el.innerHTML = value;
});

