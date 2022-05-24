<template>
<div style="position:relative">
    <div class="title-container" style="min-width:100%;">
      <h2>
        <strong>BCRA</strong>. Reservas internacionales en millones de dólares
      </h2>
 
    </div>
    <div class="chartcont">
     <div class="flexedtable">
        <p>
          El EMAE es un
          <strong>indicador provisorio de la evolución del PBI</strong> que
          ofrece una pauta de la actividad económica real. Se elabora con
          información parcial calculando la
          <strong>suma del valor agregado de las actividades económicas</strong
          >.
        </p>
        <div>
          <div>
            <div>Fecha</div>
            <div>Serie</div>
            <div>Variacion</div>
          </div>
        </div>
        <div class="flexedcontent">
          <div v-for="(dates, i) in filteredArray()" :key="`aa${i}`">
            <div>{{ dates }}</div>
            <div>
              {{
                chartData.datasets[0].data
                  .filter((val, index, arr) => index > arr.length - 8)
                  .reverse()
                  [i]
              }}
            </div>
            <div class="green" :class="{ red: getVariation(i) < 0 }">
              {{ getVariation(i) + "%" }}
            </div>
          </div>
        </div>
        <br />
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
</template>

<script>

import trcm from "../../json/reservas/total.json";
 import trcmDates from "../../json/reservas/dates.json";

export default {
  data() {
    return {
      chartData: {
        labels: trcmDates,
        datasets: [
 
          {
            backgroundColor: 'rgba(46,120,210,0.1)',
            label: "Desestacionalizado",
            data: trcm,
            borderColor: '#2E78D2',
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
            bottom: 0
          }
        },
        scales: {
          xAxes: [{
            type: 'time',
            offset: true,
            position: 'bottom',
            gridLines: {
                            color: "#F7F5F0"
, zeroLineColor: '#eee', drawBorder: false, offsetGridLines: false, 
              color: "#F7F5F0"
            },
            ticks: { fontColor: "#aaa", fontSize: 13, },
            time: {
              tooltipFormat: 'DD/MM/YY',
              unit: 'year',
            }
          }],
          yAxes: [{
            ticks: { fontColor: "#aaa",                callback: function(value, index, values) {
                                return '$' +value;
                        }  },
            gridLines: { 
                            color: "#F7F5F0"
, 
              lineWidth: 1, 
              drawBorder: false,          
            },
            scaleLabel: {
              display: false,
              labelString: 'Base 2004 = 100',
              fontColor: "#888"
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

 