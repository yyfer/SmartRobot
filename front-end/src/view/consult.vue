<template>
  <div class="consult">
    <div class="left">
      <div class="title">对话小津</div>
      <div class="chat_panel">
        <ul>
          <li v-for="(content,index) in contents" :class="{left:content.type === 'robot',right: content.type !== 'robot'}" :key="index">
            <img :src="content.avatar" alt="">
            <div>
              <p class="name">{{content.name}} {{content.time}}</p>
              <p class="says" v-show="content.saying">{{content.saying}}</p>
              <p class="img" v-show="content.image" @click="modeImageIn(content.image)">
                <img :src="content.image" alt="...">
                <ModeLook>
                  <div class="single"><img src="../assets/查看.png" alt="..."></div>
                </ModeLook>
              </p>
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
      <div class="title">快速提问</div>
      <ul>
        <li v-for="tool in tools" @click="quickQuestion">
          <img :src="tool.logo" alt="">
          <div>
            <p class="title">{{tool.title}}</p>
            <p class="info">{{tool.info}}</p>
          </div>
        </li>
        <ModeTips
          v-show="mode.tools"
          v-on:cancel="cancelQuestion"
          content="小津正在分析，请稍后..."
        >
        </ModeTips>
      </ul>
    </div>
  </div>
</template>

<script>
  let ModeTips = require('@/components/ModeTips')
  let ModeLook = require('@/components/ModeLook')
  let contents = []
  let requestTimer = null
  export default {
    name: 'consult',
    components: {
      ModeTips,
      ModeLook
    },
    beforeCreate () {
      contents = [{
        type: 'robot',
        name: '小津',
        avatar: require('../assets/xiaojin.png'),
        time: '2017/02/19 18:52',
        saying: '请描述你要咨询的问题，方便小津了解你的情况。'
      },
      {
        type: 'human',
        name: '吴颖茜',
        avatar: require('../assets/wuyingxi.png'),
        time: '2017/02/19 18:52',
        saying: '你好，我想问下我现在起诉多久能判啊？再就是我想要孩子的监护权我都需要做什么呢？彩礼钱算共同财产吗？'
      },
      {
        type: 'robot',
        name: '小津',
        avatar: require('../assets/xiaojin.png'),
        time: '2017/02/19 18:52',
        image: require('../assets/multi-line-chart-light.png')
      }]
    },
    data () {
      return {
        contents: contents,
        caseInfo: {
          area: ['天津', '和平'],
          type: ['民事', '医疗纠纷']
//          typeIcon: ['民', '医']
        },
        tools: [
          {title: '我的案件', info: '简要叙述案情，包括当事人，不要写真实姓名及地', logo: require('../assets/我的.png')},
          {title: '诉讼指南', info: '简要叙述案情，包括当事人，不要写真实姓名及地', logo: require('../assets/诉讼指南.png')},
          {title: '开庭公告', info: '简要叙述案情，包括当事人，不要写真实姓名及地', logo: require('../assets/开庭公告.png')},
          {title: '常见问题', info: '简要叙述案情，包括当事人，不要写真实姓名及地', logo: require('../assets/常见问题.png')},
          {title: '法律法规', info: '简要叙述案情，包括当事人，不要写真实姓名及地', logo: require('../assets/法律法规.png')}
        ],
        mode: {
          tools: false
        }
      }
    },
    computed: {
      caseArea () {
        return Array.prototype.join.call(this.caseInfo.area, ' ')
      },
      caseType () {
        return Array.prototype.join.call(this.caseInfo.type, ' ')
      }
    },
    methods: {
      modeImageIn (src) {
        let width = 700
        let height = 214
        this.$emit('modeImageIn', '类案趋势', src, width, height)
      },
      quickQuestion () {
        // 快速提问请求处理
        let self = this
        requestTimer = setTimeout(function () {
          contents.push({
            type: 'robot',
            name: '小津',
            avatar: require('../assets/xiaojin.png'),
            time: '2017/02/19 18:52',
            image: require('../assets/multi-line-chart-light.png')
          })
          self.mode.tools = !self.mode.tools
        }, 2000)
        // 打开mode
        this.mode.tools = !this.mode.tools
      },
      cancelQuestion () {
        // 取消请求处理
        if (requestTimer) {
          clearTimeout(requestTimer)
        }
        // 关闭mode
        this.mode.tools = !this.mode.tools
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  $box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  // consult
  div.consult{
    position: relative;
    margin: 56px 70px 0 70px;
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
    div.left{
      position:relative;
      width: 790px;
      float: left;
      //consult-chat_panel
      .chat_panel{
        height: 526px;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: #ffffff;
        box-shadow: $box-shadow;
        li{
          display: inline-block;
          width: 100%;
          margin-top: 30px;
          &>img{
            position: relative;
            width: 103px;
            height: 103px;
            object-fit: fill;
          }
          &>div{
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
            p.img{
              position: relative;
              border: solid 1px #9b9b9b;
              padding: 10px;
              &:hover{
                cursor: pointer;
              }
              &:hover div.modeLook{
                display: flex;
              }
              &>img{
                width: 420px;
                height: 216px;
                object-fit: contain;
              }
            }
          }
        }
        li:last-child{
          margin-bottom: 30px;
        }
        li.left{
          &>img{
            float: left;
            margin-left: 50px;
          }
          &>div{
            float: left;
            p{
              float: left;
            }
          }
        }
        li.right{
          &>img{
            float: right;
            margin-right: 50px;
          }
          &>div{
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
      ul{
        position: relative;
      }
      li{
        display: inline-block;
        width: 100%;
        height: 110px;
        margin-bottom: 20px;
        box-shadow: $box-shadow;
        &:last-of-type{
          margin: 0;
        }
        &:hover{
          cursor: pointer;
        }
        img{
          width: 50px;
          height: 50px;
          float: left;
          margin: 30px 0 30px 30px;
        }
        div{
          height: 70px;
          float: left;
          margin: 20px 0 20px 30px;
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
            height: 36px;
            line-height: 1.5;
            color: #9b9b9b;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>
