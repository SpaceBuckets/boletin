<template>
<div style="position:relative">
<h4 class="chartitle"><strong>Importaciones</strong>.  <br>Indices de cantidad y precio<br>Frecuencia Trimestral </h4>

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

 import cantidad from "../../json/impo/cantidad/d.json";
import precio from "../../json/impo/precio/d.json";
import expoDates from "../../json/impo/precio/dates.json";

export default {
  data() {
    return {
      chartData: {
        labels: expoDates,
        datasets: [
  
          {
            backgroundColor: 'rgba(146,220,210,0)',
            label: "Cantidades",
            data: cantidad,
            borderColor: "#b22222CC",
            pointRadius: 0,
            borderWidth: 2,
          },    
          {
            backgroundColor: 'rgba(146,220,210,0)',
            label: "Precio",
             data: precio,
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
 
            },
            gridLines: { 
                            color: "#F7F5F0"
, 
              lineWidth: 1, 
              drawBorder: false,          
            },
            scaleLabel: {
              display: true,
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

 