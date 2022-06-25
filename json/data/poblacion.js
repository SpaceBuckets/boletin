module.exports = {
  labels: require("../poblacion/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0.05)",
      label: "Poblacion Argentina",
      data: require("../poblacion/argentina.json"),
      borderColor: "rgba(46,120,210,1)",
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}

