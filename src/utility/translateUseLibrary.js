import i18next from "i18next"
import { changeSizeOfFont } from "./localTranslations/changeSizeOfFont"

export function translateUseLibrary (t) {
  const language = (
    window.navigator.userLanguage || window.navigator.language
  ).substr(0, 2)
  // eslint-disable-next-line no-constant-condition
  if (language === "de" || "es" || "pt" || "fr") {
    changeSizeOfFont(language)
  }
  document.querySelector("h1").innerHTML = i18next.t(
    "Get Unlimited <br>Access"
  )
  document.querySelector(".creation").innerHTML = i18next.t(
    "Unlimited Art <br>Creation"
  )
  document.querySelector(".styles").innerHTML = i18next.t(
    "Exclusive <br>Styles"
  )
  document.querySelector(".avatars").innerHTML = i18next.t(
    "Magic Avatars <br>With 20% Off"
  )
  document.querySelector(".avatars").innerHTML = i18next.t(
    "Magic Avatars <br>With 20% Off"
  )
  document.querySelector(".yearly-access").innerHTML = i18next.t("YEARLY ACCESS")
  document.querySelector(".per-year").innerHTML = i18next.t(
    "Just {{price}} per year",
    { price: "$39.99" }
  )
  document.querySelector(".per-week-economy").innerHTML = i18next.t(
    "{{price}} <br>per week",
    { price: "$0.48" }
  )
  document.querySelector(".weekly-access").innerHTML = i18next.t("WEEKLY ACCESS")
  document.querySelector(".per-week").innerHTML = i18next.t(
    "{{price}} <br>per week",
    { price: "$6.99" }
  )
  document.querySelector(".button-continue").innerHTML = i18next.t("Continue")
  document.querySelector(".terms_of_use").innerHTML = i18next.t("Terms of Use")
  document.querySelector(".privacy_policy").innerHTML = i18next.t("Privacy Policy")
  document.querySelector(".restore").innerHTML = i18next.t("Restore")
  document.querySelector(".additional-button").innerHTML = i18next.t("BEST OFFER")
}
