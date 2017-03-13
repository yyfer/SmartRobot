/**
* Created by yufan on 2017/3/13.
*/
<template>
  <div id="report" class="content-wrapper">
    <div class="content">
      <div class="dispute-case box-wrapper">
        <div class="box">
          <div class="box-title">争议焦点</div>
          <div class="box-body">
            <ul class="box-list clearfix">
              <li class="clearfix" v-for="topic in topics">
                <div class="box-content blue">{{topic}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="case-wrapper">
        <div class="case">
          <div class="case-title">类案趋势</div>
          <div class="case-body">
            <div class="chart" v-for="chart in charts">
              <img :src="chart.src" :style="[chart.style]">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-wrapper">
      <div class="footer">
        <div class="dot" v-for="report in reports" :class="{active:report.active}" @click="routeTo(report.route)"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'report1',
    data () {
      return {
        reports: [
          {name: 'report1', active: true, route: 'Report1'},
          {name: 'report2', active: false, route: 'Report2'}
        ],
        topics: [
          '原告第一联合的与诉讼主体相关系列问题。具体体现在原告第一联合是否为被告江南公司的债权人。',
          '原告第一联合所主张的债权（保证债权）是否存在诉讼时效问题。',
          '资产管理司法解释能否适用于本案。',
          '资产管理司法解释能否适用于本案。',
          '《担保法》的理解与适用问题。',
          '担保法司法解释的理解与适用问题。',
          '江南公司是否承担连带保证责任。'
        ],
        charts: [
          {style: {width: '760px', height: '223px'}, src: require('../assets/line-chart-light-test.png')},
          {style: {width: '760px', height: '391px'}, src: require('../assets/multi-line-chart-light-test.png')}
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

<style lang="scss" rel="stylesheet/scss" type="text/css">
  @import url('./css/report.css');
</style>
