import Vue from 'vue'
 

var state = {
  updated: 0,
   isOpen: false,
  isSearching: false,
  activeMode: 'grid',
  kpidates: {
    balanza: "2004-06-01",
    deficit: "2018-12-01",
    //ipc: "2004-12-01",
    cambio: "2018-12-01",
    //salariominimo: "2004-12-01",
    haberminimo: "2004-12-01",
    tasa: "2016-06-01",
    basemonetaria: "2016-06-01"
  },
  originalIndex: JSON.parse(JSON.stringify(require(`~/static/kpitable.json`))),
 savedIndex: require(`~/static/kpitable.json`),
 searchedResults: {},
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 },
    bezierCurve: true,
    plugins: [{
      beforeInit: function(chart, options) {
        chart.legend.afterFit = function() {
          this.height = this.height + 150;
        };
      }
    }],
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
          ticks: { fontColor: "#bbb", fontSize: 13.5 },
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
            fontSize: 13.5
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
          //align: "center",
        },
      ],
    },
    elements: {
      line: {
          tension: 0.1,
          borderWidth: 1.5
      },
        point:{
            radius: 0
        }
    
  },    
    legend: {
      display: true,
      position: "bottom",
      align: "end",
      padding: 150,

       labels: {
        boxWidth: 10,
        usePointStyle: true
       }
    },
  }
  
}



export default async ({ app }, inject) => {
  inject('state', Vue.observable(state))
}