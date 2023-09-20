import './bootstrap';
import en from './locales/en.json'
import es from './locales/es.json'

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { createI18n } from 'vue-i18n'
import { default as Utils, locale } from './plugins/utils'
import Vuetify from './plugins/Vuetify'

import Layout from '@/layouts/Layout.vue'


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>{
      const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
      let page = pages[`./Pages/${name}.vue`]
      if(name.startsWith('Auth')){
      page.default.layout = page.default.layout || Layout
      }
      return page
    },
    setup({ el, app, props, plugin }) {
      const i18n = createI18n({
        locale: locale(),
        legacy: false,
        globalInjection: true,
        messages: {
          en: en,
          es: es
        }
      })
        return createApp({ render: () => h(app, props) })
          .use(plugin)
          .use(Vuetify)
          .use(i18n)
          .use(Utils)
          .mount(el);
    },
});

InertiaProgress.init({ color: "#000000", showSpinner: true });
