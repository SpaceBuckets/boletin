require('module-alias/register')
const glob = require('glob');
const path = require('path')
const fs = require('fs');
var parsertree = require('tree-parser');
 
var xlsx = require('node-xlsx');

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

async function processVariation(src){
  
  var folders = glob.sync('**', { cwd: `static/${src}/` })
  var variArr = {}
  for (const singleFolder of folders) {
    if (singleFolder.slice(-3) === '.js') { 

    try {
      var post = await require(`../static/data/${singleFolder.split("/").pop().slice(0,-3)}.json`)
        var currentNum = post.chartdata.datasets[0].data
          .filter((val, index, arr) => index > arr.length - 24)
          .reverse();

 
        var A = currentNum[0];
        var B = currentNum[0 + 1];
        var C = (((A - B) / A) * 100.0).toFixed(1);
  
      variArr[post.kpi] = C
 
    } catch (error) {
       console.log('\x1b[41m', '\x1b[37m',`✕ [${singleFolder.split("/").pop().slice(0,-3)}] failed to variate!` ,'\x1b[0m');

    }   
  }    
  };


  writeFileSyncRecursive(`./static/variations.json`, JSON.stringify(variArr)); 
  console.log('\x1b[46m',`✓ Variations generated` ,'\x1b[0m');

}

async function processNamers() {

  var folders = await require(`../static/refolders.json`)
  var files = []
  var kpeis = {}

  for (let [key, type] of Object.entries(folders)) {
    if (folders[key]['_contents']) { files.push(folders[key]['_contents']) }
    for (let [rekey, retype] of Object.entries(folders[key])) {
      if (folders[key][rekey]['_contents']) { files.push(folders[key][rekey]['_contents']) }
    }
  }
  files = [...new Set(files.flat(1))]

  for (let e = 0; e < files.length; e++) { 
    kpeis[await require(`../static/data/${files[e].slice(0,-3)}.json`).kpi] = await require(`../static/data/${files[e].slice(0,-3)}.json`).t
   }

   writeFileSyncRecursive(`./static/kpis.json`, JSON.stringify(kpeis)); 
   console.log('\x1b[46m',`✓ KPI-links generated` ,'\x1b[0m');

}

async function processFolders( ){
  const tree = parsertree('static/kpi');

   const orderedtree = {
    'actividad-economica': tree['actividad-economica'],
    'dolar': tree['dolar'],
    'BCRA': tree['BCRA'],
    'bonos': tree['bonos'],
    'energia': tree['energia'],
    'cuentas-nacionales': tree['cuentas-nacionales'],
    'comercio-exterior': tree['comercio-exterior'],
    'precios': tree['precios'],
    'salarios': tree['salarios'],
    'consumo': tree['consumo'],
    'turismo': tree['turismo'],
    'agro': tree['agro'],
    'otros': tree['otros'],
  }
 
   writeFileSyncRecursive(`./static/refolders.json`, JSON.stringify(orderedtree)); 
  console.log('\x1b[46m',`✓ Folders generated` ,'\x1b[0m');
}

async function magicDistribution( ){
 
  const pepe = await require('../static/redistrifiltered.json')
  const transformedPepe = pepe.map(item => {
    let [start, end] = item.range.split('-');
    if (start > end) {
      [start, end] = [end, start];
    }
    return { title: item.title, url: item.url, start, end };
  });
console.log(transformedPepe);
writeFileSyncRecursive(`./static/megapepe.json`, JSON.stringify(transformedPepe)); 

}




async function processItems(arr){
  console.log('\x1b[46m',`◷ Starting API` ,'\x1b[0m');
  console.log('\x1b[46m',`☺ Have a nice day` ,'\x1b[0m');
 // const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  //bar1.start(arr.length, 0);
  
  await Promise.all(arr.filter(kpi => kpi.endsWith('.js')).map(async kpi => {
    try {
      await require(`../static/kpi/${kpi}`);
      console.log('\x1b[42m',`♥ [${kpi.match(/\/([^/]+)\./)[1]}] updated`, '\x1b[0m');
    } catch (error) {
      console.log('\x1b[41m', '\x1b[37m', `✕ [${kpi}] failed to fetch!`, '\x1b[0m');
      console.error(error);
    }
  })); 
 
  //bar1.stop();
  //await processVariation("kpi");
  processFolders(); 
  processNamers()   
  //magicDistribution()
};

//processItems(glob.sync('**', { cwd: `static/kpi/` }));
processItems(['dolar/brecha.js']);
