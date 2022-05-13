<template>
<div style="position:relative">
<h4 class="chartitle"><strong>Tipos de cambio</strong>. Oficial e implicito ADR<br>Frecuencia Mensual </h4>

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

import cambio from "../../json/monetaria/blue/usd.json";
 import adr from "../../json/monetaria/blue/blue.json";
  import trcmDates from "../../json/monetaria/blue/dates.json";

export default {
  data() {
    return {
      megarray: [],
      chartData: {
        labels: trcmDates,
        datasets: [
 
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Desestacionalizado",
            data: cambio,
            borderColor: '#009966',
            pointRadius: 0,
            borderWidth: 1.5,
          },        
                    {
            backgroundColor: 'rgba(178,34,34,0.05)',
            label: "Desestacionalizado",
            data: adr,
            borderColor: '#b22222CC',
            pointRadius: 0,
            borderWidth: 1.5,
                                    fill: '-1', //fill until previous dataset

          },      
                         {
            backgroundColor: 'transparent',
            label: "Desestacionalizado",
           // data: blue,
            borderColor: 'blue',
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
            ticks: { fontColor: "#aaa", fontSize: 13, 
            
            },
            time: {
              tooltipFormat: 'DD/MM/YY',
              unit: 'year',
            }
          }],
          yAxes: [{
            ticks: { fontColor: "#aaa",
            
                 callback: function(value, index, values) {
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
  mounted() {
 
 
  }
};
</script>

 