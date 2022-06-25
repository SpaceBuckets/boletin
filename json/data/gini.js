module.exports = {
  labels: require("../gini/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0.05)",
      label: "Argentina GINI",
      data: require("../gini/argentina.json"),
      borderColor: "#2E78D2",
      pointRadius: 0, 
      borderWidth: 1.5,
    },
/*     {
      backgroundColor: 'rgba(46,120,210,0)',
      label: "Brasil GINI",
      data: require("../gini/brasil.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      backgroundColor: 'rgba(46,120,210,0)',
      label: "Chile GINI",
      data: require("../gini/chile.json"),
      borderColor: "rgba(46,120,210,0.25)", 
      pointRadius: 0,
      borderWidth: 1.5,
    },     */
  ],
}


