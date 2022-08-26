module.exports = {
  labels: require("../ipip/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "Desestacionalizado",
      data: require("../ipip/valor.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}
