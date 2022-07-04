const fs = require('fs');
const fetch = require('node-fetch');
var xlsx = require('node-xlsx');
const parse5 = require('parse5');
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const glob = require('glob');
const matter = require('gray-matter');
 const Papa = require('papaparse')
 const path = require('path')
 
 function writeFileSyncRecursive(filename, content, charset) {
   const folders = filename.split(path.sep).slice(0, -1)
   if (folders.length) {
     // create folder path if it doesn't exist
     folders.reduce((last, folder) => {
       const folderPath = last ? last + path.sep + folder : folder
       if (!fs.existsSync(folderPath)) {
         fs.mkdirSync(folderPath)
       }
       return folderPath
     })
   } 
   fs.writeFileSync(filename, content, charset)
 }


global.emae = {
  estacional: '143.3_NO_PR_2004_A_31',
  tendencia: '143.3_NO_PR_2004_A_28',
  base: '143.3_NO_PR_2004_A_21',
  /*   a: '11.3_ISOM_2004_M_39',
    b: '11.3_VIPAA_2004_M_5',
    c: '11.3_ISD_2004_M_26',
    d: '11.3_VMASD_2004_M_23',
    e: '11.3_ITC_2004_M_21',
    f: '11.3_VMATC_2004_M_12',
    g: '11.3_AGCS_2004_M_41',
    h: '11.3_P_2004_M_20',
    i: '11.3_EMC_2004_M_25',
    j: '11.3_IM_2004_M_25',
    k: '11.3_SEGA_2004_M_48',
    l: '11.3_C_2004_M_60',
    m: '11.3_CMMR_2004_M_10',
    n: '11.3_HR_2004_M_24',
    o: '11.3_TAC_2004_M_60',   */
}

global.cuentas = {
  ingresos: '379.9_ING_CORR_2017__13_2',
  gastos: '379.9_GTOS_CORR_017__14_1',
  ahorro: '379.9_RESULTADO_017__41_83',
  subenergia: '452.2_ENERGIAGIA_0_T_7_56',
  subtransporte: '452.2_TRANSPORTERTE_0_T_10_32',
  pozos: '366.3_POZOS_TERMRAL__30',
  pozosmetros: '366.3_METROS_PERRAL__31',
  petroleo: '363.3_PRODUCCIONUDO__28',
  gas: '364.3_PRODUCCIoNRAL__25',
  hierro: '359.3_HIERRO_PRITAL__21',
  autos: '330.1_PRODUCCIONLES__22',
  soja: '34.2_STSOJ_0_P_16',
  trigo: '34.2_TTTRI_0_P_17',
  girasol: '34.2_GTGIR_0_P_19',
  maiz: '34.2_MTMAI_0_P_16',

}

global.tributarios = {
  dga: '172.3_SOTAL_DDGA_M_0_0_12',
  dgi: '172.3_SOTAL_DDGI_M_0_0_12',
  total: '172.3_TL_RECAION_M_0_0_17',
  seguridad: '172.3_SRIDAD_IAL_M_0_0_16',
}

global.polingresos = {
  asignaciones: '186.3_ASIGNACIONRES_0_0_23',
  argentinatrabaja: '186.3_ARGENTINA_AJA_0_0_17',
  auh: '186.3_ASIGNACIONIAL_0_0_43',
  becas: '186.3_BECASCAS_0_0_5',
  jovenestrabajo: '186.3_JOVENES_MAAJO_0_0_25',
  jubilaciones: '186.3_JUBILACIONINO_0_0_53',
  jubilacionesotros: '186.3_JUBILACIONLES_0_0_49',
  otras: '186.3_OTRAS_POLISOC_0_0_52',
  pensiones: '186.3_PENSIONES_VAS_0_0_26',
  jefasyjefes: '186.3_PROGRAMA_JDOS_0_0_38',
  familias: '186.3_PLAN_FAMILIAL_0_0_30',
  progresar: '186.3_PROGRAMA_RINA_0_0_39',
  puam: '186.3_PENSION_UNYOR_0_0_30',
  segcapacitacion: '186.3_SEGURO_CAPLEO_0_0_26',
  segdesempleo: '186.3_SEGURO_DESLEO_0_0_16',
  segdesempleootros: '186.3_SEGURO_DESTRE_0_0_24',
  proyectoscomunitarios: '186.3_PROYECTOS_IOS_0_0_34',
  total: '186.3_TOTAL_POLISOS_0_0_23'
}
	
