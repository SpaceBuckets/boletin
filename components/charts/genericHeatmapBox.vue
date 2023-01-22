<template>
  <section class="chart flexedheat">
    <h2>
       Variación Intermensual
    </h2>
 

    <div class="flexedcontent nofont">
      <div v-for="(pepe, e) in heatdata" :key="`aa${e}`">
        <div
          class="grey"
          :class="{ red: popo < 0, green: popo > 0 }"
          v-for="(popo, u) in heatdata[e]"
          :key="`aa${u}`"
        ></div>
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
    margin-bottom: 2px !important;
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
    flex-direction: column-reverse;
      overflow: auto;

    &.flexedcontent {
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
      flex-wrap: wrap;
      > div {
        flex: 1;
        max-width: 17px;
        min-width: 17px;
        height: 17px;
        border: 1px solid rgba(255,255,255,0.25);
        color: #555;
      }
    }
  }
}
</style>
 