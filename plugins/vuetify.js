import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    customVariables: ['~/assets/customVutify.scss'],
    iconfont: 'mdi'
  }
})
