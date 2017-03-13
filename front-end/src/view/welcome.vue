<template>
  <div>
    <h1 class="title">{{title}}</h1>
    <h2 class="subtitle">{{subtitle}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'welcome',
    data () {
      return {
        title: '欢迎来到津法问案',
        subtitle: 'WELCOME TO TIANJIN SMART CASE CONSULTATION SYSTEM'
      }
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
</style>
