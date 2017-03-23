/**
* Created by yufan on 2017/3/13.
*/
<template>
  <div id="report" class="content-wrapper">
    <div class="operator">
      <a><i class="print"></i><span @click="print">打印报告</span></a>
    </div>
    <div class="content">
      <div class="case-proof box-wrapper">
        <div class="box">
          <div class="box-title">本案证据</div>
          <div class="box-body">
            <ul class="box-list clearfix">
              <li class="clearfix" v-for="evidence in evidences">
                <div class="box-content blue">{{evidence}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="relative-case box-wrapper">
        <div class="box">
          <div class="box-title">相关案件</div>
          <div class="box-body">
            <ul class="box-list clearfix">
              <li class="clearfix" v-for="ah in relativeAh">
                <div class="box-content green">{{ah}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="people-relative-wrapper">
        <div class="people-relative">
          <div class="people-relative-title">人物关系</div>
          <div class="people-relative-body">
            <div class="graph">
              <PeoplePatterns :peoples="peoples"></PeoplePatterns>
            </div>
          </div>
        </div>
      </div>
      <div class="compensate-range-wrapper">
        <div class="compensate-range">
          <div class="compensate-range-title">赔偿区间</div>
          <div class="compensate-range-body">
            <div class="compensate-range-bar">
              <div class="compensate-range-bar-item" v-for="range in compensateRange" :style="[range.style]">
                <div class="compensate-range-line"></div>
                <div class="compensate-range-oval"></div>
                <div class="compensate-range-content">
                  <span>{{range.name}}</span>
                  <span>¥ {{range.value}}</span>
                  <span :class="{down:range.rate<0,up:range.rate>0}" v-if="range.rate">
                    {{range.rate | filterRate}}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-wrapper" style="margin-top: 60px;">
      <div class="footer">
        <div class="dot" v-for="report in reports" :class="{active:report.active}" @click="routeTo(report.route)"></div>
      </div>
    </div>
  </div>
</template>

<script>
  let PeoplePatterns = require('@/components/PeoplePatterns')
  export default {
    name: 'report2',
    components: {
      PeoplePatterns
    },
    data () {
      return {
        reports: [
          {name: 'report1', active: false, route: {name: 'Report1'}},
          {name: 'report2', active: true, route: {name: 'Report2'}}
        ],
        evidences: [
          '人民币短期借款合同',
          '借款借据',
          '债权转让协议',
          '中国工商银行江苏省分行营业部向中国华融资产管理公司南京办事处转让债权公告'
        ],
        relativeAh: [
          '（2015）津高民申字第136号',
          '（2016）津0105民初8470号',
          '（2017）津0105民特2号',
          '（2016）津0113民初7244号',
          '（2017）津0106民初1441号'
        ],
        compensateRange: [
          {name: '最低赔偿额', value: 10000, rate: 54.5, style: {backgroundColor: '#4990e2', width: '30%'}},
          {name: '评估赔偿额', value: 20000, style: {backgroundColor: '#00bfa5', width: '40%'}},
          {name: '评估赔偿额', value: 25000, rate: -13.6, style: {backgroundColor: '#ffffff', width: '30%'}}
        ],
        peoples: [
          {name: '配偶', src: require('../assets/配偶.png')},
          {name: '朋友', src: require('../assets/朋友.png')},
          {name: '姐姐', src: require('../assets/姐姐.png')},
          {name: '姐夫', src: require('../assets/姐夫.png')},
          {name: '妹妹', src: require('../assets/妹妹.png')},
          {name: '妹夫', src: require('../assets/妹夫.png')}
        ]
      }
    },
    filters: {
      filterRate (v) {
        if (v > 0) {
          return '↑' + Math.abs(v)
        } else {
          return '↓' + Math.abs(v)
        }
      }
    },
    methods: {
      print () {
        // show tips
        this.$emit('modeTipsIn', '请稍后......')
      },
      routeTo (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style lang="scss" src="./scss/report.scss" scoped>
</style>
