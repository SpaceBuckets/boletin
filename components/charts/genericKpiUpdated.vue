<template>
  <section class="chart">
      <h2>
         Último Dato
      </h2>
 
    <div class="numcontain" >
       <h4>{{getLastUpdated()}}</h4>
 
     <h5 :class="{ negative: getVariation(0) < 0 }">
{{getLastValue()}}
        <svg viewBox="0 0 100 100" class="triangle" style="width: 0.6875em; height: 0.6875em;"><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon></svg> {{getVariation(0)}}%
        
      </h5>
          
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
  created() {
    //console.log(this.chart)
  },
    methods: {
      getLastValue() {
        
var lastValue = JSON.parse(JSON.stringify(this.chart.chartdata.datasets[0].data[0]));
return lastValue
      },
    getVariation(i) {
      var currentNum = this.chart.chartdata.datasets[0].data
        .filter((val, index, arr) => index > arr.length - 24)
        .reverse();
      var A = currentNum[i];
      var B = currentNum[i + 1];
      return (((A - B) / A) * 100.0).toFixed(2);
    },    
    getLastUpdated() {
      const formatter = new Intl.DateTimeFormat("es", {
         month: "long",
        year: "numeric",
      });

     var date = new Date(this.chart.chartdata.labels.slice(-1)[0])
     var day = 60 * 60 * 24 * 1000;

      date = date.setDate(date.getDate() + 1)


      const lastupdate = formatter.format(date);
      var day = this.chart.chartdata.labels.slice(-1)[0].slice(-2)
      if (day === "01" || day === "02") {
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
    text-align: center;
    position: absolute;top: 70px;bottom: 15px;left: 15px;right:15px;
     @media only screen and (max-width: 980px) {
           top: 0;
           bottom: 0;
           left: initial;
           h4 {
            margin: 0;
            font-size: 20px;
           }
           }
 }
 
h4 {
  font-size: 18px;
  text-align: center;
  margin: 0;
  margin-bottom: 8px;
  text-transform: capitalize;
 }
h5 {
  font-size: 18px;
  margin: 0;
  margin-top: 5px;
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

.chart {
  position:relative;
}

</style>