module.exports = {
  labels: require("../empleo/privadob/dates.json"),
  datasets: [
    {
      backgroundColor: 'rgba(46,120,210,0)',
      label: "Empleo Privado",
      data: require("../empleo/privadod/d.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      backgroundColor: 'rgba(46,120,210,0)',
      label: "Empleo Publico",
      data: require("../empleo/privadob/d.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}


