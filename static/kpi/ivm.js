module.exports = {
  "t": "IVM",
  "st": "Índice de Ventas Minoristas",
  "sd": "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
  "kpi": "ivm",
  "c": "<p>Indice de Ventas Minoristas</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_ipc_nacional_2019.pdf",
  "fu": "CAME",
  "d": "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
  "max": 200,
  "min": 0,
  "cat": "Precios",
  chartdata: {
    labels: require("../data/ivm/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "IVM",
        data: require("../data/ivm/valor.json"),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}
