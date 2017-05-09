<template>
  <div id="myCase" class="content-wrapper">
    <div class="operator clearfix">
      <div class="my-case-title">我是当事人</div>
      <div class="my-case-radio">
        <div class="my-case-radio-bar"></div>
        <div class="my-case-radio-circle-left" v-if="type == '当'"></div>
        <div class="my-case-radio-circle-right" v-if="type == '代'"></div>
      </div>
      <div class="agent-case-title">我是代理人</div>
    </div>
    <div class="content">
        <div class="my-case-wrapper">
          <div class="case-swiper">
            <swiper :options="caseOption" ref="caseSwiper">
              <swiper-slide v-for="myCase in myCases" class="panel">
                <div class="panel-bar my-case-panel-bar"></div>
                <div class="my-case-panel-body">
                  <div class="header clearfix">
                    <div class="left">
                      <div class="ah">{{ myCase.ah }}</div>
                      <div class="description">{{ myCase.description }}</div>
                    </div>
                    <div class="right">
                      <div class="type-wrapper"><div class="type">{{ myCase.type }}</div></div>
                    </div>
                  </div>
                  <div class="list-wrapper clearfix">
                    <div class="list" v-for="info,index in myCase.infos" v-if="index == 0 || index == 1">
                      <div class="icon">
                        <img :src="info.icon">
                      </div>
                      <div class="introduce">
                        <div class="name">
                          {{ info.name }}
                        </div>
                        <div class="detail">
                          {{ info.detail }}
                        </div>
                      </div>
                    </div>
                    <div class="line"></div>
                    <div class="list" v-for="info,index in myCase.infos" v-if="index == 2 || index == 3">
                      <div class="icon">
                        <img :src="info.icon">
                      </div>
                      <div class="introduce">
                        <div class="name">
                          {{ info.name }}
                        </div>
                        <div class="detail">
                          {{ info.detail }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="timeline-swiper">
            <swiper :options="timelineOption" ref="timelineSwiper">
              <swiper-slide v-for="timeLine in timeLines">
                <div class="day">{{ timeLine.monthDay }}</div>
                <div class="dot current" v-if="timeLine.isCurrent == true"></div>
                <div class="dot" v-else></div>
                <div class="line"></div>
                <div class="year" v-show="timeLine.isShow == true">{{ timeLine.year }}</div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  require('./scss/custom.scss')
  export default {
    name: 'myCase',
    data () {
      return {
        type: '当',
        myCases: [
          {
            ah: '（2016）津01民初76号',
            description: '招商银行股份有限公司天津分行与天津市亿君成商贸有限公司，航天科工哈尔滨风华有限公司，姜昊保理合同纠纷',
            // 代理人（代），当事人（当）
            type: '当',
            infos: [
              {name: '承办人', icon: require('../assets/icon_cbr.png'), detail: '史会明'},
              {name: '审判庭', icon: require('../assets/icon_spt.png'), detail: '园区审判庭'},
              {name: '立案日期', icon: require('../assets/icon_larq.png'), detail: '2016-07-16'},
              {name: '结案日期', icon: require('../assets/icon_jarq.png'), detail: '2016-08-14'}
            ]
          },
          {
            ah: '（2016）津01民初77号',
            description: '招商银行股份有限公司天津分行与天津市亿君成商贸有限公司，航天科工哈尔滨风华有限公司，姜昊保理合同纠纷',
            // 代理人（代），当事人（当）
            type: '当',
            infos: [
              {name: '承办人', icon: require('../assets/icon_cbr.png'), detail: '史会明'},
              {name: '审判庭', icon: require('../assets/icon_spt.png'), detail: '园区审判庭'},
              {name: '立案日期', icon: require('../assets/icon_larq.png'), detail: '2016-07-16'},
              {name: '结案日期', icon: require('../assets/icon_jarq.png'), detail: '2016-08-14'}
            ]
          },
          {
            ah: '（2016）津01民初77号',
            description: '招商银行股份有姜昊保理合同纠纷',
            // 代理人（代），当事人（当）
            type: '当',
            infos: [
              {name: '承办人', icon: require('../assets/icon_cbr.png'), detail: '史会明'},
              {name: '审判庭', icon: require('../assets/icon_spt.png'), detail: '园区审判庭'},
              {name: '立案日期', icon: require('../assets/icon_larq.png'), detail: '2016-07-16'},
              {name: '结案日期', icon: require('../assets/icon_jarq.png'), detail: '2016-08-14'}
            ]
          },
          {
            ah: '（2016）津01民初77号',
            description: '招商银行股份有限公司天津分行纷',
            // 代理人（代），当事人（当）
            type: '当',
            infos: [
              {name: '承办人', icon: require('../assets/icon_cbr.png'), detail: '史会明'},
              {name: '审判庭', icon: require('../assets/icon_spt.png'), detail: '园区审判庭'},
              {name: '立案日期', icon: require('../assets/icon_larq.png'), detail: '2016-07-16'},
              {name: '结案日期', icon: require('../assets/icon_jarq.png'), detail: '2016-08-14'}
            ]
          },
          {
            ah: '（2016）津01民初77号',
            description: '招商银行股份有限公司天津分行与天津市亿君成商贸有限公司，航天科工哈尔滨风华有限公司，姜昊保理合同纠纷',
            // 代理人（代），当事人（当）
            type: '当',
            infos: [
              {name: '承办人', icon: require('../assets/icon_cbr.png'), detail: '史会明'},
              {name: '审判庭', icon: require('../assets/icon_spt.png'), detail: '园区审判庭'},
              {name: '立案日期', icon: require('../assets/icon_larq.png'), detail: '2016-07-16'},
              {name: '结案日期', icon: require('../assets/icon_jarq.png'), detail: '2016-08-14'}
            ]
          },
          {
            ah: '（2016）津01民初77号',
            description: '招商银行股份有限公司天津分行与天津市亿君成商贸有限公司，航天科工哈尔滨风华有限公司，姜昊保理合同纠纷',
            // 代理人（代），当事人（当）
            type: '当',
            infos: [
              {name: '承办人', icon: require('../assets/icon_cbr.png'), detail: '史会明'},
              {name: '审判庭', icon: require('../assets/icon_spt.png'), detail: '园区审判庭'},
              {name: '立案日期', icon: require('../assets/icon_larq.png'), detail: '2016-07-16'},
              {name: '结案日期', icon: require('../assets/icon_jarq.png'), detail: '2016-08-14'}
            ]
          }
        ],
        timeLines: [
          {year: '2016年', monthDay: '2月9日', isShow: true, isCurrent: false},
          {year: '2016年', monthDay: '4月15日', isShow: false, isCurrent: false},
          {year: '2016年', monthDay: '7月16日', isShow: false, isCurrent: true},
          {year: '2016年', monthDay: '12月4日', isShow: false, isCurrent: false},
          {year: '2017年', monthDay: '1月26日', isShow: true, isCurrent: false},
          {year: '2017年', monthDay: '3月5日', isShow: false, isCurrent: false}
        ],
        caseOption: {
          notNextTick: true,
          effect: 'coverflow',
          slidesPerView: 'auto',
          centeredSlides: true,
          coverflow: {
            rotate: 30,
            depth: 300,
            stretch: 50
          }
        },
        timelineOption: {
          notNextTick: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          paginationClickable: true
        }
      }
    },
    computed: {
      caseSwiper () {
        console.log(this.$refs)
        return this.$refs.caseSwiper.swiper
      },
      timelineSwiper () {
        return this.$refs.timelineSwiper.swiper
      }
    },
    methods: {
      routeTo (route) {
        this.$router.push(route)
      }
    },
    mounted () {
      this.caseSwiper.params.control = this.timelineSwiper
      this.timelineSwiper.params.control = this.caseSwiper
      console.log(this.caseSwiper)
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  $font-family:PingFangSC;
  .operator{
    position:absolute;
    right: 22px;
    top: -103px;
    .my-case-title,.agent-case-title{
      width: 122px;
      height: 24px;
      font-family: $font-family;
      font-size: 24px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #39393a;
      float:left;
      margin-top:7px;
    }
    .my-case-radio{
      float:left;
      margin:0px 25px;
      position: relative;
      .my-case-radio-bar{
        width: 72px;
        height: 24px;
        border-radius: 24px;
        background-color: #4990e2;
        border: solid 1px #979797;
        float: left;
        margin-top: 12px;
      }
      .my-case-radio-circle-left{
        width: 36px;
        height: 36px;
        background-color: #ffffff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        border: solid 1px #979797;
        border-radius: 50%;
        position: absolute;
        left: -15px;
        top:5px;
      }
      .my-case-radio-circle-right{
        width: 36px;
        height: 36px;
        background-color: #ffffff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        border: solid 1px #979797;
        border-radius: 50%;
        position: absolute;
        right: -15px;
        top:5px;
      }
    }
  }
  div.my-case-wrapper{
    .case-swiper {
      .swiper-container{
        width: 1440px;
        padding: 15px 0;
      }
      .swiper-slide{
        width: 720px;
        height: 484px;
        .header{
          margin-top:50px;
          .left{
            margin-left:50px;
            float:left;
          }
          .right{
            float:left;
            margin-left:40px;
          }
          .ah{
            width: 460px;
            height: 48px;
            font-family: $font-family;
            font-size: 36px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.33;
            letter-spacing: normal;
            color: #39393a;
            text-align: left;
          }
          .description{
            width: 460px;
            height: 108px;
            font-family: $font-family;
            font-size: 24px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.5;
            letter-spacing: normal;
            color: #898989;
            text-align: left;
            margin-top:20px;
          }
          .type-wrapper{
            width: 100px;
            height: 100px;
            background-color: #4990e2;
            border-radius: 50%;
            margin-top:40px;
          }
          .type{
            width: 65px;
            height: 64px;
            font-family: $font-family;
            font-size: 64px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #ffffff;
            float:left;
            margin:5px 0px 0px 16px;
          }
        }
        .list-wrapper{
          margin:40px 20px;
        }
      }
    }
    .timeline-swiper {
      .swiper-container {
        width: 1440px;
      }
      .swiper-slide{
        width: 400px;
        text-align: center;
        .day {
          font-family: $font-family;
          font-size: 24px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #4a4a4a;
        }
        .dot {
          width: 30px;
          height: 30px;
          background-color: #ffffff;
          border: solid 1px #979797;
          border-radius: 50%;
          margin:5px auto;
          z-index: 200;
          position: relative;
        }
        .dot.current {
          background-color: #4990e2;
        }
        .line {
          border-style: solid;
          border-width: 1px;
          border-color: #979797;
          position: relative;
          top: -22px;
          z-index: 100;
        }
        .year {
          font-family: $font-family;
          font-size: 24px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #9b9b9b;
        }
      }
    }
  }
</style>
