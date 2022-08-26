module.exports = {
  labels: require("../bcra/icl/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0.05)",
      label: "ICL",
      data: require("../bcra/icl/d.json"),
      borderColor: "rgba(46,120,210,1)",
      pointRadius: 0,
      borderWidth: 1.5,
    },

  ],
}