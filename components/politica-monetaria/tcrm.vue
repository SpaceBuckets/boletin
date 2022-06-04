<template>
  <section>
    <div class="title-container" style="min-width: 100%">
      <h2><strong>TCRM</strong>. Tipo de Cambio Real</h2>
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
import trcm from "../../json/tcrm/itcrm.json";
import trcus from "../../json/tcrm/itcrus.json";
import trcb from "../../json/tcrm/itcrb.json";
import trcmDates from "../../json/tcrm/dates.json";

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
        labels: trcmDates,
        datasets: [
          {
            backgroundColor: "rgba(46,120,210,0)",
            label: "Desestacionalizado",
            data: trcm,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            backgroundColor: "rgba(46,120,210,0)",
            label: "Desestacionalizado",
            data: trcus,
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            backgroundColor: "rgba(46,120,210,0)",
            label: "Desestacionalizado",
            data: trcb,
            borderColor: "rgba(46,120,210,0.25)",
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
              ticks: { fontColor: "#bbb", fontSize: 13,min: this.minDate, },
              time: {
                tooltipFormat: "DD/MM/YY",
                unit: "year",
              },
            },
          ],
          yAxes: [
            {
              ticks: { suggestedMin: 0, suggestedMax: 100, fontColor: "#bbb" },
              gridLines: {
                color: "#F7F5F0",
                lineWidth: 1,
                drawBorder: false,                zeroLineColor: "#eee",

              },
               scaleLabel: {
                display: false,
                labelString: "Base 2004 = 100",
                fontColor: "#bbb",
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

 