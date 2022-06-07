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

import { uciiData } from "../json/data/ucii.mjs";
import { ipiData } from "../json/data/ipi.mjs";
import { isacData } from "../json/data/isac.mjs";
import { balanzaData } from "../json/data/balanza.mjs";
import { emaeData } from "../json/data/emae.mjs";
import { aceroData } from "../json/data/acero.mjs";
import { cerealesData } from "../json/data/cereales.mjs";
import { gasData } from "../json/data/gas.mjs";
import { petroleoData } from "../json/data/petroleo.mjs";
import { deficitData } from "../json/data/deficit.mjs";
import { cambioData } from "../json/data/cambio.mjs";
import { ipcData } from "../json/data/ipc.mjs";
import { tasaData } from "../json/data/tasa.mjs";
import { subsidiosData } from "../json/data/subsidios.mjs";
import { embiData } from "../json/data/embi.mjs";
import { asalariadosData } from "../json/data/asalariados.mjs";
import { desempleoData } from "../json/data/desempleo.mjs";
import { tcrmData } from "../json/data/tcrm.mjs";
import { reservasData } from "../json/data/reservas.mjs";
import { iceData } from "../json/data/ice.mjs";
import { brechaData } from "../json/data/brecha.mjs";
import { comprasbcraData } from "../json/data/comprasbcra.mjs";



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