global.gastos = {
  energia: '452.2_CAPITAL_ENION_0_T_22_35',
  transporte: '452.3_CAPITAL_TRION_0_M_25_82',
  educacion: '452.3_CAPITAL_EDION_0_M_24_92',
  vivienda: '452.3_CAPITAL_VIION_0_M_23_52',
  agua: '452.3_CAPITAL_AGION_0_M_41_40',
  otros: '452.3_CAPITAL_OTION_0_M_20_10'
}

global.ipi = {
  estacional: '453.1_SERIE_DESEADA_0_0_24_58',
  tendencia: '453.1_SERIE_TENDCLO_0_0_21_61',
  base: '453.1_SERIE_ORIGNAL_0_0_14_46',
}

/* global.consumo = {
  electricidad: '302.3_ELEC_GAS_AGWH_0_S_35',
  gas: '302.3_ELEC_GAS_A_M3_0_S_33',
  agua: '302.3_ELEC_GAS_A_M3_0_S_30',
}
*/

global.tasas = {
  fed: '131.1_FET_0_0_12&start_date=1999-01-01',
  euro: '131.1_MZT_0_0_18&start_date=1999-01-01',
  brasil: '131.1_SBT_0_0_17&start_date=1999-01-01',
  inglaterra: '131.1_RIT_0_0_20&start_date=1999-01-01',
  japon: '131.1_OIRJT_0_0_34&start_date=1999-01-01',
}

global.isac = {
  estacional: '33.2_ISAC_SIN_EDAD_0_M_23_56',
  tendencia: '33.2_ISAC_CICLOCIA_0_M_20_62',
  base: '33.2_ISAC_NIVELRAL_0_M_18_63',
}

global.expo = {
  saldo: 'https://apis.datos.gob.ar/series/api/series/?collapse=month&collapse_aggregation=avg&ids=74.3_ISC_0_M_19',
  dolar: '74.3_IET_0_M_16',
  cantidad: '80.2_IICENG_0_T_47',
  precio: '80.2_IIPENG_0_T_45',
}

global.impo = {
  dolar: '74.3_IIT_0_M_25',
  cantidad: '81.2_IICING_0_T_47',
  precio: '81.2_IIPING_0_T_45',
}

global.ipc = {
  general: '145.3_INGNACUAL_DICI_M_38',
  cuyo: '145.3_INGCUYUAL_DICI_M_34',
  patagonia: '145.3_INGPATUAL_DICI_M_39',
  gba: '145.3_INGGBAGBA_DICI_M_10&representation_mode=percent_change',
  //caba: '45.2_ECTDTC_0_T_38',
  pampeana: '148.3_INIVELANA_DICI_M_26&representation_mode=percent_change',
  noroeste: '148.3_INIVELNOA_DICI_M_21&representation_mode=percent_change',
  nordeste: '148.3_INIVELNEA_DICI_M_21&representation_mode=percent_change',
  icc: '380.3_ICC_NACIONNAL_0_T_12',
  ipim: '448.1_NIVEL_GENERAL_0_0_13_46&representation_mode=percent_change'
} 

global.empleo = {
  privadob: '151.1_AARIADODAD_2012_M_31',
  privadod: '151.1_AARIADOTAC_2012_M_26',
  general: '45.2_ECTDT_0_T_33',
  cuyo: '45.2_ECTDTCU_0_T_38',
  patagonia: '45.2_ECTDTP_0_T_43',
  gba: '45.2_ECTDTG_0_T_37',
  caba: '45.2_ECTDTC_0_T_38',
  pampeana: '45.2_ECTDTRP_0_T_49',
  noroeste: '45.2_ECTDTNO_0_T_42',
  nordeste: '45.2_ECTDTNE_0_T_42',
  ripte: '158.1_REPTE_0_0_5',
  salariominimo: '57.1_SMVMM_0_M_34',
  haberminimo: '58.1_MP_0_M_24'
}

