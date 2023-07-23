const fs = require('fs');
const fetch = require('@adobe/node-fetch-retry');
//const fetch = require('node-fetch');
var xlsx = require('node-xlsx');
const parse5 = require('parse5');
const Papa = require('papaparse')
const path = require('path')
function writeFileSyncMaster(e,i,t){let c=e.split(path.sep).slice(0,-1);c.length&&c.reduce((e,i)=>{let t=e?e+path.sep+i:i;return fs.existsSync(t)||fs.mkdirSync(t),t}),fs.writeFileSync(e,i,t)}

function writeFileSyncRecursive(e, i) {
  const existingData = (() => { try { return JSON.parse(fs.readFileSync(e)); } catch (err) { return null; } })();
  const eK = existingData ? Object.keys(existingData).filter(k => k !== "u") : []
  const iK = Object.keys(i).filter(k => k !== "u");
  const allKeysEqual = eK.length === iK.length && eK.every(k => iK.includes(k) && JSON.stringify(existingData[k]) === JSON.stringify(i[k]));
  //console.log(allKeysEqual ? '\x1b[43m' : '\x1b[42m', allKeysEqual ? `¤ [${i.kpi}] skipped` : `♥ [${i.kpi}] updated`, '\x1b[0m');
  if (!allKeysEqual) writeFileSyncMaster(e, JSON.stringify(i));
}

function detectAggregationFunction(data) {
  const mean = data.reduce((acc, d) => acc + d.y, 0) / data.length;
  const standardDeviation = Math.sqrt(data.reduce((acc, d) => acc + Math.pow(d.y - mean, 2), 0) / data.length);

  return standardDeviation < 12 ? "sum" : "mean";
}

const detectDataType = data => Math.round((new Date(data[1].x) - new Date(data[0].x)) / (1000 * 60 * 60 * 24)) < 5 ? 'Diaria' : Math.round((new Date(data[1].x) - new Date(data[0].x)) / (1000 * 60 * 60 * 24)) < 32 ? 'Mensual' : 'Anual';


/* -Banco Mundial------------------------------------------------------------------------- */

async function parseWorldBank(value) {
  const data = (await (await fetch(value)).json())[1].reverse()
  return data.map(item => ({
    x: new Date(item.date).toISOString().substring(0, 10),
    y: Number(item.value?.toFixed(2)) || null
  }))
}

/* -Bonos Intervalores------------------------------------------------------------------------- */

async function parseBonos(key) {
  const data = JSON.parse(await (await fetch("https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas", {"headers": { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", },"body": `idEspecie=${key}&fechaDesde=01%2F01%2F1900&fechaHasta=01%2F01%2F2100`,"method": "POST"})).text())
  return data.map(item => ({
      x: item.FechaString.split('/').reverse().join('-'),
      y: Number(item.PrecioUltimo?.toFixed(2)) || null
    })).reverse();
}

/* -API datos.gob.ar------------------------------------------------------------------------- */

async function datosGobarAPI(value) {
  const data = (await (await fetch(`https://apis.datos.gob.ar/series/api/series/?limit=5000&format=json&ids=${value}`)).json()).data;
  return data.map(item => ({
    x: item[0],
    y: Number(item[1]?.toFixed(2)) || null
  }));
}

/* -CSV datos.gob.ar------------------------------------------------------------------------- */

  
async function datosGobarCSV(dates,values,url) {
  const data = Papa.parse(await (await fetch(url,{retryOptions: false})).text()).data
  return data.map((item) => !isNaN(new Date(item[dates]).getTime()) && !isNaN(Number(item[values])) && ({
    x: new Date(item[dates]).toISOString().substring(0, 10),
    y: +Number(item[values]).toFixed(2)
  })).filter(Boolean);
}


/* -Excel------------------------------------------------------------------------- */

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

/* -BCRA Parser------------------------------------------------------------------------- */

async function scrapeBCRA(serie) {
  var data = parse5.parse(await (await fetch('http://www.bcra.gov.ar/PublicacionesEstadisticas/Principales_variables_datos.asp?fecha_desde=1900-01-01&fecha_hasta=2040-04-30&primeravez=1&serie=' + serie)).text()).childNodes[1].childNodes[2].childNodes[1].childNodes[7].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes
  return data.filter((node) => node.nodeName === 'tbody').map((node) => ({
    x: node.childNodes[1].childNodes[1].childNodes[0].value.replace(/\//g, '-').split('-').reverse().join('-'),
    y: Number(node.childNodes[1].childNodes[3].childNodes[0].value.trim().split('.').join('').replace(/,/g, '.'))
  }));
}

/* -------------------------------------------------------------------------- */


module.exports = {detectDataType,detectAggregationFunction,scrapeBCRA,genericXLS, datosGobarCSV,parseWorldBank,parseBonos,writeFileSyncRecursive, datosGobarAPI }
