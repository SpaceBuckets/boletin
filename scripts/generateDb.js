const fetch = require('@adobe/node-fetch-retry');
const xlsx = require('node-xlsx');
const glob = require('glob');
const path = require('path')
const fs = require('fs');

 
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
  delete ordered['hide']
  delete ordered['Otros']
  delete ordered['Consumo']
  delete ordered['Energia']
  delete ordered['Producción']
  delete ordered['Precios']
  delete ordered['Salarios']
  delete ordered['Cuentas Nacionales']
  ordered['Cuentas Nacionales'] = categoriesObject['Cuentas Nacionales']

  ordered['Energia'] = categoriesObject['Energia']
  
  ordered['Producción'] = categoriesObject['Producción']
  ordered['Salarios'] = categoriesObject['Salarios']
  ordered['Precios'] = categoriesObject['Precios']

  ordered['Consumo'] = categoriesObject['Consumo']
  ordered['Otros'] = categoriesObject['Otros']
  
  writeFileSyncRecursive(`./static/tableObject.json`, JSON.stringify(tableObject));
  writeFileSyncRecursive(`./static/kpis.json`, JSON.stringify(ordered)); 
  
  console.log('\x1b[46m',`✓ Content regenerated` ,'\x1b[0m');

};

 


async function processTime(arr){
  console.log("---------------------") 
  var reuuid = new Date().getTime();
  writeFileSyncRecursive(`./static/generatedTime.json`, JSON.stringify(reuuid));
  console.log('\x1b[46m',`◷ Generated Time: ${reuuid}` ,'\x1b[0m');

};

async function processItems(arr){
await processTime();
  console.log('\x1b[46m',`◷ Starting API` ,'\x1b[0m');
 
  await getBRCASeries()   
 
 
  for(const kpi of arr) {
    await require(`../static/kpi/${kpi}/${kpi}`) 
    //await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](400)
  } 
 megaContent("kpi")  

};

processItems(glob.sync('*', { cwd: `static/kpi/` }));
//processItems(['ipicammesa']); 



