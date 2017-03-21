/**
* 提示模态框
* Created by yufan on 2017/3/21.
*/
<template>
  <div class="modeTips">
    <div>
      <div class="title">提示</div>
      <div class="content">
        <img class="loading" src="../assets/加载.png" alt="">
        <slot></slot>
      </div>
      <div class="button">
        <span @click="cancel">算了</span>
        <span class="blue">再等等</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mode',
    methods: {
      cancel () {
        this.$emit('cancel')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  $box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  div.modeTips{
    position: absolute;
    display: flex;
    align-items: center; /*定义body的元素垂直居中*/
    justify-content: center; /*定义body的里的元素水平居中*/
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    &>div{
      padding: 25px;
      background-color: #ffffff;
      box-shadow: $box-shadow;
      div.title{
        width: 73px;
        height: 36px;
        font-size: 36px;
        line-height: 1;
        color: #39393a;
      }
      div.content{
        height: 50px;
        margin: 25px 0 25px 0;
        &:after{
          content: ' ';
          height: 0;
          width: 0;
          clear: both;
        }
        img.loading{
          float: left;
          width: 50px;
          height: 50px;
          object-fit: contain;
        }
        span{
          float: left;
          display: inline-block;
          height: 24px;
          font-size: 24px;
          line-height: 1;
          color: #9b9b9b;
          margin: 13px 0 13px 13px;
        }
      }
      div.button{
        display: inline-block;
        float: right;
        span{
          height: 24px;
          font-size: 24px;
          line-height: 1;
          margin-left: 15px;
          color: #39393a;
          &:hover{
            cursor: pointer;
          }
          &.blue{
            color: #4a90e2 !important;
          }
        }
      }
    }
  }
</style>
