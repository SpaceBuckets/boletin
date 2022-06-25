module.exports = {
  labels: require("../tcrm/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "TCRM",
      data: require("../tcrm/itcrm.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "TCRUS",
      data: require("../tcrm/itcrus.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "TRCB",
      data: require("../tcrm/itcrb.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}

