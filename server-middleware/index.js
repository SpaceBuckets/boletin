const express = require('express')
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

const app = express();
app.use(express.json()); 

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

  async function megaContent(src) {
  
  
    //Get post names
   var folders = glob.sync('*', { cwd: `static/${src}/` })
   var categories = []
   categoriesObject = {}
   tableObject = []
 
   for (const singleFolder of folders) { categories.push(await require(`../static/kpi/${singleFolder}/${singleFolder}.json`).cat) };
   categories = [...new Set(categories)]
 
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
 

app.post("/test", async (req, res, next) => {

    let parserString = ""
    let dataString = ""
    let dateString =  ""
//console.log(req.body.selectedParser)
    if(req.body.selectedParser === 'genericXLS' || req.body.selectedParser === 'datosGobarCSV') { 
        parserString = `kpidata = ${JSON.stringify(req.body.items)}
        
        await parsers.${req.body.selectedParser}(kpidata,kpi)`
        dateString = `labels: require("./${req.body.items.items[0].name}/dates.json"),`

    } else {
        for (let [key, value] of Object.entries(req.body.items)) {
            var itemString = `await parsers.${req.body.selectedParser}(kpi,'${value.name}','${value.id}')`
            parserString += itemString + '\n'
    
            var itemDataString = `{
                backgroundColor: "rgba(46,120,210,0)",
                label: "${value.name}",
                data: require("./${value.name}/d.json"),
                borderColor: "rgba(46,120,210,1)",
                pointRadius: 0,
                borderWidth: 1.5,
                },`
            
            dataString += itemDataString + '\n'
    
        }
        dateString = `labels: require("./${req.body.items[0].name}/dates.json"),`

    }



  const repost = `module.exports = (async function() {

  const parsers = require("../../parsers");
  const kpi = "${req.body.kpi}"
    
  ${parserString}
    
  var post = {
    kpi,
    t: "${req.body.title}",
    st: "${req.body.subtitle}",
    c: "${req.body.description}",
    f: "${req.body.fuente}",
    fu: "${req.body.fuenteURL}",
    d: "${req.body.description}",
    cat: "${req.body.category}",
    chartdata: {
    ${dateString}
    datasets: [
        ${dataString}
    ],
    }
  }

  parsers.writeFileSyncRecursive('./static/kpi/${req.body.kpi}/${req.body.kpi}.json', JSON.stringify(post));
   
})()`

  writeFileSyncRecursive(`./static/kpi/${req.body.kpi}/${req.body.kpi}.js`, repost);
    next()   
     
})
 
module.exports = app