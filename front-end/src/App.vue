<template>
  <div id="app">
    <p class="link">
      <router-link to="/" @click.stop>home</router-link>
      <router-link to="/login" @click.stop>login</router-link>
      <router-link to="/home" @click.stop>home</router-link>
      <router-link to="/upload" @click.stop>upload</router-link>
      <router-link to="/consult" @click.stop>consult</router-link>
      <router-link to="/notfound" @click.stop>notfound</router-link>
    </p>
    <h1 class="logo"><i></i><span>{{system_name}}</span></h1>
    <router-view></router-view>
    <img class="bg" src="./assets/bg.png" alt="...">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      system_name: '津法问案'
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
  p.link{
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    a{
      display: inline-block;
    }
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
      color: #9b9b9b;
    }
  }
  img.bg{
    position: absolute;
    bottom: 0px;
    width: 1440px;
    height: 607px;
    object-fit: contain;
    opacity: 0.3;
    z-index: -1;
  }
</style>