global.ucii = {
  general: '31.3_UNG_2004_M_18',
  metales: "31.3_UIMB_2004_M_33",
  edicion: "31.3_UEI_2004_M_22",
  textiles: "31.3_UPT_2004_M_23",
  metalmecanica: "31.3_UMNIA_2004_M_42",
  plastico: "31.3_UCP_2004_M_20",
  automotriz: "31.3_UV_2004_M_25",
  tabaco: "31.3_UPT_2004_M_21",
  alimentos: "31.3_UPAB_2004_M_35",
  quimicos: "31.3_USPQ_2004_M_34",
  petroleo: "31.3_URP_2004_M_24",
  papel: "31.3_UPC_2004_M_17",
  minerales: "31.3_UMNM_2004_M_27",
}

global.rofex = {
  dolar: '92.2_TIPO_CAMBIION_0_0_21_24&limit=5000&start_date=2009-01-03',
  mae: '168.1_VMEN_MAMAE_D_0_0_11',
  t6: '168.1_FRO_ROF6M_D_0_0_19',
  t5: '168.1_FRO_ROF5M_D_0_0_19',
  t4: '168.1_FRO_ROF4M_D_0_0_19',
  t3: '168.1_FRO_ROF3M_D_0_0_19',
  t2: '168.1_FRO_ROF2M_D_0_0_19',
  t1: '168.1_FRO_ROF1M_D_0_0_19',
}

global.bcra = {
  reservas: '174.1_RRVAS_IDOS_0_0_36',
  pbi: '3.2_OGP_D_2004_T_17',
  uva: '94.2_UVAD_D_0_0_10',
  cer: '94.2_CD_D_0_0_10&start_date=2012-01-01'
}
 
global.csv = {
  ipicammesa: {
    url: 'https://datos.produccion.gob.ar/dataset/2c91f1eb-1eff-47e2-9122-42275e15ad9d/resource/9f5150e2-7de5-4233-b906-a52d26c625c6/download/ipi-cammesa.csv',
    sheet: 0,
    date: 0,
    columns: {
      interanual: 1
    }
  }
}

global.json = {
  gini: {
    argentina: 'https://api.worldbank.org/v2/country/arg/indicator/SI.POV.GINI?format=json&per_page=500',
 /*    brasil: 'https://api.worldbank.org/v2/country/bra/indicator/SI.POV.GINI?format=json&per_page=500',
    chile: 'https://api.worldbank.org/v2/country/chl/indicator/SI.POV.GINI?format=json&per_page=500',
 */
  },
  poblacion: {
    argentina: 'https://api.worldbank.org/v2/country/arg/indicator/SP.POP.TOTL?format=json&per_page=5000' 
  },
  pbi: {
    argentina: 'https://api.worldbank.org/v2/country/arg/indicator/NY.GDP.PCAP.KD?format=json&per_page=5000' 

  }
}

global.xls = {
  ice: {
    url: 'https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-indice-de-condiciones-externas.xlsx',
    sheet: 0,
    date: 0,
    columns: {
      coyuntural: 2,
      estructural: 1,
    }    
  },
  tcrm: {
    url: 'http://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls',
    sheet: 0,
    date: 0,
    columns: {
      itcrm: 1,
      itcrb: 2,
      itcrus: 5
    }    
  },  
  embi: {
    url: "https://bcrdgdcprod.blob.core.windows.net/documents/entorno-internacional/documents/Serie_Historica_Spread_del_EMBI.xlsx",
    sheet: 0,
    date: 0,
    columns: {
      argentina: 4,
      brasil: 6,
      chile: 7,
      mexico: 14,
      colombia: 8,
      latino: 2
    }
  }
}

