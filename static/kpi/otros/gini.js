module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "gini"
  const url = 'https://infra.datos.gob.ar/catalog/sspm/dataset/65/distribution/65.1/download/indicadores-distribucion-ingreso-ocupacion-principal-e-ingreso-per-capita-familiar.csv'

  const payload = await parsers.datosGobarCSV(0,2,url)

  const post = {
    kpi,
  t: "GINI",
  st: "Desigualdad según coeficiente de Gini",
  sd: "Sirve de referencia para estimar la evolución del mercado de deuda emergente y permite estudiar el comportamiento de una canasta de bonos que conforman la deuda de los países emergentes.",
  c: "<p>El índice de GINI es una medida utilizada para cuantificar la desigualdad de ingresos o riqueza en una sociedad. Este índice varía entre 0 y 1, donde 0 significa que todos tienen el mismo ingreso o riqueza, mientras que 1 significa que una sola persona tiene todo el ingreso o riqueza y los demás no tienen nada.</p><p>El índice de GINI se calcula como la relación entre el área entre la curva de distribución real y la línea de igualdad, y el área total bajo la línea de igualdad. Cuanto más se aleja la curva de distribución real de la línea de igualdad, mayor es el índice de GINI y, por lo tanto, mayor es la desigualdad en la distribución de ingresos o riqueza.</p><p>El índice de GINI se utiliza ampliamente como un indicador de la desigualdad económica en un país o región. Sin embargo, también tiene algunas limitaciones, ya que solo mide la desigualdad en términos de ingresos o riqueza, y no tiene en cuenta otros factores importantes como la educación, la salud y la movilidad social.</p>",
  fd: "Datos BM",
  fdr: "https://api.worldbank.org/v2/country/arg/indicator/SI.POV.GINI?format=json&per_page=500",
  fu: "Banco Mundial",
  fur: "https://datos.bancomundial.org/indicator/SI.POV.GINI",
  frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  dimensions: [
      {
        
        label: "Argentina GINI",
        data: payload,
        
        
        
      },
    ]
  }

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()


