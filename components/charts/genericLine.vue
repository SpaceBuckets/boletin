<template>
  <section>
    <div class="title-container" style="min-width: 100%">
      <h2>
        <strong>{{title}}</strong>
      </h2>
    </div>
    <div class="chartcont">
 
      <charts-line
        v-if="rendered"
        :data="chartData"
        :options="chartOptions"
        :height="chartHeight"
      />
    </div>
  </section>
</template>

<script>
 
export default {
  props: {
   title: {
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
      rendered: false,
      chartData: '',
      chartOptions: JSON.parse(JSON.stringify(this.$state.chartOptions)),

    };
  },
  async created() {
    this.chartOptions.scales.xAxes[0].ticks.min = this.minDate
    this.chartData = this.$kpi[this.data]
     this.rendered = true
  },
};
</script>

 