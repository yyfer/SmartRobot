<template>
  <!--<transition-->
    <!--v-on:beforeEnter="beforeEnter"-->
    <!--v-on:enter="enter"-->
    <!--v-on:leave="leave"-->
  <!--&gt;-->
    <div>
      <h1 class="title">{{title}}</h1>
      <h2 class="subtitle">{{subtitle}}</h2>
      <img class="identity" src="../assets/idcard.png" alt="..."  @click="login(idCard)">
    </div>
  <!--</transition>-->
</template>

<script>
  // id card regular expression
  const idCardRegexp = /^[0-9]{17}[0-9|X]$/
  // velocity.js
  let Velocity = require('velocity-animate')
  require('velocity-animate/velocity.ui')

  export default {
    name: 'login',
    data () {
      return {
        title: '请将身份证放置在读卡区',
        subtitle: 'PLEASE PLACE YOUR ID CARD IN THE CARD READING AREA',
        idCard: '111111000000002222'
      }
    },
    methods: {
      beforeEnter (el) {
        el.querySelector('h1.title').style.opacity = 0
        el.querySelector('h2.subtitle').style.opacity = 0
        el.querySelector('img.identity').style.opacity = 0
      },
      enter: function (el, done) {
        // animation
        Velocity(el.querySelector('h1.title'), {opacity: 1}, {duration: 500})
        Velocity(el.querySelector('h2.subtitle'), {opacity: 1}, {duration: 500})
        let selectorImage = el.querySelector('img.identity')
        let sequence = [
          {e: selectorImage, p: {scale: 0}, o: {duration: 200}},
          {e: selectorImage, p: {scale: 1, opacity: 1}, o: {duration: 500, complete: done}}
        ]
        Velocity.RunSequence(sequence)
      },
      leave (el, done) {
        el.style.display = 'none'
        done()
      },
      login (idCard) {
        if (idCardRegexp.test(idCard)) {
          // commit vuex mutation
          this.$store.commit('login', idCard)
          // router to next
          this.$router.push({name: 'Home'})
        } else {
          // login failed
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  h1.title{
    height: 64px;
    margin: 0 auto;
    margin-top: 120px;
    font-size: 64px;
    line-height: 1;
    text-align: center;
    color: #4a4a4a;
  }
  h2.subtitle{
    height: 36px;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
    color: #9b9b9b;
  }
  img.identity{
    position: relative;
    top: 109px;
    left: 520px;
    width: 400px;
    height: 274px;
    object-fit: contain;
    z-index: 1;
  }
</style>
