const fs = require('fs');
const fetch = require('@adobe/node-fetch-retry');
var xlsx = require('node-xlsx');
  const glob = require('glob');
  const path = require('path')
  global.crypto = require('crypto')

 function writeFileSyncRecursive(filename, content, charset) {
   const folders = filename.split(path.sep).slice(0, -1)
   if (folders.length) {
     // create folder path if it doesn't exist
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


 

global.cuentas = {

  pozos: '366.3_POZOS_TERMRAL__30',
  pozosmetros: '366.3_METROS_PERRAL__31',
 
}


global.expo = {
  saldo: 'https://apis.datos.gob.ar/series/api/series/?collapse=month&collapse_aggregation=avg&ids=74.3_ISC_0_M_19',
  dolar: '74.3_IET_0_M_16',
  cantidad: '80.2_IICENG_0_T_47',
  precio: '80.2_IIPENG_0_T_45',
}

global.impo = {
  dolar: '74.3_IIT_0_M_25',
  cantidad: '81.2_IICING_0_T_47',
  precio: '81.2_IIPING_0_T_45',
}

global.ipc = {
  general: '145.3_INGNACUAL_DICI_M_38',
  cuyo: '145.3_INGCUYUAL_DICI_M_34',
  patagonia: '145.3_INGPATUAL_DICI_M_39',
  gba: '145.3_INGGBAGBA_DICI_M_10&representation_mode=percent_change',
  //caba: '45.2_ECTDTC_0_T_38',
  pampeana: '148.3_INIVELANA_DICI_M_26&representation_mode=percent_change',
  noroeste: '148.3_INIVELNOA_DICI_M_21&representation_mode=percent_change',
  nordeste: '148.3_INIVELNEA_DICI_M_21&representation_mode=percent_change',
 
} 


global.rofex = {
  dolar: '92.2_TIPO_CAMBIION_0_0_21_24&limit=5000&start_date=2009-01-03',
  mae: '168.1_VMEN_MAMAE_D_0_0_11',
  t6: '168.1_FRO_ROF6M_D_0_0_19',
  t5: '168.1_FRO_ROF5M_D_0_0_19',
  t4: '168.1_FRO_ROF4M_D_0_0_19',
  t3: '168.1_FRO_ROF3M_D_0_0_19',
  t2: '168.1_FRO_ROF2M_D_0_0_19',
  t1: '168.1_FRO_ROF1M_D_0_0_19',
}


global.ambito = {
  oficial: 'https://mercados.ambito.com//dolar/oficial/historico-general/01-01-1900/01-01-2100',
  mep: 'https://mercados.ambito.com//dolarrava/mep/historico-general/01-01-1900/01-01-2100',
  ccl: 'https://mercados.ambito.com//dolarrava/cl/historico-general/01-01-1900/01-01-2100',
  blue: 'https://mercados.ambito.com//dolar/informal/historico-general/01-01-1900/01-01-2100',
  turista: 'https://mercados.ambito.com//dolar/dolarturista/historico-general/01-01-1900/01-01-2100',
  mayorista: 'https://mercados.ambito.com//dolar/mayorista/historico-general/01-01-1900/01-01-2100',
}

global.bonoscer = {
  tx23: '12185',
  tx24: '12304',
  tx26: '13029',
  tx28: '13031',
  t2x2: '12416'
}

global.bonosusd = {
  al29d: '13076',
  al30d: '13078',
  al41d: '13083',
  gd30d: '13092',
  gd35d: '13089',
  gd41d: '13093'
}

async function parseBonos(cat) {

  for (let [key, value] of Object.entries(global[`${cat}`])) {
    try {

 var resA = await fetch("https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas", {
   "headers": { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", },
   "body": `idEspecie=${value}&fechaDesde=01%2F01%2F1900&fechaHasta=01%2F01%2F2100`,
   "method": "POST"
});
 var emaeB = JSON.parse(await resA.text())

var datesArray = []
var tempArray = []
var pepeLength

  for (let i = 1; i < emaeB.length; i++) {

   datesArray.push(emaeB[i].FechaString.split('/').reverse().join('-'))
  // datesArray.push(new Date (emaeB[1][i].date).toLocaleDateString("en-CA", {timeZone: "UTC"}))

  tempArray.push(Number(emaeB[i].PrecioUltimo))
     
 }
  if (key === 'tx23' || key === 'al29d') { pepeLength = tempArray.length }
 tempArray.length = pepeLength  
 for (let i = 1; i < tempArray.length; i++) { if(tempArray[i] === undefined) { tempArray[i] = null } }
 for (let o = 1; o < datesArray.length; o++) { if(datesArray[o] === undefined) { datesArray[o] = null } }
 const generatedTime = require(`../static/generatedTime.json`)

   writeFileSyncRecursive(`./static/data/${generatedTime}/${cat}/${key}/dates.json`, JSON.stringify(datesArray.reverse()));
   writeFileSyncRecursive(`./static/data/${generatedTime}/${cat}/${key}/d.json`, JSON.stringify(tempArray.reverse()));
   console.log('\x1b[42m',`♥ [bonos] ${key} updated` ,'\x1b[0m');

  } catch (error) {
    console.log(`✕ [${key}] failed to fetch!`)
  }
 }  

}


async function getUSD() {
try {
  const resA = await fetch('https://api.bluelytics.com.ar/v2/evolution.json');
   var emaeB = await resA.json();
  var dateUSD = []
  var valUSD = []
  var valBlue = []
  var valGap = []
  for (let i = 0; i < emaeB.length; i++) {
    dateUSD.push(emaeB[i].date)
    if (emaeB[i].source === 'Oficial') {
      valUSD.push(emaeB[i].value_buy)
    }
    if (emaeB[i].source === 'Blue') {
      valBlue.push(emaeB[i].value_buy)
    }
  }

  for (let i = 0; i < valUSD.length; i++) {
    var tempBrecha = (valBlue[i] - valUSD[i]) / valUSD[i] * 100.0;
    valGap.push(tempBrecha)
  }

  dateUSD = [...new Set(dateUSD)]
  const generatedTime = require(`../static/generatedTime.json`)

  writeFileSyncRecursive(`./static/data/${generatedTime}/brecha/blue/dates.json`, JSON.stringify(dateUSD.reverse()));
  writeFileSyncRecursive(`./static/data/${generatedTime}/brecha/blue/blue.json`, JSON.stringify(valBlue.reverse()));
  writeFileSyncRecursive(`./static/data/${generatedTime}/brecha/blue/usd.json`, JSON.stringify(valUSD.reverse()));
  writeFileSyncRecursive(`./static/data/${generatedTime}/brecha/blue/gap.json`, JSON.stringify(valGap.reverse()));
  console.log('\x1b[42m',`♥ [monetaria] Brecha updated` ,'\x1b[0m');

} catch (error) {
  console.log(`✕ [brecha] failed to fetch!`)
}
}

async function getBRCASeries() {
try {
  const resA = await fetch('http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm');
   var emaeB = await resA.arrayBuffer();
  var obj = xlsx.parse(emaeB);
  var dateUSD = []
  var valUSD = []
  var valRes = []

  // Sheet 2: RESERVAS
  for (let i = 0; i < obj[2].data.length; i++) {
    var date = new Date(Date.UTC(0, 0, obj[2].data[i][0]));
    if (date != 'Invalid Date') {
      dateUSD.push(date.toLocaleDateString("en-CA"))
      valUSD.push(obj[2].data[i][7])
      valRes.push(obj[2].data[i][3])
    }
  }

  var foundArr = []
  for (let e = 0; e < dateUSD.length; e++) {
    if (dateUSD[e] === '2003-01-01' || dateUSD[e] === '2003-01-02' && e !== 0) {
      foundArr.push(e)
    }
  }
  const generatedTime = require(`../static/generatedTime.json`)


  writeFileSyncRecursive(`./static/data/${generatedTime}/reservas/total.json`, JSON.stringify(valRes.slice(0, foundArr[0])));

  writeFileSyncRecursive(`./static/data/${generatedTime}/reservas/diariadates.json`, JSON.stringify(dateUSD.slice(0, foundArr[0])));
  writeFileSyncRecursive(`./static/data/${generatedTime}/reservas/mensualdates.json`, JSON.stringify(dateUSD.slice(foundArr[0], foundArr[1])));
  writeFileSyncRecursive(`./static/data/${generatedTime}/reservas/anualdates.json`, JSON.stringify(dateUSD.slice(foundArr[1])));

  writeFileSyncRecursive(`./static/data/${generatedTime}/comprasbcra/diariadates.json`, JSON.stringify(dateUSD.slice(0, foundArr[0])));
  writeFileSyncRecursive(`./static/data/${generatedTime}/comprasbcra/diaria.json`, JSON.stringify(valUSD.slice(0, foundArr[0])));
  writeFileSyncRecursive(`./static/data/${generatedTime}/comprasbcra/mensual.json`, JSON.stringify(valUSD.slice(foundArr[0], foundArr[1])));
  writeFileSyncRecursive(`./static/data/${generatedTime}/comprasbcra/anual.json`, JSON.stringify(valUSD.slice(foundArr[1])));

  console.log('\x1b[42m',`♥ [monetaria] Reservas updated` ,'\x1b[0m');

  // Sheet 5/6: TASAS

  var dateTasa = []
  var valTasa = []
  var valPlazo = []
  var valBadlar = []
  var valPases = [] 

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

  writeFileSyncRecursive(`./static/data/${generatedTime}/tasa/tasadates.json`, JSON.stringify(dateTasa));
  writeFileSyncRecursive(`./static/data/${generatedTime}/tasa/tasaplazo.json`, JSON.stringify(valPlazo));
  writeFileSyncRecursive(`./static/data/${generatedTime}/tasa/tasabadlar.json`, JSON.stringify(valBadlar));
  writeFileSyncRecursive(`./static/data/${generatedTime}/tasa/tasatasa.json`, JSON.stringify(valTasa));
  writeFileSyncRecursive(`./static/data/${generatedTime}/tasa/tasapases.json`, JSON.stringify(valPases));

  console.log('\x1b[42m',`♥ [monetaria] Tasas updated` ,'\x1b[0m');

   // Sheet 7: BASE MONETARIA
   var dateBasemonetaria = []
   var redateBasemonetaria = []
   var valTotal = []
   var valPases = []
   var valLeliq = []
   var valNobac = []
 
   for (let i = 0; i < obj[6].data.length; i++) {
     var date = new Date(Date.UTC(0, 0, obj[6].data[i][0]));
     if (date != 'Invalid Date') {
      dateBasemonetaria.push(date.toLocaleDateString("en-CA"))
      if (obj[6].data[i][4] === undefined) { obj[6].data[i][4] = 0 }
      if (obj[6].data[i][5] === undefined) { obj[6].data[i][5] = 0 }
       valPases.push(obj[6].data[i][1])
       valLeliq.push(obj[6].data[i][4])
       valNobac.push(obj[6].data[i][5])
  
     }
   }

   var valLeliqFiltered = valLeliq.map(e => parseFloat(e.toString().replace('s/o', '0')))
   var valPasesFiltered = valPases.map(e => parseFloat(e.toString().replace('s/o', '0')))
   var valNobacFiltered = valNobac.map(e => parseFloat(e.toString().replace('s/o', '0')))

   var BaseMonetariaPlus = valLeliqFiltered.map(function (num, idx) { return (num + valPasesFiltered[idx] +  valNobacFiltered[idx]).toFixed(2); });

   for (let i = 0; i < obj[1].data.length; i++) {
    var date = new Date(Date.UTC(0, 0, obj[1].data[i][0]));
    if (date != 'Invalid Date') {
      redateBasemonetaria.push(date.toLocaleDateString("en-CA"))
 
      valTotal.push(obj[1].data[i][28])
 
 
    }
  }
  var refoundArr = []
  for (let e = 0; e < redateBasemonetaria.length; e++) {
    if (redateBasemonetaria[e] === '2003-01-01' || redateBasemonetaria[e] === '2003-01-02' && e !== 0) {
      refoundArr.push(e)
    }
  }

   writeFileSyncRecursive(`./static/data/${generatedTime}/basemonetaria/totalplus/d.json`, JSON.stringify(BaseMonetariaPlus.slice(0,refoundArr[0])));
   writeFileSyncRecursive(`./static/data/${generatedTime}/basemonetaria/total/d.json`, JSON.stringify(valTotal.slice(0,refoundArr[0])));
   writeFileSyncRecursive(`./static/data/${generatedTime}/basemonetaria/total/dates.json`, JSON.stringify(redateBasemonetaria.slice(0,refoundArr[0])));
 
 
   console.log('\x1b[42m',`♥ [monetaria] Base Monetaria updated` ,'\x1b[0m');

  } catch (error) {
    console.log(`✕ [monetaria] Base Monetaria failed to fetch!`)
  }
}

async function parseAmbito() {
  var pepeLength
  const generatedTime = require(`../static/generatedTime.json`)

  for (let [key, value] of Object.entries(ambito)) {
    try {
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
    console.log('\x1b[42m',`♥ [ambito] ${key} updated` ,'\x1b[0m');

  } catch (error) {
    console.log(`✕ [${key}] failed to fetch!`)
  }
   } 

}

 
 
async function megaContent(src) {
  
  const generatedTime = require(`../static/generatedTime.json`)

   //Get post names
  var folders = glob.sync('*', { cwd: `static/${src}/` })
  var categories = []
  categoriesObject = {}
  tableObject = []

  for (const singleFolder of folders) { 
    try {
      categories.push(await require(`../static/data/${generatedTime}/${singleFolder}/${singleFolder}.json`).cat) 
    } catch (error) {
      console.log(`✕ [${singleFolder}] failed to content!`)
    }    
  };
  categories = [...new Set(categories)]
  writeFileSyncRecursive(`./static/categories.json`, JSON.stringify(categories));

  for (const singleCat of categories) { categoriesObject[singleCat] = [] }

  categoriesObject['Todos'] = []

  for (const singleFolder of folders) {
    try {
      var post = await require(`../static/data/${generatedTime}/${singleFolder}/${singleFolder}.json`)
      categoriesObject['Todos'].push({t:post.t,kpi:post.kpi})
      categoriesObject[post.cat].push({t:post.t,kpi:post.kpi})
      tableObject.push({t:post.t,kpi:post.kpi,cat:post.cat,desc:post.st})
    } catch (error) {
      console.log(`✕ [${singleFolder}] failed to content!`)
    }       
  };

  for (const singleCaet of Object.keys(categoriesObject)) {
    categoriesObject[singleCaet].sort(function(a, b) { 
      var x = a['t']; var y = b['t'];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  const ordered = Object.keys(categoriesObject).sort().reduce( (obj, key) => { obj[key] = categoriesObject[key]; return obj; },{} );

  delete ordered['Otros']
  delete ordered['Consumo']
  ordered['Consumo'] = categoriesObject['Consumo']
  ordered['Otros'] = categoriesObject['Otros']
  
  writeFileSyncRecursive(`./static/tableObject.json`, JSON.stringify(tableObject));
  writeFileSyncRecursive(`./static/kpis.json`, JSON.stringify(ordered)); 
  
  console.log('\x1b[46m',`✓ Content regenerated` ,'\x1b[0m');

};

 


async function processTime(arr){
  console.log("---------------------") 
  var reuuid = crypto.randomUUID().split("-").slice(-1)[0]
  reuuid = new Date().getTime();
  writeFileSyncRecursive(`./static/generatedTime.json`, JSON.stringify(reuuid));
  console.log('\x1b[46m',`◷ Generated Time: ${reuuid}` ,'\x1b[0m');

};

async function processItems(arr){
  console.log('\x1b[46m',`◷ Starting API` ,'\x1b[0m');

  await parseAmbito() 
  await getUSD() 
  await getBRCASeries()   
  await parseBonos('bonoscer')   
  await parseBonos('bonosusd')    
 
  for(const kpi of arr) {
    await require(`../static/kpi/${kpi}/${kpi}`) 
    //await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](400)
  } 
 megaContent("kpi")  

};
processTime();
processItems(glob.sync('*', { cwd: `static/kpi/` }));
//processItems(['emae']); 



