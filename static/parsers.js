const fs = require('fs');
const fetch = require('node-fetch');
var xlsx = require('node-xlsx');
const parse5 = require('parse5');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const glob = require('glob');
const matter = require('gray-matter');
const Papa = require('papaparse')
const path = require('path')
var moment = require('moment'); // require
const generatedTime = require(`../static/generatedTime.json`)

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

async function datosGobarAPI(kpi, name, value) {

  var tempDates = [];
  var tempDataBase = [];
  const resB = await fetch(`https://apis.datos.gob.ar/series/api/series/?limit=5000&format=json&ids=${value}`);
  var emaeB = await resB.json();
  for (let i = 0; i < emaeB.data.length; i++) {
    if (emaeB.data[i][1] == null) { emaeB.data[i][1] = 0 }

    if (name === 'ipcgba' || name === 'ipcnucleo' || name === 'ipib' || name === 'ipim') {
      tempDataBase.push((emaeB.data[i][1] * 100).toFixed(2))

    } else {
      tempDataBase.push(emaeB.data[i][1].toFixed(2));

    }


    tempDates.push(emaeB.data[i][0]);
  }
  writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${name}/dates.json`, JSON.stringify(tempDates));
  writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${name}/d.json`, JSON.stringify(tempDataBase));
  await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](800)
  console.log('\x1b[42m',`♥ [${kpi}] ${name} updated` ,'\x1b[0m');


}

async function parseAmbito(obj) {
  var pepeLength
 
  for (let [key, value] of Object.entries(obj)) {
    const resA = await fetch(value);
    var emaeB = JSON.parse(await resA.text())
    var datesArray = []
    var tempArray = []
   for (let i = 1; i < emaeB.length; i++) {
 
    datesArray.push(emaeB[i][0].split('-').reverse().join('-'))
   // datesArray.push(new Date (emaeB[1][i].date).toLocaleDateString("en-CA", {timeZone: "UTC"}))

    tempArray.push(Number(emaeB[i][1].replace(',','.')))
      
  }
  if (key === 'oficial') { pepeLength = tempArray.length }
  tempArray.length = pepeLength  
   writeFileSyncRecursive(`./static/data/${generatedTime}/cambio/${key}/dates.json`, JSON.stringify(datesArray.reverse()));
    writeFileSyncRecursive(`./static/data/${generatedTime}/cambio/${key}/d.json`, JSON.stringify(tempArray.reverse()));
    console.log(`♥ [ambito] ${key} updated`)

   } 

}



async function parseWorldBank(kpi,name,value) {
 
    const resA = await fetch(value);
    var emaeB = JSON.parse(await resA.text())
    var datesArray = [], tempArray = []

    for (let i = 0; i < emaeB[1].length; i++) {

      if (emaeB[1][i].value !== null) {
        datesArray.push(new Date (emaeB[1][i].date).toLocaleDateString("en-CA", {timeZone: "UTC"}))
        tempArray.push(emaeB[1][i].value)
      }
  
  }
  writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${name}/dates.json`, JSON.stringify(datesArray.reverse()));
  writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${name}/d.json`, JSON.stringify(tempArray.reverse())); 
  console.log('\x1b[42m',`♥ [${kpi}] ${name} updated` ,'\x1b[0m');

}

async function datosGobarCSV(kpi,name) {

  const resA = await fetch(kpi.url);
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
    writeFileSyncRecursive(`./static/data/${generatedTime}/${name}/${key}.json`, JSON.stringify(tempArray));
    console.log('\x1b[42m',`♥ [${name}] ${name} updated` ,'\x1b[0m');

  }

  writeFileSyncRecursive(`./static/data/${generatedTime}/${name}/dates.json`, JSON.stringify(datesArray));

  //console.log('\x1b[42m',`♥ [${name}] dates updated` ,'\x1b[0m');

}

async function genericXLS(kpi,name) {

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

/*             if(data[i][kpi.date] && data[i][kpi.date].includes("A")) { data[i][kpi.date] = data[i][kpi.date].replace("A","Apr") }

      if(data[i][kpi.date] && data[i][kpi.date].includes("J")) { data[i][kpi.date] = data[i][kpi.date].replace("J","Jun") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("Junul")) { data[i][kpi.date] = data[i][kpi.date].replace("Junul","Jul") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("M")) { data[i][kpi.date] = data[i][kpi.date].replace("M","Mar") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("Mayar")) { data[i][kpi.date] = data[i][kpi.date].replace("Mayar","May") }
      if(data[i][kpi.date] && data[i][kpi.date].includes("Junan")) { data[i][kpi.date] = data[i][kpi.date].replace("Junan","Jan") }
 */

      //var date = moment(new Date(data[i][kpi.date])).utc().format("YYYY-MM-DD");
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
        //console.log(date)

        newDatesArray.push(moment(new Date(date)).format("YYYY-MM-DD"))

      }
    }

    datesArray = newDatesArray

  }
   writeFileSyncRecursive(`./static/data/${generatedTime}/${name}/${kpi.items[0].name}/dates.json`, JSON.stringify(datesArray));
  //console.log('\x1b[42m',`♥ [${name}] dates updated` ,'\x1b[0m');

  // VALUES
  if (name.includes("ipifiel")) { 
    for (let [key, value] of Object.entries(kpi.items)) {
      var tempArray = []
      for (let i = 5; i < datesArray.length+5; i++) {
        tempArray.push(Number(data[i][value.id]).toFixed(3))
        //if (new Date(Date.UTC(0, 0, data[i][kpi.date])) != 'Invalid Date') { tempArray.push(Number(data[i][value.id]).toFixed(3))}
      }
     writeFileSyncRecursive(`./static/data/${generatedTime}/${name}/${value.name}/d.json`, JSON.stringify(tempArray));
     console.log('\x1b[42m',`♥ [${name}] updated` ,'\x1b[0m');

    }
  } else {
    for (let [key, value] of Object.entries(kpi.items)) {
    var tempArray = []
    for (let i = 0; i < data.length; i++) {
      if (new Date(Date.UTC(0, 0, data[i][kpi.date])) != 'Invalid Date') { tempArray.push(Number(data[i][value.id]).toFixed(3))}
    }
    writeFileSyncRecursive(`./static/data/${generatedTime}/${name}/${value.name}/d.json`, JSON.stringify(tempArray));
    console.log('\x1b[42m',`♥ [${name}] updated` ,'\x1b[0m');

  }
  }
}

async function scrapeBCRA(serie, name) {

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

    writeFileSyncRecursive(`./static/data/${generatedTime}/${name}/datos/dates.json`, JSON.stringify(dateInfla));
    writeFileSyncRecursive(`./static/data/${generatedTime}/${name}/datos/d.json`, JSON.stringify(inflaVal));
    console.log('\x1b[42m',`♥ [${name}] updated` ,'\x1b[0m');


}


module.exports = {scrapeBCRA,genericXLS, datosGobarCSV,parseWorldBank, parseAmbito,writeFileSyncRecursive, datosGobarAPI }
