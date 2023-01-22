<template>
  <div class="meganav">
                     <div class="meganavsection nochild" style="padding:0">
         <input class="searcher" type="text" placeholder="Buscar Indicadores...">  
      </div>    
    <div
      class="meganavsection"
      v-for="(parent, i) in nav"
      :class="{ open: sectionOpen.includes(i) }"
      :key=""
    >
      <div class="separmaster" @click="handleOpen(i)">
        <span v-if="sectionOpen.includes(i)">-</span><span v-else>+</span>
        {{i.split("-").join(" ").replace(/\w\S*/g, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}}
      </div>
         <nuxt-link v-for="kpi in parent._contents" :key="`${i}-${kpi}`" :to="{ name: `cat-kpi`, params: { kpi: kpi.slice(0, -3), cat: i } }">
          {{ repenav[kpi.slice(0, -3)] }}
        </nuxt-link>

        <div 
              class="meganavsection"
                    :class="{ open: sectionOpen.includes(u) }"

          v-for="(rekpi, u) in parent" v-if="rekpi._contents">
          <div class="separmaster" @click="handleOpen(u)">
            <span v-if="sectionOpen.includes(u)">-</span><span v-else>+</span>
            {{u.split("-").join(" ").replace(/\w\S*/g, function (txt) {return (txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());})}}
          </div>
          <nuxt-link v-for="deepkpi in rekpi._contents" :key="`${u}-${deepkpi}`" :to="{name: `cat-kpi`,params: { kpi: deepkpi.slice(0, -3), cat: i },}" >
            {{ repenav[deepkpi.slice(0, -3)] }}
          </nuxt-link>
        </div>
     </div>
  </div>
</template>

<script>
import meganav from "~/static/refolders.json";
import meganaver from "~/static/kpis.json";
import megavariations from "~/static/variations.json";

export default {
  name: "Details",
  data() {
    return {
      sectionOpen: ["actividad-economica"],
      nav: meganav,
      repenav: meganaver,
      variete: megavariations,
      items: [
        "emae",
        "cambio",
        "tcrm",
        "balanza",
        "tasa",
        "basemonetaria",
        "ipc",
        "petroleo",
      ],
    };
  },
  created() {},
  methods: {
    handleOpen(i) {
      if (this.sectionOpen.includes(i)) {
        this.sectionOpen = this.sectionOpen.filter(item => item !== i)
      } else {
        this.sectionOpen.push(i)
      }
     },
    getVariation(i) {
      var currentNum = this.chart.chartdata.datasets[0].data
        .filter((val, index, arr) => index > arr.length - 24)
        .reverse();
      var A = currentNum[i];
      var B = currentNum[i + 1];
      return (((A - B) / A) * 100.0).toFixed(2);
    },
  },
};
</script>

<style lang="scss">
.meganav a {
  display: block;
  text-decoration: none;
  color: #ddd;
  //background: #000;
     padding-bottom: 5px;
     position: relative;
     &:hover {
            color: rgba(253,216,53,1);

     }
     &.nuxt-link-exact-active.nuxt-link-active {
      color: rgba(253,216,53,1);
      font-weight:bold;
     }
    &:after {
      content: "";
      display: block;
      left: 7px;
      width: 12px;
      top: 8px;
      border-top: 1px dotted #555;
      position: absolute;
    }
}

.meganav span {
  color: #aaa;
  display: inline-block;
  border: 1px solid #aaa;
    width: 12px;
    height: 12px;
    font-size: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    border-radius: 2px;
    &:after {
      content: "";
    display: block;
    width: 1px;
    top: 15px;
    bottom: 0;
    border-right: 1px dotted #555;
    position: absolute;
    }
}
.separmaster {
    color: #eee;
    padding-bottom: 10px;
    
        display: flex;
    align-items: center;
    gap: 5px;

 }


.meganav {
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  padding: 0;
  overflow: auto;
  padding-bottom: 100px;
  color: #eee;

  z-index: 999;

  @media only screen and (max-width: 980px) {
    transform: translateX(-100%);
  }
}

.meganavsection {
  cursor: pointer;
  padding-left: 15px;
  //padding-bottom: 15px;
  position: relative;
  overflow: hidden;
 &.open a:last-of-type {
    padding-bottom: 15px;
}  
  div:first-child ~ * {
    padding-left: 25px;
    position: relative;
    overflow: hidden;  
    display: none;  
  }
  &.open > div:first-child ~ * {
    display: block;
  }
  .separmaster:hover,
  &.open > .separmaster {
    font-weight: bold;
  }
  &.open span {
    background: #555;
    color: #eee;
  }
  .searcher {
    background: transparent;
    width: 100%;
    border: 0;
    padding: 10px 15px;
    font-size: 15px;
    margin-bottom: 10px;
  }
}
</style>

 