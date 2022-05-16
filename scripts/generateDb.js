const fs = require('fs');
const fetch = require('node-fetch');
var xlsx = require('node-xlsx');
const parse5 = require('parse5');

global.emae = {
  estacional: 'https://apis.datos.gob.ar/series/api/series/?ids=143.3_NO_PR_2004_A_31&limit=5000&format=json',
  tendencia: 'https://apis.datos.gob.ar/series/api/series/?ids=143.3_NO_PR_2004_A_28&limit=5000&format=json',
  base: 'https://apis.datos.gob.ar/series/api/series/?ids=143.3_NO_PR_2004_A_21&limit=5000&format=json',
  /*   a: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_ISOM_2004_M_39&limit=5000&format=json',
    b: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_VIPAA_2004_M_5&limit=5000&format=json',
    c: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_ISD_2004_M_26&limit=5000&format=json',
    d: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_VMASD_2004_M_23&limit=5000&format=json',
    e: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_ITC_2004_M_21&limit=5000&format=json',
    f: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_VMATC_2004_M_12&limit=5000&format=json',
    g: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_AGCS_2004_M_41&limit=5000&format=json',
    h: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_P_2004_M_20&limit=5000&format=json',
    i: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_EMC_2004_M_25&limit=5000&format=json',
    j: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_IM_2004_M_25&limit=5000&format=json',
    k: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_SEGA_2004_M_48&limit=5000&format=json',
    l: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_C_2004_M_60&limit=5000&format=json',
    m: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_CMMR_2004_M_10&limit=5000&format=json',
    n: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_HR_2004_M_24&limit=5000&format=json',
    o: 'https://apis.datos.gob.ar/series/api/series/?ids=11.3_TAC_2004_M_60&limit=5000&format=json',   */
}

global.ipi = {
  estacional: 'https://apis.datos.gob.ar/series/api/series/?ids=453.1_SERIE_DESEADA_0_0_24_58&limit=5000&format=json',
  tendencia: 'https://apis.datos.gob.ar/series/api/series/?ids=453.1_SERIE_TENDCLO_0_0_21_61&limit=5000&format=json',
  base: 'https://apis.datos.gob.ar/series/api/series/?ids=453.1_SERIE_ORIGNAL_0_0_14_46&limit=5000&format=json'
}

global.isac = {
  estacional: 'https://apis.datos.gob.ar/series/api/series/?ids=33.2_ISAC_SIN_EDAD_0_M_23_56&limit=5000&format=json',
  tendencia: 'https://apis.datos.gob.ar/series/api/series/?ids=33.2_ISAC_CICLOCIA_0_M_20_62&limit=5000&format=json',
  base: 'https://apis.datos.gob.ar/series/api/series/?ids=33.2_ISAC_NIVELRAL_0_M_18_63&limit=5000&format=json'
}

global.expo = {
  saldo: 'https://apis.datos.gob.ar/series/api/series/?collapse=month&collapse_aggregation=avg&ids=74.3_ISC_0_M_19&limit=5000&format=json',
  dolar: 'https://apis.datos.gob.ar/series/api/series/?ids=74.3_IET_0_M_16&limit=5000&format=json',
  cantidad: 'https://apis.datos.gob.ar/series/api/series/?ids=80.2_IICENG_0_T_47&limit=5000&format=json',
  precio: 'https://apis.datos.gob.ar/series/api/series/?ids=80.2_IIPENG_0_T_45&limit=5000&format=json',
}

global.impo = {
  dolar: 'https://apis.datos.gob.ar/series/api/series/?ids=74.3_IIT_0_M_25&limit=5000&format=json',
  cantidad: 'https://apis.datos.gob.ar/series/api/series/?ids=81.2_IICING_0_T_47&limit=5000&format=json',
  precio: 'https://apis.datos.gob.ar/series/api/series/?ids=81.2_IIPING_0_T_45&limit=5000&format=json',
}

