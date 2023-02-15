const fs = require('fs');
const fetch = require('@adobe/node-fetch-retry');
var xlsx = require('node-xlsx');
const parse5 = require('parse5');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const Papa = require('papaparse')
const path = require('path')
var moment = require('moment'); // require


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
      if (data[i].value !== null) {
        payload[i].x = new Date(data[i].date).toISOString().substring(0, 10)
        payload[i].y = Number((data[i].value).toFixed(2))
      } else {
        payload[i].x = new Date(data[i].date).toISOString().substring(0, 10)
        payload[i].y = Number(0)        
      }
  }

  return payload
}

async function datosGobarCSV(kpi,name) {
  const payload = {}
  const resA = await fetch(kpi.url,{rejectUnauthorized: false,});
  var emaeB = await resA.text()
  var data = Papa.parse(emaeB).data
 
  var datesArray = []

  for (let i = 0; i < data.length; i++) {
    var date = new Date(data[i][kpi.date]).toUTCString();
 
 if (date != 'Invalid Date') {
      datesArray.push(new Date (date).toLocaleDateString("en-CA", {timeZone: "UTC"}))
    }
  }

  for (let [key, value] of Object.entries(kpi.items)) {
    var tempArray = []
    for (let i = 0; i < data.length; i++) {
      if (new Date(data[i][kpi.date]).toUTCString() !== 'Invalid Date') { tempArray.push(Number(data[i][value]).toFixed(3))}
    }
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i] === 'NaN') { tempArray[i] = tempArray[i-1] }
    }

    payload[key] = tempArray;
    //console.log('\x1b[42m',`♥ [${name}] ${name} updated` ,'\x1b[0m');

  }

 payload.dates = datesArray;
return payload
  //console.log('\x1b[42m',`♥ [${name}] dates updated` ,'\x1b[0m');

}

async function genericXLS(kpi,name) {
  const payload = {}
  const resA = await fetch(kpi.url);

  var data = xlsx.parse(await resA.arrayBuffer())[kpi.sheet].data

  // DATES
  var datesArray = []
  for (let i = 0; i < data.length; i++) {
    if (name.includes("commodity") && data[i][kpi.date] && data[i][kpi.date] != 'Invalid Date') {
      data[i][kpi.date] = data[i][kpi.date].toString()
      if (data[i][kpi.date].includes(".1")) { 
        data[i][kpi.date] = data[i][kpi.date].replace(".1",".10").replace(".101",".11").replace(".102",".12")
      }
       var date = moment(new Date(data[i][kpi.date])).utc().format("YYYY-MM-DD");
       if (date === 'Invalid date') { } else { datesArray.push(date) }
    } else if (name.includes("ipifiel")) {
      if(data[0][kpi.date]) { data[i][kpi.date] = undefined }
      if(data[i][kpi.date] && data[i][kpi.date].includes("Año")) { data[i][kpi.date] = undefined }
      if(data[i][kpi.date] && data[i][kpi.date].includes("Trim")) { data[i][kpi.date] = undefined }
      if(data[i][kpi.date] && data[i][kpi.date].includes("Variación")) { data[i][kpi.date] = undefined }
      if(data[i][kpi.date] && data[i][kpi.date].includes("Bienes")) { data[i][kpi.date] = undefined }
      if(data[i][kpi.date] && data[i][kpi.date].includes("Fuente")) { data[i][kpi.date] = undefined }
      if(data[i][kpi.date] && data[i][kpi.date].includes("Pr")) { data[i][kpi.date] = undefined }
      if(data[i][kpi.date] && data[i][kpi.date].includes("JL")) { data[i][kpi.date] = data[i][kpi.date].replace("JL","Jul") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("E")) { data[i][kpi.date] = data[i][kpi.date].replace("E","Jan") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("F")) { data[i][kpi.date] = data[i][kpi.date].replace("F","Feb") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("O")) { data[i][kpi.date] = data[i][kpi.date].replace("O","Oct") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("S")) { data[i][kpi.date] = data[i][kpi.date].replace("S","Sep") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("D")) { data[i][kpi.date] = data[i][kpi.date].replace("D","Dec") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("N")) { data[i][kpi.date] = data[i][kpi.date].replace("N","Nov") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("J")) { data[i][kpi.date] = data[i][kpi.date].replace("J","Jun") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("Junan")) { data[i][kpi.date] = data[i][kpi.date].replace("Junan","Jan") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("Junul")) { data[i][kpi.date] = data[i][kpi.date].replace("Junul","Jul") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("M") && data[i-1][kpi.date].includes("Feb")) { data[i][kpi.date] = data[i][kpi.date].replace("M","Mar") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("A") && data[i-1][kpi.date].includes("Mar")) { data[i][kpi.date] = data[i][kpi.date].replace("A","Apr") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("M") && data[i-1][kpi.date].includes("Apr")) { data[i][kpi.date] = data[i][kpi.date].replace("M","May") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("A") && data[i-1][kpi.date].includes("Jul")) { data[i][kpi.date] = data[i][kpi.date].replace("A","Aug") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("Jun") && data[i-1][kpi.date].includes("Jun")) { data[i][kpi.date] = data[i][kpi.date].replace("Jun","Jul") }

      datesArray.push(data[i][kpi.date])

    } else {
      var date = new Date(Date.UTC(0, 0, data[i][kpi.date]));
      if (date != 'Invalid Date') {
        datesArray.push(date.toLocaleDateString("en-CA"))
      }
    }

  }
  if (name.includes("ipifiel")) {
    var newDatesArray = []
    datesArray = datesArray.filter(e => e)
    datesArrayObj = {}
    const chunkSize = 12;
    for (let i = 0; i < datesArray.length; i += chunkSize) {

        const chunk = datesArray.slice(i, i + chunkSize);
        datesArrayObj[datesArray[i].replace("Jan","").replace("**","").replace(" ","")] = chunk
    }

    for (let [key, value] of Object.entries(datesArrayObj)) {
      for (let i = 0; i < datesArrayObj[key].length; i++) {
        if(datesArrayObj[key][i].includes(key)) { datesArrayObj[key][i] = datesArrayObj[key][i].replace(key,"") }
        var date = datesArrayObj[key][i] + key
        date = date.replace("**","")

        newDatesArray.push(moment(new Date(date)).format("YYYY-MM-DD"))

      }
    }

    datesArray = newDatesArray

  }
   payload.dates = datesArray;


  // VALUES
  if (name.includes("ipifiel")) { 
    for (let [key, value] of Object.entries(kpi.items)) {
      var tempArray = []
      for (let i = 5; i < datesArray.length+5; i++) {
        tempArray.push(Number(data[i][value.id]).toFixed(3))
      }
      payload[value.name] = tempArray;

    }
    return payload

  } else {

    for (let [key, value] of Object.entries(kpi.items)) {
    var tempArray = []
    for (let i = 0; i < data.length; i++) {
      if (new Date(Date.UTC(0, 0, data[i][kpi.date])) != 'Invalid Date') { tempArray.push(Number(data[i][value.id]).toFixed(3))}
    }
     payload[value.name] = tempArray;

  }
  return payload

  }
}

