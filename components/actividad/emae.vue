<template>
  <div style="position:relative">
<h4 class="chartitle"><strong>EMAE</strong>: Estimador Mensual de Actividad Economica <br>Frecuencia Mensual<br>Base 2004 </h4>
      <div class="double">
        <charts-line
            :data="chartData"
            :options="chartOptions"
            :height="420"
          />
        <h4 class="chartitlealberto"><strong>EMAE</strong><br>Gestión Fernandez</h4>
          <charts-line
            :data="chartDataAlberto"
            :options="chartOptionsAlberto"
            :height="420"
          />
        </div>
   
       </div>
    </section>

  </div>
</template>

<script>

import emaeB from "../../json/emae/base/d.json";
import emaeD from "../../json/emae/estacional/d.json";
import emaeT from "../../json/emae/tendencia/d.json";
 import emaeDates from "../../json/emae/base/dates.json";

export default {
  data() {
    return {
      chartData: {
        labels: emaeDates,
        datasets: [
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Desestacionalizado",
            data: emaeD,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            fill: false,
            label: "Tendencia",
            data: emaeT,
            borderColor: "#7a49a580",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: emaeB,
            borderColor: "rgba(46,120,210,0.25)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
        ],
      },
      chartDataAlberto: {
        labels: emaeDates,
        datasets: [
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Desestacionalizado",
            data: emaeD,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            fill: false,
            label: "Tendencia",
            data: emaeT,
            borderColor: "#7a49a580",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: emaeB,
            borderColor: "rgba(46,120,210,0.25)",
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
            top: 7,
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
            ticks: { 
              fontColor: "#888", fontSize: 13, max: "2019/01/01"},
            time: {
              tooltipFormat: 'DD/MM/YY',
              unit: 'year',
            }
          }],
          yAxes: [{
            ticks: { suggestedMax: 175,suggestedMin: 85, fontColor: "#888",                          display: false,
 },
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
   chartOptionsAlberto: {
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
            ticks: { fontColor: "#888", fontSize: 13,min: "2020/01/01",max: "2023/06/10" },
            time: {
              tooltipFormat: 'DD/MM/YY',
              unit: 'year',
            }
          }],
          yAxes: [{
            ticks: { suggestedMax: 175,suggestedMin: 85, fontColor: "#888", },
            gridLines: { 
              color: "#eee", 
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
 
<style lang="scss">
.double {
  display:flex;
  > * {
    flex: 3;
    &:last-child {
      flex: 1;
      border-left: 1px dashed #ccc;
      padding-left: 0px;
      margin-left: 0px;
    }
  }
}
.chartitlealberto {
    position: absolute;
   margin: 0;
   color: #888;
   background: transparent;
   z-index: 1;
   font-weight: 500;
   font-size: 12px;
   top: 2px;
   right:20%;
    left: initial;
}
</style>