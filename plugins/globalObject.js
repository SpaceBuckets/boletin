import Vue from 'vue'

const state = {
  updated: 0,
  isOpen: false,
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
          ticks: { fontColor: "#bbb", fontSize: 13 },
          time: {
            tooltipFormat: "DD/MM/YY",
            unit: "year",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "#bbb",
            callback: function (value, index, values) {
              return "$" + value / 1e4 + "M";
            },
          },
          gridLines: {
            color: "#F7F5F0",
            lineWidth: 1,
            drawBorder: false,
            zeroLineColor: "#eee",
          },
          scaleLabel: {
            display: false,
            labelString: "Millones de dólares",
            fontColor: "#888",
          },
          position: "right",
        },
      ],
    },
    legend: {
      display: false,
    },
  }
  
}

 import { uciiData } from "~/json/data/ucii.js";
import { balanzaData } from "~/json/data/balanza.js";
import { emaeData } from "~/json/data/emae.js";

async function kpises() {
  return {
    emae: await emaeData(),
    ucii: await uciiData(),
    balanza: await balanzaData(),
  }
}
 

export default async ({ app }, inject) => {
  inject('state', Vue.observable(state))
  inject('kpi', Vue.observable(await kpises()))
 

}