global.ambito = {
  mep: 'https://mercados.ambito.com//dolarrava/mep/historico-general/01-01-1900/01-01-2100',
  ccl: 'https://mercados.ambito.com//dolarrava/cl/historico-general/01-01-1900/01-01-2100',
  blue: 'https://mercados.ambito.com//dolar/informal/historico-general/01-01-1900/01-01-2100',
  turista: 'https://mercados.ambito.com//dolar/dolarturista/historico-general/01-01-1900/01-01-2100',
  oficial: 'https://mercados.ambito.com//dolar/oficial/historico-general/01-01-1900/01-01-2100',
  mayorista: 'https://mercados.ambito.com//dolar/mayorista/historico-general/01-01-1900/01-01-2100',
}


async function getUSD() {

  const resA = await fetch('https://api.bluelytics.com.ar/v2/evolution.json');
   var emaeB = await resA.json();
  var dateUSD = []
  var valUSD = []
  var valBlue = []
  var valGap = []
  for (let i = 0; i < emaeB.length; i++) {
    dateUSD.push(emaeB[i].date)
    if (emaeB[i].source === 'Oficial') {
      valUSD.push(emaeB[i].value_buy)
    }
    if (emaeB[i].source === 'Blue') {
      valBlue.push(emaeB[i].value_buy)
    }
  }

  for (let i = 0; i < valUSD.length; i++) {
    var tempBrecha = (valBlue[i] - valUSD[i]) / valUSD[i] * 100.0;
    valGap.push(tempBrecha)
  }

  dateUSD = [...new Set(dateUSD)]

  writeFileSyncRecursive(`./json/monetaria/blue/dates.json`, JSON.stringify(dateUSD));
  writeFileSyncRecursive(`./json/monetaria/blue/blue.json`, JSON.stringify(valBlue));
  writeFileSyncRecursive(`./json/monetaria/blue/usd.json`, JSON.stringify(valUSD));
  writeFileSyncRecursive(`./json/monetaria/blue/gap.json`, JSON.stringify(valGap));
  console.log(`♥ [monetaria] Dolar/blue updated`)

}

