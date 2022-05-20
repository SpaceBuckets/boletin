<template>
  <div style="position: relative" class="">
    <div class="title-container" style="min-width:100%;">
      <h2>
        <span>Superavit fiscal</span>. Ahorro/Desahorro
      </h2>
      <div class="select-container">
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
    <div class="chartcont">

      <div class="flexedtable">
       <p>El EMAE es un <strong>indicador provisorio de la evolución del PBI</strong> que ofrece una pauta de la actividad económica real. Se elabora con información parcial calculando la <strong>suma del valor agregado de las actividades económicas</strong>.</p> 
        <p>Fuente: INDEC</p>
        <div>
          <div>
            <div>Fecha</div>
            <div>Deses.</div>
            <div>Variacion</div>
           </div>
        </div>
        <div class="flexedcontent">
  
        </div>
      </div>
            <charts-line :data="chartData" :options="chartOptions" :height="460" />

    </div>
  </div>
</template>

<script>

 import ingresos from "../../json/cuentas/ingresos/d.json";
import gastos from "../../json/cuentas/gastos/d.json";
import ahorro from "../../json/cuentas/ahorro/d.json";
import expoDates from "../../json/cuentas/ingresos/dates.json";

const colours = ahorro.map((value) => value < 0 ? '#b22222CC' : '#009966');

export default {
  data() {
    return {
      chartData: {
        labels: expoDates,
        datasets: [
  
           {
            backgroundColor: 'rgba(146,220,210,0)',
            label: "Ingresos",
            data: ingresos,
            borderColor: "#009966",
            pointRadius: 0,
            borderWidth: 2,
          },    
          {
            backgroundColor: 'rgba(146,220,210,0)',
            label: "Gastos",
             data: gastos,
            borderColor: "#b22222CC",
            pointRadius: 0,
            borderWidth: 2,
          },     
          {
            backgroundColor: '#ccc',
            label: "Precio",
             data: ahorro,
            borderColor: "#ccc",
            pointRadius: 0,
            borderWidth: 0,
            type: 'bar',

          },                        
        ],
      },   
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 0 },    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        scales: {
          xAxes: [{
            type: 'time',
            offset: true,
            position: 'bottom',
            gridLines: {
                            color: "#F7F5F0"
, zeroLineColor: '#eee', drawBorder: false, offsetGridLines: false, 
              color: "#F7F5F0"
            },
            ticks: { fontColor: "#aaa", fontSize: 13, },
            time: {
              tooltipFormat: 'DD/MM/YY',
              unit: 'year',
            }
          }],
          yAxes: [{
            ticks: { fontColor: "#aaa",
 
            },
            gridLines: { 
                            color: "#F7F5F0"
, 
              lineWidth: 1, 
              drawBorder: false,          
            },
            scaleLabel: {
              display: true,
              labelString: 'Base 2004 = 100',
              fontColor: "#888"
            },
            position: "right",
          },
          ],
        },
        legend: {
          display: false,
        },
      },      
    };
  },
};
</script>

 