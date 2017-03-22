<template>
  <div>
    <div id="app" @click="isLogin?'':toLoginPage()">
      <h1 class="logo" v-if="isLogin" style="margin-top: -60px;"><i></i><span>{{system_name}}</span></h1>
      <h1 class="logo" v-else><i></i><span>{{system_name}}</span></h1>
      <h2 class="subtitle" v-show="isLogin">{{sub_name}}</h2>
      <NavBar v-show="isLogin"></NavBar>
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
  $background-color: #ffffff;
  $font-family:  'Microsoft YaHei',serif;
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
    height: $height;
    margin: 0 auto;
    font-family: $font-family;
    padding-top: 100px;
  }
  h1.logo{
    position: relative;
    margin: 0 auto;
    width: 358px;
    height: 80px;
    i{
      position: relative;
      display: inline-block;
      width: 80px;
      height: 80px;
      background: url("./assets/logo.png") 0 0 no-repeat;
      background-size: cover;
    }
    span{
      position: relative;
      display: inline-block;
      float: right;
      margin-top: 8px;
      width: 258px;
      height: 64px;
      font-size: 64px;
      line-height: 1;
      text-align: right;
      color: #4a4a4a;
    }
  }
  h2.subtitle{
    height: 36px;
    margin: 0 auto;
    margin-top: 10px;
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
    color: #9b9b9b;
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
