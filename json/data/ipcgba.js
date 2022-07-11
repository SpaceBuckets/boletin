
module.exports = {
  labels: require("../ipc/ipcgba/dates.json"),
  datasets: [
    {
      backgroundColor: "#2E78D295",
      label: "Desestacionalizado",
      data: require("../ipc/ipcgba/d.json"),
      type: 'bar',
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 0,
    },
  ],
}

