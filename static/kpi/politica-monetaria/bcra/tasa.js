module.exports = (async function() {

  const parsers = require("@parsers");
  const fetch = require('@adobe/node-fetch-retry');
  const xlsx = require('node-xlsx');
  const kpi = "tasa"
 


  const resA = await fetch('http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm');
  var emaeB = await resA.arrayBuffer();
  var obj = xlsx.parse(emaeB);

  var dateTasa = []
  var valTasa = []
  var valPlazo = []
  var valBadlar = []
  var valPases = [] 
  var payload = {}

  for (let i = 0; i < obj[5].data.length; i++) {
    var date = new Date(Date.UTC(0, 0, obj[5].data[i][0]));
    if (date != 'Invalid Date') {
      dateTasa.push(date.toLocaleDateString("en-CA"))
      valPlazo.push(obj[5].data[i][1].toFixed(2))
      valBadlar.push(obj[5].data[i][8].toFixed(2))
      //valPases.push(obj[5].data[i][20].toString().replace(/s\/i/g, '0'))

    }
  }

  for (let i = 0; i < obj[6].data.length; i++) {
    var date = new Date(Date.UTC(0, 0, obj[6].data[i][0]));
    if (date != 'Invalid Date') {
      var tempCall = obj[6].data[i][9]
      if (!tempCall) { tempCall = '0' }
      valTasa.push(obj[6].data[i][9])
      var tempPases = obj[6].data[i][11]
      if (!tempPases) { tempPases = '0' }
      valPases.push(obj[6].data[i][11])


    }
  }

  payload.dates = dateTasa;
  payload.plazo = valPlazo;
  payload.badlar = valBadlar;
  payload.tasa = valTasa;
  payload.pases = valPases;
 

  var post = {
    kpi,
  t: "Tasas de Interés",
  st: "Tasa de Política Monetaria",
  sd: "La tasa de referencia de la política monetaria es la de Letras de Liquidez (LELIQ). La tasa de política monetaria indica el sesgo de la política que adopta la autoridad monetaria para alcanzar sus metas de inflación.",
/*   "cells": {
    "1267": {
      "area": "1 / 6 / 2 / 7",
      "kpi": "tasa",
      "type": "Kpi",
      "hasChart": true
    },
    "1416": {
      "area": "1 / 1 / 4 / 6",
      "kpi": "tasa",
      "type": "Line",
      "hasChart": true
    },
    "2367": {
      "area": "2 / 6 / 3 / 7",
      "kpi": "tasa",
      "type": "Kpi",
      "hasChart": true
    },
    "3467": {
      "area": "3 / 6 / 4 / 7",
      "kpi": "tasa",
      "type": "Kpi",
      "hasChart": true
    },
    "4715": {
      "area": "4 / 1 / 7 / 5",
      "kpi": "tasasinternacionales",
      "type": "Line",
      "hasChart": true
    },
    "4757": {
      "area": "4 / 5 / 7 / 7",
      "kpi": "tasa",
      "type": "Table",
      "hasChart": true
    }
  }, */
  c: "<p>La tasa de referencia de la política monetaria es la de Letras de Liquidez (LELIQ). La tasa de política monetaria indica el sesgo de la política que adopta la autoridad monetaria para alcanzar sus metas de inflación.</p><p>El BCRA calibrará las tasas de interés de manera de garantizar una mayor disponibilidad de instrumentos de ahorro que permitan a los argentinos obtener rendimientos acordes con la evolución de la inflación y del tipo de cambio, contribuyendo así a estabilizar las expectativas cambiarias, favoreciendo al proceso de desinflación. Dicho reacomodamiento de la estructura de tasas de interés se complementará con la continuidad de aquellas políticas de estímulo focalizado al crédito al sector privado.</p>",
  fd: "Scraped (XLS)",
  fdr: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
  fu: "BCRA",
  fur: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
  frec: "Diaria", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 100,
  cat: "Política Monetaria",
  catslug: "politica-monetaria",

  chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Referencia",
        data: payload.tasa,
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Badlar",
        data: payload.badlar,
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Plazo Fijo",
        data: payload.plazo,
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Pases Pasivos (1d)",
        data: payload.pases,
        borderColor: "#7a49a580",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

