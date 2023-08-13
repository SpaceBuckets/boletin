require('module-alias/register')
const glob = require('glob');
const path = require('path')
var parsertree = require('tree-parser');
global.fs = require('fs');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

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

async function processTable() {

  var folders = await require(`../static/refolders.json`)
  var files = []
  var kpeis = {}
  var searchkpeis = {}

  for (let [key, type] of Object.entries(folders)) {
    if (folders[key]['_contents']) { files.push(folders[key]['_contents']) }
    for (let [rekey, retype] of Object.entries(folders[key])) {
      if (folders[key][rekey]['_contents']) { files.push(folders[key][rekey]['_contents']) }
    }
  }
  files = [...new Set(files.flat(1))]
  for (let e = 0; e < files.length; e++) { 
    var singleKpi = await require(`../static/data/${files[e].slice(0,-3)}.json`)
    kpeis[singleKpi.kpi] = {
      t: singleKpi.t,
      st: singleKpi.st,
      fd: singleKpi.fd,
      fu: singleKpi.fu,
      frec: singleKpi.frec,
      u: singleKpi.u,
      ul: singleKpi.dimensions[0].data.slice(-1)[0].x,
      feat: singleKpi.feat
    }
   }

   for (let e = 0; e < files.length; e++) { 
    var singleKpi = await require(`../static/data/${files[e].slice(0,-3)}.json`)
    searchkpeis[singleKpi.kpi] = {
      t: singleKpi.t,
      st: singleKpi.st,
      sd: singleKpi.sd,
      fu: singleKpi.fu,
      feat: singleKpi.feat
     }
   }
 
   writeFileSyncRecursive(`./static/kpitable.json`, JSON.stringify(kpeis)); 
   writeFileSyncRecursive(`./static/kpisearchable.json`, JSON.stringify(searchkpeis)); 
   console.log('\x1b[46m',`✓ KPI-table generated` ,'\x1b[0m');  

}

async function processFolders() {
  const tree = parsertree('static/kpi');

  const orderedtree = {
    'actividad-economica': {'_emoji': '🚀', ...tree['actividad-economica']},
    'produccion-industrial': {'_emoji': '🛠️', ...tree['produccion-industrial']},
    'dolar': {'_emoji': '💸', ...tree['dolar']},
    'finanzas': {'_emoji': '🏦', ...tree['finanzas']},
    'BCRA': {'_emoji': '🏛️', ...tree['BCRA']},
    'energia': {'_emoji': '⚡', ...tree['energia']},
    'gas': {'_emoji': '💨', ...tree['gas']},
    'petroleo': {'_emoji': '🛢️', ...tree['petroleo']},
    'comercio-exterior': {'_emoji': '🌎', ...tree['comercio-exterior']},
    'cuentas-nacionales': {'_emoji': '📚', ...tree['cuentas-nacionales']},
    'politica-social': {'_emoji': '🤲', ...tree['politica-social']},
    'precios': {'_emoji': '🔥', ...tree['precios']},
    'salarios': {'_emoji': '💰', ...tree['salarios']},
    'consumo': {'_emoji': '🎁', ...tree['consumo']},
    'agroindustria': {'_emoji': '🌽', ...tree['agroindustria']},
    'otros': {'_emoji': '🌀', ...tree['otros']},
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


 
 
 
const ProgressBar = require('progress');

async function processItems(arr) {
  console.log('\x1b[46m', `◷ Starting API`, '\x1b[0m');

  const limit = 1000, delay = 16;
 
  // Initialize the progress bar
  const progressBar = new ProgressBar(`\x1b[1m☺ Fetching data (:current/:total) \x1b[0m \x1b[32m|\x1b[0m:bar\x1b[32m|\x1b[0m :percent :file`, {
    complete: '\x1b[32m█\x1b[0m',
    incomplete: '\x1b[32m-\x1b[0m',
    width: 30,
    total: arr.length,
  });

  const errors = [];

  for (let i = 0; i < arr.length; i += limit) {
    await Promise.all(arr.slice(i, i + limit).map(async (kpi) => {
      try {
        await require(`../static/kpi/${kpi}`);
      } catch (error) {
        errors.push({ kpi, error });
      }

      // Update the progress bar with the current file name
      progressBar.tick({ file: kpi });
    }));
    await new Promise((t) => setTimeout(t, delay));
  }

  // Output errors at the end of the function
  if (errors.length > 0) {
    console.log('\x1b[43m', '\x1b[37m', `✕ ${errors.length} KPIs failed!`, '\x1b[0m');
    errors.forEach(({ kpi, error }) => {
      console.log('\x1b[41m', '\x1b[37m', `✕ [${kpi}] ${error.code}`, '\x1b[0m');

    });
  } else {
    console.log('\x1b[42m', '\x1b[37m', `✓ All KPIs fetched successfully!`, '\x1b[0m');
  }

  processFolders();
  processNamers();
  processTable();
}






processItems(glob.sync('**', { cwd: `static/kpi/` }).filter(kpi => kpi.endsWith('.js')));

//processItems(['energia/petroleo/barriles.js']);
