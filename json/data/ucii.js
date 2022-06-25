module.exports = {
  labels: require("../ucii/general/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "UCII General",
      data: require("../ucii/general/d.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      fill: false,
      label: "UCII Alimentos",
      data: require("../ucii/alimentos/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      fill: false,
      label: "UCII Automotriz",
      data: require("../ucii/automotriz/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      fill: false,
      label: "UCII Edicion",
      data: require("../ucii/edicion/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      fill: false,
      label: "UCII Metales",
      data: require("../ucii/metales/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      fill: false,
      label: "UCII Metalmecanica",
      data: require("../ucii/metalmecanica/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      fill: false,
      label: "UCII Minerales",
      data: require("../ucii/minerales/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      fill: false,
      label: "UCII Papel",
      data: require("../ucii/papel/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      fill: false,
      label: "UCII Petroleo",
      data: require("../ucii/petroleo/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      fill: false,
      label: "UCII Plastico",
      data: require("../ucii/plastico/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      fill: false,
      label: "UCII Quimicos",
      data: require("../ucii/quimicos/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      fill: false,
      label: "UCII Tabaco",
      data: require("../ucii/tabaco/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      fill: false,
      label: "UCII Textiles",
      data: require("../ucii/textiles/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1,
    },
  ],
}
