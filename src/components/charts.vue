<template>
  <div class="page-container">
    <qychart :options="gyyChart1" auto-resize></qychart>
  </div><!-- / .page-container -->
</template>
<script>

import 'echarts'

let gyyChart1 = {
  legend: {left: 'center', data: ['数据一', '数据二']},
  animation: true,
  animationDuration: 6000,
  color: ['#e24f62', '#fca601'],
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  xAxis: [{ type: 'category' }],
  yAxis: {},
  series: [
    { type: 'line' },
    { type: 'line' }
  ],
  dataset: {
    source: [
      ['product', '数据一', '数据二'],
      ['2012年', 4284, 772],
      ['2013年', 4489, 787],
      ['2014年', 5081, 826],
      ['2015年', 5413, 973],
      ['2016年', 5862, 856]
    ]
  }
}

export default {
  data () {
    return {
      gyyChart1
    }
  }
}

</script>
