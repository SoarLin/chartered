<template>
  <section class="custom-section">
    <v-container fluid class="custom-container">
      <h3 class="display-1 text-center">顧客評價</h3>
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <v-card
            v-for="(n, idx) in 7"
            :key="idx"
            :elevation="10"
            max-width="320"
            height="100%"
            class="swiper-slide mt-4 custom-card__wrapper"
          >
            <v-img max-width="320" class=""
              :src="combineImgPath(n)"
            />
          </v-card>
          <!-- <div class="custom-card" :class="customeCardClass(n)">
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
          </div> -->
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </v-container>
  </section>
</template>

<script>
import utils from '@/utils'

export default {
  data () {
    return {
      swiperOption: {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        speed: 3000,
        spaceBetween: 50,
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
    getHead (imgPath) {
      return `${utils.baseRouter()}${imgPath}`
    },
    combineImgPath (n) {
      const number = ('00' + n).split(-2)
      return `${utils.baseRouter()}customer/${number}.jpg`
    }
  }
}
</script>

<style lang="scss" scoped></style>
