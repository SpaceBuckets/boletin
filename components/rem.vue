<template>
<div style="position:relative">
     <div class="title-container" style="min-width:100%;">
      <h2>
        <strong>REM</strong>. Expectativa de inflación interanual
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

  import ipc from "../json/rem/interanualipc/d.json";

   import trcmDates from "../json/rem/interanualipc/dates.json";
  
export default {
  data() {
    return {
      megarray: [],
      chartData: {
        labels: trcmDates,
        datasets: [
 
              
     {
                        backgroundColor: "rgba(46,120,210,0.0)",
            label: "Desestacionalizado",
            data: ipc,
                        borderColor: "rgba(46,120,210,1)",
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
            ticks: { suggestedMin: 0,suggestedMax: 100,fontColor: "#aaa",
                 callback: function(value, index, values) {
                                return value +'%';
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
 
};
</script>

 