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
              <p>
                Hello! I am Anthony Barnett. Web Developer, Graphic Designer and
                Photographer.
              </p>
              <p>
                Creative CV is a HTML resume template for professionals. Built
                with Bootstrap 4, Now UI Kit and FontAwesome, this modern and
                responsive design template is perfect to showcase your
                portfolio, skills and experience.
              </p>
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
                  {{ driver.insurance }}
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
export default {
  props: {
    driver: {
      type: Object,
      default: () => {
        return {
          car: 'March',
          insurance: '好險好險',
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
