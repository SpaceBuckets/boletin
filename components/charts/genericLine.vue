<template>
  <section class="chart">
       <h2 v-if="title">
        <strong>{{ title }}</strong>. {{subtitle}}
      </h2>
 
    <charts-line
      :data="chartData"
      :options="chartOptions"
      :height="chartHeight"
    />
  </section>
</template>

<script>
export default {
  props: {
    minVal: {
      type: Number,
      required: false,
    },
    maxVal: {
      type: Number,
      required: false,
    },        
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },    
    data: {
      type: String,
      required: false,
    },
    minDate: {
      type: String,
      required: false,
    },
    chartHeight: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      chartOptions: JSON.parse(JSON.stringify(this.$state.chartOptions)),
      chartData: require(`~/json/confluence/${this.data}.json`).chartdata
    };
  },
  created() {

 
    this.chartOptions.scales.xAxes[0].ticks.min = this.minDate;
    this.chartOptions.scales.yAxes[0].ticks.min = this.minVal;
    this.chartOptions.scales.yAxes[0].ticks.max = this.maxVal; 
  },
};
</script>

 