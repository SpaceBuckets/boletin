<template>
  <div style="position: relative" class="">
    <div class="title-container" style="min-width: 100%">
      <h2><span>Produccion de Cereales y Oleaginosas</span>. En toneladas</h2>
 
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
        <p>Fuente: INDEC</p>
        <div>
          <div>
            <div>Fecha</div>
            <div>Deses.</div>
            <div>Variacion</div>
          </div>
        </div>
        <div class="flexedcontent"></div>
      </div>
      <charts-line :data="chartData" :options="chartOptions" :height="460" />
    </div>
  </div>
</template>

<script>
import soja from "../../json/cuentas/soja/d.json";
import maiz from "../../json/cuentas/maiz/d.json";
import girasol from "../../json/cuentas/girasol/d.json";
import trigo from "../../json/cuentas/trigo/d.json";
import expoDates from "../../json/cuentas/soja/dates.json";

export default {
  data() {
    return {
      chartData: {
        labels: expoDates,
        datasets: [
          {
            backgroundColor: "rgba(146,220,210,0)",
            label: "Transporte",
            data: girasol,
            borderColor: "rgba(46,120,210,0.25)",
 
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            backgroundColor: "rgba(146,220,210,0)",
            label: "Transporte",
            data: maiz,
            borderColor: "rgba(46,120,210,0.25)",
 
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            backgroundColor: "rgba(146,220,210,0)",
            label: "Transporte",
            data: trigo,
            borderColor: "rgba(46,120,210,0.25)",
 
            pointRadius: 0,
            borderWidth: 2,
          },                    
          {
            backgroundColor: "rgba(146,220,210,0)",
            label: "Energia",
 
            data: soja,
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 2,
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
              ticks: { fontColor: "#aaa", fontSize: 13 },
              time: {
                tooltipFormat: "DD/MM/YY",
                unit: "year",
              },
            },
          ],
          yAxes: [
            {
 
              ticks: { fontColor: "#aaa" },
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
};
</script>

 