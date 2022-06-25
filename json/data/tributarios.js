module.exports = {
  labels: require("../tributarios/total/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "Total",
      data: require("../tributarios/total/d.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      fill: false,
      label: "DGA",
      data: require("../tributarios/dga/d.json"),
      borderColor: "#7a49a580",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      fill: false,
      label: "DGI",
      data: require("../tributarios/dgi/d.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      fill: false,
      label: "Seguridad Social",
      data: require("../tributarios/seguridad/d.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1.5,
    },    
  ],
}
