<template>
  <section>
    <v-container fluid>
      <h3 class="display-1 text-center">
        景點介紹
      </h3>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-chip-group column active-class="primary--text" class="city-group">
            <v-chip
              v-for="(city, idx) in regions"
              :key="idx"
              @click="chooseTag(city.id)"
            >
              {{ city.name }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(data, idx) in currentAttractions"
          :key="idx"
          cols="12" lg="3" md="4" sm="6" xs="12"
        >
          <v-card class="attraction-card">
            <v-img class="white--text align-end"
              :src="combineImgPath(data.img)"
            >
              <v-card-title class="attraction-card__title">
                {{ data.name }}
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import utils from '@/utils'

export default {
  props: {
    regions: {
      type: Array,
      required: true
    },
    attractions: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      tags: [
        { text: 'ALL', value: 'All' },
        { text: '台北', value: 'Taipei' },
        { text: '台中', value: 'Taichung' },
        { text: '南投', value: 'Nantou' },
        { text: '嘉義', value: 'Chiayi' },
        { text: '台南', value: 'Tainan' },
        { text: '高雄', value: 'Kaohsiung' },
        { text: '宜蘭', value: 'Yilan' },
        { text: '花蓮', value: 'Hualien' },
        { text: '台東', value: 'Taitung' }
      ],
      currentTag: null
    }
  },
  computed: {
    currentAttractions () {
      if (this.currentTag && this.currentTag !== 'All') {
        return this.attractions.filter((v) => {
          return v.city === this.currentTag
        })
      }
      return this.attractions
    }
  },
  methods: {
    chooseTag (value) {
      this.currentTag = value
      console.log(this.currentTag)
    },
    combineImgPath (name) {
      return `${utils.baseRouter()}attractions/${name}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
