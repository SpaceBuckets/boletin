<template>
<div style="position:relative">
        <h4 class="chartitle"><strong>IPC</strong>: Indice de Precios al Consumidor <br>Frecuencia Mensual<br>Base 2016 </h4>
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

import ipc from "../../json/ipc/general/d.json";
import ipcDates from "../../json/ipc/general/dates.json";
 import ipcCuyo from "../../json/ipc/cuyo/d.json";
import ipcGba from "../../json/ipc/gba/d.json";
import ipcNordeste from "../../json/ipc/nordeste/d.json";
import ipcNoroeste from "../../json/ipc/noroeste/d.json";
import ipcPampeana from "../../json/ipc/pampeana/d.json";
import ipcPatagonia from "../../json/ipc/patagonia/d.json";
 
 export default {
  data() {
    return {
      chartData: {
        labels: ipcDates,
        datasets: [
          {
            backgroundColor: "#2E78D240",
            label: "Desestacionalizado",
            data: ipc,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 0,
            type: 'bar'
          },
          {
            fill: false,
            label: "Base",
            data: ipcCuyo,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: ipcGba,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: ipcNordeste,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: ipcNoroeste,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: ipcPampeana,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: ipcPatagonia,
            borderColor: "rgba(46,120,210,0.15)",
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
, zeroLineColor: '#ccc', drawBorder: false, offsetGridLines: false, 
              color: "#F7F5F0"
            },
            ticks: { fontColor: "#aaa", fontSize: 13, },
            time: {
              tooltipFormat: 'DD/MM/YY',
              unit: 'year',
            }
          }],
          yAxes: [{
            ticks: { suggestedMin: "0",suggestedMax: "8", fontColor: "#aaa",            callback: function(value, index, values) {
                                return value + '%';
                        } },
            gridLines: { 
                            color: "#F7F5F0"
, 
              lineWidth: 1, 
              drawBorder: false,          
            },
            scaleLabel: {
              display: true,
              labelString: 'Variacion intermensual',
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

 