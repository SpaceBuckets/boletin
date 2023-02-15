module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "gini"
  
  const payload = await parsers.parseWorldBank('https://api.worldbank.org/v2/country/arg/indicator/SI.POV.GINI?format=json&per_page=500')

  var post = {
    kpi,
  "t": "GINI",
  "st": "Desigualdad según coeficiente de Gini",
  "sd": "Sirve de referencia para estimar la evolución del mercado de deuda emergente y permite estudiar el comportamiento de una canasta de bonos que conforman la deuda de los países emergentes.",
  "c": "<p>El coeficiente de Gini es una medida de la desigualdad ideada por el estadístico italiano Corrado Gini.1​ Normalmente se utiliza para medir la desigualdad en los ingresos, dentro de un país, pero puede utilizarse para medir cualquier forma de distribución desigual. El coeficiente de Gini es un número entre 0 y 1, donde 0 se corresponde con la perfecta igualdad (todos tienen los mismos ingresos) y donde el valor 1 se corresponde con la perfecta desigualdad.</p>",
  fd: "Datos BM",
  fdr: "https://api.worldbank.org/v2/country/arg/indicator/SI.POV.GINI?format=json&per_page=500",
  fu: "Banco Mundial",
  fur: "https://datos.bancomundial.org/indicator/SI.POV.GINI",
  frec: "Mensual", 
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

  "max": 55,
  "min": 35,
  chart: {
    dates:payload,
    dimensions: [
      {
        fillColor: "rgba(46,120,210,0.05)",
        label: "Argentina GINI",
        data: payload,
        color: "#2E78D2",
        
        
      },
    ]
}
  }

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()


