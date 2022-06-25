<template>
  <section class="chart">
       <h2 v-if="!title">
        <strong>{{ chart.t }}</strong>. {{chart.st}}
      </h2>
    <h2 v-if="title">
        <strong>{{ title }}</strong>. {{subtitle}}
    </h2>
    
    <div style="position: absolute;top: 55px;bottom: 15px;left: 20px;right:15px">
                  
    <charts-line
    style="position: absolute;top: 0;bottom: 0;left: 0;right:0"
      :chart="chart"
    />
    </div>

  </section>
</template>

<script>
 
export default {
  props: {  
    altTitle: {
      type: String,
      required: false
    },       
    edit: {
      type: Boolean,
      required: false
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
    chartHeight: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      chart: require(`~/json/confluence/${this.data}.json`)
    };
  },
  created() {
      //this.chartOptions.scales.xAxes[0].ticks.min = this.minDate;

 
     //this.chartOptions.scales.yAxes[0].ticks.max = this.chart.max; 

    },
};
</script>

 <style lang="scss">
select#fecha {
      margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 2px;
 }
 </style>