<template>
  <section>
    <div class="title-container" style="min-width:100%;">
      <h2>
        <span style="text-transform: uppercase">EMAE</span>. Estimador Mensual de Actividad Económica 
      </h2>
 
    </div>
    <div class="chartcont">

      <div class="flexedtable">
       <p>El EMAE es un <strong>indicador provisorio de la evolución del PBI</strong> que ofrece una pauta de la actividad económica real. Se elabora con información parcial calculando la <strong>suma del valor agregado de las actividades económicas</strong>.</p> 
        <div>
          <div>
            <div>Fecha</div>
            <div>Serie</div>
            <div>Variacion</div>
           </div>
        </div>
        <div class="flexedcontent">
          <div
            v-for="(dates, i) in filteredArray()"
            :key="`aa${i}`"
          >
            <div>{{ dates.slice(0, -3) }}</div>
            <div>
              {{ chartData.datasets[0].data.filter((val, index, arr) => index > arr.length - 8).reverse()[i].toFixed(2) }}
            </div>
            <div class="green" :class="{red: getVariation(i) < 0}">
              {{ getVariation(i) + '%' }}
            </div>
 
          </div>
        </div>
        <br>
                <p>Fuente:  INDEC</p>

      </div>
            <charts-line :data="chartData" :options="chartOptions" :height="chartHeight" />

    </div>
  </section>
</template>

<script>
import emaeB from "../../json/emae/base/d.json";
import emaeD from "../../json/emae/estacional/d.json";
import emaeT from "../../json/emae/tendencia/d.json";
import emaeDates from "../../json/emae/base/dates.json";

export default {
    props: {
        minDate: {
            type: String,
            required: false
        },
        chartHeight: {
            type: Number,
                  default: '330',

            required: false
        }},
  data() {
    return {
      chartData: {
        labels: emaeDates,
        datasets: [
          {
            backgroundColor: "rgba(46,120,210,0)",
            label: "Desestacionalizado",
            data: emaeD,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            fill: false,
            label: "Tendencia",
            data: emaeT,
            borderColor: "#7a49a580",
            pointRadius: 0,
            borderWidth: 1,
          },
          {
            fill: false,
            label: "Base",
            data: emaeB,
            borderColor: "rgba(46,120,210,0.25)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
          },
        ],
      },
 
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 0 },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 7,
            bottom: 0,
          },
        },
        scales: {
          xAxes: [
            {
              type: "time",
              offset: true,
              position: "bottom",
              gridLines: {
                color: "#F7F5F0",
                 drawBorder: false,
                                 zeroLineColor: "#eee",

                offsetGridLines: false,
              },
              ticks: {
                fontColor: "#bbb",
                fontSize: 13,
min: this.minDate,              },
              time: {
                tooltipFormat: "DD/MM/YY",
                unit: "year",

              },
            },
          ],
          yAxes: [
            {
              ticks: { suggestedMax: 180, suggestedMin: 80, fontColor: "#bbb" },
              gridLines: {
                color: "#F7F5F0",
                lineWidth: 1,
               },
              scaleLabel: {
                labelString: "Base 2004 = 100",
                fontColor: "#bbb",
                display: false,
              },
              position: "right",
            },
          ],
        },
        legend: {
          display: false,
        },
      },
   
    };
  },
  methods: {
    filteredArray() {
      return this.chartData.labels.filter((val, index, arr) => index > arr.length - 7).reverse()

    },
    getVariation(i) {
      var currentNum = this.chartData.datasets[0].data.filter((val, index, arr) => index > arr.length - 8).reverse()
      var A = currentNum[i] 
      var B = currentNum[i+1] 
      return ((A-B)/A*100.0).toFixed(2);
    }
  }
};
</script>
 
<style lang="scss">
.double {
  display: flex;
  > * {
    flex: 3;
    &:last-child {
      flex: 1;
      border-left: 1px dashed #ccc;
      padding-left: 0px;
      margin-left: 0px;
    }
  }
}
 


</style>