global.ipc = {
  general: 'https://apis.datos.gob.ar/series/api/series/?ids=145.3_INGNACUAL_DICI_M_38&limit=5000&format=json',
  cuyo: 'https://apis.datos.gob.ar/series/api/series/?ids=145.3_INGCUYUAL_DICI_M_34&limit=5000&format=json',
  patagonia: 'https://apis.datos.gob.ar/series/api/series/?ids=145.3_INGPATUAL_DICI_M_39&limit=5000&format=json',
  gba: 'https://apis.datos.gob.ar/series/api/series/?ids=145.3_INGGBAGBA_DICI_M_10&limit=5000&representation_mode=percent_change&format=json',
  //caba: 'https://apis.datos.gob.ar/series/api/series/?ids=45.2_ECTDTC_0_T_38&limit=5000&format=json',
  pampeana: 'https://apis.datos.gob.ar/series/api/series/?ids=148.3_INIVELANA_DICI_M_26&limit=5000&representation_mode=percent_change&format=json',
  noroeste: 'https://apis.datos.gob.ar/series/api/series/?ids=148.3_INIVELNOA_DICI_M_21&limit=5000&representation_mode=percent_change&format=json',
  nordeste: 'https://apis.datos.gob.ar/series/api/series/?ids=148.3_INIVELNEA_DICI_M_21&limit=5000&representation_mode=percent_change&format=json'
}

global.empleo = {
  privadob: 'https://apis.datos.gob.ar/series/api/series/?ids=151.1_AARIADODAD_2012_M_31&limit=5000&format=json',
  privadod: 'https://apis.datos.gob.ar/series/api/series/?ids=151.1_AARIADOTAC_2012_M_26&limit=5000&format=json',
  general: 'https://apis.datos.gob.ar/series/api/series/?ids=45.2_ECTDT_0_T_33&limit=5000&format=json',
  cuyo: 'https://apis.datos.gob.ar/series/api/series/?ids=45.2_ECTDTCU_0_T_38&limit=5000&format=json',
  patagonia: 'https://apis.datos.gob.ar/series/api/series/?ids=45.2_ECTDTP_0_T_43&limit=5000&format=json',
  gba: 'https://apis.datos.gob.ar/series/api/series/?ids=45.2_ECTDTG_0_T_37&limit=5000&format=json',
  caba: 'https://apis.datos.gob.ar/series/api/series/?ids=45.2_ECTDTC_0_T_38&limit=5000&format=json',
  pampeana: 'https://apis.datos.gob.ar/series/api/series/?ids=45.2_ECTDTRP_0_T_49&limit=5000&format=json',
  noroeste: 'https://apis.datos.gob.ar/series/api/series/?ids=45.2_ECTDTNO_0_T_42&limit=5000&format=json',
  nordeste: 'https://apis.datos.gob.ar/series/api/series/?ids=45.2_ECTDTNE_0_T_42&limit=5000&format=json'
}

global.ucii = {
  general: 'https://apis.datos.gob.ar/series/api/series/?ids=31.3_UNG_2004_M_18&limit=5000&format=json',
  metales: "https://apis.datos.gob.ar/series/api/series/?ids=31.3_UIMB_2004_M_33&limit=5000&format=json",
  edicion: "https://apis.datos.gob.ar/series/api/series/?ids=31.3_UEI_2004_M_22&limit=5000&format=json",
  textiles: "https://apis.datos.gob.ar/series/api/series/?ids=31.3_UPT_2004_M_23&limit=5000&format=json",
  metalmecanica: "https://apis.datos.gob.ar/series/api/series/?ids=31.3_UMNIA_2004_M_42&limit=5000&format=json",
  plastico: "https://apis.datos.gob.ar/series/api/series/?ids=31.3_UCP_2004_M_20&limit=5000&format=json",
  automotriz: "https://apis.datos.gob.ar/series/api/series/?ids=31.3_UV_2004_M_25&limit=5000&format=json",
  tabaco: "https://apis.datos.gob.ar/series/api/series/?ids=31.3_UPT_2004_M_21&limit=5000&format=json",
  alimentos: "https://apis.datos.gob.ar/series/api/series/?ids=31.3_UPAB_2004_M_35&limit=5000&format=json",
  quimicos: "https://apis.datos.gob.ar/series/api/series/?ids=31.3_USPQ_2004_M_34&limit=5000&format=json",
  petroleo: "https://apis.datos.gob.ar/series/api/series/?ids=31.3_URP_2004_M_24&limit=5000&format=json",
  papel: "https://apis.datos.gob.ar/series/api/series/?ids=31.3_UPC_2004_M_17&limit=5000&format=json",
  minerales: "https://apis.datos.gob.ar/series/api/series/?ids=31.3_UMNM_2004_M_27&limit=5000&format=json"
}

