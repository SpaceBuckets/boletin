module.exports = (async function() {
  
  const parsers = require("../../parsers");
  const generatedTime = require(`../../generatedTime.json`)
  const kpi = "asalariados"

  try {
    await parsers.datosGobarAPI(kpi, "privadob", '151.1_AARIADODAD_2012_M_31')
    await parsers.datosGobarAPI(kpi, "privadod", '151.1_AARIADOTAC_2012_M_26')

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
      cat: "Salarios",
      chartdata: {
        labels: require(`../../data/${generatedTime}/${kpi}/privadob/dates.json`),
        datasets: [
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Empleo Privado",
            data: require(`../../data/${generatedTime}/${kpi}/privadod/d.json`),
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Empleo Publico",
            data: require(`../../data/${generatedTime}/${kpi}/privadob/d.json`),
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
          },
        ],
      }    
    }
  
    parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

  } catch (error) {
    console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
  }
})()