async function scrapeBCRA(serie, name) {
  var payload = {}
  const resA = await fetch('http://www.bcra.gov.ar/PublicacionesEstadisticas/Principales_variables_datos.asp?fecha_desde=1900-01-01&fecha_hasta=2040-04-30&primeravez=1&serie=' + serie);
  var emaeB = await resA.text();
  var json = parse5.parse(emaeB)
  json = json.childNodes[1].childNodes[2].childNodes[1].childNodes[7].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes

  var dateInfla = []
  var inflaVal = []

  for (let i = 0; i < json.length; i++) {

    if (json[i].nodeName === 'tbody') {
      var date = json[i].childNodes[1].childNodes[1].childNodes[0].value.replace(/\//g, '-');
      var inflaDateTemp = date.split('-')
      var newdate = inflaDateTemp[2] + '-' + inflaDateTemp[1] + '-' + inflaDateTemp[0]
      dateInfla.push(newdate)
      inflaVal.push(json[i].childNodes[1].childNodes[3].childNodes[0].value.trim().split('.').join("").replace(/,/g, '.'))
    }
  }

    payload.dates = dateInfla
    payload.d = inflaVal
    

    return payload
}

async function parseBonos(kpi, obj) {
  var pepeLength
  var payload = {}

  for (let [key, value] of Object.entries(obj)) {
  
    try {

      var resA = await fetch("https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas", {
        "headers": { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", },
        "body": `idEspecie=${value}&fechaDesde=01%2F01%2F1900&fechaHasta=01%2F01%2F2100`,
        "method": "POST"
      });

      var emaeB = JSON.parse(await resA.text())
      var datesArray = []
      var tempArray = []

      for (let i = 1; i < emaeB.length; i++) {
        datesArray.push(emaeB[i].FechaString.split('/').reverse().join('-'))
        tempArray.push(Number(emaeB[i].PrecioUltimo))   
      }

      if (key === 'tx23' || key === 'al29d') { pepeLength = tempArray.length }
      tempArray.length = pepeLength  
 
      for (let i = 1; i < tempArray.length; i++) { if(tempArray[i] === undefined) { tempArray[i] = null } }
      for (let o = 1; o < datesArray.length; o++) { if(datesArray[o] === undefined) { datesArray[o] = null } }
      

      payload.dates = datesArray.reverse()
      payload[key] = tempArray.reverse()
      
      //console.log('\x1b[42m',`♥ [bonos] ${key} updated` ,'\x1b[0m');
  

    } catch (error) {
 
      console.log(`✕ [${key}] failed to fetch!`)
    }  
  }
  return payload

}

async function newgenericXLS(kpi,name) {
  const payload = {}
  const resA = await fetch(kpi.url);

  var data = xlsx.parse(await resA.arrayBuffer())[kpi.sheet].data
  //var data = xlsx.parse(await (await fetch(kpi.url)).arrayBuffer())[kpi.sheet].data
    // DATES
  var datesArray = []

  for (let dimension in kpi.items) {
    payload[dimension.name] = []

    for (let i = 0; i < data.length; i++) {
      payload[dimension.name][i] = {}



     if (data[i][kpi.date] && data[i][kpi.date] != 'Invalid Date') {
        var date = new Date(Date.UTC(0, 0, data[i][kpi.date]));
        if (date != 'Invalid Date') { 
          payload[dimension.name][i].x = new Date(Date.UTC(0, 0, data[i][kpi.date]))
          payload[dimension.name][i].y = Number(data[i][dimension.id]).toFixed(3)
        } 
      }  
    }

  }
  console.log(payload)
   //payload.dates = datesArray;

/* 
  // VALUES

    for (let [key, value] of Object.entries(kpi.items)) {
    var tempArray = []
    for (let i = 0; i < data.length; i++) {
      if (new Date(Date.UTC(0, 0, data[i][kpi.date])) != 'Invalid Date') { tempArray.push(Number(data[i][value.id]).toFixed(3))}
    }
     payload[value.name] = tempArray;

  }
  return payload
 */
  
}

module.exports = {scrapeBCRA,genericXLS,newgenericXLS, datosGobarCSV,parseWorldBank,parseBonos,writeFileSyncRecursive, datosGobarAPI }
