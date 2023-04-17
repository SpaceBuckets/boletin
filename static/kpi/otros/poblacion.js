module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "poblacion"
  const url = 'https://www.eia.gov/international/api/series_data/csv?location32=08&products32=000000000000000000000000000000000000000000000000000000001&frequency=A&unit=0&start=0&generated=03-15-2023_21-18-10'
  const payload = await parsers.datosGobarCSV(0,1,url)
  //const url = 'https://infra.datos.gob.ar/catalog/sspm/dataset/9/distribution/9.2/download/producto-interno-bruto-precios-corrientes-valores-trimestrales-base-2004.csv'

 
  const post = {
    kpi,
  t: "Población",
  st: "Cantidad de Habitantes",
  sd: "Sirve de referencia para estimar la evolución del mercado de deuda emergente y permite estudiar el comportamiento de una canasta de bonos que conforman la deuda de los países emergentes.",
  c: "<p>El índice de población, también conocido como la población total, es una medida estadística que se utiliza para representar el número total de personas que viven en un país o región en un momento determinado.</p><p>La población de Argentina ha ido en aumento desde principios del siglo XX, con un crecimiento acelerado en la primera mitad del siglo XX que se desaceleró en las últimas décadas. Según el Instituto Nacional de Estadística y Censos (INDEC), la población total de Argentina en 2020 era de aproximadamente 45,3 millones de habitantes.</p><p>Este indicador es importante para entender la composición y evolución de la sociedad argentina, así como para la planificación de políticas públicas y la toma de decisiones en áreas como la educación, la salud, la vivienda y el empleo, entre otras.</p>",
  fd: "Datos BM",
  fdr: "https://api.worldbank.org/v2/country/arg/indicator/NY.GDP.PCAP.KD?format=json&per_page=5000",
  fu: "Banco Mundial",
  fur: "https://datos.bancomundial.org/indicator/NY.GDP.PCAP.KD?locations=AR",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

  min: 0,
  //max: 6000000,
  dimensions: [
      {
        
        label: "Poblacion Argentina",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

