<template>
  <div>
    <div class="meganav">

      <div class="meganavsection nochild" style="padding:0">
         <input type="text" placeholder="Buscar Indicadores...">  
      </div>    

      <div class="meganavsection open" v-if="i !== 'Todos'" @click="sectionOpen = i" v-for="(parent, i) in nav" :class="{open: sectionOpen === i}" :key="">
         <div class="separmaster">{{i.replace(/-/g, ' ')}} </div> 
        <nuxt-link  v-for="kpi in parent" :key='`${i}-${kpi.kpi}`' :to="{ name: `kpi-kpi`, params: { kpi: kpi.kpi, parent: i } }">
            <div><!-- <input :checked="items.includes(kpi.kpi)" type="checkbox"> --> {{kpi.t}}</div> 
            <div :class="{ negative: variete[kpi.kpi] < 0, neutral: variete[kpi.kpi] === '0.0' }">
            <svg v-if="variete[kpi.kpi] !== '0.0'" viewBox="0 0 100 100" class="triangle" style="width: 0.6875em; height: 0.6875em;"><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon></svg> 
              {{ variete[kpi.kpi].replace("-","") }}
            </div>
         </nuxt-link>
      </div>
    </div>
 
  </div>
</template>

<script>
import meganav from '~/static/kpis.json'
import megavariations from '~/static/variations.json'

export default {
  name: "Details",
  data() {
    return {
      sectionOpen: '',
      nav: meganav,
      variete: megavariations,
      items: ["emae", "cambio","tcrm",'balanza',"tasa","basemonetaria",'ipc','petroleo'],

    };
  },
  created() {
    console.log(this.variete)
   },
  methods: {
   
    getVariation(i) {
      var currentNum = this.chart.chartdata.datasets[0].data
        .filter((val, index, arr) => index > arr.length - 24)
        .reverse();
      var A = currentNum[i];
      var B = currentNum[i + 1];
      return (((A - B) / A) * 100.0).toFixed(2);
    },    
  }
  
};
</script>

<style lang="scss">

//.meganav {display:none}
 
.meganav a {
  display: block;
  color: rgba(25, 23, 17, 0.6);
  text-decoration: none;
  color: #eee;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
      border-bottom: 1px dotted #333;
  //opacity: 0.5;
  &.active {
    opacity: 1;
    background: red;
  }
  > * {
    flex: 1;
  color: #eee;
  padding: 8px 15px;
  svg {
    margin-right: 2px;
  }
    &:last-child {
      text-align: center;
      background: rgba(0, 153, 102, 0.35);
        fill: #eee;
        padding-left: 0;
        padding-right: 0;
        max-width: 80px;
        svg {
          transform: rotate(0)
        }
    }  
    &.neutral {
      background: #222;
    }
    &.negative {
         background: rgba(178, 34, 34, 0.35);
           fill: #ddd;
    svg {
          transform: rotate(180deg)
        }
    }

  }
  &:hover {
    color: rgba(253, 216, 53, 1) !important;
    background: #333;
  }
  &.nuxt-link-exact-active {
     color: rgba(253, 216, 53, 1) !important;
    color: #fff;
    font-weight: bold;
    background: #333;
 
  }
 }

 .meganav .nochild a {
   padding: 0;
  &.nuxt-link-exact-active {
     color: rgba(253, 216, 53, 1) !important;
    color: #fff;
    font-weight: bold;
 
  }   
 }

 
.meganav {
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  //background: rgb(247, 246, 243);
  padding: 0;
  overflow: auto;
  padding-bottom: 0px;
  //padding-top:10px;
  width: 300px;
  z-index: 999;
  //display:none;
  //border-top: 1px solid #333;

  //border-right: 2px solid #333;
 background: #1f2325;
  &.index {
    display: none;
  }
    @media only screen and (max-width: 980px) {
     transform: translateX(-100%);

    }      
  > div {
   // margin: 0 0 15px 15px;
    //padding-bottom: 20px;
  //border: 1px solid #333;
  background: #1f2325;
  border-radius: 2px;
    > div {
      text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.03em;
      color: rgba(55, 53, 47, 0.5);
    color: #ccc;
    font-weight: 600;
      padding: 12px 16px;
      border-bottom: 1px solid #333;

    }
  }
}

.meganavsection {
  cursor: pointer;
  > a { display: none; }
  &.open > a { display: flex; }
  &.open svg { transform: rotateZ(180deg); }
  input[type=text] {
     background: #333;
     width: 100%;
    border: 0;
    padding: 15px;
    font-size: 15px;
     
  }
}



</style>

 