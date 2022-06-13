import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['chart', 'options'],
  data() {
    return {
      chartOptions: this.$state.chartOptions,
    };
  },
  mounted() {
     this.chartOptions.scales.xAxes[0].ticks.min = this.$state.kpidates[this.chart.kpi]; 
    this.chartOptions.scales.yAxes[0].ticks.max = this.chart.max; 
    this.chartOptions.scales.yAxes[0].ticks.min = this.chart.min; 
    this.renderLineChart();
  },
  computed: {
    chartData: function() {
      return this.chart.chartdata;
    }
  },
  methods: {
    renderLineChart: function() {
      this.renderChart(this.chart.chartdata, this.chartOptions)
    }
  },
  watch: {
    data: function() {
      this._chart.destroy();
      //this.renderChart(this.data, this.options);
      this.renderLineChart();
    }
  }
}