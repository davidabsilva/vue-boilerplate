import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import App from './App.vue';
import './index.css';
import 'ant-design-vue/dist/antd.css';

import en from './assets/i18n/en.json';
import ptPT from './assets/i18n/ptPT.json';
import { LanguageCookiesService } from './services/cookies.service';

// https://gotranscript.com/translation-services/american-to-british

const cookieLanguage = new LanguageCookiesService().getLanguage();

const navigatorDefaultLocale = (
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language
).replace('-', '');

const i18n = createI18n({
  locale:
    cookieLanguage && cookieLanguage.length
      ? cookieLanguage.split(',')[0]
      : navigatorDefaultLocale,
  fallbackLocale: 'en',
  messages: {
    en: en,
    enUS: en,
    enGB: en,
    ptPT: ptPT,
  },
  // Vue 3 specific
  allowComposition: true,
});

createApp(App).use(i18n).mount('#app');
