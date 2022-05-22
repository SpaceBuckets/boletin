import Vue from 'vue'

const state = {
  updated: 0,
  isOpen: false,
  selectedkpis: ["emae",'ipi','ucii','cambio','tcrm','reservas','tasa','intercambio','embi','ipc','desempleo','asalariados'],
  indicadores: {
/*     actividad: {
      emae: "EMAE (Estimador Mensual de Actividad Económica)",
      //pbi: "Producto Bruto Interno",
      ipi: "IPI (Indice de Produccion Industrial Manufacturero)",
      isac: "ISAC (Indicador Sintético de la Construcción)",
      ucii: "UCII (Utilizacion de la Capacidad Instalada en la Industria)",
    }, */
    precios: {
      ipc: "IPC (Índice de Precios al Consumidor)",
    /*   ipchistorico: "Inflación Histórica intermensual",
     ipchistorico2: "Inflación Histórica interanual", */
     rem: 'Expectativa IPC interanual',
     asalariados: "Asalariados sector privado",
     desempleo: "Tasa de desempleo",
    },
    monetaria: {
      tasa: "Tasa de Política Monetaria",
      cambio: "Tipo(s) de Cambio",
      //brecha: 'Brecha USD',
      tcrm: "TCRM (Tipo de Cambio Real Multilateral)",
      //mae: "MAE (Mercado Abierto Electrónico)",
      //rofex: 'Dolar Futuro',
      reservas: 'Reservas Internacionales USD',
      comprasbcra: 'Compras Diarias USD',
      intercambio: "Intercambio Comercial",
      ice: "ICE (Indice de Condiciones Externas)",
      embi: "EMBI (Riesgo Pais)",
/*       comprasmensual: 'Compras Mensuales USD',
      comprasanual: 'Compras Anuales USD', */
    },
    cuentas: {
      ahorro: "Ahorro y Desahorro",
      subsidios: "Subsidios Economicos",
      pozos: 'Produccion de petroleo',
      gas: 'Produccion de Gas',
      hierro: 'Produccion de Hierro Primario',
      autos: 'Produccion de Automoviles',
      soja: 'Produccion de Soja',
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