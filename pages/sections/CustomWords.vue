<template>
  <section class="custom-section">
    <v-container fluid class="custom-container">
      <h3 class="display-1 text-center">顧客感謝</h3>
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <v-sheet
            v-for="(n, idx) in 3"
            :key="idx"
            :elevation="10"
            class="swiper-slide mt-4 custom-card__wrapper"
          >
            <div class="custom-card" :class="customeCardClass(n)">
              <div class="custom__head-block">
                <img :src="getHead('head.jpg')" alt />
                <h6 class="title">John Doe</h6>
                <p class="subtitle">香港</p>
              </div>
              <p class="custom-word">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                illo vel nam beatae, sunt incidunt esse quod! Esse nobis architecto
                est doloribus, dolorem hic cum culpa! Voluptas voluptatum hic
                dolore?
              </p>
            </div>
          </v-sheet>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        loop: true,
        speed: 3000,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
  },
  methods: {
    customeCardClass (idx) {
      return idx % 2 === 0 ? 'custom-card--reverse' : ''
    },
    getHead (headImg) {
      let baseRouter = '/'
      if (process.BROWSER_BUILD) {
        baseRouter = (window.location.hostname === 'soarlin.github.io') ? '/chartered/' : '/'
      }
      return `${baseRouter}${headImg}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
