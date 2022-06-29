module.exports = {
  labels: require("../empleo/salariominimo/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0.05)",
      label: "RIPTE",
      data: require("../empleo/salariominimo/d.json"),
      borderColor: "rgba(46,120,210,1)",
      pointRadius: 0,
      borderWidth: 1.5,
    },

  ],
}