global.rofex = {
  dolar: 'https://apis.datos.gob.ar/series/api/series/?ids=92.2_TIPO_CAMBIION_0_0_21_24&limit=5000&start_date=2009-01-03&format=json',
  mae: 'https://apis.datos.gob.ar/series/api/series/?ids=168.1_VMEN_MAMAE_D_0_0_11&limit=5000&format=json',
  t6: 'https://apis.datos.gob.ar/series/api/series/?ids=168.1_FRO_ROF6M_D_0_0_19&limit=5000&format=json',
  t5: 'https://apis.datos.gob.ar/series/api/series/?ids=168.1_FRO_ROF5M_D_0_0_19&limit=5000&format=json',
  t4: 'https://apis.datos.gob.ar/series/api/series/?ids=168.1_FRO_ROF4M_D_0_0_19&limit=5000&format=json',
  t3: 'https://apis.datos.gob.ar/series/api/series/?ids=168.1_FRO_ROF3M_D_0_0_19&limit=5000&format=json',
  t2: 'https://apis.datos.gob.ar/series/api/series/?ids=168.1_FRO_ROF2M_D_0_0_19&limit=5000&format=json',
  t1: 'https://apis.datos.gob.ar/series/api/series/?ids=168.1_FRO_ROF1M_D_0_0_19&limit=5000&format=json'
}

/* global.rem = {
  interanualrem: 'https://apis.datos.gob.ar/series/api/series/?ids=430.1_MEDIANA_IP_12_M_0_0_27_96&limit=5000&start_date=2017-12-01&format=json',
  interanualipc: 'https://apis.datos.gob.ar/series/api/series/?collapse=month&collapse_aggregation=avg&ids=148.3_INIVELNAL_DICI_M_26&limit=5000&representation_mode=percent_change_a_year_ago&format=json'
}

global.monetaria = {
  //tcrm: 'https://apis.datos.gob.ar/series/api/series/?ids=116.4_TCRZE_2015_D_36_4&limit=5000&start_date=2009-01-01&format=json',
  //tasa: 'https://apis.datos.gob.ar/series/api/series/?ids=89.2_TS_INTE_PM_0_D_16&limit=5000&format=json',
  //badlar: 'https://apis.datos.gob.ar/series/api/series/?ids=89.2_TS_INTELAR_0_D_20&limit=5000&start_date=2016-01-02&format=json',
  //plazo: 'https://apis.datos.gob.ar/series/api/series/?ids=89.1_TIPF35D_0_0_35&limit=5000&start_date=2016-01-01&format=json',
  //call: 'https://apis.datos.gob.ar/series/api/series/?ids=89.2_TS_INTEALL_0_D_18&limit=5000&start_date=2016-01-02&format=json',
  //cambio: 'https://apis.datos.gob.ar/series/api/series/?ids=92.2_TIPO_CAMBIION_0_0_21_24&limit=5000&start_date=2018-01-01&format=json',
  //adr: 'https://apis.datos.gob.ar/series/api/series/?ids=168.1_T_CAMBIDRS_D_0_0_29&limit=5000&start_date=2018-01-01&format=json',
  //reservas: 'https://apis.datos.gob.ar/series/api/series/?ids=92.1_RID_0_0_32&limit=5000&format=json'
}
 */




async function getTCRM() {

  const resA = await fetch('http://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls');
  console.log("⧖ Downloading ITCRMSerie.xls...")
  var emaeB = await resA.arrayBuffer();
  var obj = xlsx.parse(emaeB);

  var dateITRCM = []
  var valITCRM = []
  var valITCRB = []
  var valITCRUS = []

  for (let i = 0; i < obj[0].data.length; i++) {
    var date = new Date(Date.UTC(0, 0, obj[0].data[i][0]));

    if (date != 'Invalid Date') {
      dateITRCM.push(date.toLocaleDateString("en-CA"))
      valITCRM.push(obj[0].data[i][1])
      valITCRB.push(obj[0].data[i][2])
      valITCRUS.push(obj[0].data[i][5])

    }
  }

  fs.writeFileSync(`./json/monetaria/tcrm/dates.json`, JSON.stringify(dateITRCM));
  fs.writeFileSync(`./json/monetaria/tcrm/itcrm.json`, JSON.stringify(valITCRM));
  fs.writeFileSync(`./json/monetaria/tcrm/itcrb.json`, JSON.stringify(valITCRB));
  fs.writeFileSync(`./json/monetaria/tcrm/itcrus.json`, JSON.stringify(valITCRUS));
  console.log(`♥ [monetaria] TRCM updated`)

}

