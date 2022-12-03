module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "gini"
  try {
  await parsers.parseWorldBank(kpi, "argentina", 'https://api.worldbank.org/v2/country/arg/indicator/SI.POV.GINI?format=json&per_page=500')

  var post = {
    kpi,
  "t": "GINI",
  "st": "Desigualdad según coeficiente de Gini",
  "sd": "Sirve de referencia para estimar la evolución del mercado de deuda emergente y permite estudiar el comportamiento de una canasta de bonos que conforman la deuda de los países emergentes.",
  "c": "<p>El coeficiente de Gini es una medida de la desigualdad ideada por el estadístico italiano Corrado Gini.1​ Normalmente se utiliza para medir la desigualdad en los ingresos, dentro de un país, pero puede utilizarse para medir cualquier forma de distribución desigual. El coeficiente de Gini es un número entre 0 y 1, donde 0 se corresponde con la perfecta igualdad (todos tienen los mismos ingresos) y donde el valor 1 se corresponde con la perfecta desigualdad (una persona tiene todos los ingresos y los demás ninguno). El índice de Gini es el coeficiente de Gini expresado en referencia a 100 como máximo, en vez de 1, y es igual al coeficiente de Gini multiplicado por 100. Una variación de dos centésimas del coeficiente de Gini (o dos unidades del índice) equivale a una distribución de un 7% de riqueza del sector más pobre de la población (por debajo de la mediana) al más rico (por encima de la mediana).</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "cat": "Otros",
  "max": 55,
  "min": 35,
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/argentina/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Argentina GINI",
        data: require(`../../data/${generatedTime}/${kpi}/argentina/d.json`),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ]
}
  }

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()


