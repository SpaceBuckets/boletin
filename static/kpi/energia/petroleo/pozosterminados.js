module.exports = (async function () {

  const parsers = require("@parsers");

  const kpi = "pozosterminados"
const payload = await parsers.datosGobarAPI('366.3_POZOS_TERMRAL__30')
  const post = {
    kpi,
    t: "Pozos Terminados",
    st: "Petroleo",
    sd: "",
    c: "<p>Este indicador hace referencia al número total de pozos petroleros que han sido perforados y finalizados en un determinado período de tiempo, generalmente expresado en términos anuales. Este indicador es utilizado para medir la actividad exploratoria y productiva en el sector petrolero del país.</p><p>La finalización de un pozo de petróleo implica la etapa en la que se ha perforado el pozo y se han tomado todas las medidas necesarias para garantizar la seguridad y la integridad del pozo, como la instalación de revestimientos y sistemas de producción. Una vez que un pozo ha sido terminado, está listo para comenzar la producción de petróleo.</p><p>Este indicador es importante porque la producción de petróleo es una fuente importante de ingresos para el país y la industria petrolera es uno de los pilares de la economía argentina. La cantidad de pozos terminados puede indicar el nivel de actividad en el sector y, por lo tanto, el potencial de producción de petróleo en el futuro.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ar/dataset/sspm-pozos-petroleo-metros-perforados/archivo/sspm_366.3",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "",
    cat: "Hidrocarburos",
    catslug: "hidrocarburos",
    max: 200,
    dimensions: [
        {
          
          label: "Pozos de Petroleo terminados",
          data: payload,
                    
        },

      ]
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

