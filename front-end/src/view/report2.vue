/**
* Created by yufan on 2017/3/13.
*/
<template>
  <div id="report" class="content-wrapper">
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
            <div class="graph"></div>
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
  export default {
    name: 'report2',
    data () {
      return {
        reports: [
          {name: 'report1', active: false, route: 'Report1'},
          {name: 'report2', active: true, route: 'Report2'}
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
      routeTo (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  @import url('./css/report.css');
</style>
