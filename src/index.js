import "./style.scss";
import "./fonts/fonts.scss";
import { clock } from "./utility/clock.js";
import { init100vh } from "./utility/initheight.js";
import { addClickListenerToSubscribeBtn } from "./utility/subscribeButtons.js";
import { addClickListenerToContinueBtn } from "./utility/buttonContinue.js";
import { searchLanguagePage } from "./utility/searchLanguagePage.js";
// import {i18nFromLibrary} from "./utility/i18nFromLibrary.js";

document.addEventListener("DOMContentLoaded", () => {
  addClickListenerToContinueBtn();
  addClickListenerToSubscribeBtn();
  clock;
  init100vh();
  searchLanguagePage();
  // i18nFromLibrary();
});
