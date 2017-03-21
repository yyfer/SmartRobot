/**
* 图片展示模态框（全局）
* Created by yufan on 2017/3/21.
*/
<template>
  <div class="modeImage">
    <div>
      <div class="title">{{title}}</div>
      <div class="content">
        <img :src="source" :style="{width:width+'px',height:height+'px'}" alt="...">
      </div>
      <div class="button">
        <span @click="cancel" class="blue">好的</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modeImage',
    props: ['title', 'source', 'width', 'height'],
    methods: {
      cancel () {
        this.$emit('cancel')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  $box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  div.modeImage{
    position: absolute;
    display: flex;
    align-items: center; /*定义body的元素垂直居中*/
    justify-content: center; /*定义body的里的元素水平居中*/
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 100;
    &>div{
      padding: 25px 30px;
      background-color: #ffffff;
      box-shadow: $box-shadow;
      div.title{
        height: 36px;
        font-size: 36px;
        line-height: 1;
        color: #39393a;
      }
      div.content{
        margin: 20px 0;
        padding: 10px;
        border: solid 0.8px #9b9b9b;
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
