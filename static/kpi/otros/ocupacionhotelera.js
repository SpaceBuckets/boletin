module.exports = (async function () {

  const parsers = require("@parsers");

  const kpi = "ocupacionhotelera"
const payload = await parsers.datosGobarAPI('457.1_VIAJEROS_TLES_0_M_16_50')
  const post = {
    kpi,
    t: "Ocupacion Hotelera",
    st: "Viajeros Hospedados",
    sd: "",
    c: "<p>El índice de ocupación hotelera es un indicador que mide el porcentaje de habitaciones de un hotel que se encuentran ocupadas en un período de tiempo determinado. En el caso de Argentina, este indicador se calcula a nivel nacional y se refiere a la proporción de habitaciones de los establecimientos hoteleros que se encuentran ocupadas en un determinado mes.</p><p>El índice de ocupación hotelera es un indicador importante para la industria turística ya que refleja la demanda de alojamiento en un área determinada y, por lo tanto, puede influir en las decisiones de inversión y planificación de los actores involucrados en la industria del turismo. Además, el índice de ocupación hotelera también puede proporcionar información sobre la evolución del turismo en el país y la rentabilidad de los establecimientos hoteleros.</p><p>El cálculo del índice de ocupación hotelera se realiza dividiendo el número de habitaciones ocupadas en un mes determinado por el número total de habitaciones disponibles en los establecimientos hoteleros de un área determinada. El resultado se expresa en forma de porcentaje y refleja la tasa de ocupación de los hoteles en el período de tiempo considerado.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm_457/archivo/sspm_457.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "",
    dimensions: [
        {
          label: "Viajeros Hospedados",
          data: payload,
          
        },
        {
          label: "Residentes",
          data: await parsers.datosGobarAPI('457.1_VIAJEROS_RTES_0_M_19_94'),
          color: "#2E78D250",
        },
        {
          label: "No Residentes",
          data: await parsers.datosGobarAPI('457.1_VIAJEROS_NTES_0_M_22_86'),
          color: "#2E78D250",
        },        
      ]
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

