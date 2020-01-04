<template>
  <v-app-bar app>
    <v-toolbar-title class="web-title" v-text="title" />
    <v-spacer />
    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-web</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(locale, index) in $i18n.locales"
          :key="index"
          @click="changeLanguage(locale.code)"
        >
          <v-list-item-title>{{ locale.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      title: 'PS'
    }
  },
  methods: {
    changeLanguage (localeCode) {
      this.$i18n.locale = localeCode
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Damion&display=swap');

.web-title {
  font-family: 'Damion', cursive;
  font-size: 2em;
  width: 50px;
}
</style>
