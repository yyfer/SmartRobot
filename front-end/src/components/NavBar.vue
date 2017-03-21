/**
* Created by yufan on 2017/3/21.
*/
<template>
  <div class="nav">
    <div class="title"><span>{{title}}</span></div>
    <ul class="crumbs">
      <li v-for="c in crumbs"><a @click="routeTo(c.route)">{{c.name}}</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'navBar',
    computed: {
      title () {
        return this.$store.state.nav.title
      },
      crumbs () {
        return this.$store.state.nav.crumbs
      }
    },
    methods: {
      routeTo (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  $box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  div.nav{
    position: relative;
    width: 100%;
    height: 64px;
    margin-top: 56px;
    background-color: #ffffff;
    box-shadow: $box-shadow;
    div.title{
      display: inline-block;
      float: left;
      width: 343px;
      height: 86px;
      margin-top: -16px;
      text-align: center;
      background-color: #ffffff;
      border-top: solid 10px #4990e2;
      box-shadow: $box-shadow;
      &>span{
        display: inline-block;
        width: 150px;
        height: 36px;
        margin-top: 20px;
        font-size: 36px;
        color: #4a4a4a;
      }
    }
    ul{
      position: relative;
      float: left;
      height: 64px;
      padding-left: 40px;
      font-size: 24px;
      color: #9b9b9b;
      &>li{
        float: left;
        display: inline-block;
        height: 24px;
        line-height: 1;
        margin: 20px 10px 0 0;
        &>a{
          color: #9b9b9b;
          text-decoration: none;
          &:hover{
            cursor: pointer;
          }
        }
        &:first-of-type:before{
          content: '';
        }
        &:before{
          content: '>';
          width: 10px;
          height: 18px;
          margin-right: 7px;
        }
      }
    }
  }
</style>
