<template>
  <section>
    <div class="title-container" style="min-width: 100%">
      <h2>
        <span style="text-transform: uppercase">UCII</span>. Utilización de la Capacidad Instalada
      </h2>
    </div>

    <div class="chartcont">
      <div class="flexedtable">
        <p>
          El indicador de la
          <strong>utilización de la capacidad instalada</strong> mide la
          proporción utilizada, en términos porcentuales, de la capacidad
          productiva del sector industrial. Comprende un panel de entre 600 y
          700 empresas de todo el país.
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
import ucii from "../../json/ucii/general/d.json";
import alimentos from "../../json/ucii/alimentos/d.json";
import automotriz from "../../json/ucii/automotriz/d.json";
import edicion from "../../json/ucii/edicion/d.json";
import metales from "../../json/ucii/metales/d.json";
import metalmecanica from "../../json/ucii/metalmecanica/d.json";
import minerales from "../../json/ucii/minerales/d.json";
import papel from "../../json/ucii/papel/d.json";
import petroleo from "../../json/ucii/petroleo/d.json";
import plastico from "../../json/ucii/plastico/d.json";
import quimicos from "../../json/ucii/quimicos/d.json";
import tabaco from "../../json/ucii/tabaco/d.json";
import textiles from "../../json/ucii/textiles/d.json";
import uciiDates from "../../json/ucii/general/dates.json";

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
        labels: uciiDates,
        datasets: [
          {
            backgroundColor: "rgba(46,120,210,0)",
            label: "Desestacionalizado",
            data: ucii,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            fill: false,
            label: "Base",
            data: alimentos,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
          },
          {
            fill: false,
            label: "Base",
            data: automotriz,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
          },
          {
            fill: false,
            label: "Base",
            data: edicion,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
          },
          {
            fill: false,
            label: "Base",
            data: metales,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
          },
          {
            fill: false,
            label: "Base",
            data: metalmecanica,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
          },
          {
            fill: false,
            label: "Base",
            data: minerales,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
          },
          {
            fill: false,
            label: "Base",
            data: papel,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
          },
          {
            fill: false,
            label: "Base",
            data: petroleo,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
          },
          {
            fill: false,
            label: "Base",
            data: plastico,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
          },
          {
            fill: false,
            label: "Base",
            data: quimicos,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
          },
          {
            fill: false,
            label: "Base",
            data: tabaco,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
          },
          {
            fill: false,
            label: "Base",
            data: textiles,
            borderColor: "rgba(46,120,210,0.15)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
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
                drawBorder: false,
                offsetGridLines: false,
              },
              ticks: { fontColor: "#bbb", fontSize: 13,                min: this.minDate,
 },
              time: {
                tooltipFormat: "DD/MM/YY",
                unit: "year",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
                fontColor: "#bbb",
                callback: function (value, index, values) {
                  return value + "%";
                },
              },
              gridLines: {
                color: "#F7F5F0",
                lineWidth: 1,
                drawBorder: false,
                zeroLineColor: "#F7F5F0",
              },
              scaleLabel: {
                display: false,
                labelString: "Porcentaje",
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

 