async function getBRCASeries() {

  const resA = await fetch('http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm');
   var emaeB = await resA.arrayBuffer();
  var obj = xlsx.parse(emaeB);
  var dateUSD = []
  var valUSD = []
  var valRes = []

  // Sheet 2: RESERVAS
  for (let i = 0; i < obj[2].data.length; i++) {
    var date = new Date(Date.UTC(0, 0, obj[2].data[i][0]));
    if (date != 'Invalid Date') {
      dateUSD.push(date.toLocaleDateString("en-CA"))
      valUSD.push(obj[2].data[i][7])
      valRes.push(obj[2].data[i][3])
    }
  }

  var foundArr = []
  for (let e = 0; e < dateUSD.length; e++) {
    if (dateUSD[e] === '2003-01-01') {
      foundArr.push(e)
    }
  }


  writeFileSyncRecursive(`./json/reservas/total.json`, JSON.stringify(valRes.slice(0, foundArr[0])));

  writeFileSyncRecursive(`./json/reservas/diariadates.json`, JSON.stringify(dateUSD.slice(0, foundArr[0])));
  writeFileSyncRecursive(`./json/reservas/mensualdates.json`, JSON.stringify(dateUSD.slice(foundArr[0], foundArr[1])));
  writeFileSyncRecursive(`./json/reservas/anualdates.json`, JSON.stringify(dateUSD.slice(foundArr[1])));

  writeFileSyncRecursive(`./json/reservas/diaria.json`, JSON.stringify(valUSD.slice(0, foundArr[0])));
  writeFileSyncRecursive(`./json/reservas/mensual.json`, JSON.stringify(valUSD.slice(foundArr[0], foundArr[1])));
  writeFileSyncRecursive(`./json/reservas/anual.json`, JSON.stringify(valUSD.slice(foundArr[1])));

  console.log(`♥ [monetaria] Reservas updated`)

  // Sheet 5/6: TASAS

  var dateTasa = []
  var valTasa = []
  var valPlazo = []
  var valBadlar = []
  var valPases = []

  for (let i = 0; i < obj[5].data.length; i++) {
    var date = new Date(Date.UTC(0, 0, obj[5].data[i][0]));
    if (date != 'Invalid Date') {
      dateTasa.push(date.toLocaleDateString("en-CA"))
      valPlazo.push(obj[5].data[i][1].toFixed(2))
      valBadlar.push(obj[5].data[i][8].toFixed(2))
      //valPases.push(obj[5].data[i][20].toString().replace(/s\/i/g, '0'))

    }
  }

  for (let i = 0; i < obj[6].data.length; i++) {
    var date = new Date(Date.UTC(0, 0, obj[6].data[i][0]));
    if (date != 'Invalid Date') {
      var tempCall = obj[6].data[i][9]
      if (!tempCall) { tempCall = '0' }
      valTasa.push(obj[6].data[i][9])
      var tempPases = obj[6].data[i][11]
      if (!tempPases) { tempPases = '0' }
      valPases.push(obj[6].data[i][11])


    }
  }

  writeFileSyncRecursive(`./json/monetaria/tasas/tasadates.json`, JSON.stringify(dateTasa));
  writeFileSyncRecursive(`./json/monetaria/tasas/tasaplazo.json`, JSON.stringify(valPlazo));
  writeFileSyncRecursive(`./json/monetaria/tasas/tasabadlar.json`, JSON.stringify(valBadlar));
  writeFileSyncRecursive(`./json/monetaria/tasas/tasatasa.json`, JSON.stringify(valTasa));
  writeFileSyncRecursive(`./json/monetaria/tasas/tasapases.json`, JSON.stringify(valPases));

  console.log(`♥ [monetaria] Tasas updated`)

}


async function getBRCAScraper() {

  const series = ['7932', '7931', '7933']

  for (let i = 0; i < series.length; i++) {

    const resA = await fetch('http://www.bcra.gov.ar/PublicacionesEstadisticas/Principales_variables_datos.asp?fecha_desde=1900-01-01&fecha_hasta=2040-04-30&primeravez=1&serie=' + series[i]);
     var emaeB = await resA.text();
    var json = parse5.parse(emaeB)
    json = json.childNodes[1].childNodes[2].childNodes[1].childNodes[7].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes


    var dateInfla = []
    var inflaVal = []

    for (let i = 0; i < json.length; i++) {

      if (json[i].nodeName === 'tbody') {
        var date = json[i].childNodes[1].childNodes[1].childNodes[0].value.replace(/\//g, '-');
        var inflaDateTemp = date.split('-')
        var newdate = inflaDateTemp[2] + '-' + inflaDateTemp[1] + '-' + inflaDateTemp[0]
        dateInfla.push(newdate)
        inflaVal.push(json[i].childNodes[1].childNodes[3].childNodes[0].value.trim().split('.').join("").replace(/,/g, '.'))
      }
    }



    if (series[i] === '7932') {
      writeFileSyncRecursive(`./json/ipc/historico/dates.json`, JSON.stringify(dateInfla));
      writeFileSyncRecursive(`./json/ipc/historico/danual.json`, JSON.stringify(inflaVal));
    }
    if (series[i] === '7931') {
      writeFileSyncRecursive(`./json/ipc/historico/dates.json`, JSON.stringify(dateInfla));
      writeFileSyncRecursive(`./json/ipc/historico/dmensual.json`, JSON.stringify(inflaVal));
    }
    if (series[i] === '7933') {
      writeFileSyncRecursive(`./json/rem/interanualrem/dates.json`, JSON.stringify(dateInfla));
      writeFileSyncRecursive(`./json/rem/interanualrem/d.json`, JSON.stringify(inflaVal));
    }

  }
}

async function masterDb(kpis) {
     for (let e = 0; e < kpis.length; e++) {
      for (let [key, value] of Object.entries(global[`${kpis[e]}`])) {

        var tempDates = [];
        var tempDataBase = [];
        const resB = await fetch(`https://apis.datos.gob.ar/series/api/series/?limit=5000&format=json&ids=${value}`);
        var emaeB = await resB.json();
        for (let i = 0; i < emaeB.data.length; i++) {
   if (emaeB.data[i][1] == null){
    emaeB.data[i][1] = 0
}
tempDataBase.push(emaeB.data[i][1].toFixed(2));

          tempDates.push(emaeB.data[i][0]);
        }
        writeFileSyncRecursive(`./json/${kpis[e]}/${key}/dates.json`, JSON.stringify(tempDates));
        writeFileSyncRecursive(`./json/${kpis[e]}/${key}/d.json`, JSON.stringify(tempDataBase));
        console.log(`♥ [${kpis[e]}] ${key} updated`)
        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](600)
      }
    }
 
}






