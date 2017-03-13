<template>
  <div class="upload">
    <div class="left">
      <div class="scan_panel">
        <img :src="all[currentItem]" alt="...">
      </div>
      <div class="info">
        <div class="tips">
          <p class="title">数量</p>
          <p>第{{currentItem+1}}张 共{{itemSize}}张</p>
        </div>
        <div class="icon">
          <img src="../assets/rotate.png" alt="...">
          <img src="../assets/cut.png" alt="...">
          <img src="../assets/del.png" alt="...">
        </div>
      </div>
    </div>
    <div class="right">
      <ul :style="{width:418*pageSize+'px',left:-402*currentPage+'px'}">
        <li v-for="(item,i) in all" :class="{active:i === currentItem}" @click="select(i)">
          <img :src="item" alt="">
        </li>
      </ul>
      <div class="slidebar">
        <span v-for="i in pageSize" :class="{active:(i-1) === currentPage}" @click="jump(i-1)"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'upload',
    data () {
      return {
        currentItem: 0,
        currentPage: 0,
        singlePageItemSize: 4,
        all: [
          require('../assets/wenshu1.PNG'),
          require('../assets/wenshu2.PNG'),
          require('../assets/wenshu1.PNG'),
          require('../assets/wenshu2.PNG'),
          require('../assets/wenshu1.PNG'),
          require('../assets/wenshu2.PNG'),
          require('../assets/wenshu1.PNG'),
          require('../assets/wenshu2.PNG'),
          require('../assets/wenshu1.PNG'),
          require('../assets/wenshu2.PNG')
        ]
      }
    },
    computed: {
      itemSize () {
        return this.all.length
      },
      pageSize () {
        return Math.ceil(this.all.length / this.singlePageItemSize)
      }
    },
    methods: {
      select (index) {
        if (index < this.itemSize && index >= 0) {
          this.currentItem = index
        }
      },
      jump (to) {
        if (to < this.pageSize && to >= 0) {
          this.currentPage = to
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  $box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  div.upload{
    position: relative;
    margin: 101px 70px 0 70px;
    font-size: 24px;
    z-index: 1;
    div.left{
      position:relative;
      width: 790px;
      box-shadow: $box-shadow;
      float: left;
      //upload-scan_panel
      .scan_panel{
        height: 526px;
        background-color: #ffffff;
        img{
          display: inline-block;
          margin: 21px 21px 0 21px;
          width: 750px;
          height: 465px;
          object-fit: contain;
          border: 1px solid #9b9b9b;
        }
      }
      //info
      .info{
        height: 118px;
        background-color: #4990e2;
        div.tips{
          margin: 30px 0 0 50px;
          color: #ffffff;
          float: left;
          p{
            padding: 0;
            margin: 0;
            height: 24px;
          }
          p.title{
            font-weight: 600;
            margin-bottom: 10px;
          }
        }
        div.icon{
          position: relative;
          top: -20px;
          right: 50px;
          float: right;
          span{
            display: inline-block;
            margin-left: 25px;
            width: 86px;
            height: 86px;
            line-height: 86px;
            font-size: 49.9px;
            text-align: center;
            border-radius: 50%;
            color: #4a90e2;
            background-color: #ffffff;
            box-shadow: $box-shadow;
          }
          img{
            width: 86px;
            height: 86px;
            margin-left: 25px;
            border-radius: 50%;
            background-color: #ffffff;
            box-shadow: $box-shadow;
            &:hover{
              cursor: pointer;
            }
          }
        }
      }
    }
    div.right{
      position:relative;
      width: 418px;
      height: 645px;
      right: 60px;
      float: right;
      overflow-x: hidden;
      box-shadow: $box-shadow;
      ul{
        position: relative;
        float: left;
        min-width: 418px;
        transition: left .5s linear;
      }
      li{
        float: left;
        width: 179px;
        height: 276px;
        margin: 21px 0 0 21px;
        img{
          width: 100%;
          height: 100%;
          object-fit: contain;
          border: 1px solid #9b9b9b;
          &:hover{
            cursor: pointer;
          }
        }
      }
      div.slidebar{
        position: absolute;
        bottom: 6px;
        height: 30px;
        width: 100%;
        text-align: center;
        span{
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 2px;
          background-color: #ffffff;
          border: solid 1px #9b9b9b;
          border-radius: 50%;
          &.active{
            background-color: #4990e2;
          }
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
