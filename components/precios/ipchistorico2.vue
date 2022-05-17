<template>
<div style="position:relative">
        <h4 class="chartitle"><strong>Inflacion Historica</strong> desde 1943 <br>Frecuencia Mensual </h4>
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
 import ipc2 from "../../json/ipc/historico/danual.json";
import ipcDates from "../../json/ipc/historico/datesanual.json";

export default {
  data() {
    return {
      chartData: {
        labels: ipcDates,
        datasets: [
          {
            backgroundColor: "#2E78D240",
            label: "Desestacionalizado",
            data: ipc2,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 0,
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
                zeroLineColor: "#ccc",
                drawBorder: false,
                offsetGridLines: false,
                color: "#F7F5F0",
              },
              ticks: { fontColor: "#aaa", fontSize: 13 },
              time: {
                tooltipFormat: "DD/MM/YY",
                unit: "year",
              },
            },
          ],
          yAxes: [
            {
              ticks: { max: 500, min: 0,
                fontColor: "#aaa",
                callback: function (value, index, values) {
                  return value + "%";
                },
              },
              gridLines: {
                color: "#F7F5F0",
                lineWidth: 1,
                drawBorder: false,
              },
              scaleLabel: {
                display: true,
                labelString: "Variacion intermensual",
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
};
</script>

 