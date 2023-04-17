module.exports = (async function() {

  const parsers = require("@parsers");

   const kpi = "produccionglp"
  const url = 'http://datos.energia.gob.ar/dataset/55b83784-8f04-4018-91c7-027163c615b3/resource/91965641-af12-4176-9751-920afe00e0dd/download/glp-produccin-toneladas-.csv'
  const payload = await parsers.datosGobarCSV(0,1,url)
   const post = {
    kpi,
    t: "Producción GLP",
    st: "En Toneladas",
    sd: "",
    c: "",    
    fd: "",
    fdr: "",
    fu: "",
    fur: "",
    frec: parsers.detectDataType(payload), 
        fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
    d: "",
    dimensions: [
      {     
        label: "Producción GLP",
        data: payload,
         
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

