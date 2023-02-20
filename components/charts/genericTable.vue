<template>
  <section class="chart flexedtable">
       <h2 v-if="!title">
        <strong>{{ chart.t }}</strong>. {{chart.st}}
      </h2>
    <h2 v-if="title">
        <strong>{{ title }}</strong>. {{subtitle}}
    </h2>

    <div class="flexedcontent">
          <div>
         <div>Fecha</div>
        <div>Valor</div>
        <div>Variacion</div>
     </div>
       <div v-for="(date, i) in kpi.chart.dates.slice(0,24).reverse()" :key="`aa${i}`">
        <div>{{ date.x }}</div>
        <div>
          {{
            date.y
             
          }}
        </div>
        <div class="green" :class="{ red: getVariation(i) < 0 }">
          {{ getVariation(i) + "%" }}
        </div> 
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
      kpi: require(`~/static/data/${this.data}.json`),
    };
  },
  methods: {
    getVariation(i) {
      var A = this.kpi.chart.dimensions[0].data[this.kpi.chart.dimensions[0].data.length-1].y;
      var B = this.kpi.chart.dimensions[0].data[this.kpi.chart.dimensions[0].data.length-2].y;
      return (((A - B) / A) * 100.0).toFixed(2);
    },    
  },
};
</script>

<style lang="scss">
.flexedtable {
  flex: 1;
  padding: 0;
  padding-right: 0px;

  @media only screen and (max-width: 600px) {
    max-width: 100%;
    border: 0;
  }
  > div {
    max-height: 100%;
    overflow: auto;
    display: flex;
    &.flexedcontent {
      flex-direction: column;
      .green {
        background: #00996620;
      }
      .green.red {
        background: #b2222220;
      }
    }
    > div {
      flex: 1;
      display: flex;
      gap: 20px;
      border-bottom: 1px solid #eee;

      > div {
        flex: 1;
        padding: 10px 0;
        text-align: right;
        color: #555;
        &:last-child {
          max-width: 80px;
          padding-right: 10px;
        }
        &:first-child {
          text-align: left;
          max-width: 80px;
        }
      }
    }
  }
}
</style>
 