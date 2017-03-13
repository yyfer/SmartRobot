<template>
  <div>
    <h1 class="title">{{title}}</h1>
    <h2 class="subtitle">{{subtitle}}</h2>
    <img class="identity" src="../assets/idcard.png" alt="...">

    <LoginInput
      placeholder="enter your id card"
      v-model.trim="idCard"
      @login="login(idCard)"
    ></LoginInput>
  </div>
</template>

<script>
  import LoginInput from '@/components/LoginInput'
  const idCardRegexp = /^[0-9]{17}[0-9|X]$/

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
      login (idCard) {
        if (idCardRegexp.test(idCard)) {
          // login in
          alert('login successful')
          // commit vuex mutation
          this.$store.commit('login', idCard)
          // router to next
          this.$router.push('upload')
        } else {
          // login failed
          alert('login failed')
        }
      }
    },
    components: {
      LoginInput
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  h1.title{
    height: 64px;
    margin: 0 auto;
    margin-top: 127px;
    font-size: 64px;
    line-height: 1;
    text-align: center;
    color: #9b9b9b;
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
  img.identity{
    position: absolute;
    top: 546px;
    left: 520px;
    width: 400px;
    height: 274px;
    object-fit: contain;
  }
</style>
