<template>
  <section class="sidemaster">
 
    <div>
      <h4>{{getLastUpdated()}}</h4>
      <h5 :class="{ negative: getVariation(0) < 0 }">{{getLastValue()}}
        <svg viewBox="0 0 100 100" class="triangle" style="width: 0.6875em; height: 0.6875em;"><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon></svg> {{getVariation(0)}}%
      </h5>
    </div>



 
    <div class="scorecard">
      <p>Frecuencia: {{chart.frec}}</p>
      <p>Fuente: <a target="_blank" :href="chart.fur">{{chart.fu}}</a></p>
      <p>Método: <a target="_blank" :href="chart.fdr">{{chart.fd}}</a></p>
      <p>Datos: <a style="opacity:0.5;pointer-events:none" :href="chart.data">Descargar <svg style="width:16px;height:auto;margin-right:6px;position:relative;top:2px;" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='#aaa' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'> <polyline fill="none" points="10,75 10,90 90,90 90,75"/> <line x1="50" y1="15" x2="50" y2="65" /> <polyline fill="none" points="30,50 50,65 70,50" /></svg></a></p>
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
        
var lastValue = JSON.parse(JSON.stringify(this.chart.chartdata.datasets[0].data.slice(-1)[0]));
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

.sidemaster {
  p:only-child {
    margin: 0;
  }
  > div {
    border-bottom: 2px solid #eee;
    margin-bottom: 20px;
    padding-bottom: 20px;
    &:last-child {
      border: 0;
      padding: 0;
      margin: 0;
    }
    &:first-child {
      margin-top: 10px;
    }
  }
}

a { 
  text-align: center;
}
 .numcontain {
   display: flex;
   flex-direction: column;
    justify-content: center;
    text-align: left;
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
  margin-bottom: 10px;
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
  h2 {
    padding-bottom: 10px !important;
  }
}

</style>