async function getUSD() {

  const resA = await fetch('https://api.bluelytics.com.ar/v2/evolution.json');
  console.log("⧖ Downloading evolution.json...")
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
 
  fs.writeFileSync(`./json/monetaria/blue/dates.json`, JSON.stringify(dateUSD));
  fs.writeFileSync(`./json/monetaria/blue/blue.json`, JSON.stringify(valBlue));
  fs.writeFileSync(`./json/monetaria/blue/usd.json`, JSON.stringify(valUSD));
  fs.writeFileSync(`./json/monetaria/blue/gap.json`, JSON.stringify(valGap));
  console.log(`♥ [monetaria] Dolar/blue updated`)

}

async function getBRCASeries() {

  const resA = await fetch('http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm');
  console.log("⧖ Downloading series.xlsm...")
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
      valUSD.push(obj[2].data[i][7].toFixed(2))
      valRes.push(obj[2].data[i][3])
    }
  }

  var foundArr = []
  for (let e = 0; e < dateUSD.length; e++) {
    if (dateUSD[e] === '2003-01-01') {
      foundArr.push(e)
    }
  }


  fs.writeFileSync(`./json/monetaria/reservas/d.json`, JSON.stringify(valRes.slice(0, foundArr[0])));

  fs.writeFileSync(`./json/monetaria/compras/diariadates.json`, JSON.stringify(dateUSD.slice(0, foundArr[0])));
  fs.writeFileSync(`./json/monetaria/compras/mensualdates.json`, JSON.stringify(dateUSD.slice(foundArr[0], foundArr[1])));
  fs.writeFileSync(`./json/monetaria/compras/anualdates.json`, JSON.stringify(dateUSD.slice(foundArr[1])));
  fs.writeFileSync(`./json/monetaria/compras/diaria.json`, JSON.stringify(valUSD.slice(0, foundArr[0])));
  fs.writeFileSync(`./json/monetaria/compras/mensual.json`, JSON.stringify(valUSD.slice(foundArr[0], foundArr[1])));
  fs.writeFileSync(`./json/monetaria/compras/anual.json`, JSON.stringify(valUSD.slice(foundArr[1])));

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
      if (!tempCall) { tempCall = '0'}
      valTasa.push(obj[6].data[i][9])
      var tempPases = obj[6].data[i][11]
      if (!tempPases) { tempPases = '0'}
      valPases.push(obj[6].data[i][11])

  
    }
  }
 
  fs.writeFileSync(`./json/monetaria/tasas/tasadates.json`, JSON.stringify(dateTasa));
  fs.writeFileSync(`./json/monetaria/tasas/tasaplazo.json`, JSON.stringify(valPlazo));
  fs.writeFileSync(`./json/monetaria/tasas/tasabadlar.json`, JSON.stringify(valBadlar));
  fs.writeFileSync(`./json/monetaria/tasas/tasatasa.json`, JSON.stringify(valTasa));
  fs.writeFileSync(`./json/monetaria/tasas/tasapases.json`, JSON.stringify(valPases));
 
  console.log(`♥ [monetaria] Tasas updated`)

}


async function getBRCAScraper() {

  const series = ['7932', '7931', '7933']

  for (let i = 0; i < series.length; i++) {

    const resA = await fetch('http://www.bcra.gov.ar/PublicacionesEstadisticas/Principales_variables_datos.asp?fecha_desde=1900-01-01&fecha_hasta=2040-04-30&primeravez=1&serie=' + series[i]);
    console.log(`⧖ Scraping ${series[i]}...`)
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
      fs.writeFileSync(`./json/ipc/historico/dates.json`, JSON.stringify(dateInfla));
      fs.writeFileSync(`./json/ipc/historico/danual.json`, JSON.stringify(inflaVal));
    }
    if (series[i] === '7931') {
      fs.writeFileSync(`./json/ipc/historico/dates.json`, JSON.stringify(dateInfla));
      fs.writeFileSync(`./json/ipc/historico/dmensual.json`, JSON.stringify(inflaVal));
    }
    if (series[i] === '7933') {
      fs.writeFileSync(`./json/rem/interanualrem/dates.json`, JSON.stringify(dateInfla));
      fs.writeFileSync(`./json/rem/interanualrem/d.json`, JSON.stringify(inflaVal));
    }

  }
}

