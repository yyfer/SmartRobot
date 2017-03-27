/**
* Created by yufan on 2017/3/23.
*/
<template>
  <div class="container">
    <div class="circle middle">
      <div class="people" v-for="(people,i) in peoples" :style="{left:getLeft(i),top:getTop(i)}">
        <img :src="people.src" alt="">
        <span>{{people.name}}</span>
      </div>
    </div>
    <div class="circle inner"></div>
    <div class="logo">
      <img src="../assets/人物关系.png" alt="...">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'peoplePatterns',
    props: {
      peoples: {
        type: Array
      }
    },
    methods: {
      getLeft (index) {
        // generate top value by people's index
        let left = 195 * (1 + Math.sin(Math.PI / 4 * index)) - 50
        return left + 'px'
      },
      getTop (index) {
        // generate top value by people's index
        let top = 195 * (1 - Math.cos(Math.PI / 4 * index)) - 62.5
        return top + 'px'
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  $width: 550px;
  $height: 550px;
  $gap: 80px;
  $logo_width: 100px;
  $logo_height: 100px;
  $box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  div.container{
    div.circle,&{
      position: absolute;
      top: 0;
      left: 0;
      width: $width;
      height: $height;
      background-color: #ffffff;
      border: solid 1.2px #9b9b9b;
      border-radius: 50%;
    }
    div.middle{
      top: $gap;
      left: $gap;
      width: $width - 2*$gap;
      height: $height - 2*$gap;
      border: solid 1px #9b9b9b;
      div.people{
        position: absolute;
        width: 100px;
        height: 125px;
        left: 145px;
        top: -62.5px;
        text-align: center;
        z-index: 5;
        &>img{
          width: 100px;
          height: 100px;
          object-fit: contain;
          // box-shadow: $box-shadow;
          border-radius: 50%;
        }
        &>span{
          height: 23px;
          line-height: 23px;
          font-size: 23px;
          color: #9b9b9b;
        }
      }
    }
    div.inner{
      top: $gap*2;
      left: $gap*2;
      width: $width - 4*$gap;
      height: $height - 4*$gap;
      border: solid 1px #9b9b9b;
    }
    div.logo{
      position: absolute;
      width: $logo_width;
      height: $logo_height;
      top: ($height - $logo_height)/2;
      left: ($width - $logo_width)/2;
      background-color: #4990e2;
      box-shadow: $box-shadow;
      border-radius: 50%;
      &>img{
        width: 50px;
        height: 50px;
        margin: ($logo_height - 50px)/2 ($logo_width - 50px)/2;
        object-fit: contain;
      }
    }
  }
</style>
