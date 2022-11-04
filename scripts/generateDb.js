const fs = require('fs');
const fetch = require('node-fetch');
var xlsx = require('node-xlsx');
const parse5 = require('parse5');
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const glob = require('glob');
const matter = require('gray-matter');
 const Papa = require('papaparse')
 const path = require('path')
 var moment = require('moment'); // require
 const cliProgress = require('cli-progress');

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
   writeFileSyncRecursive(`./static/kpi/${cat}/${key}/dates.json`, JSON.stringify(datesArray.reverse()));
   writeFileSyncRecursive(`./static/kpi/${cat}/${key}/d.json`, JSON.stringify(tempArray.reverse()));
   console.log(`♥ [bonos] ${key} updated`) 

 }  

}


async function getUSD() {

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

  writeFileSyncRecursive(`./static/kpi/brecha/blue/dates.json`, JSON.stringify(dateUSD.reverse()));
  writeFileSyncRecursive(`./static/kpi/brecha/blue/blue.json`, JSON.stringify(valBlue.reverse()));
  writeFileSyncRecursive(`./static/kpi/brecha/blue/usd.json`, JSON.stringify(valUSD.reverse()));
  writeFileSyncRecursive(`./static/kpi/brecha/blue/gap.json`, JSON.stringify(valGap.reverse()));
  console.log(`♥ [monetaria] Dolar/blue updated`)

}

async function getBRCASeries() {

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


  writeFileSyncRecursive(`./static/kpi/reservas/total.json`, JSON.stringify(valRes.slice(0, foundArr[0])));

  writeFileSyncRecursive(`./static/kpi/reservas/diariadates.json`, JSON.stringify(dateUSD.slice(0, foundArr[0])));
  writeFileSyncRecursive(`./static/kpi/reservas/mensualdates.json`, JSON.stringify(dateUSD.slice(foundArr[0], foundArr[1])));
  writeFileSyncRecursive(`./static/kpi/reservas/anualdates.json`, JSON.stringify(dateUSD.slice(foundArr[1])));

  writeFileSyncRecursive(`./static/kpi/comprasbcra/diariadates.json`, JSON.stringify(dateUSD.slice(0, foundArr[0])));
  writeFileSyncRecursive(`./static/kpi/comprasbcra/diaria.json`, JSON.stringify(valUSD.slice(0, foundArr[0])));
  writeFileSyncRecursive(`./static/kpi/comprasbcra/mensual.json`, JSON.stringify(valUSD.slice(foundArr[0], foundArr[1])));
  writeFileSyncRecursive(`./static/kpi/comprasbcra/anual.json`, JSON.stringify(valUSD.slice(foundArr[1])));

  console.log(`♥ [monetaria] Reservas updated`)

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

  writeFileSyncRecursive(`./static/kpi/tasa/tasadates.json`, JSON.stringify(dateTasa));
  writeFileSyncRecursive(`./static/kpi/tasa/tasaplazo.json`, JSON.stringify(valPlazo));
  writeFileSyncRecursive(`./static/kpi/tasa/tasabadlar.json`, JSON.stringify(valBadlar));
  writeFileSyncRecursive(`./static/kpi/tasa/tasatasa.json`, JSON.stringify(valTasa));
  writeFileSyncRecursive(`./static/kpi/tasa/tasapases.json`, JSON.stringify(valPases));

  console.log(`♥ [monetaria] Tasas updated`)

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

   writeFileSyncRecursive(`./static/kpi/basemonetaria/totalplus/d.json`, JSON.stringify(BaseMonetariaPlus.slice(0,refoundArr[0])));
   writeFileSyncRecursive(`./static/kpi/basemonetaria/total/d.json`, JSON.stringify(valTotal.slice(0,refoundArr[0])));
   writeFileSyncRecursive(`./static/kpi/basemonetaria/total/dates.json`, JSON.stringify(redateBasemonetaria.slice(0,refoundArr[0])));
 
 
   console.log(`♥ [monetaria] Base Monetaria updated`)

}

async function parseAmbito() {
  var pepeLength
 
  for (let [key, value] of Object.entries(ambito)) {
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
   writeFileSyncRecursive(`./static/kpi/cambio/${key}/dates.json`, JSON.stringify(datesArray.reverse()));
    writeFileSyncRecursive(`./static/kpi/cambio/${key}/d.json`, JSON.stringify(tempArray.reverse()));
    console.log(`♥ [ambito] ${key} updated`)

   } 

}


 
async function megaContent(src) {
  
  
   //Get post names
  var folders = glob.sync('*', { cwd: `static/${src}/` })
  var categories = []
  categoriesObject = {}
  tableObject = []

  for (const singleFolder of folders) { categories.push(await require(`../static/kpi/${singleFolder}/${singleFolder}.json`).cat) };
  categories = [...new Set(categories)]
  writeFileSyncRecursive(`./static/categories.json`, JSON.stringify(categories));

  for (const singleCat of categories) { categoriesObject[singleCat] = [] }

  categoriesObject['Todos'] = []

  for (const singleFolder of folders) {
      var post = await require(`../static/kpi/${singleFolder}/${singleFolder}.json`)
      categoriesObject['Todos'].push({t:post.t,kpi:post.kpi})
      categoriesObject[post.cat].push({t:post.t,kpi:post.kpi})
      tableObject.push({t:post.t,kpi:post.kpi,cat:post.cat,desc:post.st})
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
  
  console.log(`✓ Content regenerated`)
 
};

 
 

async function processItems(arr){
  console.log("◷ Starting up... Please be patient")
 
 
/*    await parseAmbito() 
   await getUSD()
   await getBRCASeries() */
 
  for(const kpi of arr) {
    await require(`../static/kpi/${kpi}/${kpi}`) 
    await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](500)
 
  } 
  console.log("---------------------")
  megaContent("kpi")
};

processItems(glob.sync('*', { cwd: `static/kpi/` }));
//processItems(['emae']);



