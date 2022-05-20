const fs = require('fs');
const fetch = require('node-fetch');
var xlsx = require('node-xlsx');
const parse5 = require('parse5');
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;


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

global.cuentas = {
  ingresos: 'https://apis.datos.gob.ar/series/api/series/?ids=379.9_ING_CORR_2017__13_2&limit=5000&format=json',
  gastos: 'https://apis.datos.gob.ar/series/api/series/?ids=379.9_GTOS_CORR_017__14_1&limit=5000&format=json',
  ahorro: 'https://apis.datos.gob.ar/series/api/series/?ids=379.9_RESULTADO_017__41_83&limit=5000&format=json',
  subenergia: 'https://apis.datos.gob.ar/series/api/series/?ids=452.2_ENERGIAGIA_0_T_7_56&limit=5000&format=json',
  subtransporte: 'https://apis.datos.gob.ar/series/api/series/?ids=452.2_TRANSPORTERTE_0_T_10_32&limit=5000&format=json',
  pozos: 'https://apis.datos.gob.ar/series/api/series/?ids=366.3_POZOS_TERMRAL__30&limit=5000&format=json',
  pozosmetros: 'https://apis.datos.gob.ar/series/api/series/?ids=366.3_METROS_PERRAL__31&limit=5000&format=json',
  gas: 'https://apis.datos.gob.ar/series/api/series/?ids=364.3_PRODUCCIoNRAL__25&limit=5000&format=json',
  hierro: 'https://apis.datos.gob.ar/series/api/series/?ids=359.3_HIERRO_PRITAL__21&limit=5000&format=json',
  autos: 'https://apis.datos.gob.ar/series/api/series/?ids=330.1_PRODUCCIONLES__22&limit=5000&format=json',
  soja: 'https://apis.datos.gob.ar/series/api/series/?ids=34.2_STSOJ_0_P_16&limit=5000&format=json',
  trigo: 'https://apis.datos.gob.ar/series/api/series/?ids=34.2_TTTRI_0_P_17&limit=5000&format=json',
  girasol: 'https://apis.datos.gob.ar/series/api/series/?ids=34.2_GTGIR_0_P_19&limit=5000&format=json',
  maiz: 'https://apis.datos.gob.ar/series/api/series/?ids=34.2_MTMAI_0_P_16&limit=5000&format=json',
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

  fs.writeFileSync(`./json/monetaria/blue/dates.json`, JSON.stringify(dateUSD));
  fs.writeFileSync(`./json/monetaria/blue/blue.json`, JSON.stringify(valBlue));
  fs.writeFileSync(`./json/monetaria/blue/usd.json`, JSON.stringify(valUSD));
  fs.writeFileSync(`./json/monetaria/blue/gap.json`, JSON.stringify(valGap));
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


  fs.writeFileSync(`./json/reservas/total.json`, JSON.stringify(valRes.slice(0, foundArr[0])));

  fs.writeFileSync(`./json/reservas/diariadates.json`, JSON.stringify(dateUSD.slice(0, foundArr[0])));
  fs.writeFileSync(`./json/reservas/mensualdates.json`, JSON.stringify(dateUSD.slice(foundArr[0], foundArr[1])));
  fs.writeFileSync(`./json/reservas/anualdates.json`, JSON.stringify(dateUSD.slice(foundArr[1])));

  fs.writeFileSync(`./json/reservas/diaria.json`, JSON.stringify(valUSD.slice(0, foundArr[0])));
  fs.writeFileSync(`./json/reservas/mensual.json`, JSON.stringify(valUSD.slice(foundArr[0], foundArr[1])));
  fs.writeFileSync(`./json/reservas/anual.json`, JSON.stringify(valUSD.slice(foundArr[1])));

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

async function getMECON() {

  const resA = await fetch('http://www.economia.gob.ar/download/infoeco/apendice6.xlsx');
   var emaeB = await resA.arrayBuffer();
  var obj = xlsx.parse(emaeB);

 
}



async function masterDb(kpis) {
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
        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000)
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
    fs.writeFileSync(`./json/${kpi}/${key}.json`, JSON.stringify(tempArray));
    console.log(`♥ [${kpi}] ${key} updated`)

  }

  fs.writeFileSync(`./json/${kpi}/dates.json`, JSON.stringify(datesArray));

  console.log(`♥ [${kpi}] dates updated`)

}

masterDb([
  'cuentas'
/*   'emae',
   'ipi',
  'isac',
  'expo',
  'impo',
  'ipc',
  'empleo',
  'ucii',
  'rofex', */
 ]); 

/* 
parseXLS("embi");
parseXLS("ice");
parseXLS("tcrm");
getBRCASeries()

getUSD() 
getBRCAScraper()
getMECON() */