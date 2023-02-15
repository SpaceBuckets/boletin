module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ventasshopping"
  
  const total = await parsers.datosGobarAPI('458.1_VENTAS_TOTTES_ABRI_M_33_40 ')
  const gba = await parsers.datosGobarAPI('458.1_VENTAS_GBATES_ABRI_M_29_80')
  const resto = await parsers.datosGobarAPI('458.1_VENTAS_RESTES_ABRI_M_31_8')

    
  var post = {
    kpi,
    t: "Ventas Shopping",
    st: "Total, GBA y Resto",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ar/dataset/sspm-ventas-centros-compras-nacional/archivo/sspm_458.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",
    chart: {
    dates:total,
    dimensions: [
        {
            label: "Total",
            data: total,
            color: "rgba(46,120,210,1)",
            },
        {    
            label: "GBA",
            data: gba,
            color: "rgba(46,120,210,0.25)",   
            },
        {    
            label: "Resto",
            data: resto,
            color: "rgba(46,120,210,0.25)",
            },

    ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));
   

})()