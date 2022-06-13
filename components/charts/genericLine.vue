<template>
  <section class="chart">
       <h2 v-if="!title">
        <strong>{{ chart.t }}</strong>. {{chart.st}}
      </h2>
    <h2 v-if="title">
        <strong>{{ title }}</strong>. {{subtitle}}
    </h2>
    <div style="position: absolute;top: 55px;bottom: 15px;left: 20px;right:15px">
                   <select
                  required
                   name="fecha"
                  id="fecha"
                  style="position: absolute;top: -40px;right:15px"
                  v-if="!edit"
                >
                  <option value="" selected disabled hidden>
                    Seleccionar Periodo
                  </option>
                  <option value="emae">EMAE</option>
                  <option value="isac">ISAC</option>
                  <option value="ipi">IPI</option>
                  <option value="ucii">UCII</option>
                  <option value="deficit">Deficit Fiscal</option>
                  <option value="balanza">Balanza Comercial</option>
                  <option value="subsidios">Subsidios Economicos</option>
                  <option value="desempleo">Desempleo</option>
                  <option value="embi">Riesgo Pais</option>
                  <option value="tasa">Tasas de Interes</option>
                  <option value="ipc">Inflacion</option>
                  <option value="reservas">Reservas Internacionales</option>
                  <option value="cambio">Cambio USD/Peso</option>
                  <option value="acero">Produccion de Acero</option>
                  <option value="acero">Produccion de Gas</option>
                  <option value="acero">Produccion de Petroleo</option>
                  <option value="cereales">Produccion de Cereales</option>
                </select>
    <charts-line
    style="position: absolute;top: 0;bottom: 0;left: 0;right:0"
      :chart="chart"
    />
    </div>

  </section>
</template>

<script>
 
export default {
  props: {     
    edit: {
      type: Boolean,
      required: false
    },
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },    
    data: {
      type: String,
      required: false,
    },
    chartHeight: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      chart: require(`~/json/confluence/${this.data}.json`)
    };
  },
  created() {
      //this.chartOptions.scales.xAxes[0].ticks.min = this.minDate;

 
     //this.chartOptions.scales.yAxes[0].ticks.max = this.chart.max; 

    },
};
</script>

 <style lang="scss">
select#fecha {
      margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 2px;
 }
 </style>