<template>
  <section>
    <div class="title-container" style="min-width: 100%">
      <h2>
        <span style="text-transform: uppercase">ISAC</span>. Actividad Construcción
      </h2>
    </div>

    <div class="chartcont">
      <div class="flexedtable">
        <p>
          El indicador sintético de la actividad de la construcción (ISAC)
          <strong>muestra la evolución del sector</strong> tomando como
          referencia los consumos aparentes de insumos requeridos en la
          construcción en volumen físicos.
        </p>
        <div>
          <div>
            <div>Fecha</div>
            <div>Deses.</div>
            <div>Variacion</div>
          </div>
        </div>
        <div class="flexedcontent">
          <div v-for="(dates, i) in filteredArray()" :key="`aa${i}`">
            <div>{{ dates.slice(0, -3) }}</div>
            <div>
              {{
                chartData.datasets[0].data
                  .filter((val, index, arr) => index > arr.length - 8)
                  .reverse()
                  [i].toFixed(2)
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
import isacB from "../../json/isac/base/d.json";
import isacD from "../../json/isac/estacional/d.json";
import isacT from "../../json/isac/tendencia/d.json";
import isacDates from "../../json/isac/base/dates.json";

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
        labels: isacDates,
        datasets: [
          {
            backgroundColor: "rgba(46,120,210,0)",
            label: "Desestacionalizado",
            data: isacD,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            fill: false,
            label: "Tendencia",
            data: isacT,
            borderColor: "#7a49a580",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: isacB,
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
              ticks: { fontColor: "#aaa", fontSize: 13,                min: this.minDate,
 },
              time: {
                tooltipFormat: "DD/MM/YY",
                unit: "year",
              },
            },
          ],
          yAxes: [
            {
              ticks: { suggestedMin: 20, suggestedMax: 280, fontColor: "#aaa" },
              gridLines: {
                color: "#F7F5F0",
                lineWidth: 1,
                drawBorder: false,
                                                zeroLineColor: "#F7F5F0",

              },
              scaleLabel: {
                display: false,
                labelString: "Base 2004 = 100",
                fontColor: "#aaa",
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
      return this.chartData.labels
        .filter((val, index, arr) => index > arr.length - 7)
        .reverse();
    },
    getVariation(i) {
      var currentNum = this.chartData.datasets[0].data
        .filter((val, index, arr) => index > arr.length - 8)
        .reverse();
      var A = currentNum[i];
      var B = currentNum[i + 1];
      return (((A - B) / A) * 100.0).toFixed(2);
    },
  },
};
</script>

 