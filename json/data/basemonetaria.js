module.exports = {
  labels: require("../basemonetaria/total/dates.json"),
  datasets: [
    {
      backgroundColor: 'rgba(46,120,210,0)',
      label: "Base Monetaria",
      data: require("../basemonetaria/total/d.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      backgroundColor: 'rgba(46,120,210,0)',
      label: "Base Monetaria + Instrumentos (LELIQ y Otros)",
      data: require("../basemonetaria/totalplus/d.json"),
      borderColor: "#2E78D280",
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}


