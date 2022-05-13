<template>
<div style="position:relative">
<h4 class="chartitle"><strong>BCRA</strong>. Compras de divisas (USD)<br>Frecuencia diaria </h4>

           <charts-bar
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
              offset: false,
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

 