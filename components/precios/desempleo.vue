<template>
<div style="position:relative">
      <div class="title-container" style="min-width:100%;">
      <h2>
        Tasa de Desempleo
      </h2>
 
    </div>
    <div class="chartcont">
    <div class="flexedtable">
       <p>El UCII es un <strong>indicador provisorio de la evolución del PBI</strong> que ofrece una pauta de la actividad económica real. Se elabora con información parcial calculando la <strong>suma del valor agregado de las actividades económicas</strong>.</p> 
        <p>Fuente: INDEC</p>
        <div>
          <div>
            <div>Fecha</div>
            <div>Deses.</div>
            <div>Variacion</div>
           </div>
        </div>
<!--         <div class="flexedcontent">
          <div
            v-for="(dates, i) in chartData.labels.slice().reverse()"
            :key="`aa${i}`"
          >
            <div>{{ dates.slice(0, -3) }}</div>
            <div>
              {{ chartData.datasets[0].data.slice().reverse()[i].toFixed(2) }}
            </div>
            <div>
              {{ chartData.datasets[1].data.slice().reverse()[i].toFixed(2) }}
            </div>
 
          </div>
        </div> -->
      </div>

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

import empleo from "../../json/empleo/general/d.json";
import empleoCaba from "../../json/empleo/caba/d.json";
import empleoCuyo from "../../json/empleo/cuyo/d.json";
import empleoGba from "../../json/empleo/gba/d.json";
import empleoNordeste from "../../json/empleo/nordeste/d.json";
import empleoNoroeste from "../../json/empleo/noroeste/d.json";
import empleoPampeana from "../../json/empleo/pampeana/d.json";
import empleoPatagonia from "../../json/empleo/patagonia/d.json";
import empleoDates from "../../json/empleo/general/dates.json";

export default {
  data() {
    return {
      chartData: {
        labels: empleoDates,
        datasets: [
          {
            backgroundColor: 'rgba(46,120,210,0.0)',
            label: "Desestacionalizado",
            data: empleo,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            fill: false,
            label: "Base",
            data: empleoCaba,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: empleoCuyo,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: empleoGba,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: empleoNordeste,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: empleoNoroeste,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: empleoPampeana,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: empleoPatagonia,
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
            ticks: { suggestedMin: 0,suggestedMax: 25,fontColor: "#aaa",
            callback: function(value, index, values) {
                                return value + '%';
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
              labelString: 'Porcentaje de desempleo',
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

 