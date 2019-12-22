// const colors = require('vuetify/es5/util/colors').default

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/chartered/' : '/'

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + '包車旅遊',
    title: '台灣旅遊' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '專業優質司機帶你在台灣各地旅遊' || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: routerBase + 'favicon.ico' }
    ]
  },
  router: {
    base: routerBase
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['swiper/dist/css/swiper.css', '~/assets/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
    '~/plugins/firebase.js',
    '~/plugins/i18n.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/device',
    'nuxt-i18n'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  i18n: {
    locales: [
      { name: 'zh-TW', code: 'tw', text: '繁體中文' },
      { name: 'en-US', code: 'en', text: 'English' }
    ],
    defaultLocale: 'tw',
    vueI18n: {
      fallbackLocale: 'tw',
      messages: {
        tw: require('./locales/zh-TW.json'),
        en: require('./locales/en-US.json')
      }
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'language'
    }
  },
  vuetify: {
    customVariables: ['~/assets/customVutify.scss'],
    theme: {
      themes: {}
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
