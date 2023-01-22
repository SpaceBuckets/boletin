<template>
  <section class="chart">
    <h2>
      <strong>Variación Interanual</strong>
    </h2>
    <div class="numcontain" style="position: absolute;top: 55px;bottom: 15px;left: 15px;right:15px">
      <h4 :class="{ negative: getCapiInterVariation(0) < 0 }"><svg viewBox="0 0 100 100" class="triangle" style="width: 0.6875em; height: 0.6875em;"><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon></svg> {{getCapiInterVariation(0)}}%</h4>
      
    </div>
  </section>
</template>

<script>
   

export default {
  props: {
    data: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      chart: require(`~/static/data/${this.data}.json`),
    };
  },
  created() {},
  methods: {
    getCapiInterVariation(i) {
      var A = this.chart.chartdata.datasets[i].data.slice(-1)[0];
      var B = this.chart.chartdata.datasets[i].data.slice(-10)[0];
      return (((A - B) / A) * 100.0).toFixed(2);
    },
  },
};
</script>

 <style lang="scss" scoped>
a { 
  text-align: center;
}
 .numcontain {
   display: flex;
   flex-direction: column;
    justify-content: center;
 }
 h2 {
   margin-bottom: 0 !important;
   max-height: 20px;
   overflow: hidden;
 }
h4 {
  font-size: 20px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  text-transform: capitalize;
  color: #009966;
    svg { 
      fill: #009966; 
       }
  &.negative {
    color: #b22222;
    svg { 
      fill: #b22222; 
      transform: rotate(180deg)
      }

  }
 }
h5 {
  font-size: 18px;
  margin: 0;
  text-align: center;
  color: #009966;
    svg { 
      fill: #009966; 
       }
  &.negative {
    color: #b22222;
    svg { 
      fill: #b22222; 
      transform: rotate(180deg)
      }

  }
}
</style>