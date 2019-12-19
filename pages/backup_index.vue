<template>
  <v-app light>
    <my-header />
    <v-content>
      <hero-banner />

      <about-me />

      <services />

      <attractions />

      <itinerary />

      <section>
        <v-parallax src="section.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-4 text-center">
              客製化旅遊行程
            </div>
            <em>多天行程包車旅遊，跨縣市包車旅行</em>
            <v-btn class="mt-12" color="blue lighten-2" dark large href="#">
              與我聯繫
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <custom-words />

      <v-footer color="blue darken-2">
        <v-row align="center" justify="end" class="white--text pr-4">
          Copyright &copy; {{ year }},&nbsp;&nbsp;
          <a class="white--text" href="https://soarlin.github.io">
            <v-icon class="white--text">mdi-github-circle</v-icon>
            Soar Lin
          </a>
        </v-row>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

import MyHeader from '@/pages/sections/Header'
import HeroBanner from '@/pages/sections/HeroBanner'
import AboutMe from '@/pages/sections/About'
import Services from '@/pages/sections/Services'
import CustomWords from '@/pages/sections/CustomWords'
import Attractions from '@/pages/sections/Attractions'
import Itinerary from '@/pages/sections/Itinerary'

// import { fireDb } from '~/plugins/firebase.js'

export default {
  components: {
    MyHeader,
    HeroBanner,
    AboutMe,
    Services,
    Attractions,
    Itinerary,
    CustomWords
  },
  data () {
    return {}
  },
  computed: {
    year () {
      const date = new Date()
      return date.getFullYear()
    },
    ...mapGetters({
      // trips: 'recommendTrip'
    })
  },
  async asyncData ({ app, store, params }) {
    try {
      await store.dispatch('getAllTrip', params)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style lang="sass" scoped></style>
