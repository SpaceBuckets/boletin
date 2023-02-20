const fs = require('fs');
const fetch = require('@adobe/node-fetch-retry');
var xlsx = require('node-xlsx');
const parse5 = require('parse5');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const Papa = require('papaparse')
const path = require('path')


function writeFileSyncRecursive(filename, content, charset) {
  const folders = filename.split(path.sep).slice(0, -1)
  if (folders.length) {
    folders.reduce((last, folder) => {
      const folderPath = last ? last + path.sep + folder : folder
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath)
      }
      return folderPath
    })
  }
  fs.writeFileSync(filename, content, charset)
}

async function datosGobarAPI(value) {
  var payload = []
  const data = (await (await fetch(`https://apis.datos.gob.ar/series/api/series/?limit=5000&format=json&ids=${value}`)).json()).data;

  for (let i = 0; i < data.length; i++) {
    if (data[i][1] == null) { data[i][1] = 0 }
    payload[i] = {}
    payload[i].x = data[i][0]
    payload[i].y = Number((data[i][1]).toFixed(2))
  }
 
  return payload

}

async function parseWorldBank(value) {
    var payload = []
    var data = JSON.parse(await (await fetch(value)).text())[1].slice().reverse()

    for (let i = 0; i < data.length; i++) {
      payload[i] = {}
      payload[i].x = new Date(data[i].date).toISOString().substring(0, 10)
      payload[i].y = Number(0)
      if (data[i].value !== null) { payload[i].y = Number((data[i].value).toFixed(2))} 
  }

  return payload
}

async function datosGobarCSV(kpi) {
  const payload = {} 
  var data = Papa.parse(await (await fetch(kpi.url,{rejectUnauthorized: false,})).text()).data

  for (let [key, value] of Object.entries(kpi.items)) {
    payload[key] = []
     for (let i = 0; i < data.length; i++) {
      payload[key][i] = {}
      if(!isNaN(new Date(data[i][kpi.date]).getTime()) && !isNaN(Number(data[i][value]))) { 
        payload[key][i].x = new Date(data[i][kpi.date]).toISOString().substring(0, 10)
        payload[key][i].y = Number(Number(data[i][value]).toFixed(3))
      }
    }
    payload[key] = payload[key].filter(element => { if (Object.keys(element).length !== 0) { return true; } return false; });
  }

 return payload
 
}


async function scrapeBCRA(serie) {
  var payload = []
  var data = parse5.parse(await (await fetch('http://www.bcra.gov.ar/PublicacionesEstadisticas/Principales_variables_datos.asp?fecha_desde=1900-01-01&fecha_hasta=2040-04-30&primeravez=1&serie=' + serie)).text()).querySelector('.table-bcra')
 
  for (let i = 0; i < data.length; i++) {
    payload[i] = {}
    if (data[i].nodeName === 'tbody') {
      var date = data[i].childNodes[1].childNodes[1].childNodes[0].value.replace(/\//g, '-');
      var inflaDateTemp = date.split('-')
      var newdate = inflaDateTemp[2] + '-' + inflaDateTemp[1] + '-' + inflaDateTemp[0]

      payload[i].x = newdate;
      payload[i].y = Number(data[i].childNodes[1].childNodes[3].childNodes[0].value.trim().split('.').join("").replace(/,/g, '.'))
      
    }
  }
  
  payload = payload.filter(element => { if (Object.keys(element).length !== 0) { return true; } return false; });
 
  return payload
}

async function parseBonos(key) {
  var payload = []

  var emaeB = JSON.parse(await (await fetch("https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas", {"headers": { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", },"body": `idEspecie=${key}&fechaDesde=01%2F01%2F1900&fechaHasta=01%2F01%2F2100`,"method": "POST"})).text())

  for (let i = 1; i < emaeB.length; i++) {
    payload[i] = {}
    payload[i].x = emaeB[i].FechaString.split('/').reverse().join('-')
    payload[i].y = Number(emaeB[i].PrecioUltimo)
  } 
  payload = payload.filter(element => { if (Object.keys(element).length !== 0) { return true; } return false; }).reverse();

  return payload

}

async function genericXLS(kpi) {
  const payload = {}
  const data = xlsx.parse(await (await fetch(kpi.url)).arrayBuffer())[kpi.sheet].data
  for (let e in kpi.items) {
    payload[kpi.items[e].name] = []
    for (let i = 0; i < data.length; i++) {
      payload[kpi.items[e].name][i] = {}
      if (!isNaN(new Date(Math.round((data[i][kpi.date] - 25569)*86400*1000)).getTime())) {
          payload[kpi.items[e].name][i].x = new Date(Math.round((data[i][kpi.date] - 25569)*86400*1000)).toISOString().substring(0, 10)
          payload[kpi.items[e].name][i].y = Number(Number(data[i][kpi.items[e].id]).toFixed(2))
          if(isNaN(parseFloat(payload[kpi.items[e].name][i].y))) { payload[kpi.items[e].name][i].y = 0 }
      }  
    }
    payload[kpi.items[e].name] = payload[kpi.items[e].name].filter(element => { if (Object.keys(element).length !== 0) { return true; } return false; });
  }
 
  return payload
 
}

module.exports = {scrapeBCRA,genericXLS, datosGobarCSV,parseWorldBank,parseBonos,writeFileSyncRecursive, datosGobarAPI }
