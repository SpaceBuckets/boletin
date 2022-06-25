module.exports = {
  labels: require("../pbi/dates.json"),
  datasets: [
    {
      backgroundColor: 'rgba(46,120,210,0)',
      label: "PBI per capita",
      data: require("../pbi/argentina.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}


