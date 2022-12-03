module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "cambio"
  try {

  var post = {
    kpi,
  t: "Tipos de Cambio",
  st: "Brecha Peso/USD",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cells: {
      "1267": {
          "area": "1 / 6 / 2 / 7",
          "kpi": "cambio",
          "type": "KpiUpdated",
          "hasChart": true
      },
      "1416": {
          "area": "1 / 1 / 4 / 6",
          "kpi": "cambio",
          "type": "Line",
          "hasChart": true
      },
      "2367": {
          "area": "2 / 6 / 3 / 7",
          "kpi": "cambio",
          "type": "Kpi",
          "hasChart": true
      },
      "3467": {
          "area": "3 / 6 / 4 / 7",
          "kpi": "cambio",
          "type": "Kpi",
          "hasChart": true
      },
      "4715": {
          "area": "4 / 1 / 7 / 5",
          "kpi": "brecha",
          "type": "Line",
          "hasChart": true
      },
      "4757": {
          "area": "4 / 5 / 7 / 7",
          "kpi": "brecha",
          "type": "Table",
          "hasChart": true
      }
  },
  c: "<p>El tipo de cambio es el precio de una unidad de moneda extranjera expresado en términos de la moneda local. A su vez, encontramos dos Tipos de Cambio Nominal: tipo comprador y tipo vendedor, dado que las entidades financieras obtienen una ganancia por intermediar en el juego de la oferta y la demanda de moneda extranjera. La diferencia entre ambas tasas, es lo que se conoce como 'spread'. Al igual que sucede con los bienes y servicios, el 'precio' de una unidad de moneda extranjera, o sea el Tipo de Cambio, varía en el tiempo. Cuando aumenta, se dice que hay una depreciación de la moneda local (frente a la moneda extranjera a la cual la estemos comparando), ya que debo pagar más unidades de moneda local por cada unidad de moneda extranjera. Cuando el Tipo de Cambio disminuye, se dice que hay una apreciación de la moneda local</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 350,
  cat: "Política Monetaria",  
  chartdata: {
  labels: require(`../../data/${generatedTime}/${kpi}/oficial/dates.json`),
  datasets: [
    {
      backgroundColor: "rgba(0,153,102,0.0)",
      label: "Oficial",
      data: require(`../../data/${generatedTime}/${kpi}/oficial/d.json`),
      borderColor: "#009966",
      pointRadius: 0,
      borderWidth: 1.5,
      //fill: "-1", //fill until previous dataset

    },
    {
      backgroundColor: "rgba(178,34,34,0)",
      label: "Blue",
      data: require(`../../data/${generatedTime}/${kpi}/blue/d.json`),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.25,

    },
    {
      backgroundColor: "rgba(178,34,34,0)",
      label: "CCL",
      data: require(`../../data/${generatedTime}/${kpi}/ccl/d.json`),
      borderColor: "#b22222CC",
      pointRadius: 0,
      borderWidth: 1.25,
    },
    {
      backgroundColor: "rgba(178,34,34,0)",
      label: "MEP",
      data: require(`../../data/${generatedTime}/${kpi}/mep/d.json`),
      borderColor: "#b2222250",
      pointRadius: 0,
      borderWidth: 1.25,
    },
 
  ],
}
}


parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()
