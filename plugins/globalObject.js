import Vue from 'vue'

const state = {
  updated: 0,
  isOpen: false,
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 },
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
            color: "#F7F5F0",
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
            callback: function (value, index, values) {
              return "$" + value / 1e4 + "M";
            },
          },
          gridLines: {
            color: "#F7F5F0",
            lineWidth: 1,
            drawBorder: false,
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
      display: false,
    },
  }
  
}



const impoDates = async()=>{try{return(await import("~/json/impo/dolar/dates.json")).default}catch(t){return console.log(t),[]}};
const impo = async()=>{try{return(await import("~/json/impo/dolar/d.json")).default}catch(t){return console.log(t),[]}};
const expo = async()=>{try{return(await import("~/json/expo/dolar/d.json")).default}catch(t){return console.log(t),[]}};
const saldo = async()=>{try{return(await import("~/json/expo/saldo/d.json")).default}catch(t){return console.log(t),[]}};

async function balanza() {
  return {
    labels: await impoDates(),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Importaciones",
        data: await impo(),
        borderColor: "#b22222CC",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Exportaciones",
        data: await expo(),
        borderColor: "#009966",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        backgroundColor: "#ccc",
        label: "Saldo Comercial",
        type: "bar",
        data: await saldo(),
        borderColor: "#ccc",
        pointRadius: 0,
        borderWidth: 0,
      },
    ],
  }
}

 
  
const emaeB = async()=>{try{return(await import("~/json/emae/base/d.json")).default}catch(t){return console.log(t),[]}};
const emaeD = async()=>{try{return(await import("~/json/emae/estacional/d.json")).default}catch(t){return console.log(t),[]}};
const emaeT = async()=>{try{return(await import("~/json/emae/tendencia/d.json")).default}catch(t){return console.log(t),[]}};
const emaeDates = async()=>{try{return(await import("~/json/emae/base/dates.json")).default}catch(t){return console.log(t),[]}};
 
async function emae() {
  return {
        labels: await emaeDates(),
        datasets: [
          {
            backgroundColor: "rgba(46,120,210,0)",
            label: "Desestacionalizado",
            data: await emaeD(),
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            fill: false,
            label: "Tendencia",
            data: await emaeT(),
            borderColor: "#7a49a580",
            pointRadius: 0,
            borderWidth: 1,
          },
          {
            fill: false,
            label: "Base",
            data: await emaeB(),
            borderColor: "rgba(46,120,210,0.25)",
            pointBackgroundColor: "#C1D7F2",
            pointRadius: 0,
            borderWidth: 1,
          },
        ],
      }
    }
  
  
 





export default ({ app }, inject) => {
  inject('state', Vue.observable(state))
 
}