module.exports = {
  labels: require("../empleo/general/dates.json"),
  datasets: [
    {
      backgroundColor: 'rgba(46,120,210,0.0)',
      label: "General",
      data: require("../empleo/general/d.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      fill: false,
      label: "CABA",
      data: require("../empleo/caba/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      fill: false,
      label: "Cuyo",
      data: require("../empleo/cuyo/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      fill: false,
      label: "GBA",
      data: require("../empleo/gba/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      fill: false,
      label: "Nordeste",
      data: require("../empleo/nordeste/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      fill: false,
      label: "Noroeste",
      data: require("../empleo/noroeste/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      fill: false,
      label: "Pampeana",
      data: require("../empleo/pampeana/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      fill: false,
      label: "Patagonia",
      data: require("../empleo/patagonia/d.json"),
      borderColor: "rgba(46,120,210,0.15)",
      pointBackgroundColor: "#C1D7F2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}

