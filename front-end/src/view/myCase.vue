<template>
  <div id="myCase" class="content-wrapper">
    <div class="content">
        <div class="my-case-wrapper">
          <div class="left-side">
            <div class="header clearfix">
              <div class="my-case-title">我的案件</div>
              <div class="my-case-radio">
                <div class="my-case-radio-bar"></div>
                <div class="my-case-radio-circle"></div>
              </div>
              <div class="agent-case-title">代理案件</div>
            </div>
            <div class="my-case-panel-wrapper" @click="routeTo('MyCaseDetail')">
              <div class="panel my-case-panel third void">
                <div class="panel-bar my-case-panel-bar"></div>
              </div>
              <div class="panel my-case-panel second void">
                <div class="panel-bar my-case-panel-bar"></div>
              </div>
              <div class="panel my-case-panel first">
                <div class="panel-bar my-case-panel-bar"></div>
                <div class="my-case-panel-body">
                  <div class="header clearfix">
                    <div class="left">
                      <div class="ah">{{ ah }}</div>
                      <div class="description">{{ description }}</div>
                    </div>
                    <div class="right">
                      <div class="type-wrapper"><div class="type">{{ type }}</div></div>
                    </div>
                  </div>
                  <div class="list-wrapper clearfix">
                    <div class="list" v-for="info,index in infos" v-if="index == 0 || index == 1">
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
                    <div class="list" v-for="info,index in infos" v-if="index == 2 || index == 3">
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
              </div>
            </div>
          </div>
          <div class="right-side">
            <div class="timeline-wrapper">
              <div v-for="timeLine in timeLines" class="timeline clearfix">
                <div class="year" v-if="timeLine.isShow == true">{{ timeLine.year }}</div>
                <div class="year hidden" v-else>{{ timeLine.year }}</div>
                <div class="dot current" v-if="timeLine.isCurrent == true"></div>
                <div class="dot" v-else></div>
                <div class="monthDay">{{ timeLine.monthDay }}</div>
              </div>
              <div class="line"></div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myCase',
    data () {
      return {
        ah: '（2016）津01民初76号',
        description: '招商银行股份有限公司天津分行与天津市亿君成商贸有限公司，航天科工哈尔滨风华有限公司，姜昊保理合同纠纷',
        type: '律',
        infos: [
          {name: '承办人', icon: require('../assets/icon_cbr.png'), detail: '史会明'},
          {name: '审判庭', icon: require('../assets/icon_spt.png'), detail: '园区审判庭'},
          {name: '立案日期', icon: require('../assets/icon_larq.png'), detail: '2016-07-16'},
          {name: '结案日期', icon: require('../assets/icon_jarq.png'), detail: '2016-08-14'}
        ],
        timeLines: [
          {year: '2016年', monthDay: '2月9日', isShow: true, isCurrent: false},
          {year: '2016年', monthDay: '7月16日', isShow: false, isCurrent: true},
          {year: '2016年', monthDay: '12月4日', isShow: false, isCurrent: false},
          {year: '2017年', monthDay: '1月26日', isShow: true, isCurrent: false},
          {year: '2017年', monthDay: '3月5日', isShow: false, isCurrent: false}
        ]
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
  $font-family:PingFangSC;
  div.my-case-wrapper{
    .left-side{
      float:left;
      .my-case-title,.agent-case-title{
        width: 146px;
        height: 36px;
        font-family: $font-family;
        font-size: 36px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #39393a;
        float:left;
      }
      .my-case-radio{
        float:left;
        margin:0px 40px;
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
        .my-case-radio-circle{
          width: 48px;
          height: 48px;
          background-color: #ffffff;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
          border: solid 1px #979797;
          border-radius: 50%;
          position: absolute;
          right: -15px;
        }
      }
      .my-case-panel-wrapper{
        margin-top:60px;
        position: relative;
        .my-case-panel.first{
          width: 700px;
          height: 484px;
          position: relative;
          z-index:1000;
          top:80px;
          cursor:pointer;
        }
        .my-case-panel.second{
          width: 630px;
          height: 436px;
          opacity: 0.4;
          background-color: #ffffff;
          position: absolute;
          z-index:900;
          top:40px;
          left:5%;
        }
        .my-case-panel.third{
          width: 560px;
          height: 387px;
          opacity: 0.2;
          background-color: #ffffff;
          box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
          position: absolute;
          z-index:800;
          left:10%;
        }
        .my-case-panel{
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
    }
    .right-side{
      float:left;
      .timeline-wrapper{
        position: relative;
        margin-left:95px;
        top: -100px;
        .line{
          height: 750px;
          border-style: solid;
          border-width: 1px;
          border-image-source: radial-gradient(circle at 0 50%, #9b9b9b, rgba(0, 0, 0, 0.67) 68%, rgba(0, 0, 0, 0));
          border-image-slice: 1;
          position: absolute;
          left: 105px;
          z-index:100;
          top:-70px;
        }
        .timeline{
          position: relative;
          z-index:200;
          margin-top:110px;
          .year,.monthDay,.dot{
            float:left;
          }
          .year{
            height: 24px;
            font-family: $font-family;
            font-size: 24px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #9b9b9b;
          }
          .year.hidden{
            opacity: 0;
          }
          .monthDay{
            height: 24px;
            font-family: $font-family;
            font-size: 24px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #4a4a4a;
          }
          .dot{
            width: 30px;
            height: 30px;
            background-color: #ffffff;
            border: solid 1px #979797;
            border-radius: 50%;
            margin:0px 10px;
          }
          .dot.current{
            background-color: #4990e2;
          }
        }
        .timeline:first-child{
          margin-top:150px;
        }
      }
    }
  }
</style>
