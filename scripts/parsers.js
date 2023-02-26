const fs = require('fs');
const fetch = require('@adobe/node-fetch-retry');
var xlsx = require('node-xlsx');
const parse5 = require('parse5');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const Papa = require('papaparse')
const path = require('path')
function writeFileSyncRecursive(e,i,t){let c=e.split(path.sep).slice(0,-1);c.length&&c.reduce((e,i)=>{let t=e?e+path.sep+i:i;return fs.existsSync(t)||fs.mkdirSync(t),t}),fs.writeFileSync(e,i,t)}


/* -------------------------------------------------------------------------- */

async function datosGobarAPI(value) {
  const data = (await (await fetch(`https://apis.datos.gob.ar/series/api/series/?limit=5000&format=json&ids=${value}`)).json()).data;
  return data.map(item => ({
    x: item[0],
    y: Number(item[1]?.toFixed(2)) || null
  }));
}

/* -------------------------------------------------------------------------- */


async function parseWorldBank(value) {
  const data = (await (await fetch(value)).json())[1].reverse()
  return data.map(item => ({
    x: new Date(item.date).toISOString().substring(0, 10),
    y: Number(item.value?.toFixed(2)) || null
  }))
}


/* -------------------------------------------------------------------------- */


async function parseBonos(key) {
  const data = JSON.parse(await (await fetch("https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas", {"headers": { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", },"body": `idEspecie=${key}&fechaDesde=01%2F01%2F1900&fechaHasta=01%2F01%2F2100`,"method": "POST"})).text())
  return data.map(item => ({
      x: item.FechaString.split('/').reverse().join('-'),
      y: Number(item.PrecioUltimo?.toFixed(2)) || null
    })).reverse();
}

/* -------------------------------------------------------------------------- */


async function datosGobarCSV(kpi) {
  const payload = {} 
  const data = Papa.parse(await (await fetch(kpi.url,{rejectUnauthorized: false,})).text()).data

  for (let [key, value] of Object.entries(kpi.items)) {
    payload[key] = data.map((datum) => {
      if (!isNaN(new Date(datum[kpi.date]).getTime()) && !isNaN(Number(datum[value]))) {
        return {
          x: new Date(datum[kpi.date]).toISOString().substring(0, 10),
          y: Number(Number(datum[value]).toFixed(2)),
        };
      }
    }).filter(Boolean)
   }

 return payload
 
}


/* -------------------------------------------------------------------------- */

async function genericXLS(kpi) {
  const payload = {}
  const data = xlsx.parse(await (await fetch(kpi.url)).arrayBuffer())[kpi.sheet].data

  for (const kpiItem of kpi.items) {
    payload[kpiItem.name] = data.map((item) => {
      const date = new Date(Math.round((item[kpi.date] - 25569)*86400*1000));
      return ({
        x: !isNaN(date.getTime()) ? date.toISOString().substring(0, 10) : null,
        y: !isNaN(item[kpiItem.id]) ? Number(item[kpiItem.id].toFixed(2)) : null,
      });
    }).filter(({ x, y }) => x && y);
  }
  return payload
 
}

/* -------------------------------------------------------------------------- */

async function scrapeBCRA(serie) {
  var data = parse5.parse(await (await fetch('http://www.bcra.gov.ar/PublicacionesEstadisticas/Principales_variables_datos.asp?fecha_desde=1900-01-01&fecha_hasta=2040-04-30&primeravez=1&serie=' + serie)).text()).childNodes[1].childNodes[2].childNodes[1].childNodes[7].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes
  return data.filter((node) => node.nodeName === 'tbody').map((node) => ({
    x: node.childNodes[1].childNodes[1].childNodes[0].value.replace(/\//g, '-').split('-').reverse().join('-'),
    y: Number(node.childNodes[1].childNodes[3].childNodes[0].value.trim().split('.').join('').replace(/,/g, '.'))
  }));
}

/* -------------------------------------------------------------------------- */


module.exports = {scrapeBCRA,genericXLS, datosGobarCSV,parseWorldBank,parseBonos,writeFileSyncRecursive, datosGobarAPI }
