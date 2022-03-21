<template>
<div style="position:relative">
<h4 class="chartitle"><strong>UCII</strong>: Utilización de la Capacidad Instalada en la Industria <br>Frecuencia Mensual<br>Base 2004 </h4>
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

import ucii from "../../json/ucii/general/d.json";
import alimentos from "../../json/ucii/alimentos/d.json";
import automotriz from "../../json/ucii/automotriz/d.json";
import edicion from "../../json/ucii/edicion/d.json";
import metales from "../../json/ucii/metales/d.json";
import metalmecanica from "../../json/ucii/metalmecanica/d.json";
import minerales from "../../json/ucii/minerales/d.json";
import papel from "../../json/ucii/papel/d.json";
import petroleo from "../../json/ucii/petroleo/d.json";
import plastico from "../../json/ucii/plastico/d.json";
import quimicos from "../../json/ucii/quimicos/d.json";
import tabaco from "../../json/ucii/tabaco/d.json";
import textiles from "../../json/ucii/textiles/d.json";
import uciiDates from "../../json/ucii/general/dates.json";

export default {
  data() {
    return {
      chartData: {
        labels: uciiDates,
        datasets: [
          {
            backgroundColor: 'rgba(46,120,210,0.0)',
            label: "Desestacionalizado",
            data: ucii,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            fill: false,
            label: "Base",
            data: alimentos,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: automotriz,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: edicion,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: metales,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: metalmecanica,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: minerales,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: papel,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: petroleo,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: plastico,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: quimicos,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: tabaco,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: textiles,
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
              color: "#eee", zeroLineColor: '#eee', drawBorder: false, offsetGridLines: false, borderDash: [2, 2],
              color: "#ddd"
            },
            ticks: { fontColor: "#888", fontSize: 13, },
            time: {
              tooltipFormat: 'DD/MM/YY',
              unit: 'year',
            }
          }],
          yAxes: [{
            ticks: { suggestedMin: 0,suggestedMax: 100,fontColor: "#888",
            callback: function(value, index, values) {
                                return value + '%';
                        } 
                        },
            gridLines: { 
              color: "#eee", 
              lineWidth: 1, 
              drawBorder: false,          
            },
            scaleLabel: {
              display: true,
              labelString: 'Porcentaje',
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

 