module.exports = {
  labels: require("../empleo/haberminimo/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0.05)",
      label: "Haber Minimo Jubilatorio",
      data: require("../empleo/haberminimo/d.json"),
      borderColor: "rgba(46,120,210,1)",
      pointRadius: 0,
      borderWidth: 1.5,
    },

  ],
}