async function parseXLS(kpi) {

  const resA = await fetch(xls[kpi].url);
  var emaeB = await resA.arrayBuffer();
  var obj = xlsx.parse(emaeB);
  var data = obj[xls[kpi].sheet].data

  var datesArray = []

  for (let i = 0; i < data.length; i++) {
    var date = new Date(Date.UTC(0, 0, data[i][xls[kpi].date]));
    if (date != 'Invalid Date') {
      datesArray.push(date.toLocaleDateString("en-CA"))
    }
  }

  for (let [key, value] of Object.entries(xls[kpi].columns)) {
    var tempArray = []
    for (let i = 0; i < data.length; i++) {
      if (new Date(Date.UTC(0, 0, data[i][xls[kpi].date])) != 'Invalid Date') { tempArray.push(Number(data[i][value]).toFixed(3))}
    }
    writeFileSyncRecursive(`./json/${kpi}/${key}.json`, JSON.stringify(tempArray));
    console.log(`♥ [${kpi}] ${key} updated`)

  }

  writeFileSyncRecursive(`./json/${kpi}/dates.json`, JSON.stringify(datesArray));

  console.log(`♥ [${kpi}] dates updated`)

}

 

async function parseCSV(kpi) {

  const resA = await fetch(csv[kpi].url);
  var emaeB = await resA.text()
  var data = Papa.parse(emaeB).data
 
  var datesArray = []

  for (let i = 0; i < data.length; i++) {
    var date = new Date(data[i][csv[kpi].date]).toUTCString();
 
 if (date != 'Invalid Date') {
      datesArray.push(new Date (date).toLocaleDateString("en-CA", {timeZone: "UTC"}))
    }
  }

  for (let [key, value] of Object.entries(csv[kpi].columns)) {
    var tempArray = []
    for (let i = 0; i < data.length; i++) {
      if (new Date(data[i][csv[kpi].date]).toUTCString() !== 'Invalid Date') { tempArray.push(Number(data[i][value]).toFixed(3))}

    }
    writeFileSyncRecursive(`./json/${kpi}/${key}.json`, JSON.stringify(tempArray));
    console.log(`♥ [${kpi}] ${key} updated`)

  }

  writeFileSyncRecursive(`./json/${kpi}/dates.json`, JSON.stringify(datesArray));

  console.log(`♥ [${kpi}] dates updated`)

}

async function parseJson(kpi) {
 
  for (let [key, value] of Object.entries(json[kpi])) {
    const resA = await fetch(value);
    var emaeB = JSON.parse(await resA.text())
    var datesArray = []
    var tempArray = []

    for (let i = 0; i < emaeB[1].length; i++) {

      if (emaeB[1][i].value !== null) {
        datesArray.push(new Date (emaeB[1][i].date).toLocaleDateString("en-CA", {timeZone: "UTC"}))
        tempArray.push(emaeB[1][i].value)
      }
  
  }
  writeFileSyncRecursive(`./json/${kpi}/dates.json`, JSON.stringify(datesArray));
  writeFileSyncRecursive(`./json/${kpi}/${key}.json`, JSON.stringify(tempArray)); 
  console.log(`♥ [${kpi}] ${key} updated`)

  }


}

