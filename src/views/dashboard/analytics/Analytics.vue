<template>
  <section id="dashboard-analytics">
    <b-row class="match-height">
      <b-col
        lg="6"
        md="12"
      >
        <analytics-congratulation :data="data.congratulations" />
      </b-col>
      <b-col
        lg="6"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="data.subscribersGained"
          icon="StarIcon"
          :statistic="kFormatter(data.subscribersGained.analyticsData.subscribers)"
          statistic-title="Puntos acumulados"
          :chart-data="data.subscribersGained.series"
        />
      </b-col>
    </b-row>

    <b-row class="match-height">
      <b-col lg="6">
        <ChartjsBarChart />
        <!--        <analytics-avg-sessions :data="data.avgSessions" />-->
      </b-col>
      <b-col lg="6">
        <b-card no-body>
          <b-card-body>
            <b-card-title>Aguacate Hash</b-card-title>
            <b-card-sub-title> Recomendacion</b-card-sub-title>
          </b-card-body>
          <b-img
            fluid
            width="320"
            style="margin: auto"
            :src="require('@/assets/images/elements/aguacate-hash.webp')"
            alt="Card image cap"
          />
          <b-card-body>
            <b-card-text><i>Basado en tu habito de consumo</i></b-card-text>
            <b-link class="card-link" href="https://www.lavanguardia.com/comer/frutas/20180614/3433/aguacate-propiedades-beneficios-valor-nutricional.html" target="_blank">
              Conoce aqui sus beneficios
            </b-link>
          </b-card-body>
        </b-card>
        <!--        <analytics-support-tracker :data="data.supportTracker" />-->
      </b-col>
    </b-row>

    <!--    <b-row>
      <b-col cols="12">
        <invoice-list />
      </b-col>
    </b-row>-->
  </section>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BCardBody, BCardTitle, BCardSubTitle, BLink, BImg,
} from 'bootstrap-vue'

import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import { kFormatter } from '@core/utils/filter'
// import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'
import AnalyticsCongratulation from './AnalyticsCongratulation.vue'
// import AnalyticsAvgSessions from './AnalyticsAvgSessions.vue'
// import AnalyticsSupportTracker from './AnalyticsSupportTracker.vue'
// import AnalyticsTimeline from './AnalyticsTimeline.vue'
import ChartjsBarChart from '../../charts-and-maps/charts/chartjs/ChartjsBarChart.vue'

export default {
  components: {
    BCard,
    BCardText,
    BCardBody,
    BCardTitle,
    BCardSubTitle,
    BLink,
    BImg,
    BRow,
    BCol,
    AnalyticsCongratulation,
    StatisticCardWithAreaChart,
    ChartjsBarChart,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/analytics/data')
      .then(response => { this.data = response.data })
  },
  methods: {
    kFormatter,
  },
}
</script>
