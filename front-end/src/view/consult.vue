<template>
  <div class="consult">
    <div class="left">
      <div class="chat_panel">
        <ul>
          <li v-for="(content,index) in contents" :class="{left:index%2===0,right:index%2===1}">
            <img :src="content.avatar" alt="">
            <div>
              <p class="name">{{content.name}} {{content.time}}</p>
              <p class="says">{{content.saying}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="info">
        <div class="tips">
          <p class="title">地区</p>
          <p>{{caseArea}}</p>
        </div>
        <div class="tips">
          <p class="title">案件类型</p>
          <p>{{caseType}}</p>
        </div>
        <div class="icon">
          <span v-for="icon in caseInfo.typeIcon">{{icon}}</span>
        </div>
      </div>
    </div>
    <div class="tools">
      <ul>
        <li v-for="tool in tools">
          <img :src="tool.logo" alt="">
          <div>
            <p class="title">{{tool.title}}</p>
            <p class="info">{{tool.info}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'consult',
    data () {
      return {
        contents: [
          {
            name: '小津',
            avatar: require('../assets/xiaojin.png'),
            time: '2017/02/19 18:52',
            saying: '请描述你要咨询的问题，方便小津了解你的情况。'
          },
          {
            name: '吴颖茜',
            avatar: require('../assets/profile1.png'),
            time: '2017/02/19 18:52',
            saying: '你好，我想问下我现在起诉多久能判啊？再就是我想要孩子的监护权我都需要做什么呢？彩礼钱算共同财产吗？'
          },
          {
            name: '小津',
            avatar: require('../assets/xiaojin.png'),
            time: '2017/02/19 18:52',
            saying: '一般情况下，三到六个月会判。但是第一次不会判决离婚，可能要到第二次和第三次。'
          }
        ],
        caseInfo: {
          area: ['天津', '和平'],
          type: ['民事', '医疗纠纷'],
          typeIcon: ['民', '医']
        },
        tools: [
          {title: '我的案件', info: '简要叙述案情，包括当事人，不要写真实姓名及地', logo: require('../assets/mine.png')},
          {title: '诉讼指南', info: '简要叙述案情，包括当事人，不要写真实姓名及地', logo: require('../assets/guide.png')},
          {title: '开庭公告', info: '简要叙述案情，包括当事人，不要写真实姓名及地', logo: require('../assets/notation.png')},
          {title: '常见问题', info: '简要叙述案情，包括当事人，不要写真实姓名及地', logo: require('../assets/case.png')}
        ]
      }
    },
    computed: {
      caseArea () {
        return Array.prototype.join.call(this.caseInfo.area, ' ')
      },
      caseType () {
        return Array.prototype.join.call(this.caseInfo.type, ' ')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  $box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  // consult
  div.consult{
    position: relative;
    margin: 101px 70px 0 70px;
    font-size: 24px;
    z-index: 1;
    div.left{
      position:relative;
      width: 790px;
      box-shadow: $box-shadow;
      float: left;
      //consult-chat_panel
      .chat_panel{
        height: 526px;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: #ffffff;
        li{
          display: inline-block;
          width: 100%;
          margin-top: 30px;
          img{
            position: relative;
            width: 103px;
            height: 103px;
            object-fit: fill;
          }
          div{
            position: relative;
            display: inline-block;
            width: 480px;
            margin: 0 29px;
            p.name{
              position: relative;
              height: 24px;
              margin: 4px 0 0 0;
              color: #39393a;
            }
            p.says{
              line-height: 1.5;
              margin: 14px 0 0 0;
              color: #898989;
            }
          }
        }
        li:last-child{
          margin-bottom: 30px;
        }
        li.left{
          img{
            float: left;
            margin-left: 50px;
          }
          div{
            float: left;
            p{
              float: left;
            }
          }
        }
        li.right{
          img{
            float: right;
            margin-right: 50px;
          }
          div{
            float: right;
            p{
              float: right;
              &.name{
                text-align: right;
              }
            }
          }
        }
      }
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
      box-shadow: $box-shadow;
      ul{
        position: relative;
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
    div.tools{
      position:relative;
      width: 478px;
      float: right;
      li{
        display: inline-block;
        width: 100%;
        height: 146px;
        margin-bottom: 16px;
        box-shadow: $box-shadow;
        &:hover{
          cursor: pointer;
        }
        img{
          width: 70.5px;
          height: 80px;
          float: left;
          margin: 33px 0 33px 40px;
        }
        div{
          height: 106px;
          float: left;
          margin: 20px 0 20px 29.5px;
          border-left: 2px solid #9b9b9b;
          p{
            width: 278px;
            margin: 0 0 0 30px;
          }
          p.title{
            height: 24px;
            color: #4a4a4a;
            margin-bottom: 10px;
          }
          p.info{
            height: 72px;
            line-height: 1.5;
            color: #9b9b9b;
          }
        }
      }
    }
  }
</style>
