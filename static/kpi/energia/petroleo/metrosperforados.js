module.exports = (async function () {

  const parsers = require("@parsers");

  const kpi = "metrosperforados"
const payload = await parsers.datosGobarAPI('366.3_METROS_PERRAL__31')

  const post = {
    kpi,
    t: "Metros Perforados",
    st: "Petroleo",
    sd: "",
    c: "<p>El indicador de metros perforados de pozos de petróleo en Argentina mide la cantidad de metros de perforación que se han realizado en los pozos de petróleo en el país. La perforación de pozos de petróleo es una actividad clave para la exploración y producción de petróleo, y es un indicador importante para medir la actividad en la industria petrolera de un país.</p><p>En Argentina, la producción de petróleo se concentra principalmente en las cuencas de Neuquén, Golfo San Jorge y Cuyana. La perforación de pozos de petróleo en estas cuencas es crucial para mantener y aumentar la producción de petróleo del país.</p><p>El indicador de metros perforados de pozos de petróleo es utilizado por los analistas del mercado petrolero para evaluar la actividad de la industria petrolera en Argentina y prever la producción de petróleo en el futuro. Un aumento en la cantidad de metros perforados de pozos de petróleo generalmente se interpreta como un signo positivo de la actividad en la industria petrolera y una posible señal de aumento en la producción de petróleo en el futuro.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ar/dataset/sspm-pozos-petroleo-metros-perforados/archivo/sspm_366.3",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "",
     dimensions: [
        {
          
          label: "Pozos de Petroleo terminados",
          data: payload,
                    
          
        },

      ]
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

