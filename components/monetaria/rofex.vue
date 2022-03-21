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

import t1 from "../../json/rofex/t1/d.json";
import t2 from "../../json/rofex/t2/d.json";
import t3 from "../../json/rofex/t3/d.json";
import t4 from "../../json/rofex/t4/d.json";
import t5 from "../../json/rofex/t5/d.json";
import t6 from "../../json/rofex/t6/d.json";
   import trcmDates from "../../json/rofex/t1/dates.json";
import cambio from "../../json/rofex/dolar/d.json";
 
export default {
  data() {
    return {
      megarray: [],
      chartData: {
        labels: trcmDates,
        datasets: [
                     {
            backgroundColor: 'rgba(178,34,34,0.0)',
            label: "Desestacionalizado",
            data: cambio,
                        borderColor: "rgba(46,120,210,0.9)",
            pointRadius: 0,
            borderWidth: 1.5,
          },   
                    {
            backgroundColor: 'rgba(178,34,34,0.0)',
            label: "Desestacionalizado",
            data: t1,
                        borderColor: "rgba(46,120,210,0.2)",
            pointRadius: 0,
            borderWidth: 1.5,
          },      
                    {
            backgroundColor: 'rgba(178,34,34,0.0)',
            label: "Desestacionalizado",
            data: t2,
                        borderColor: "rgba(46,120,210,0.2)",
            pointRadius: 0,
            borderWidth: 1.5,
          },      
                    {
            backgroundColor: 'rgba(178,34,34,0.0)',
            label: "Desestacionalizado",
            data: t3,
                        borderColor: "rgba(46,120,210,0.2)",
            pointRadius: 0,
            borderWidth: 1.5,
          },      
                    {
            backgroundColor: 'rgba(178,34,34,0.0)',
            label: "Desestacionalizado",
            data: t4,
                        borderColor: "rgba(46,120,210,0.2)",
            pointRadius: 0,
            borderWidth: 1.5,
          },      
                    {
            backgroundColor: 'rgba(178,34,34,0.0)',
            label: "Desestacionalizado",
            data: t5,
                        borderColor: "rgba(46,120,210,0.2)",
            pointRadius: 0,
            borderWidth: 1.5,
          },                                              
                       {
            backgroundColor: 'rgba(178,34,34,0.0)',
            label: "Desestacionalizado",
            data: t6,
                        borderColor: "rgba(46,120,210,0.2)",
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
              color: "#eee", zeroLineColor: '#eee', drawBorder: false, offsetGridLines: false, borderDash: [2, 2],
              color: "#ddd"
            },
            ticks: { fontColor: "#888", fontSize: 13, 
            
            },
            time: {
              tooltipFormat: 'DD/MM/YY',
              unit: 'year',
            }
          }],
          yAxes: [{
            ticks: { fontColor: "#888",
                 callback: function(value, index, values) {
                                return '$' +value;
                        }  },
            gridLines: { 
              color: "#eee", 
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
 
};
</script>

 