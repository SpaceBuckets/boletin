module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "poblacion"
 
  await parsers.parseWorldBank(kpi, "argentina", 'https://api.worldbank.org/v2/country/arg/indicator/NY.GDP.PCAP.KD?format=json&per_page=5000')

  var post = {
    kpi,
  t: "Población",
  st: "Cantidad de Habitantes",
  sd: "Sirve de referencia para estimar la evolución del mercado de deuda emergente y permite estudiar el comportamiento de una canasta de bonos que conforman la deuda de los países emergentes.",
  c: "<p>En sociología, se refiere a un grupo de seres humanos o a toda la especie. La demografía es una ciencia social que implica el estudio estadístico de la población humana. Población, en un término más simple, es el número de personas en una ciudad o pueblo, región, país o mundo; la población generalmente está determinada por un proceso llamado censo, es decir, un proceso de recopilación, análisis, compilación y publicación de datos sobre la población y otras variables relacionadas como localidad de residencia, vivienda, ingreso, nivel educativo y otras.4</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Otros",
  min: 0,
  //max: 6000000,
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/argentina/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Poblacion Argentina",
        data: require(`../../data/${generatedTime}/${kpi}/argentina/d.json`),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

})()

