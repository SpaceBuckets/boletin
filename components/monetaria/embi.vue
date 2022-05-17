<template>
<div style="position:relative">
    <div class="title-container" style="min-width:100%;">
      <h2>
        <strong>EMBI</strong>. Emerging Markets Bond Index (Riesgo País)
      </h2>
 
    </div>
    <div class="chartcont">

          <div class="flexedtable">
       <p>El EMAE es un <strong>indicador provisorio de la evolución del PBI</strong> que ofrece una pauta de la actividad económica real. Se elabora con información parcial calculando la <strong>suma del valor agregado de las actividades económicas</strong>.</p> 
        <p>Fuente: INDEC</p>
        <div>
          <div>
            <div>Fecha</div>
            <div>Deses.</div>
            <div>Variacion</div>
           </div>
        </div>
        <div class="flexedcontent">
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

import argentina from "../../json/expo/embi/argentina.json";
import brasil from "../../json/expo/embi/brasil.json";
import chile from "../../json/expo/embi/chile.json";
import colombia from "../../json/expo/embi/colombia.json";
import mexico from "../../json/expo/embi/mexico.json";
import latino from "../../json/expo/embi/latino.json";
 import iceDates from "../../json/expo/embi/dates.json";

export default {
  data() {
    return {
      chartData: {
        labels: iceDates,
        datasets: [
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Desestacionalizado",
            data: brasil,
                        borderColor: "rgba(46,120,210,0.3)",

            pointRadius: 0,
            borderWidth: 1,
          },
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Desestacionalizado",
            data: chile,
                        borderColor: "rgba(46,120,210,0.3)",

            pointRadius: 0,
            borderWidth: 1,
          },
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Desestacionalizado",
            data: colombia,
                        borderColor: "rgba(46,120,210,0.3)",

            pointRadius: 0,
            borderWidth: 1,
          },
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Desestacionalizado",
            data: mexico,
                        borderColor: "rgba(46,120,210,0.3)",

            pointRadius: 0,
            borderWidth: 1,
          },    
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Desestacionalizado",
            data: latino,
                        borderColor: "#7a49a580",

            pointRadius: 0,
            borderWidth: 1,
          },                                     
          {
            backgroundColor: 'rgba(146,220,210,0)',
            label: "Desestacionalizado",
            data: argentina,
            borderColor: "#2E78D2",
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
              labelString: 'Riesgo Pais (EMBI)',
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

 