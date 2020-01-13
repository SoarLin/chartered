<template>
  <section class="custom-section">
    <v-container fluid class="custom-container">
      <h3 class="display-1 text-center">顧客評價</h3>
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <v-card
            v-for="(data, idx) in customers"
            :key="idx"
            :elevation="10"
            class="custom-card mt-4 swiper-slide"
          >
            <div class="custom__head-block">
              <img :src="getHead('head.jpg')" alt />
              <div>
                <h6 class="title">{{ data.name }}</h6>
                <v-rating
                  v-model="data.rating"
                  empty-icon="mdi-star-outline"
                  full-icon="mdi-star-face"
                  half-icon="mdi-star-half"
                  dense="true"
                />
              </div>
            </div>
            <div v-if="data.tags.length > 0" class="mt-2">
              <v-chip
                v-for="(tag, tIdx) in data.tags"
                :key="tIdx"
                small outlined
                class="mr-1 mb-1"
              >
                {{ tag }}
                <v-icon right color="#90CAF9">mdi-thumb-up</v-icon>
              </v-chip>
            </div>
            <div v-if="data.package" class="custom-package">
              {{ data.package }}
            </div>
            <p class="custom-word" v-html="data.feedback" />
            <v-img
              v-if="data.image"
              :src="getCustomImage(data.image)"
              height="250"
            />
          </v-card>
          <!-- <v-card
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
          </v-card> -->
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
      customers: [
        {
          name: '***',
          rating: 5,
          tags: ['车内整洁', '驾驶平稳', '提前等候', '态度好服务佳', '活地图认路准', '车况车貌好'],
          feedback: '在国外包车过很多次，第一次这么满意，感谢彬少师傅今天的细心关照，不仅景点还有文化等介绍的非常细，推荐的美食我们家人都非常喜欢，强烈推荐彬少师傅。',
          package: '10小时100公里畅游 由"皇包车"提供服务'
        },
        {
          name: '***',
          rating: 4,
          tags: ['车内整洁'],
          feedback: '自定义了小众人文历史游览线路，景点虽不算远但地势偏僻，所以决定包车。当天下大雨，包车方便很多，回程时候想买释迦，司机带我们去的水果店又好又便宜，不仅有释迦，芒果和菠萝也特别甜，很开心。另外有个建议：除了等租车公司和司机家微信，是否有更有效的联系方式？因为主动拨打订单确认信息里的电话无人接听。',
          package: '10小时300公里畅游 由"西游计旅行"提供服务'
        },
        {
          name: 'c**5',
          rating: 5,
          tags: [],
          feedback: '驾驶技术非常娴熟 给我们介绍台湾的特色及特产 下次来台湾 还会找他',
          image: 'img01.jpg'
        },
        {
          name: '高**瑄',
          rating: 5,
          tags: [],
          feedback: '司机师傅很热情 行程非常棒',
          package: '06-24 套餐类型:台北周边包车10小时300公里 车型:舒适5座(4人2个行李箱)'
        },
        {
          name: 'm**y',
          rating: 5,
          tags: [],
          feedback: '非常愉快的台湾环岛游! 感谢彬少5天的陪伴和介绍! 非常靠谱的代理, 非常nice的司机! 五星好评',
          package: '08-29 套餐类型:節後優惠案5天車贈接/送/機 车型:经济5座(豐田納智傑 馬自達)'
        },
        {
          name: '滕***',
          rating: 5,
          tags: [],
          feedback: `黄绍彬师傅很随和，亲和！一路上大家相处得非常愉快，每天晚上都提前商量好了第二天的行程！有一天我只是随口说了还没有吃到台湾的芒果，他晚上自己出去吃饭的时候就帮我买了两盒送到酒店给我们，真的让人很感动！ <br>
          如果只有8到9天台湾行的朋友，建议在台北玩3天后，包车去花莲待一天，之后去垦丁待2天，再到高雄待1天，从高雄坐飞机回家！ <br>
          台湾的夜市，千篇一律，吃两次就腻了！建议台北去士林夜市，记得在台北的时候要抽出半天的时间去淡水看日落喔！ <br>
          垦丁一直沿着海边，石盘公园很美，海角七号只是四个字而已。垦丁可以吃海鲜，不贵！`
        }
      ],
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
    getHead (imgPath) {
      return `${utils.baseRouter()}${imgPath}`
    },
    combineImgPath (n) {
      const number = ('00' + n).split(-2)
      return `${utils.baseRouter()}customer/${number}.jpg`
    },
    getCustomImage (image) {
      return `${utils.baseRouter()}customer/${image}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
