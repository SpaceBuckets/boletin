<template>
<div style="position:relative">
    <div class="title-container" style="min-width:100%;">
      <h2>
        <span style="text-transform: uppercase">IPC</span>. Indice de Precios al Consumidor
      </h2>
      <div class="select-container">
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>          <charts-line
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
import ipc from "../json/ipc/historico/dmensual.json";
import ipc2 from "../json/ipc/historico/danual.json";
import ipcDates from "../json/ipc/historico/dates.json";

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
              ticks: { max: 35, min: 0,
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

 