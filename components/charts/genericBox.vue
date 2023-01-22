<template>
  <div class="footerpepe">
  <div>Ver Indicador al Azar</div>
 
 
 
  </div>
</template>

<script>
   

export default {
  props: {
    altTitle: {
      type: String,
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
      chart: require(`~/static/data/${this.data}.json`),
    };
  },
  methods: { 
     filteredArray() {
      return this.chart.chartdata.labels
        .filter((val, index, arr) => index > arr.length - 23)
        .reverse();
    },
    getVariation(i) {
      var currentNum = this.chart.chartdata.datasets[0].data
        .filter((val, index, arr) => index > arr.length - 24)
        .reverse();
      var A = currentNum[i];
      var B = currentNum[i + 1];
      return (((A - B) / A) * 100.0).toFixed(2);
    },    
  },
};
</script>

 <style scoped>
 
 
 </style>