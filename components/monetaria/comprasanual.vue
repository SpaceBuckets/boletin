<template>
<div style="position:relative">
<h4 class="chartitle"><strong>BCRA</strong>. Compras de divisas (USD)<br>Frecuencia anual </h4>

           <charts-bar
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
import cambio from "../../json/monetaria/compras/anual.json";
import trcmDates from "../../json/monetaria/compras/anualdates.json";
const colours = cambio.map((value) => value < 0 ? '#b22222CC' : '#009966');

export default {
  data() {
    return {
      megarray: [],
      chartData: {
        labels: trcmDates,
        datasets: [
          {
            borderColor: "transparent",
            backgroundColor: colours,
            label: "Desestacionalizado",
            data: cambio,
            pointRadius: 0,
            borderWidth: 1,

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
                max: 20000,min: -20000,
                fontColor: "#aaa",
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

 