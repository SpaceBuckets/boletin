import Vue from 'vue'

const state = {
  updated: 0,
  isOpen: false,
  kpidates: {
    balanza: "2004-06-01",
    deficit: "2018-12-01",
    ipc: "2004-12-01",
    cambio: "2017-06-01",
    salariominimo: "2004-12-01",
    haberminimo: "2004-12-01",
    tasa: "2016-06-01"

  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 },
    bezierCurve: true,

    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          offset: true,
          position: "bottom",
          gridLines: {
             zeroLineColor: "#eee",
            drawBorder: false,
            offsetGridLines: false,
            color: "#F7F5F0",
          },
          ticks: { fontColor: "#bbb", fontSize: 13 },
          time: {
            tooltipFormat: "DD/MM/YY",
            unit: "year",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "#bbb",
/*             callback: function (value, index, values) {
              return "$" + value / 1e4 + "M";
            }, */
          },
          gridLines: {
            color: "#F7F5F0",
            lineWidth: 1,
            drawBorder: false,
            drawOnChartArea: true,

            zeroLineColor: "#eee",
          },
          scaleLabel: {
            display: false,
            labelString: "Millones de dólares",
            fontColor: "#888",
          },
          position: "right",
        },
      ],
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        boxWidth: 12,
       }
    },
  }
  
}

 

 
 

export default async ({ app }, inject) => {
  inject('state', Vue.observable(state))
}