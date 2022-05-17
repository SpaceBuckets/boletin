<template>
<div style="position:relative">
     <div class="title-container" style="min-width:100%;">
      <h2>
        <strong>BCRA</strong>. Compras de divisas (USD)
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

           <charts-bar
            :key="$state.updated"
            :data="chartData"
            :options="chartOptions"
            :height="460"
          />
       </div>
    

  </div>
</template>

<script>
import cambio from "../../json/monetaria/compras/diaria.json";
import trcmDates from "../../json/monetaria/compras/diariadates.json";
const colours = cambio.map((value) => value < 0 ? '#b22222CC' : '#009966');

export default {
  data() {
    return {
      megarray: [],
      chartData: {
        labels: trcmDates,
        datasets: [
          {
            backgroundColor: colours,
            label: "Desestacionalizado",
            data: cambio,
              barThickness: 0.5,
            pointRadius: 0,
          },

          {
            backgroundColor: "transparent",
            label: "Desestacionalizado",
            // data: blue,
            borderColor: "blue",
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
            bottom: 0,
          },
        },
        scales: {
          xAxes: [
            {
              type: "time",
              offset: true,
              position: "bottom",
              gridLines: {
                color: "#F7F5F0",
                zeroLineColor: "#eee",
                drawBorder: false,
                offsetGridLines: false,
                color: "#F7F5F0",
              },
              ticks: {                  
                fontColor: "#aaa",  fontSize: 13 },
              time: {
                tooltipFormat: "DD/MM/YY",
                unit: "year",

              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#aaa",
                max: 500,min: -500,
                callback: function (value, index, values) {
                  return "$" + value;
                },
              },
              gridLines: {
                color: "#F7F5F0",
                lineWidth: 1,
                drawBorder: false,
              },
              scaleLabel: {
                display: false,
                labelString: "Base 2004 = 100",
                fontColor: "#888",
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
  mounted() {},
};
</script>

 