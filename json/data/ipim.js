
module.exports = {
  labels: require("../ipc/ipim/dates.json"),
  datasets: [
    {
      backgroundColor: "#2E78D295",
      label: "IPIM",
      data: require("../ipc/ipim/d.json"),
      type: 'bar',
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 0,
    },
  ],
}

