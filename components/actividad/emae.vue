<template>
  <div style="position: relative" class="">
    <div class="title-container" style="min-width:100%;">
      <h2>
        <span style="text-transform: uppercase">EMAE</span>. Estimador Mensual de Actividad Económica
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
        </div>
      </div>
            <charts-line :data="chartData" :options="chartOptions" :height="460" />

    </div>
  </div>
</template>

<script>
import emaeB from "../../json/emae/base/d.json";
import emaeD from "../../json/emae/estacional/d.json";
import emaeT from "../../json/emae/tendencia/d.json";
import emaeDates from "../../json/emae/base/dates.json";

export default {
  data() {
    return {
      chartData: {
        labels: emaeDates,
        datasets: [
          {
            backgroundColor: "rgba(46,120,210,0)",
            label: "Desestacionalizado",
            data: emaeD,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            fill: false,
            label: "Tendencia",
            data: emaeT,
            borderColor: "#7a49a580",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: emaeB,
            borderColor: "rgba(46,120,210,0.25)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
        ],
      },
      chartDataAlberto: {
        labels: emaeDates,
        datasets: [
          {
            backgroundColor: "rgba(46,120,210,0)",
            label: "Desestacionalizado",
            data: emaeD,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            fill: false,
            label: "Tendencia",
            data: emaeT,
            borderColor: "#7a49a580",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            fill: false,
            label: "Base",
            data: emaeB,
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
            top: 7,
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
              },
              ticks: {
                fontColor: "#aaa",
                fontSize: 13,
              },
              time: {
                tooltipFormat: "DD/MM/YY",
                unit: "year",
              },
            },
          ],
          yAxes: [
            {
              ticks: { suggestedMax: 180, suggestedMin: 80, fontColor: "#aaa" },
              gridLines: {
                color: "#F7F5F0",
                lineWidth: 1,
                zeroLineColor: "#333",
              },
              scaleLabel: {
                labelString: "Base 2004 = 100",
                fontColor: "#aaa",
                display: false,
              },
              position: "right",
            },
          ],
        },
        legend: {
          display: false,
        },
      },
      chartOptionsAlberto: {
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
                fontColor: "#aaa",
                fontSize: 13,
                min: "2020/01/01",
                max: "2023/06/10",
              },
              time: {
                tooltipFormat: "DD/MM/YY",
                unit: "year",
              },
            },
          ],
          yAxes: [
            {
              ticks: { suggestedMax: 175, suggestedMin: 85, fontColor: "#aaa" },
              gridLines: {
                color: "#F7F5F0",
                lineWidth: 1,
                drawBorder: false,
              },
              scaleLabel: {
                display: true,
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
};
</script>
 
<style lang="scss">
.double {
  display: flex;
  > * {
    flex: 3;
    &:last-child {
      flex: 1;
      border-left: 1px dashed #ccc;
      padding-left: 0px;
      margin-left: 0px;
    }
  }
}
.chartitlealberto {
  position: absolute;
  margin: 0;
  color: #888;
  background: transparent;
  z-index: 1;
  font-weight: 500;
  font-size: 12px;
  top: 2px;
  right: 20%;
  left: initial;
}


</style>