import Vue from 'vue'

const state = {
  updated: 0,
  isOpen: false,
  selectedkpis: ["emae",'ipi','ucii','cambio','tcrm','reservas','tasa','intercambio','embi','ipc','desempleo','asalariados'],
  indicadores: {
    precios: {
      ipc: "IPC (Índice de Precios al Consumidor)",
    /*   ipchistorico: "Inflación Histórica intermensual",
     ipchistorico2: "Inflación Histórica interanual", */
     rem: 'Expectativa IPC interanual',
     asalariados: "Asalariados sector privado",
     desempleo: "Tasa de desempleo",
    },
    externo: {
      expo: "Exportaciones",
      impo: "Importaciones",

      //cbt: "Canasta Basica Total y Alimentaria", */
    }

  }
  
}

export default ({ app }, inject) => {
  inject('state', Vue.observable(state))
}