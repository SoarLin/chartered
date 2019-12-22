<template>
  <section>
    <v-parallax src="section.jpg" height="380">
      <v-layout column align-center justify-center>
        <div class="headline white--text mb-4 text-center">
          客製化旅遊行程
        </div>
        <em>多天行程包車旅遊，跨縣市包車旅行</em>
        <v-btn class="mt-12" color="blue lighten-2" dark large
          :href="driverPhone"
        >
          與我聯繫
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {
  props: {
    driver: {
      type: Object,
      default: () => {
        return {
          phone: ''
        }
      }
    }
  },
  data () {
    return {}
  },
  computed: {
    driverPhone () {
      return `tel:${this.driver.phone}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
