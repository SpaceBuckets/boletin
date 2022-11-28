module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "ivm"
  const kpidata = {
    url: 'https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-ventas-minoristas.xlsx',
    sheet: 0,
    date: 0,
    items: [{
      name: "valor", id: 1
    }]      
  }
  await parsers.genericXLS(kpidata, kpi)

  var post = {
    kpi,
  t: "IVM",
  st: "Índice de Ventas Minoristas",
  sd: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
  c: "<p>Indice de Ventas Minoristas</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_ipc_nacional_2019.pdf",
  fu: "CAME",
  d: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
  max: 200,
  min: 0,
  cat: "Precios",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/valor/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "IVM",
        data: require(`../../data/${generatedTime}/${kpi}/valor/d.json`),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

})()
