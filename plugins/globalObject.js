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
import { ipiData } from "~/json/data/ipi.js";
import { isacData } from "~/json/data/isac.js";
import { balanzaData } from "~/json/data/balanza.js";
import { emaeData } from "~/json/data/emae.js";
import { aceroData } from "~/json/data/acero.js";
import { cerealesData } from "~/json/data/cereales.js";
import { gasData } from "~/json/data/gas.js";
import { petroleoData } from "~/json/data/petroleo.js";
import { deficitData } from "~/json/data/deficit.js";
import { cambioData } from "~/json/data/cambio.js";
import { ipcData } from "~/json/data/ipc.js";
import { tasaData } from "~/json/data/tasa.js";
import { subsidiosData } from "~/json/data/subsidios.js";
import { embiData } from "~/json/data/embi.js";
import { asalariadosData } from "~/json/data/asalariados.js";
import { desempleoData } from "~/json/data/desempleo.js";
import { tcrmData } from "~/json/data/tcrm.js";
import { reservasData } from "~/json/data/reservas.js";
import { iceData } from "~/json/data/ice.js";
import { brechaData } from "~/json/data/brecha.js";
import { comprasbcraData } from "~/json/data/comprasbcra.js";



async function kpises() {
  return {
    emae: await emaeData(),
    ipi: await ipiData(),
    isac: await isacData(),
    ucii: await uciiData(),
    balanza: await balanzaData(),
    acero: await aceroData(),
    cereales: await cerealesData(),
    gas: await gasData(),
    petroleo: await petroleoData(),
    deficit: await deficitData(),
    cambio: await cambioData(),
    ipc: await ipcData(),
    tasa: await tasaData(),
    subsidios: await subsidiosData(),
    embi: await embiData(),
    asalariados: await asalariadosData(),
    desempleo: await desempleoData(),
    tcrm: await tcrmData(),
    reservas: await reservasData(),
    ice: await iceData(),
    brecha: await brechaData(),
    comprasbcra: await comprasbcraData()
  }
}
 

export default async ({ app }, inject) => {
  inject('state', Vue.observable(state))
  inject('kpi', Vue.observable(await kpises()))
 

}