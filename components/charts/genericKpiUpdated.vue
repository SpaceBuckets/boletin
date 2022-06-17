<template>
  <section class="chart">
    <h2>
       <strong>Última Actualización</strong>
    </h2>
    <div class="numcontain" style="position: absolute;top: 30px;bottom: 15px;left: 15px;right:15px">
      <h4>{{getLastUpdated()}}</h4>
      <a :href="chart.f">Fuente: INDEC</a>
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
      chart: require(`~/json/confluence/${this.data}.json`),
    };
  },
  created() {},
  methods: {
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
      console.log(lastupdate)
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
 }
 h2 {
   margin-bottom: 0 !important;
   max-height: 20px;
   overflow: hidden;
 }
h4 {
  font-size: 24px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  text-transform: capitalize;
 }
h5 {
  font-size: 20px;
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