<template>
  <section>
    <v-parallax src="plane.jpg" height="500">
      <v-layout column align-center justify-center class="white--text">
        <div class="profile-image">
          <img :src="getImage(driver.headImg)" class="hero-head" alt="大頭照" />
        </div>
        <h1 class="white--text profile-name">
          {{ driver.name }}
        </h1>
        <div class="subheading profile-subheading mb-4 text-center">
          優質司機兼地陪，為您提供服務
        </div>
        <div class="contact-group">
          <!-- 微信 button -->
          <v-tooltip v-if="hasWechat" top>
            <template v-slot:activator="{ on }">
              <v-btn class="btn-wechat" large v-on="on"
                @click.stop="addWeChat"
              >
                <v-icon class="white--text">
                  mdi-wechat
                </v-icon>
                WeChat
              </v-btn>
              <v-dialog v-model="dialogWechat" max-width="300">
                <v-card height="350" width="320">
                  <div class="line-dialog">
                    <v-img :src="getImage(driver.wechatImg)" contain max-width="200" />
                    <v-card-subtitle>
                      扫描上面的 QR Code，加我 WeChat。
                    </v-card-subtitle>
                  </div>
                </v-card>
              </v-dialog>
            </template>
            <span>Add My WeChat</span>
          </v-tooltip>
          <!-- LINE button -->
          <v-tooltip v-if="hasLine" top>
            <template v-slot:activator="{ on }">
              <v-btn class="btn-line" large v-on="on"
                @click.stop="addLine"
              >
                <img src="line-logo.png" alt="LINE" />
                LINE
              </v-btn>
              <v-dialog v-model="dialogLINE" max-width="300">
                <v-card height="350" width="320">
                  <div class="line-dialog">
                    <v-img :src="getImage(driver.lineImg)" contain max-width="200" />
                    <v-card-subtitle>
                      LINE 用戶掃描此行動條碼後，可將您加入好友！
                    </v-card-subtitle>
                  </div>
                </v-card>
              </v-dialog>
            </template>
            <span>Add My LINE</span>
          </v-tooltip>
          <!-- 打電話 button -->
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn class="btn-phone" color="blue" large
                :href="callPhone()" v-on="on"
              >
                <v-icon class="white--text">
                  mdi-phone
                </v-icon>
                Phone
              </v-btn>
            </template>
            <span>Call Me</span>
          </v-tooltip>
        </div>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
import utils from '@/utils'

export default {
  props: {
    driver: {
      type: Object,
      default: () => {
        return {
          name: '司機大哥',
          headImg: '',
          line: '',
          lineImg: '',
          phone: '+886-936-221-047',
          wechat: '',
          wechatImg: ''
        }
      }
    }
  },
  data () {
    return {
      dialogWechat: false,
      dialogLINE: false
    }
  },
  computed: {
    hasWechat () {
      return true
    },
    hasLine () {
      return this.driver.line !== ''
    }
  },
  methods: {
    getImage (imgPath) {
      // console.log('getImage = ' + utils.baseRouter() + imgPath)
      return `${utils.baseRouter()}${imgPath}`
    },
    addWeChat () {
      if (this.$device.isDesktop && this.driver.wechatImg) {
        this.dialogWechat = true
      } else if (this.driver.wechat) {
        window.open(this.driver.wechat)
      }
    },
    addLine () {
      if (this.$device.isDesktop && this.driver.lineImg) {
        this.dialogLINE = true
      } else if (this.driver.line) {
        window.open(this.driver.line)
      }
    },
    callPhone () {
      const tel = 'tel:' + this.driver.phone
      return tel
    }
  }
}
</script>

<style lang="sass" scoped></style>
