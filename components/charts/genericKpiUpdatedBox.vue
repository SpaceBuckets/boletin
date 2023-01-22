<template>
  <section class="chart">
       <h2 style="text-transform:capitalize"><strong>{{getLastUpdated()}}</strong></h2>

    <div class="numcontain" >
      {{getSafeKpi(0) }}
      <span :class="{ negative: getCapiVariation(0) < 0 }">
        <svg viewBox="0 0 100 100" class="triangle" style="width: 0.6875em; height: 0.6875em;"><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon></svg>
        {{getCapiVariation(0) }}

      </span>

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
 
  methods: {
    getSafeKpi(i) {
      return parseFloat(
        this.chart.chartdata.datasets[0].data.slice(-1)[0]
      ).toFixed(2);
    },
    getCapiVariation(i) {
      var A = this.chart.chartdata.datasets[i].data.slice(-1)[0];
      var B = this.chart.chartdata.datasets[i].data.slice(-2)[0];
      return parseFloat(((A - B) / A) * 100.0).toFixed(2);
    },
 
    getLastUpdated() {
      const formatter = new Intl.DateTimeFormat("es", {
         month: "long",
        year: "numeric",
      });

     var date = new Date(this.chart.chartdata.labels.slice(-1)[0])
     var day = 60 * 60 * 24 * 1000;

      date = date.setDate(date.getDate() + 1)


      const lastupdate = formatter.format(
date
      );
       var day = this.chart.chartdata.labels.slice(-1)[0].slice(-2)
      if (day === "01") {
       return lastupdate.replace("de","").replace(" ","");

      }
            else {
       return day + " " + lastupdate.replace("de","").replace(" ","");

      }
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
    padding-top: 5px;
    font-size: 16px;
 }
 h2 {
   margin-bottom: 0 !important;
   max-height: 20px;
   overflow: hidden;
 }
h4 {
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;
  text-transform: capitalize;
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

section {
  border-top: 1px solid #eee;
  padding-top: 20px;
  margin-top: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  margin-bottom: 10px;  
}
span {
  color: #009966;
  display: inline-block;
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