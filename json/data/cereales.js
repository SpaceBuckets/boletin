 
module.exports = {

  labels: require("../cuentas/soja/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Girasol",
        data: require("../cuentas/girasol/d.json"),
        borderColor: "rgba(46,120,210,0.25)",

        pointRadius: 0,
        borderWidth: 1.75,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Maiz",
        data: require("../cuentas/maiz/d.json"),
        borderColor: "rgba(46,120,210,0.25)",

        pointRadius: 0,
        borderWidth: 1.75,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Trigo",
        data: require("../cuentas/trigo/d.json"),
        borderColor: "rgba(46,120,210,0.25)",

        pointRadius: 0,
        borderWidth: 1.75,
      },                    
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Soja",

        data: require("../cuentas/soja/d.json"),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.75,
      },
    ],
  }
 