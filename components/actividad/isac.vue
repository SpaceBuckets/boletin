<template>
<div style="position:relative">
<h4 class="chartitle"><strong>ISAC</strong>: Indicador Sintético de la Actividad de la Construcción <br>Frecuencia Mensual<br>Base 2004 </h4>
           <charts-line
            :key="$state.updated"
            :data="chartData"
            :options="chartOptions"
            :height="420"
          />
       </div>
    </section>

  </div>
</template>

<script>

import isacB from "../../json/isac/base/d.json";
import isacD from "../../json/isac/estacional/d.json";
import isacT from "../../json/isac/tendencia/d.json";
import isacDates from "../../json/isac/base/dates.json";

export default {
  data() {
    return {
      chartData: {
        labels: isacDates,
        datasets: [
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Desestacionalizado",
            data: isacD,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            fill: false,
            label: "Tendencia",
            data: isacT,
            borderColor: "#7a49a580",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: isacB,
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
            ticks: {  suggestedMin: 20,suggestedMax: 250, fontColor: "#aaa", },
            gridLines: { 
                            color: "#F7F5F0"
, 
              lineWidth: 1, 
              drawBorder: false,          
            },
            scaleLabel: {
              display: true,
              labelString: 'Base 2004 = 100',
              fontColor: "#aaa"
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
};
</script>

 