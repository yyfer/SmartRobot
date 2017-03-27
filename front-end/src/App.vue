<template>
  <div>
    <div id="app" @click="isLogin?'':toLoginPage()">
      <div class="logo" v-if="!isLogin || isHome()">
        <h1><i></i><span>{{system_name}}</span></h1>
        <h2 v-show="isLogin">{{sub_name}}</h2>
      </div>
      <div class="logo2" v-else>
        <h1><i></i><span>{{system_name}}</span></h1>
        <h2>{{sub_name}}</h2>
      </div>
      <NavBar v-show="isLogin && !isHome()"></NavBar>
      <router-view
        v-on:modeImageIn="modeImageIn"
        v-on:modeTipsIn="modeTipsIn"
        v-on:modeTipsOut="modeTipsOut"
      ></router-view>
      <ModeImage
        v-show="modeImage.status"
        v-on:cancel="modeImageOut"
        :source="modeImage.source"
        :title="modeImage.title"
        :width="modeImage.width"
        :height="modeImage.height"
      >
      </ModeImage>
      <ModeTips
        v-show="modeTips.status"
        v-on:cancel="modeTipsOut"
        :content="modeTips.content"
        level="0"
      >
      </ModeTips>
      <img class="bg" src="./assets/bg.png" alt="...">
    </div>
  </div>
</template>

<script>
  let NavBar = require('@/components/NavBar')
  let ModeImage = require('@/components/ModeImage')
  let ModeTips = require('@/components/ModeTips')
  export default {
    name: 'app',
    components: {
      ModeImage,
      NavBar,
      ModeTips
    },
    data () {
      return {
        system_name: '津法问案',
        sub_name: 'TIANJIN PEOPLE\'S COURT CASE CONSULTATION ROBOT',
        modeImage: {
          status: false,
          title: '',
          source: null,
          width: 'auto',
          height: 'auto'
        },
        modeTips: {
          status: false
        }
      }
    },
    computed: {
      isLogin () {
        return this.$store.state.isLogin
      }
    },
    methods: {
      isHome () {
        if (this.$route && this.$route.name === 'Home') {
          return true
        } else {
          return false
        }
      },
      toLoginPage () {
        if (this.$route && this.$route.name !== 'Login') {
          this.$router.push({name: 'Login'})
        }
      },
      logout () {
        if (this.$store) {
          this.$store.commit('logout')
        }
        if (this.$route && this.$route.name !== 'Welcome') {
          this.$router.push({name: 'Welcome'})
        }
      },
      modeImageIn (title, src, width, height) {
        this.modeImage.title = title
        this.modeImage.source = src
        this.modeImage.width = width || 'auto'
        this.modeImage.height = height || 'auto'
        this.modeImage.status = true
      },
      modeImageOut () {
        this.modeImage.status = false
      },
      modeTipsIn (content) {
        this.modeTips.content = content
        this.modeTips.status = true
      },
      modeTipsOut () {
        this.modeTips.status = false
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
  $width: 1440px;
  $height: 1024px;
  $padding-top-init: 147px;
  $background-color: #ffffff;
  $font-family: PingFang SC,'Microsoft YaHei',serif;
  html,body{
    width: auto;
    height: auto;
    background-color: $background-color;
  }
  ul,li{
     list-style: none;
     margin: 0;
     padding: 0;
   }
  #app {
    position: relative;
    width: $width;
    height: $height - $padding-top-init;
    margin: 0 auto;
    font-family: $font-family;
    padding-top: $padding-top-init;
  }
  div.logo{
    position: relative;
    h1{
      position: relative;
      margin: 0 auto;
      width: 420px;
      height: 96px;
      i{
        position: relative;
        display: inline-block;
        width: 96px;
        height: 96px;
        background: url("./assets/logo.png");
        background-size: cover;
        margin-right: 30px;
      }
      span{
        position: relative;
        display: inline-block;
        float: right;
        width: 290px;
        height: 96px;
        line-height: 96px;
        font-size: 72px;
        text-align: right;
        color: #4a4a4a;
      }
    }
    h2{
      height: 24px;
      margin: 0 auto;
      margin-top: 20px;
      font-size: 24px;
      text-align: center;
      color: #9b9b9b;
    }
  }

  div.logo2{
    position: relative;
    margin-top: 40px - $padding-top-init;
    h1{
      position: relative;
      margin: 0 auto;
      width: 277px;
      height: 64px;
      i{
        position: relative;
        display: inline-block;
        width: 64px;
        height: 64px;
        background: url("./assets/logo2.png");
        background-size: cover;
        margin-right: 20px;
      }
      span{
        position: relative;
        display: inline-block;
        float: right;
        width: 193px;
        height: 64px;
        line-height: 64px;
        font-size: 48px;
        text-align: right;
        color: #4a4a4a;
      }
    }
    h2{
      height: 24px;
      margin: 0 auto;
      margin-top: 20px;
      font-size: 24px;
      text-align: center;
      color: #9b9b9b;
    }
  }
  img.bg{
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 1440px;
    height: 607px;
    object-fit: contain;
    opacity: 0.3;
    z-index: 0;
  }
</style>
