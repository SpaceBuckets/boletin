
module.exports = {
  labels: require("../ipc/historico/dates.json"),
  datasets: [
    {
      backgroundColor: "#2E78D295",
      label: "Desestacionalizado",
      data: require("../ipc/historico/dmensual.json"),
      type: 'bar',
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 0,
    },
  ],
}

