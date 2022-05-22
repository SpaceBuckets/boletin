<template>
<div style="position:relative">
    <div class="title-container" style="min-width:100%;">
      <h2>
        <span style="text-transform: uppercase">IPI</span>. Indice de Producción Industrial Manufacturero
      </h2>
 
    </div>
<div class="chartcont">
      <div class="flexedtable">
       <p>El índice de producción industrial manufacturero (IPI) incluye <strong>un exhaustivo relevamiento de todas las actividades económicas</strong> que conforman el sector de la industria manufacturera, con cobertura para el total del país.</p> 
        <div>
          <div>
            <div>Fecha</div>
            <div>Deses.</div>
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
                <p>Fuente: <a href="#">INDEC</a></p>
      </div>
    <charts-line
            :key="$state.updated"
            :data="chartData"
            :options="chartOptions"
            :height="460"
          />
</div>
       
       </div>
    

  </div>
</template>

<script>
import ipiB from "../../json/ipi/base/d.json";
import ipiD from "../../json/ipi/estacional/d.json";
import ipiT from "../../json/ipi/tendencia/d.json";
import ipiDates from "../../json/ipi/base/dates.json";

export default {
  data() {
    return {
      chartData: {
        labels: ipiDates,
        datasets: [
          {
            backgroundColor: "rgba(46,120,210,0)",
            label: "Desestacionalizado",
            data: ipiD,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            fill: false,
            label: "Tendencia",
            data: ipiT,
            borderColor: "#7a49a580",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: ipiB,
            borderColor: "rgba(46,120,210,0.25)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
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
            top: 0,
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
                zeroLineColor: "#eee",
                drawBorder: false,
                offsetGridLines: false,
                color: "#F7F5F0",
              },
              ticks: { fontColor: "#aaa", fontSize: 13 },
              time: {
                tooltipFormat: "DD/MM/YY",
                unit: "year",
              },
            },
          ],
          yAxes: [
            {
              ticks: { suggestedMin: 60, suggestedMax: 160, fontColor: "#aaa" },
              gridLines: {
                color: "#F7F5F0",
                lineWidth: 1,
                drawBorder: false,
              },
              scaleLabel: {
                display: false,
                labelString: "Base 2004 = 100",
                fontColor: "#aaa",
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

 