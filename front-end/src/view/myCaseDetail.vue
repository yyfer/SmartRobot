<template>
  <div id="my-case-detail" class="content-wrapper">
    <div class="content">
      <div class="my-case-detail-wrapper">
        <div class="left-side">
          <div class="title">基本信息</div>
          <div class="panel first">
            <div class="panel-bar"></div>
            <div class="header">
              <div class="ah">{{ ah }}</div>
              <div class="description">{{ description }}</div>
            </div>
            <div class="body">
              <div class="list-wrapper clearfix">
                <div class="list" v-for="info,index in infos" v-if="index < 6 ">
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
                <div class="list" v-for="info,index in infos" v-if="index > 5 && index < 8">
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
          <div class="panel second">
            <div class="panel-bar"></div>
            <div class="body">
              <div class="list-wrapper clearfix">
                <div class="list" v-for="info,index in infos" v-if="index > 7 ">
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
        <div class="right-side">
          <div class="title">流程信息</div>
          <div class="panel">
            <div class="panel-bar"></div>
            <div class="timeline-wrapper">
              <div class="timeline clearfix" v-for="timeLine in timeLines">
                <div class="left">
                  <div class="name">{{ timeLine.name }}</div>
                  <div class="date">{{ timeLine.date }}</div>
                </div>
                <div class="middle">
                  <div class="dot current" v-if="timeLine.isCurrent == true"><img :src="timeLine.icon"/></div>
                  <div class="dot" v-if="timeLine.isCurrent == false"><img :src="timeLine.icon"/></div>
                </div>
                <div class="right">
                  <div class="person">{{ timeLine.person }}</div>
                  <div class="step">{{ timeLine.step }}</div>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myCaseDetail',
    data () {
      return {
        ah: '（2017）津1013民初3188号',
        description: '天津科宝商贸有限公司与时芸劳动争议',
        infos: [
          {name: '审判代字', icon: require('../assets/icon_spdz.png'), detail: '民监'},
          {name: '审判流程', icon: require('../assets/icon_splc.png'), detail: '一审'},
          {name: '适用程序', icon: require('../assets/icon_sycx.png'), detail: '简易'},
          {name: '审判性质', icon: require('../assets/icon_spxz.png'), detail: '民事'},
          {name: '审判来源', icon: require('../assets/icon_sply.png'), detail: '未知'},
          {name: '来源地区', icon: require('../assets/icon_lydq.png'), detail: '天津河西区'},
          {name: '立案日期', icon: require('../assets/icon_jarq.png'), detail: '2016-07-16'},
          {name: '结案日期', icon: require('../assets/icon_jarq.png'), detail: '2016-08-14'},
          {name: '立案人', icon: require('../assets/icon_lar.png'), detail: '帕丕将'},
          {name: '承办人', icon: require('../assets/icon_cbr.png'), detail: '史会明'},
          {name: '审判庭', icon: require('../assets/icon_spt.png'), detail: '园区审判庭'},
          {name: '裁判文书', icon: require('../assets/icon_cpws.png'), detail: '民事裁定书'}
        ],
        timeLines: [
          {name: '立案排期', date: '2016年7月19日', person: '帕丕将', step: '立案', isCurrent: false, icon: require('../assets/icon_la.png')},
          {name: '立案排期', date: '2016年7月19日', person: '帕丕将', step: '移送民一庭', isCurrent: false, icon: require('../assets/icon_la.png')},
          {name: '审理', date: '2016年7月23日', person: '史会明', step: '开庭', isCurrent: false, icon: require('../assets/icon_sp.png')},
          {name: '审理', date: '2016年8月7日', person: '史会明', step: '判决', isCurrent: false, icon: require('../assets/icon_sp.png')},
          {name: '结案', date: '2016年8月14日', person: '张铮', step: '结案', isCurrent: true, icon: require('../assets/icon_ja.png')}
        ]
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  $font-family:PingFangSC;
  .my-case-detail-wrapper{
    .title{
      width: 146px;
      height: 36px;
      font-family: $font-family;
      font-size: 30px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #39393a;
      text-align: left;
    }
    .left-side{
      float:left;
      .panel .list-wrapper .list {
        float: left;
        width: 33%;
      }
      .panel.first{
        width: 767px;
        height: 390px;
        margin-top:20px;
        .header{
          text-align: left;
          margin:10px 20px;
          .ah{
            width: 95%;
            height: 48px;
            font-family: $font-family;
            font-size: 30px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.33;
            letter-spacing: normal;
            color: #39393a;
            white-space: nowrap;
            overflow: hidden ;
            text-overflow: ellipsis;
          }
          .description{
            width: 95%;
            height: 36px;
            font-family: $font-family;
            font-size: 18px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.5;
            letter-spacing: normal;
            color: #898989;
            white-space: nowrap;
            overflow: hidden ;
            text-overflow: ellipsis;
            margin:0px 0px 0px 15px;
          }
        }
        .list-wrapper{
          margin:0px 20px;
        }
       }
      .panel.second{
        width: 767px;
        height: 186px;
        margin-top:22px;
        .list-wrapper{
          margin:16px 20px;
        }
      }
    }
    .right-side{
      float:left;
      margin-left:40px;
      .panel{
        width: 454px;
        height: 596px;
        margin-top:20px;
        position:relative;
        .line{
            height: 554px;
            border-style: solid;
            border-width: 1px;
            border-image-source: radial-gradient(circle at 0 50%, #9b9b9b, rgba(0, 0, 0, 0.67) 68%, rgba(0, 0, 0, 0));
            border-image-slice: 1;
            position: absolute;
            left: 105px;
            z-index:100;
            top: 18px;
            left: 225px;
        }
        .left,.right,.middle{
          float:left;
        }
        .left{
          width:39%;
          text-align:right;
        }
        .middle{
          width:20%;
        }
        .right{
          width:39%;
          text-align:left;
        }
        .timeline-wrapper{
          padding:20px;
          .timeline{
            margin-top:42px;
            position:relative;
            z-index:200;
            .name{
              height: 24px;
              font-family: $font-family;
              font-size: 20px;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #4a4a4a;
            }
            .date{
              height: 24px;
              font-family: $font-family;
              font-size: 20px;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #9b9b9b;
            }
            .person{
              height: 24px;
              font-family: $font-family;
              font-size: 20px;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #4a4a4a;
            }
            .step{
              height: 24px;
              font-family: $font-family;
              font-size: 20px;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #9b9b9b;
            }
            .step,.date{
              margin-top:10px;
            }
            .dot{
              width: 50px;
              height: 50px;
              background-color: #ffffff;
              border: solid 1.7px #979797;
              border-radius:50%;
              margin-left:24%;
              img{
                margin-top:10px;
              }
            }
            .dot.current{
              background-color: #4990e2;
            }
          }
        }
      }
    }
  }
</style>
