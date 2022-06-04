<template>
<section>
    <div class="title-container" style="min-width:100%;">
      <h2>
        <strong>EMBI</strong>. Riesgo País
      </h2>
 
    </div>
    <div class="chartcont">

      <div class="flexedtable">
        <p>
          El EMAE es un
          <strong>indicador provisorio de la evolución del PBI</strong> que
          ofrece una pauta de la actividad económica real. Se elabora con
          información parcial calculando la
          <strong>suma del valor agregado de las actividades económicas</strong
          >.
        </p>
        <div>
          <div>
            <div>Fecha</div>
            <div>Serie</div>
            <div>Variacion</div>
          </div>
        </div>
        <div class="flexedcontent">
          <div v-for="(dates, i) in filteredArray()" :key="`aa${i}`">
            <div>{{ dates }}</div>
            <div>
              {{
                chartData.datasets[0].data
                  .filter((val, index, arr) => index > arr.length - 8)
                  .reverse()
                  [i]
              }}
            </div>
            <div class="green" :class="{ red: getVariation(i) < 0 }">
              {{ getVariation(i) + "%" }}
            </div>
          </div>
        </div>
        <br />
        
      </div>
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

import argentina from "../../json/embi/argentina.json";
import brasil from "../../json/embi/brasil.json";
import chile from "../../json/embi/chile.json";
import colombia from "../../json/embi/colombia.json";
import mexico from "../../json/embi/mexico.json";
import latino from "../../json/embi/latino.json";
 import iceDates from "../../json/embi/dates.json";

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
            ticks: { fontColor: "#bbb", fontSize: 13,min: this.minDate, },
            time: {
              tooltipFormat: 'DD/MM/YY',
              unit: 'year',
            }
          }],
          yAxes: [{
            ticks: { fontColor: "#bbb",
               
            },
            gridLines: { 
                            color: "#F7F5F0"
,                 zeroLineColor: "#eee",

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
  methods: {
    filteredArray() {
      return this.chartData.labels.filter((val, index, arr) => index > arr.length - 7).reverse()

    },
    getVariation(i) {
      var currentNum = this.chartData.datasets[0].data.filter((val, index, arr) => index > arr.length - 8).reverse()
      var A = currentNum[i] 
      var B = currentNum[i+1] 
      return ((A-B)/A*100.0).toFixed(2);
    }
  }     
};
</script>

 