async function parseAmbito() {
 
  for (let [key, value] of Object.entries(ambito)) {
    const resA = await fetch(value);
    var emaeB = JSON.parse(await resA.text())
    var datesArray = []
    var tempArray = []
   for (let i = 1; i < emaeB.length; i++) {
 
    datesArray.push(emaeB[i][0].split('-').reverse().join('-'))
   // datesArray.push(new Date (emaeB[1][i].date).toLocaleDateString("en-CA", {timeZone: "UTC"}))

    tempArray.push(Number(emaeB[i][1].replace(',','.')))
      
  }
  writeFileSyncRecursive(`./json/ambito/${key}/dates.json`, JSON.stringify(datesArray));
    writeFileSyncRecursive(`./json/ambito/${key}/d.json`, JSON.stringify(tempArray));
    console.log(`♥ [ambito] ${key} updated`)

   } 

}
 
async function megaContent(src) {
  
  
   //Get post names
  var folders = glob.sync('*', { cwd: `static/${src}/` })
  var posts = [];
  var categories = []
  //Main post loop
     for (const singleFolder of folders) {

    const documentes = glob.sync('*.md', {cwd: `static/${src}/${singleFolder}`})
    let post = [];

    //Parse Markdown
    var contents = matter(fs.readFileSync(`static/${src}/${singleFolder}/${documentes}`, 'utf8').toString());
    post = contents.data
 
    post.chartdata = await require(`../json/data/${singleFolder}.js`)
 
    posts.push(post);
    categories.push(post.cat)
    writeFileSyncRecursive(`./json/confluence/${singleFolder}.json`, JSON.stringify(post));

  };
  categories = [...new Set(categories)]
  categoriesObject = {}
  for (const singleCat of categories) {
    if(singleCat !== undefined) {
      categoriesObject[singleCat] = []
    }
  }
  categoriesObject['Todos'] = []

  for (const singleFolder of folders) {

    const documentes = glob.sync('*.md', {cwd: `static/${src}/${singleFolder}`})
    let post = [];

    //Parse Markdown
    var contents = matter(fs.readFileSync(`static/${src}/${singleFolder}/${documentes}`, 'utf8').toString());
    post = contents.data
    if(post.cat !== undefined) {
      categoriesObject['Todos'].push({t:post.t,kpi:post.kpi})
      categoriesObject[post.cat].push({t:post.t,kpi:post.kpi})
    }
  };

  for (const singleCaet of Object.keys(categoriesObject)) {
        categoriesObject[singleCaet].sort(function(a, b) {
        var x = a['t']; var y = b['t'];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
   }

   const ordered = Object.keys(categoriesObject).sort().reduce(
    (obj, key) => { 
      obj[key] = categoriesObject[key]; 
      return obj;
    }, 
    {}
  );
  delete ordered['Otros']
  ordered['Otros'] = categoriesObject['Otros']

   writeFileSyncRecursive(`./json/kpis.json`, JSON.stringify(ordered));
  console.log(`♥ Content regenerated`)
 
};

async function processDB() {
/*  
    await masterDb([
    'cuentas',
    'gastos',
    'tributarios',
    'emae',
    'ipi',
    'isac',
    'expo',
    'impo',
    'ipc',
    'empleo',
    'ucii', 
    'rofex',
    'polingresos',
    'tasas',
    'bcra'
  ]); 
  
  await parseXLS("embi");
  await parseXLS("ice");
  await parseXLS("tcrm");
  await getBRCASeries()

  await getUSD() 
  await getBRCAScraper() 
  await parseCSV("ipicammesa");

  await parseJson("gini")
  await parseJson("poblacion");
  await parseJson("pbi");  

  await parseAmbito()    */

  await megaContent("kpi")
}

processDB()