<template>
  <section class="chart flexedheat">
    <h2>
       Metadata
    </h2>
 

    <div class="flexedcontent nofont">
      <div class="scorecard">
        <p>Frecuencia: {{chart.frec}}</p>
        <p>Fuente: <a :href="chart.fur">{{chart.fu}}</a></p>
        <p>Método: <a :href="chart.fdr">{{chart.fd}}</a></p>
        <p><a style="opacity:0.5;pointer-events:none" :href="chart.data">Descargar Datos <svg style="width:16px;height:auto;margin-right:6px;position:relative;top:2px;" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='#aaa' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'> <polyline fill="none" points="10,75 10,90 90,90 90,75"/> <line x1="50" y1="15" x2="50" y2="65" /> <polyline fill="none" points="30,50 50,65 70,50" /></svg></a></p>
      </div>

    </div>
  </section>
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
      heatdata: "",
    };
  },
  created() {

//console.log(this.chart.chartdata.labels)
    let modifiedArr = this.chart.chartdata.labels.map(function (element) {
      return element.slice(0, -6);
    });

    const obj = {};
    for (let i = 0; i < modifiedArr.length; i++) {
      obj[modifiedArr[i]] = [];
    }

    var currentNum = this.chart.chartdata.datasets[0].data
      .filter((val, index, arr) => (index = arr.length))
      .reverse();

    for (let i = 0; i < currentNum.length; i++) {
      var A = currentNum[i];
      var B = currentNum[i - 1];
      var C = (((B - A) / B) * 100.0).toFixed(2);

      obj[this.chart.chartdata.labels[i].slice(0, -6)].push(C);
    }
    this.heatdata = obj;
    var currentYear = Array(12).fill(0);

    for (let i in obj) {
      if (obj[i].length < 12) {
        const mergeResult = [...obj[i], ...currentYear];
        mergeResult.length = 12;
        obj[i] = mergeResult;
      }
    }
  },
};
</script>

<style lang="scss">
.flexedheat {
  flex: 1;
  padding: 0;
  padding-right: 0px;
  overflow: auto;

  h2 {
    margin-bottom: 3px !important;
  }
  @media only screen and (max-width: 600px) {
    max-width: 100%;
    border: 0;
  }
  .yeartitle {
    min-width: 100%;
    padding-left: 0;
    padding-bottom: 2px;
    padding-top: 12px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: lighter;
    font-size: 13px;
    color: #888;
    height: max-content !important;
  }
  > div {
    max-height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column !important;
      overflow: auto;
    @media only screen and (max-width: 980px) {
  flex-direction: row !important;

    }  
    &.flexedcontent {
      h3 {
        margin-bottom: 0px;
      }
      .grey {
        background: #eee;
      }
      .green {
        background: #00996650;
      }
      .red {
        background: #b2222250;
      }
    }
    > div {
      display: flex;
      flex-wrap: wrap;flex-direction: column;
          @media only screen and (max-width: 980px) {
  flex: 1;

    }  
      > div {
        flex: 1;
        max-width: 34px;
        min-width: 34px;
        height: 25px;
        outline: 0px solid rgba(255,255,255,0.25);
        color: #555;
      }
    }
  }
}



</style>
 