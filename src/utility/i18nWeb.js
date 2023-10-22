import i18next from "i18next";
window.i18next = i18next;
import de from "./localTranslations/de.json" assert { type: "json" };
import en from "./localTranslations/en.json" assert { type: "json" };
import pt from "./localTranslations/pt.json" assert { type: "json" };

const den = {
    translation: de
  },
  eng = {
    translation: en
  },
  ptt = {
    translation: pt
  };

i18next
  .init({
    resources: {
      eng,
      den,
      ptt,
    },
    fallbackLng: "eng",
  })
  .then((t) => {
    console.log(t("Get Unlimited <br>Access"),{lng:ptt});
    // console.log(t("nested.key"));
    // console.log(t("great", { name: "Marcin" }));
  });

  console.log(window.navigator.language.substring(0,2))