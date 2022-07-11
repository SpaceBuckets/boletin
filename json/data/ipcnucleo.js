
module.exports = {
  labels: require("../ipc/ipcnucleo/dates.json"),
  datasets: [
    {
      backgroundColor: "#2E78D295",
      label: "IPC Núcleo",
      data: require("../ipc/ipcnucleo/d.json"),
      type: 'bar',
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 0,
    },
  ],
}

