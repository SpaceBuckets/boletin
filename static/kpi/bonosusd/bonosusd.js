module.exports = (async function() {

  const parsers = require("../../parsers");
  const generatedTime = require(`../../generatedTime.json`)
  const kpi = "bonosusd"
  const bonosusd = {
    al29d: '13076',
    al30d: '13078',
    al41d: '13083',
    gd30d: '13092',
    gd35d: '13089',
    gd41d: '13093'
  }
 
  try {
    await parsers.parseBonos(kpi, bonosusd)


  var post = {
    kpi,
    t: "Bonos USD",
    st: "Bonos Ley Argentina y NY",
    sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    c: "<p></p>",
    fd: "API",
    fdr: "https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas",
    fu: "Intervalores",
    fur: "https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas",
    frec: "Diaria", 
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    cat: "Sector Financiero",
    catslug: "sector-financiero",
    min: 0,
    "cells": {
 
      "1416": {
        "area": "1 / 1 / 4 / 7",
        "kpi": "bonosusd",
        "type": "LineHeader",
        "hasChart": true
      },
      "4177": {
        "area": "4 / 1 / 7 / 7",
        "kpi": "bonoscer",
        "type": "LineHeader",
        "hasChart": true
      },    
    },    
    chartdata: {
      labels: require(`../../data/${generatedTime}/${kpi}/al30d/dates.json`),
      datasets: [
        {
          backgroundColor: "rgba(46,120,210,0.0)",
          label: "AL30D",
          data: require(`../../data/${generatedTime}/${kpi}/al30d/d.json`),
          borderColor: "rgba(46,120,210,1)",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(46,120,210,0.0)",
          label: "AL29D",
          data: require(`../../data/${generatedTime}/${kpi}/al29d/d.json`),
          borderColor: "rgba(46,120,210,0.25)",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(46,120,210,0.0)",
          label: "AL41D",
          data: require(`../../data/${generatedTime}/${kpi}/al41d/d.json`),
          borderColor: "rgba(46,120,210,0.25)",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(46,120,210,0.0)",
          label: "GD30D",
          data: require(`../../data/${generatedTime}/${kpi}/gd30d/d.json`),
          borderColor: "rgba(46,120,210,0.25)",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(46,120,210,0.0)",
          label: "GD35D",
          data: require(`../../data/${generatedTime}/${kpi}/gd35d/d.json`),
          borderColor: "rgba(46,120,210,0.25)",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(46,120,210,0.0)",
          label: "GD41D",
          data: require(`../../data/${generatedTime}/${kpi}/gd41d/d.json`),
          borderColor: "rgba(46,120,210,0.25)",
          pointRadius: 0,
          borderWidth: 1.5,
        },
      ],
    }
  }

  
  parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));
} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()
