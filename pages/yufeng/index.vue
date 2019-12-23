<template>
  <v-app light>
    <my-header />
    <v-content>
      <hero-banner :driver="driver" />

      <about-me :driver="driver" />

      <services :services="services" />

      <attractions
        :regions="regions"
        :attractions="attractions"
      />

      <itinerary :trips="trips" />

      <contact :driver="driver" />

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
import Contact from '@/pages/sections/Contact'

export default {
  components: {
    MyHeader,
    HeroBanner,
    AboutMe,
    Services,
    Attractions,
    Itinerary,
    Contact,
    CustomWords
  },
  data () {
    return {
      name: '',
      services: ['機場接送', '行程規劃', '包車旅遊']
    }
  },
  computed: {
    year () {
      const date = new Date()
      return date.getFullYear()
    },
    ...mapGetters({
      driver: 'driver',
      trips: 'recommendTrip',
      regions: 'regions',
      attractions: 'attractions'
    })
  },
  async asyncData ({ app, store, params }) {
    try {
      const name = params.name || 'yufeng'
      console.log(name)
      await store.dispatch('getAllTrip')
      await store.dispatch('getDriver', name)
      await store.dispatch('getRegions')
      await store.dispatch('getAttractions')
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
