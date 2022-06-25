module.exports = {
  labels: require("../ambito/oficial/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(0,153,102,0.0)",
      label: "Cambio Oficial",
      data: require("../ambito/oficial/d.json"),
      borderColor: "#009966",
      pointRadius: 0,
      borderWidth: 1.5,
      //fill: "-1", //fill until previous dataset

    },
    {
      backgroundColor: "rgba(178,34,34,0)",
      label: "Cambio Blue",
      data: require("../ambito/blue/d.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,

    },
    {
      backgroundColor: "rgba(178,34,34,0)",
      label: "Cambio CCL",
      data: require("../ambito/ccl/d.json"),
      borderColor: "#b22222CC",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      backgroundColor: "rgba(178,34,34,0)",
      label: "Cambio MEP",
      data: require("../ambito/mep/d.json"),
      borderColor: "#b2222250",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      backgroundColor: "rgba(178,34,34,0)",
      label: "Cambio Turista",
      data: require("../ambito/turista/d.json"),
      borderColor: "blue",
      pointRadius: 0,
      borderWidth: 0,
    },   
  ],
}

