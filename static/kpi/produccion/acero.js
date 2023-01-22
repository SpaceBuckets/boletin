module.exports = (async function() {
  const parsers = require("../../parsers");
  const kpi = "acero"

  try {
   const payload = await parsers.datosGobarAPI(kpi, "produccion", '359.3_HIERRO_PRITAL__21')
 
   var post = {
      kpi,
      t: "Producción de Acero",
      st: "En Toneladas",
      sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
      c: "<p>La fabricación del acero es el conjunto de procedimientos necesarios para producir este material a partir de mineral de hierro y/o chatarra. En el proceso, las impurezas como el nitrógeno, el silicio, el fósforo, el azufre y el exceso de carbono (la impureza más importante) se eliminan del hierro obtenido; y además se suelen agregar elementos de aleación como manganeso, níquel, cromo, vanadio y carbono en su caso, para producir diferentes tipos de acero. </p>",
      fd: "datos.gob.ar",
      fdr: "https://infra.datos.gob.ar/catalog/sspm/dataset/359/distribution/359.3/download/datos-historicos-de-la-industria-siderurgica-datos-mensulaes.csv",
      fu: "Cámara Argentina del Acero",
      fur: "https://www.acero.org.ar/estadisticas-locales/",
      frec: "Mensual",
      d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
      max: 500,
      cat: "Producción",
      catslug: "produccion",
      chartdata: {
        labels: payload.dates,
        datasets: [
          {
            backgroundColor: "rgba(46,120,210,0.05)",
            label: "Producción de Acero",
            data: payload.d,
            borderColor: "rgba(46,120,210,1)",
            pointRadius: 0,
            borderWidth: 1.5,
          },
        ],
      }
    }
    
    parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));
  
  } catch (error) {
    console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
  }
})()