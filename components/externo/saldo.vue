<template>
<div style="position:relative">
<h4 class="chartitle"><strong>Intercambio Comercial</strong>.  <br>Importaciones vs. Exportaciones y Saldo<br>Frecuencia Mensual </h4>

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

import impo from "../../json/impo/dolar/d.json";
import expo from "../../json/expo/dolar/d.json";
import saldo from "../../json/expo/saldo/d.json";
import impoDates from "../../json/impo/dolar/dates.json";

export default {
  data() {
    return {
      chartData: {
        labels: impoDates,
        datasets: [
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Importaciones",
            data: impo,
            borderColor: "#b22222CC",
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            backgroundColor: 'rgba(146,220,210,0)',
            label: "Exportaciones",
            data: expo,
            borderColor: "#009966",
            pointRadius: 0,
            borderWidth: 2,
          },    
          {
            backgroundColor: 'rgba(146,220,210,0)',
            label: "Saldo Comercial",
            type: 'bar',
            data: saldo,
            borderColor: "#ccc",
            pointRadius: 0,
            borderWidth: 2,
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
                       callback: function(value, index, values) {
                                return '$' +value;
                        } 
            },
            gridLines: { 
                            color: "#F7F5F0"
, 
              lineWidth: 1, 
              drawBorder: false,          
            },
            scaleLabel: {
              display: true,
              labelString: 'Millones de dólares',
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

 