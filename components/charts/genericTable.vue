<template>
  <section class="chart flexedtable">
       <h2 v-if="!title">
        <strong>{{ chart.t }}</strong>. {{chart.st}}
      </h2>
    <h2 v-if="title">
        <strong>{{ title }}</strong>. Datos y Tendencias
    </h2>

  <table class="retable">
    <thead>
      <tr>
        <th>Fecha</th>
        <th v-for="dimension in kpi.dimensions" :key="dimension.label">{{ dimension.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in kpi.dimensions[0].data" :key="index">
        <td v-if="index < 12"><strong>{{ processedDate(item.x) }}</strong></td>
        <td v-for="dimension in kpi.dimensions" :key="dimension.label" v-if="index < 12">
          {{ dimension.data[index].y ? dimension.data[index].y.toFixed(2) : '-' }}
<span :class="getVariationClass(dimension, index)">
  <template v-if="isFinite(calculateVariation(dimension, index)) && Math.abs(calculateVariation(dimension, index).toFixed(1)) !== 0">
    <i v-if="calculateVariation(dimension, index) > 0">▲</i>
    <i v-if="calculateVariation(dimension, index) < 0">▼</i>
    {{ Math.abs(calculateVariation(dimension, index).toFixed(1)) }}%
  </template>
</span>

        </td>
      </tr>
    </tbody>
  </table>







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
      kpi: JSON.parse(JSON.stringify(require(`~/static/data/${this.data}.json`))),
      filteredKpi: {}
    };
  },
  created() {
      const filteredDimensions = this.kpi.dimensions.map((dimension) => {
        const last20Items = dimension.data.reverse().slice(12);
        return {
          ...dimension,
          data: last20Items,
        };
      });

      this.filteredKpi = {
        ...this.kpi,
        dimensions: filteredDimensions,
      };   
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('es', { month: 'long', year: 'numeric' }).replace(' de', '');
    },
      processedDate(date) {
        var pepe = new Date(date).toLocaleDateString('es', {day: 'numeric', month: 'long', year: 'numeric' }).replaceAll("de",'')

        if(this.kpi.frec === 'Mensual') {
          const lastDate = new Date(date + "T00:00:00");

          var pepe = lastDate.toLocaleString('es', {month: 'long', year: 'numeric' }).replaceAll("de",'');

        } 
        if(this.kpi.frec === 'Anual') {
          var pepe = `Año ${new Date(date).toLocaleDateString('es', {year: 'numeric' }).replaceAll("de",'')}`
        }         
        return pepe
      },      
    calculateVariation(dimension, index) {
      if (index < 12) {
        return ((dimension.data[index].y - dimension.data[index + 1].y) / dimension.data[index + 1].y * 100);
      } else {
        return ((dimension.data[index].y - dimension.data[index - 1].y) / dimension.data[index - 1].y * 100);
      }
    },
    getVariationClass(dimension, index) {
      const variation = this.calculateVariation(dimension, index);
      return variation >= 0 ? 'positive' : 'negative';
    },
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
  overflow: auto;
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
        overflow: auto;

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
          max-width: 100px;
        }
      }
    }
  }
}

table.retable {
  text-align: left;
  //border: 1px solid #eee;
  border-collapse: collapse;
  th {
    padding: 10px 5px;
    border-bottom: 1px solid #eee;

  }
  td {
    padding: 10px 5px;
    text-transform: capitalize;
    border-bottom: 1px solid #eee;
       min-width: 120px;
  
  }
}

td span {
  font-size: 12px;
   &.positive {
   color: #009966;
       i { 
          font-size: 10px;

      color: #009966; 
       }
 }

 &.negative {
    color: #b22222;
    i { 
                font-size: 10px;

      color: #b22222; 
      transform: rotate(180deg)
      }
  }
}


</style>
 