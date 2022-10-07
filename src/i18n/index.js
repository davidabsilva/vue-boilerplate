import { createI18n } from "vue-i18n";

import en from "./translations/en.json";
import ptPT from "./translations/ptPT.json";
import { LanguageCookiesService } from "../services/cookies.service";

// https://gotranscript.com/translation-services/american-to-british

const cookieLanguage = new LanguageCookiesService().getLanguage();

const navigatorDefaultLocale = (
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language
).replace("-", "");

export default createI18n({
  locale:
    cookieLanguage && cookieLanguage.length
      ? cookieLanguage.split(",")[0]
      : navigatorDefaultLocale,
  fallbackLocale: "en",
  messages: {
    en: en,
    enUS: en,
    enGB: en,
    ptPT: ptPT,
  },
  // Vue 3 specific
  allowComposition: true,
});
