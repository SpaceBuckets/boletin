require('module-alias/register')
const glob = require('glob');
const path = require('path')
const fs = require('fs');
var parsertree = require('tree-parser');

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
  
  var folders = glob.sync('*', { cwd: `static/${src}/` })
  var variArr = {}
  for (const singleFolder of folders) {
    try {
      var post = await require(`../static/data/${singleFolder}/${singleFolder}.json`)
        var currentNum = post.chartdata.datasets[0].data
          .filter((val, index, arr) => index > arr.length - 24)
          .reverse();

 
        var A = currentNum[0];
        var B = currentNum[0 + 1];
        var C = (((A - B) / A) * 100.0).toFixed(1);
  
      variArr[post.kpi] = C
 
    } catch (error) {
       console.log('\x1b[41m', '\x1b[37m',`✕ [${singleFolder}] failed to variate!` ,'\x1b[0m');

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
  delete tree['_contents']
   writeFileSyncRecursive(`./static/refolders.json`, JSON.stringify(tree)); 
  console.log('\x1b[46m',`✓ Folders generated` ,'\x1b[0m');
}

async function processItems(arr){
  console.log('\x1b[46m',`◷ Starting API` ,'\x1b[0m');
 
  for(const kpi of arr) { 
    if (kpi.slice(-3) === '.js') { 
      try {
        await require(`../static/kpi/${kpi}`) 
        console.log('\x1b[42m',`♥ [${kpi.split("/").pop().slice(0,-3)}] updated` ,'\x1b[0m');
      } catch (error) {
        console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi.split("/").pop().slice(0,-3)}] failed to fetch!` ,'\x1b[0m');

      }
    }
  }   
 
  //await processVariation("kpi");
  processFolders(); 
  processNamers()  

};

processItems(glob.sync('**', { cwd: `static/kpi/` }));
//processItems(['politica-monetaria/tipo-de-cambio/cambio.js']);
