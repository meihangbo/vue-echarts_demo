import Vue from 'vue'
import Router from 'vue-router'
import Charts from '@/components/charts'

import ECharts from 'vue-echarts/components/ECharts'

Vue.component('qychart', ECharts)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'charts',
      component: Charts
    }
  ]
})
