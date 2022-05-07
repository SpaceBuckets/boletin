<template>
<div style="position:relative">
<h4 class="chartitle"><strong>ICE</strong>.  <br>Indice de Condiciones Externas<br>Frecuencia Mensual </h4>

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

import iceEstructural from "../../json/expo/ice/estructural.json";
import iceCoyuntural from "../../json/expo/ice/coyuntural.json";
 import iceDates from "../../json/expo/ice/dates.json";

export default {
  data() {
    return {
      chartData: {
        labels: iceDates,
        datasets: [
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Desestacionalizado",
            data: iceCoyuntural,
                        borderColor: "rgba(46,120,210,0.3)",

            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            backgroundColor: 'rgba(146,220,210,0)',
            label: "Desestacionalizado",
            data: iceEstructural,
            borderColor: "#2E78D2",
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
            ticks: { fontColor: "#aaa",
               
            },
            gridLines: { 
                            color: "#F7F5F0"
, 
              lineWidth: 1, 
              drawBorder: false,          
            },
            scaleLabel: {
              display: true,
              labelString: 'Indice ICE',
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
};
</script>

 