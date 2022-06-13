module.exports = {
  labels: require("../isac/base/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "Desestacionalizado",
      data: require("../isac/estacional/d.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.75,
    },
    {
      fill: false,
      label: "Tendencia",
      data: require("../isac/tendencia/d.json"),
      borderColor: "#7a49a580",
      pointRadius: 0,
      borderWidth: 1.75,
    },
    {
      fill: false,
      label: "Base",
      data: require("../isac/base/d.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1.75,
    },
  ],
}

