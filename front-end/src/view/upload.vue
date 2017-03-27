<template>
  <div class="upload">
    <div class="operator">
      <a><i class="settings"></i><span @click="report">生成报告</span></a>
    </div>
    <div class="left">
      <div class="title">扫描中</div>
      <div class="scan_panel">
        <div class="standby" v-show="currentStatus === status.standby">
          <img src="../assets/扫描.png" alt="...">
        </div>
        <img class="ready" :src="all[currentItem]" alt="..." v-show="currentStatus === status.ready">
      </div>
      <div class="info">
        <div class="tips">
          <p class="title">数量</p>
          <p>第{{currentItem+1}}张 共{{itemSize}}张</p>
        </div>
        <div class="icon">
          <div @click="scan">
            <img src="../assets/扫描_2.png" alt="...">
          </div>
          <div @click="look">
            <img src="../assets/查看_2.png" alt="...">
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title">已扫描</div>
      <div class="content">
        <div class="container">
          <ul :style="{width:380*pageSize+'px',left:-380*currentPage+'px'}">
            <li v-for="item in viewAll"
                :class="{active:item.id === currentItem, marginRight:item.marginRight}"
                @click="select(item.id)"
                :key="item.id"
                :data-index="item.id">
              <img :src="item.src" alt="">
              <ModeLook>
                <div @click.stop><img src="../assets/移动.png" alt="..."></div>
                <div @click.stop="deleteItem(item.id)"><img src="../assets/删除.png" alt="..."></div>
              </ModeLook>
            </li>
          </ul>
        </div>
      </div>
      <div class="slidebar">
        <span v-for="i in pageSize" :class="{active:(i-1) === currentPage}" @click="jump(i-1)"></span>
      </div>
    </div>
  </div>
</template>

<script>
  let ModeLook = require('@/components/ModeLook')
  let status = {
    'standby': 0,
    'ready': 1,
    'scan': 2
  }
  export default {
    name: 'upload',
    components: {
      ModeLook
    },
    created () {
      this.all = [
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png'),
        require('../assets/page.png')
      ]
    },
    data () {
      return {
        currentItem: -1,
        currentPage: 0,
        singlePageItemSize: 4,
        all: [],
        status: status,
        currentStatus: status.standby
      }
    },
    computed: {
      itemSize () {
        return this.all.length
      },
      pageSize () {
        return Math.ceil(this.itemSize / this.singlePageItemSize)
      },
      viewAll () {
        // offer to view all data by sequence
        let firstLine = []
        let secondLine = []
        this.all.forEach((v, i) => {
          if (i % 4 === 0 || i % 4 === 1) {
            firstLine.push({id: i, src: v, marginRight: (i === this.itemSize - 1 && i % 4 === 0)})
          } else {
            secondLine.push({id: i, src: v})
          }
        })
        return firstLine.concat(secondLine)
      }
    },
    methods: {
      report () {
        // show the tips
        this.$emit('modeTipsIn', '小津正在分析，请稍后......')
        // generate report
        setTimeout(() => {
          this.$emit('modeTipsOut')
          this.$router.push({name: 'Report1'})
        }, 1000)
      },
      scan () {
        this.currentStatus = this.status.standby
        this.currentItem = -1
      },
      look () {
        if (this.currentStatus === this.status.ready) {
          let src = this.all[this.currentItem]
          let width = 432
          let height = 678
          // emit look event
          this.$emit('modeImageIn', '扫描预览', src, width, height)
        }
      },
      select (index) {
        if (index < this.itemSize && index >= 0) {
          this.currentStatus = this.status.ready
          this.currentItem = index
        }
      },
      jump (to) {
        if (to < this.pageSize && to >= 0) {
          this.currentPage = to
        }
      },
      deleteItem (index) {
        if (index < this.itemSize && index >= 0) {
          // check if there be remaining items
          if (this.itemSize === 1) {
            // status
            this.currentStatus = this.status.standby
            this.currentItem = -1
          } else {
            // choose the nearest one after this
            if (index === this.itemSize - 1) {
              this.currentItem--
              this.currentPage = Math.floor(this.currentItem / this.singlePageItemSize)
            }
          }
          this.all.splice(index, 1)
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  $box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  div.upload{
    position: relative;
    margin: 46px 70px 0 70px;
    font-size: 24px;
    z-index: 1;
    div.title{
      width: 146px;
      height: 36px;
      font-size: 36px;
      line-height: 1;
      color: #4a4a4a;
      margin-bottom: 20px;
    }
    div.operator{
      position: absolute;
      float: right;
      height: 64px;
      right: 0;
      top: -110px;
      &>a{
        display: inline-block;
        float: left;
        height: 64px;
        text-align: center;
        font-size: 24px;
        line-height: 1;
        color: #4a4a4a;
        &>span{
          display: inline-block;
          float: left;
          line-height: 64px;
          &:hover{
            cursor: pointer;
          }
        }
        &>i.settings{
          display: inline-block;
          float: left;
          width: 43px;
          height: 36px;
          margin: 14px 20px 0 0;
          background-image: url("../assets/生成报告.png");
        }
      }
    }
    div.left{
      position:relative;
      width: 778px;
      float: left;
      //upload-scan_panel
      .scan_panel{
        position: relative;
        height: 526px;
        background-color: #ffffff;
        box-shadow: $box-shadow;
        div.standby{
          height: 100%;
          background-color: rgba(0, 0, 0, 0.1);
          &>img{
            width: 288px;
            height: 248.4px;
            margin: 139.3px 245px 0 245px;
          }
        }
        img.ready{
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
        height: 100px;
        background-color: #4990e2;
        div.tips{
          margin: 21px 0 0 30px;
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
          &>div{
            display: inline-block;
            width: 86px;
            height: 86px;
            margin-left: 25px;
            border-radius: 50%;
            background-color: #ffffff;
            box-shadow: $box-shadow;
            &:hover{
              cursor: pointer;
            }
            &>img{
              display: block;
              margin: 19px auto;
            }
          }
        }
      }
    }
    div.right{
      position:relative;
      width: 420px;
      right: 60px;
      float: right;
      div.content{
        $width: 420px;
        $height: 626px;
        $width-li: 178px;
        $height-li: 268px;
        $padding-v: 20px;
        $padding-h: 25px;
        $gap: 10px;

        position: relative;
        width: $width - 2*$padding-h;
        height: $height - 2*$padding-v;
        box-shadow: $box-shadow;
        background-color: #ffffff;
        padding: $padding-v $padding-h;
        div.container{
          $width-c: $width-li*2 + $gap + 4px;
          $height-c: $height-li*2 + 2*$gap + 4px;
          position: relative;
          width: $width-c;
          height: $height-c;
          overflow-x: hidden;
          ul{
            position: relative;
            float: left;
            min-width: $width-c;
            height: $height-c;
            transition: left .5s linear;
            li{
              position: relative;
              float: left;
              width: $width-li;
              height: $height-li;
              margin: 0 $gap $gap 0;
              border: 1px solid #9b9b9b;
              &.active div.modeLook{
                display: flex;
              }
              &.marginRight{
                margin-right: 200px;
              }
              &>img{
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
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
