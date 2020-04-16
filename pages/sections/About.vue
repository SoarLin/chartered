<template>
  <section class="mt-8 pa-4">
    <v-card class="mx-auto about-me" outlined>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div class="card-body">
              <div class="h4 mt-0 title">
                {{ $t('關於司機') }}
              </div>
              <p v-html="driver.about" />
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="card-body">
              <div class="h4 mt-0 title">
                {{ $t('基本資料') }}
              </div>
              <v-row>
                <v-col cols="12" sm="4">
                  <strong class="text-uppercase"> {{ $t('所在地') }} : </strong>
                </v-col>
                <v-col cols="12" sm="8">
                  {{ driver.location }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <strong class="text-uppercase"> {{ $t('車款') }} : </strong>
                </v-col>
                <v-col cols="12" sm="8">
                  {{ driver.car }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <strong class="text-uppercase"> {{ $t('車色') }} : </strong>
                </v-col>
                <v-col cols="12" sm="8">
                  {{ driver.carColor }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <strong class="text-uppercase"> {{ $t('車號') }} : </strong>
                </v-col>
                <v-col cols="12" sm="8">
                  {{ driver.carNumber }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <strong class="text-uppercase"> {{ $t('乘客數') }} : </strong>
                </v-col>
                <v-col cols="12" sm="8">
                  {{ driver.passengers }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <strong class="text-uppercase"> {{ $t('保險') }} : </strong>
                </v-col>
                <v-col cols="12" sm="8">
                  {{ showInsurance }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <strong class="text-uppercase"> {{ $t('語言') }} : </strong>
                </v-col>
                <v-col cols="12" sm="8">
                  {{ driverCanSpeak(driver.language) }}
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </section>
</template>

<script>
// import utils from '@/utils'

export default {
  props: {
    driver: {
      type: Object,
      default: () => {
        return {
          car: 'NISSAN GRAND LIVINA (5+2)經濟七',
          about: '台灣有逛不完的夜市，吃不完的小吃美食，跟著我們游台灣🇹🇼我們的貼心用心的服務是為了讓我們的貴賓，能夠真正的放鬆心情好好的旅遊，我們會持續著我們的熱情來服務各位好朋友<br>本公司提供台灣包車旅遊、機場接送服務、客制化行程計劃、酒店住宿預約',
          insurance: '乘客意外險200萬、乘客意外醫療險20萬',
          language: ['中文'],
          location: '台北',
          passengers: '1 ~ 4 人'
        }
      }
    }
  },
  data () {
    return {}
  },
  computed: {
    showInsurance () {
      if (this.driver.insurance) {
        return this.driver.insurance
      } else {
        return '乘客意外險200萬、乘客意外醫療險20萬'
      }
    }
  },
  methods: {
    driverCanSpeak (langs) {
      if (Array.isArray(langs)) {
        return langs.join(', ')
      } else {
        return langs
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
