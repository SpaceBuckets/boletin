const fs = require('fs');
const fetch = require('node-fetch');
 
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

global.monetaria = {
  tcrm: 'https://apis.datos.gob.ar/series/api/series/?ids=116.4_TCRZE_2015_D_36_4&limit=5000&start_date=2009-01-01&format=json',
  tasa: 'https://apis.datos.gob.ar/series/api/series/?ids=89.2_TS_INTE_PM_0_D_16&limit=5000&format=json',  
  badlar: 'https://apis.datos.gob.ar/series/api/series/?ids=89.2_TS_INTELAR_0_D_20&limit=5000&start_date=2016-01-02&format=json',
  plazo: 'https://apis.datos.gob.ar/series/api/series/?ids=89.1_TIPF35D_0_0_35&limit=5000&start_date=2016-01-01&format=json',
  call: 'https://apis.datos.gob.ar/series/api/series/?ids=89.2_TS_INTEALL_0_D_18&limit=5000&start_date=2016-01-02&format=json',
  cambio: 'https://apis.datos.gob.ar/series/api/series/?ids=92.2_TIPO_CAMBIION_0_0_21_24&limit=5000&start_date=2018-01-01&format=json',
  adr: 'https://apis.datos.gob.ar/series/api/series/?ids=168.1_T_CAMBIDRS_D_0_0_29&limit=5000&start_date=2018-01-01&format=json',
  reservas: 'https://apis.datos.gob.ar/series/api/series/?ids=92.1_RID_0_0_32&limit=5000&format=json'
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
  privadob:'https://apis.datos.gob.ar/series/api/series/?ids=151.1_AARIADODAD_2012_M_31&limit=5000&format=json',
  privadod:'https://apis.datos.gob.ar/series/api/series/?ids=151.1_AARIADOTAC_2012_M_26&limit=5000&format=json',
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

global.rem = {
  interanualrem: 'https://apis.datos.gob.ar/series/api/series/?ids=430.1_MEDIANA_IP_12_M_0_0_27_96&limit=5000&start_date=2017-12-01&format=json',
  interanualipc: 'https://apis.datos.gob.ar/series/api/series/?collapse=month&collapse_aggregation=avg&ids=148.3_INIVELNAL_DICI_M_26&limit=5000&representation_mode=percent_change_a_year_ago&format=json'
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
          var valor = emaeB.data[i][1]*100
          tempDataBase.push(valor.toFixed(2));
        } else {
          tempDataBase.push(emaeB.data[i][1]);
        }
        tempDates.push(emaeB.data[i][0]);
      }
/*       try {
        const data = fs.readFileSync(`./json/${kpis[e]}/${key}/dates.json`, "utf8");
        if(data === JSON.stringify(tempDates)) {
          console.log(`♦ [${kpis[e]}] ${key} skipped`)

        } else {
          fs.writeFileSync(`./json/${kpis[e]}/${key}/dates.json`, JSON.stringify(tempDates));
          fs.writeFileSync(`./json/${kpis[e]}/${key}/d.json`, JSON.stringify(tempDataBase));
          console.log(`♥ [${kpis[e]}] ${key} updated`)

        }
 
      } catch (err) {
        console.error(err);
      } */
      fs.writeFileSync(`./json/${kpis[e]}/${key}/dates.json`, JSON.stringify(tempDates));
      fs.writeFileSync(`./json/${kpis[e]}/${key}/d.json`, JSON.stringify(tempDataBase));
      console.log(`♥ [${kpis[e]}] ${key} updated`)
      await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](100)
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
  'rem',
  'monetaria',
]);