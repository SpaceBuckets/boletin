module.exports = {
  labels: require("../tasas/fed/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0.0)",
      label: "Tasa FED",
      data: require("../tasas/fed/d.json"),
      borderColor: "rgba(46,120,210,1)",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      backgroundColor: "rgba(46,120,210,0.0)",
      label: "Tasa Euro",
      data: require("../tasas/euro/d.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointRadius: 0,
      borderWidth: 1.5,
    },
/*     {
      backgroundColor: "rgba(46,120,210,0.0)",
      label: "Tasa Japon",
      data: require("../tasas/japon/d.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointRadius: 0,
      borderWidth: 1.5,
    }, */
    {
      backgroundColor: "rgba(46,120,210,0.0)",
      label: "Tasa Inglaterra",
      data: require("../tasas/inglaterra/d.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      backgroundColor: "rgba(46,120,210,0.0)",
      label: "Tasa Brasil",
      data: require("../tasas/brasil/d.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointRadius: 0,
      borderWidth: 1.5,
    },            
  ],
}