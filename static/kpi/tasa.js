module.exports = {
  "t": "Tasas de Interés",
  "st": "Tasa de Política Monetaria",
  "sd": "La tasa de referencia de la política monetaria es la de Letras de Liquidez (LELIQ). La tasa de política monetaria indica el sesgo de la política que adopta la autoridad monetaria para alcanzar sus metas de inflación.",
  "kpi": "tasa",
  "cells": {
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
  },
  "c": "<p>La tasa de referencia de la política monetaria es la de Letras de Liquidez (LELIQ). La tasa de política monetaria indica el sesgo de la política que adopta la autoridad monetaria para alcanzar sus metas de inflación.</p><p>El BCRA calibrará las tasas de interés de manera de garantizar una mayor disponibilidad de instrumentos de ahorro que permitan a los argentinos obtener rendimientos acordes con la evolución de la inflación y del tipo de cambio, contribuyendo así a estabilizar las expectativas cambiarias, favoreciendo al proceso de desinflación. Dicho reacomodamiento de la estructura de tasas de interés se complementará con la continuidad de aquellas políticas de estímulo focalizado al crédito al sector privado.</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "max": 100,
  "cat": "Política Monetaria",
  chartdata: {
    labels: require("../data/monetaria/tasas/tasadates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Referencia",
        data: require("../data/monetaria/tasas/tasatasa.json"),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Badlar",
        data: require("../data/monetaria/tasas/tasabadlar.json"),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Plazo Fijo",
        data: require("../data/monetaria/tasas/tasaplazo.json"),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Pases Pasivos (1d)",
        data: require("../data/monetaria/tasas/tasapases.json"),
        borderColor: "#7a49a580",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}

