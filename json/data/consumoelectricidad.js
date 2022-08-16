module.exports = {
  labels: require("../consumo/electricidad/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0.05)",
      label: "Consumo de Electricidad",
      data: require("../consumo/electricidad/d.json"),
      borderColor: "rgba(46,120,210,1)",
      pointRadius: 0,
      borderWidth: 1.5,
    },

  ],
}