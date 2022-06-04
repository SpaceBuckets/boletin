<template>
<section>
    <div class="title-container" style="min-width:100%;">
      <h2>
        <span>Inflación</span>. Indice de Precios
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
            <div>{{ dates.slice(0,-3) }}</div>
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

     <charts-bar
            :key="$state.updated"
            :data="chartData"
            :options="chartOptions"
            :height="chartHeight"
          />
       </div>
    

  </section>
</template>

<script>
import ipc from "../../json/ipc/historico/dmensual.json";
import ipc2 from "../../json/ipc/historico/danual.json";
import ipcDates from "../../json/ipc/historico/dates.json";

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
        labels: ipcDates,
        datasets: [
          {
            backgroundColor: "#2E78D295",
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
                zeroLineColor: "#F7F5F0",
                drawBorder: false,
                offsetGridLines: false,
                color: "#F7F5F0",
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
              ticks: { max: 8, min: 0,
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

 