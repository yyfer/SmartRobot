<template>
  <!--<transition-->
    <!--v-on:beforeEnter="beforeEnter"-->
    <!--v-on:enter="enter"-->
    <!--v-on:leave="leave"-->
  <!--&gt;-->
    <div id="home" class="content-wrapper">
      <div class="content">
        <div class="layer" v-for="opt in operators">
          <div class="layer-title">{{opt.title}}</div>
          <div class="layer-btn-icon"><img :src="opt.icon"></div>
          <div class="layer-content">
            <span>{{opt.description}}</span>
          </div>
          <div class="layer-footer">
            <a href="javascript:;" class="btn" @click="routeTo(opt.route)">
              <div>选择</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  <!--</transition>-->
</template>

<script>
  // velocity.js
  let Velocity = require('velocity-animate')
  require('velocity-animate/velocity.ui')
  export default {
    name: 'home',
    data () {
      return {
        operators: [
          {title: '扫描问案', description: '快速准确将扫描的纸质文档、PDF格式文件或OCR文字图像，转换成可编辑的格式，99.8％的识别准确率OCR技术即刻能够识别文本，转换几乎所有打印的文档类型，包括书籍，杂志上的文章与复杂的布局。', icon: require('../assets/icon_scan.png'), route: {name: 'Upload'}},
          {title: '语音问案', description: '快速准确将扫描的纸质文档、PDF格式文件或OCR文字图像，转换成可编辑的格式，99.8％的识别准确率OCR技术即刻能够识别文本，转换几乎所有打印的文档类型，包括书籍，杂志上的文章与复杂的布局。', icon: require('../assets/icon_voice.png'), route: {name: 'Consult'}},
          {title: '我的案件', description: '快速准确将扫描的纸质文档、PDF格式文件或OCR文字图像，转换成可编辑的格式，99.8％的识别准确率OCR技术即刻能够识别文本，转换几乎所有打印的文档类型，包括书籍，杂志上的文章与复杂的布局。', icon: require('../assets/icon_user.png'), route: {name: 'MyCase'}}
        ]
      }
    },
    methods: {
      beforeEnter (el) {
//        let selectors = el.querySelectorAll('.layer')
//        selectors.forEach((layer) => {
//          layer.style.opacity = 0
//        })
      },
      enter (el, done) {
        let selectors = el.querySelectorAll('.layer')
//        let sequence = [
//          {e: selectors, p: {scale: 0}, o: {duration: 200}},
//          {e: selectors[1], p: {scale: 1, opacity: 0.9}, o: {duration: 250}},
//          {e: selectors[2], p: {scale: 1, opacity: 0.9}, o: {duration: 250, easing: 'ease-out'}},
//          {e: selectors[0], p: {scale: 1, opacity: 0.9}, o: {duration: 250, easing: 'ease-out', complete: done}}
//        ]
//        Velocity.RunSequence(sequence)
        Velocity(selectors, 'transition.swoopIn', {stagger: 200, drag: true})
      },
      leave (el, done) {
        el.style.display = 'none'
        done()
      },
      routeTo (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>

  .content-wrapper {
    position: relative;
    margin-top: 84px;
    text-align: center;
    z-index: 1;
  }

  .content {
    display: inline-block;
  }

  .layer {
    float: left;
    width: 360px;
    height: 587px;
    border-radius: 9px;
    background-color: #ffffff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    opacity: 0.9;
  }

  .layer:not(:first-child) {
    margin-left: 86px;
  }

  .layer .layer-title {
    width: 232px;
    height: 56px;
    font-size: 56px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #4a90e2;
    margin-left: 45px;
    margin-top: 47px;
  }

  .layer .layer-content {
    margin-top: 45px;
    text-align: left;
  }

  .layer .layer-content span {
    width: 270px;
    height: 259.2px;
    font-family: PingFangSC;
    font-size: 21.6px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #9b9b9b;
    display: inline-block;
    margin-left: 45px;
  }

  .layer .layer-footer {
    margin-top: 44px;
  }

  .layer .layer-footer .btn {
    width: 270px;
    height: 90px;
    border-radius: 9px;
    background-color: #6da5e7;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    z-index: 1;
  }

  .layer .layer-footer .btn div {
    width: 270px;
    height: 48px;
    font-family: PingFangSC;
    font-size: 48px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-top: 10px;
  }

  .layer .layer-btn-icon {
    width: 108px;
    height: 108px;
    background-color: #6da5e7;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    position: absolute;
    top: -40px;
    right: -40px;
  }

  .layer .layer-btn-icon img {
    width: 57.6px;
    height: 57.6px;
    object-fit: contain;
    margin-top: 25px;
  }
</style>
