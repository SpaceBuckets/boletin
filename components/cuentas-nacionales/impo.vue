<template>
<section>
  <div class="title-container">
<h2><strong>Importaciones</strong> </h2>

  </div>
<div class="chartcont">
           <charts-line
            :key="$state.updated"
            :data="chartData"
            :options="chartOptions"
            :height="chartHeight"
          />
       </div>
    

  </section>
</template>

<script>

 import cantidad from "../../json/impo/cantidad/d.json";
import precio from "../../json/impo/precio/d.json";
import expoDates from "../../json/impo/precio/dates.json";

export default {
      props: {
        minDate: {
            type: String,
            required: false
        },
        chartHeight: {
type: Number,
            required: false
        }},
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
            ticks: { fontColor: "#aaa", fontSize: 13,                min: this.minDate,
 },
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
,                 zeroLineColor: "#eee",

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

 