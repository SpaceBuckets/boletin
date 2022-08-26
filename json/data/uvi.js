module.exports = {
  labels: require("../bcra/uvi/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0.05)",
      label: "UVI",
      data: require("../bcra/uvi/d.json"),
      borderColor: "rgba(46,120,210,1)",
      pointRadius: 0,
      borderWidth: 1.5,
    },

  ],
}