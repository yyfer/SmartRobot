/**
* 图片查看时，模态显示（slot处插入需要的操作）
* Created by yufan on 2017/3/21.
*/
<template>
  <div class="modeLook">
    <div class="center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modeSee'
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  div.modeLook {
    position: absolute;
    display: none;
    align-items: center; /*定义body的元素垂直居中*/
    justify-content: center; /*定义body的里的元素水平居中*/
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    div.center{
      div{
        position: relative;
        width: 85px;
        height: 85px;
        background-color: #4990e2;
        border-radius: 50%;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
        &:last-of-type{
          margin-bottom: 0;
        }
        &:hover{
          cursor: pointer;
        }
        &>img{
          width: 45px;
          height: 50px;
          object-fit: contain;
          margin: 17px 20px 0 20px;
        }
      }
    }
  }
</style>
