// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { VuetifyDateAdapter } from 'vuetify/labs/date/adapters/vuetify'
import { default as Utils, locale } from '../plugins/utils'
import 'vuetify/dist/vuetify.min.css'; // Importar los estilos de Vuetify



export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  date: {
    adapter: new VuetifyDateAdapter(locale())
  }
})
