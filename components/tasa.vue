<template>
<div style="position:relative">
    <div class="title-container" style="min-width:100%;">
      <h2>
        <strong>BCRA</strong>. Tasa de Política Monetaria
      </h2>
 
    </div>
           <charts-line
            :key="$state.updated"
            :data="chartData"
            :options="chartOptions"
            :height="460"
          />
       </div>
    </section>

  </div>
</template>

<script>

import tasa from "../json/monetaria/tasas/tasatasa.json";
import badlar from "../json/monetaria/tasas/tasabadlar.json";
import plazo from "../json/monetaria/tasas/tasaplazo.json";
import pases from "../json/monetaria/tasas/tasapases.json";
 import trcmDates from "../json/monetaria/tasas/tasadates.json";

export default {
  data() {
    return {
      chartData: {
        labels: trcmDates,
        datasets: [
 
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Tasa BCRA",
            data: tasa,
            borderColor: '#2E78D2',
            pointRadius: 0,
            borderWidth: 1.5,
          },       
                    {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Tasa Badlar",
            data: badlar,
            borderColor: 'rgba(46,120,210,0.25)',
            pointRadius: 0,
            borderWidth: 1,
          },      
                    {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Tasa plazo fijo",
            data: plazo,
            borderColor: 'rgba(46,120,210,0.25)',
            pointRadius: 0,
            borderWidth: 1,
          },     
                    {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Tasa Pases Pasivos 1 dia",
            data: pases,
            borderColor: '#7a49a580',
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
            ticks: { fontColor: "#aaa", },
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
};
</script>

 