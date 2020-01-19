<template>
  <section>
    <v-container fluid>
      <h3 class="display-1 text-center mb-4">
        推薦行程
      </h3>
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper" justify="space-around">
          <div v-for="(trip, idx) in trips"
            :key="idx"
            class="swiper-slide timeline-slide"
          >
            <h4 class="title text-center">
              {{ trip.name }}
            </h4>
            <v-timeline>
              <v-timeline-item
                v-for="(value, tIdx) in trip.timeline"
                :key="tIdx"
                :class="isTimeRight(tIdx)"
              >
                <v-card class="elevation-3">
                  <v-card-title class="title">
                    {{ value }}
                  </v-card-title>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    trips: {
      type: Array,
      default: () => {
        return ['台北', '新竹', '台中', '嘉義', '台南', '高雄']
      }
    }
  },
  data () {
    return {
      swiperOption: {
        grabCursor: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        paginationClickable: true,
        slidesPerView: 'auto',
        speed: 3000,
        spaceBetween: 80,
        breakpoints: {
          480: {
            spaceBetween: 20
          },
          720: {
            spaceBetween: 50
          }
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    isTimeRight (idx) {
      return idx % 2 === 0 ? '' : 'text-right'
    }
  }
}
</script>

<style lang="scss" scoped></style>
