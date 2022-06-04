<template>
  <section>
    <div class="title-container" style="min-width: 100%">
      <h2>
        <strong>Balanza Comercial</strong>
      </h2>
    </div>
    <div class="chartcont">
 
      <charts-line
        v-if="rendered"
        :key="updated"
        :data="chartData"
        :options="chartOptions"
        :height="chartHeight"
      />
    </div>
  </section>
</template>

<script>
import { rechartData } from "~/plugins/balanza.js";


export default {
  props: {
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
      updated: 0,
      chartData: '',
      chartOptions: this.$state.chartOptions,

    };
  },
  async created() {
    this.chartOptions.scales.xAxes[0].ticks.min = this.minDate
    this.chartData = await rechartData()
    this.rendered = true
  },
};
</script>

 