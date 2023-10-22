import i18next from "i18next";
import languageDetector from "i18next-browser-languagedetector";

window.i18next = i18next;

const en = {
    translation: {
      hello_world: "hello world",
      nested: {
        key: "This key is was read from nested object",
      },
      great: "Hello {{name}}",
    },
  },
  de = {
    translation: {
      hello_world: "Witaj świecie",
      nested: {
        key: "Ten klucz został odczytany z zagnieżdzonego obiektu",
      },
      great: "Witaj {{name}}",
    },
  },
  ru = {
    translation: {
      hello_world: "Hola mundo",
      nested: {
        key: "Esta clave se ha leído desde un objeto anidado",
      },
      great: "Hola {{name}}",
    },
  };

i18next
  .use(languageDetector)
  .init({
    resources: {
      en,
      ru,
      de,
    },
    fallbackLng: "de",
  })
  .then((t) => {
    console.log(t("hello_world"));
    console.log(t("nested.key"));
    console.log(t("great", { name: "Marcin" }));
  });
