
module.exports = {
  labels: require("../ipc/ipib/dates.json"),
  datasets: [
    {
      backgroundColor: "#2E78D295",
      label: "IPIB",
      data: require("../ipc/ipib/d.json"),
      type: 'bar',
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 0,
    },
  ],
}

