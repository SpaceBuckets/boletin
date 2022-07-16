module.exports = {
  labels: require("../emae/base/dates.json"),
  datasets: [
    {
      fill: false,
      label: "Desestacionalizado",
      data: require("../emae/estacional/d.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      fill: false,
      label: "Tendencia",
      data: require("../emae/tendencia/d.json"),
      borderColor: "#7a49a580",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      fill: false,
      label: "Base",
      data: require("../emae/base/d.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1,
    },
  ],
}

