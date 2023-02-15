module.exports = (async function() {
  
  const parsers = require("@parsers");
  const kpi = "asalariados"
  const privadob = await parsers.datosGobarAPI('151.1_AARIADODAD_2012_M_31')
  const privadod = await parsers.datosGobarAPI('151.1_AARIADOTAC_2012_M_26')

  var post = {
    kpi,
    t: "Asalariados",
    st: "Sector Público y Privado",
    sd: "Trabajadores registrados según modalidad ocupacional en valores mensuales.",
    c: "<p>Trabajadores registrados según modalidad ocupacional en valores mensuales</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm-trabajadores-registrados-segun-modalidad-ocupacional-principal-base-2012/archivo/sspm_151.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual",
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

    chart: {
      dates:privadob,
      dimensions: [
        {
          fillColor: 'rgba(46,120,210,0)',
          label: "Empleo Privado",
          data: privadod,
          color: "#2E78D2",
          
          
        },
        {
          fillColor: 'rgba(46,120,210,0)',
          label: "Empleo Publico",
          data: privadob,
          color: "rgba(46,120,210,0.25)",
          
          
        },
      ],
    }    
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

})()
