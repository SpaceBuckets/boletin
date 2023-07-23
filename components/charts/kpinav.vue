<template>
  <div class="meganav">
<!-- <div class="meganavsection"
      :class="{ open: $route.path === '/dashboard' }"
>
  <div class="separmaster">
    <i>📊</i><nuxt-link to="/" @click="navigateToHome('home')"> Dashboard</nuxt-link>
  </div>
</div> -->
<!-- <div class="meganavsection searcher">
<div class="separmaster">
  <i>🔎</i> <input type="text" placeholder="Buscar Indicadores...">

</div>
</div>
 -->


    <div
      class="meganavsection"
      v-for="(parent, i) in nav"
      :class="{ open: sectionOpen.includes(i) }"
      :key=""
    >
      <div class="separmaster" @click="sectionOpen = i">
          <i>{{parent._emoji}}</i> 
        <nuxt-link :key="`${i}-${parent}`" :to="{ name: `cat`, params: { cat: i } }">
        {{i.split("-").join(" ").replace(/\w\S*/g, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}}
        </nuxt-link>       

      </div>
         <nuxt-link v-for="kpi in parent._contents" :key="`${i}-${kpi}`" :to="{ name: `cat-kpi`, params: { kpi: kpi.slice(0, -3), cat: i } }">
          {{ repenav[kpi.slice(0, -3)] }}
        </nuxt-link>

        <div 
              class="meganavsection"
                    :class="{ open: sectionOpen.includes(u) }"

          v-for="(rekpi, u) in parent" v-if="rekpi._contents">
          <div class="separmaster" @click="handleOpen(u)">
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
      sectionOpen: [''],
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
        this.sectionOpen = i
      }
     },
    navigateToHome(section) {
      this.sectionOpen = section || '';

      this.$router.push({ path: '/', query: { sectionOpen: section } });
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
.meganav .separmaster > a {
  display: block;
  text-decoration: none;
  color: #ddd;
  padding: 10px;
  position: relative;
  width: 100%;
  &:hover { color: rgba(253,216,53,1); }
}

.meganav .meganavsection > a {
  display: block;
  text-decoration: none;
  color: #ddd;
  padding-bottom: 5px;
  position: relative;
  &:hover { color: rgba(253,216,53,1); }
  &.nuxt-link-exact-active.nuxt-link-active {
    color: rgba(253,216,53,1);
    font-weight:bold;
    &:before { background: #444; }
  }
}

.separmaster {
  color: #ddd;   
  display: flex;
  align-items: center;
}
 
.meganav {
  position: fixed;
  left: 10px;
  top: 160px;
  bottom: 0;
  padding: 0;
  padding-top:5px;
  overflow: auto;
  //padding-bottom: 100px;
  border-radius: 6px;
  color: #ddd;
  width: 250px;
  z-index: 999999;
  background: #1C1C1C;
  //border-right: 1px solid #262626;
  @media only screen and (max-width: 980px) { transform: translateX(-100%);left: 0; top: 59px; border-radius: 0; }
}

.meganavsection {
  cursor: pointer;
  padding-left: 15px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #262626;
  user-select: none;
  &.descripted {
    border-bottom: 0;
    pointer-events: none;
    p {
      color: #ccc;
      padding-right: 20px;
      line-height: 1.3;
      //padding-top: 15px;
    }    
  }

  &.open a:last-of-type { padding-bottom: 10px; }
 
  div:first-child ~ * {
    padding-left: 30px;
    position: relative;
    overflow: hidden;  
    display: none;  
  }
  &.open > div:first-child ~ * {
    display: block;
    &:after {
      content: "";
      width: 18px;
      position: absolute;
      border-bottom: 1px dotted #444;
      left: 5px;
      top: 7.5px;
    }    
    &:before {
      content: "";
      height: 5px;
      position: absolute;
      border-right: 1px dotted #444;
      left: 24px;
      top: 5px;      
    }
  }
  .separmaster:hover,
  &.open > .separmaster { 
    font-weight: bold; 
  }
}

.searcher {
  background: #1C1C1C;
  input {
    width: 100%;
    border: 0;
    padding: 10px;
    font-size: 15px;
    color: #D3D3D3;
    background: transparent;
    &:focus {
      outline: 0;
    }
  }

}

.meganavsection .separmaster i {
  filter: grayscale(100%);
  font-style:normal;
  opacity: 0.8;
}

.meganavsection .separmaster:hover i,
.meganavsection.open .separmaster i {
  filter: grayscale(0)
}

.meganavsection.open .separmaster:after {
  content: "";
  border-right: 1px dotted #444;
  position: absolute;
  left: 20px;
  bottom: 19px;
  top: 32px;
}

 
</style>

 