async function getICE() {

  const resA = await fetch('https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-indice-de-condiciones-externas.xlsx');
  console.log("⧖ Downloading contnac-indice-de-condiciones-externas.xlsx...")
  var emaeB = await resA.arrayBuffer();
  var obj = xlsx.parse(emaeB);
    var dateUSD = []
  var valICE = []
  var valICEC = []

   for (let i = 0; i < obj[0].data.length; i++) {
    var date = new Date(Date.UTC(0, 0, obj[0].data[i][0]));
     if (date != 'Invalid Date') {
      dateUSD.push(date.toLocaleDateString("en-CA"))
      valICE.push(obj[0].data[i][1].toFixed(2))
      valICEC.push(obj[0].data[i][2])
    }
  }

  fs.writeFileSync(`./json/expo/ice/dates.json`, JSON.stringify(dateUSD));
  fs.writeFileSync(`./json/expo/ice/coyuntural.json`, JSON.stringify(valICEC));
  fs.writeFileSync(`./json/expo/ice/estructural.json`, JSON.stringify(valICE));
   
  console.log(`♥ [expo] ICE updated`)

}

async function getEMBI() {

  const resA = await fetch('https://bcrdgdcprod.blob.core.windows.net/documents/entorno-internacional/documents/Serie_Historica_Spread_del_EMBI.xlsx');
  console.log("⧖ Downloading Serie_Historica_Spread_del_EMBI.xlsx...")
  var emaeB = await resA.arrayBuffer();
  var obj = xlsx.parse(emaeB);
    var dateEMBI = []
    var valArg = []
    var valBra = []
    var valChi = []
    var valCol = []
    var valMex = []
    var valLat = []
    for (let i = 0; i < obj[0].data.length; i++) {
    var date = new Date(Date.UTC(0, 0, obj[0].data[i][0]));
     if (date != 'Invalid Date') {

      dateEMBI.push(date.toLocaleDateString("en-CA"))
      valLat.push(obj[0].data[i][2])

      valArg.push(obj[0].data[i][4])
      valBra.push(obj[0].data[i][6])
      valChi.push(obj[0].data[i][7])
      valCol.push(obj[0].data[i][8])
      valMex.push(obj[0].data[i][14])
     }
  }
 
  fs.writeFileSync(`./json/expo/embi/dates.json`, JSON.stringify(dateEMBI));
   fs.writeFileSync(`./json/expo/embi/argentina.json`, JSON.stringify(valArg));
   fs.writeFileSync(`./json/expo/embi/brasil.json`, JSON.stringify(valBra));
   fs.writeFileSync(`./json/expo/embi/chile.json`, JSON.stringify(valChi));
   fs.writeFileSync(`./json/expo/embi/colombia.json`, JSON.stringify(valCol));
   fs.writeFileSync(`./json/expo/embi/mexico.json`, JSON.stringify(valMex));
   fs.writeFileSync(`./json/expo/embi/latino.json`, JSON.stringify(valLat));
   
  console.log(`♥ [expo] EMBI updated`)

}


async function masterDb(kpis) {
  if (kpis !== 'tcrm') {
    for (let e = 0; e < kpis.length; e++) {
      for (let [key, value] of Object.entries(global[`${kpis[e]}`])) {

        var tempDates = [];
        var tempDataBase = [];
        const resB = await fetch(value);
        var emaeB = await resB.json();
        for (let i = 0; i < emaeB.data.length; i++) {
          if (kpis[e] === "ipc" || kpis[e] === 'empleo' || kpis[e] === 'rem') {
            var valor = emaeB.data[i][1] * 100
            tempDataBase.push(valor.toFixed(2));
          } else {
            tempDataBase.push(emaeB.data[i][1]);
          }
          tempDates.push(emaeB.data[i][0]);
        }
        fs.writeFileSync(`./json/${kpis[e]}/${key}/dates.json`, JSON.stringify(tempDates));
        fs.writeFileSync(`./json/${kpis[e]}/${key}/d.json`, JSON.stringify(tempDataBase));
        console.log(`♥ [${kpis[e]}] ${key} updated`)
        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](100)
      }
    }
  }

}


masterDb([
  'emae',
   'ipi',
  'isac',
  'expo',
  'impo',
  'ipc',
  'empleo',
  'ucii',
  'rofex',
 ]); 

getTCRM()
getUSD() 
getBRCASeries()
getICE() 
getEMBI() 


getBRCAScraper()
