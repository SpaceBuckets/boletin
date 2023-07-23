<template>
  <div>
    <header>
      <div class="nav-logo" @click="handleHome()">
      <h1>

        <nuxt-link to="/"><span>BOLETÍN</span>EXTRAOFICIAL</nuxt-link>
        <i>🇦🇷</i>

      </h1>
    <div class="meganavsection descripted">
    <p>95 indicadores develando de dónde viene y hacia dónde va la macroeconomía Argentina. </p>
  </div>
      </div>

      <div :class="{menued: $state.isOpen}" class="backdropper" @click="$state.isOpen = false"></div>

 

      <button class="floatmaster" @click="$state.isOpen = !$state.isOpen">
   <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M120-240v-60h520v60H120Zm678-52L609-481l188-188 43 43-145 145 146 146-43 43ZM120-452v-60h400v60H120Zm0-208v-60h520v60H120Z"/></svg>
      </button>
 
      <div class="top-actions">
      <div>
        <button >
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/></svg>
        </button>
        <input type="text" placeholder="Buscar Indicadores..." @keyup.enter="handleSearch($event)" ref="masterSearcher">
        <button class="searchsubmit" @input="handleSearch($event)"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m480-160-42-43 247-247H160v-60h525L438-757l42-43 320 320-320 320Z"/></svg></button>
      </div>   
        <div class="view-mode" v-if="$route.path === '/' || $route.path.includes('/search')">

          <button v-for="(mode, key) in viewModes" :class="{active: key === $state.activeMode}" @click="setMode(key)">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
            <path :d='mode'></path>
            </svg>
          </button>
        </div> 
        <div class="random-mode">
              <button @click="getRandom()"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M581-150v-60h125L522-393l42-43 186 184v-127h60v229H581Zm-389 0-42-43 558-558H581v-60h229v229h-60v-126L192-150Zm203-374L150-768l43-43 245 244-43 43Z"/></svg> Indicador al Azar</button>

        </div>

      </div>
 
    </header>
    <div class="content-container" :class="{menued: $state.isOpen}">
 
      <charts-kpinav v-if="$route.name !== 'mapusa'"/>
       <nuxt />
    </div>
  </div>
</template>

<script>
import megatable from "~/static/refolders.json";
import ultratable from '~/static/kpitable.json'

export default {
  scrollToTop: false,
  data() {
    return {
      items: megatable,
      searchable: ultratable,
      isOpen: false,
      filteredData: {},
      viewModes: {
/*         card: "M286.882-717Q266-717 251.5-702.382q-14.5 14.617-14.5 35.5Q237-646 251.618-631.5q14.617 14.5 35.5 14.5Q308-617 322.5-631.618q14.5-14.617 14.5-35.5Q337-688 322.382-702.5q-14.617-14.5-35.5-14.5Zm0 414Q266-303 251.5-288.382q-14.5 14.617-14.5 35.5Q237-232 251.618-217.5q14.617 14.5 35.5 14.5Q308-203 322.5-217.618q14.5-14.617 14.5-35.5Q337-274 322.382-288.5q-14.617-14.5-35.5-14.5ZM154-839h651q16 0 25.5 9.5t9.5 25.813V-535q0 17.425-9.5 29.212Q821-494 805-494H154q-15 0-24.5-11.788Q120-517.575 120-535v-268.687q0-16.313 9.5-25.813T154-839Zm26 60v225h600v-225H180Zm-26 353h647q15 0 27 12.5t12 28.527V-121q0 20-12 30.5T801-80H159q-16 0-27.5-10.5T120-121v-263.973q0-16.027 9.5-28.527T154-426Zm26 60v226h600v-226H180Zm0-413v225-225Zm0 413v226-226Z",
 */        grid: "M120-510v-330h330v330H120Zm0 390v-330h330v330H120Zm390-390v-330h330v330H510Zm0 390v-330h330v330H510ZM180-570h210v-210H180v210Zm390 0h210v-210H570v210Zm0 390h210v-210H570v210Zm-390 0h210v-210H180v210Zm390-390Zm0 180Zm-180 0Zm0-180Z",
        table: "M820-121H180q-24 0-42-18t-18-42v-599q0-24 18-42t42-18h640q24 0 42 18t18 42v599q0 24-18 42t-42 18ZM180-639h640v-141H180v141Zm150 60H180v398h150v-398Zm340 0v398h150v-398H670Zm-60 0H390v398h220v-398Z"
      }      
    };
  },

  methods: {
    handleHome() {
      this.$state.isSearching = false
      this.$state.searchedResults = {};
      this.$refs.masterSearcher.value = '';
      this.$state.activeMode = 'grid'
      this.$router.push({ path: '/' })
    },
    
handleSearch(event) {
  const searchTerm = this.removeAccents(event.target.value.toLowerCase());

   const results = {};
    //this.$state.savedIndex = this.$state.originalIndex;

  if (searchTerm.length > 2) {
  this.$state.isSearching = true

    for (let key in this.$state.savedIndex) {
      if (Object.values(this.$state.savedIndex[key]).some(val => {
        if (val != '' && typeof val === 'string') {
          return this.removeAccents(val.toLowerCase()).includes(searchTerm);
        }
        return false;
      })) {
        results[key] = this.$state.savedIndex[key];
      }
    }
    
    if(Object.keys(results).length === 1) {
      var searchTermParent = this.findRootParent(Object.entries(results)[0][0])
      this.$router.push({ path: `/${searchTermParent}/${Object.entries(results)[0][0]}` })
      //this.$state.isSearching = false

     } else {
      //this.$state.activeMode = 'table'
      this.$router.push({ path: `/search/${searchTerm}` })

      this.$state.searchedResults = results;
    }
  } else {
      //this.$state.activeMode = 'table'
      this.$router.push({ path: '/' })
  }
  
 },
findRootParent(searchItem) {
  for (let key in this.items) {
    if (this.items.hasOwnProperty(key) && Array.isArray(this.items[key]['_contents'])) {
      if (this.items[key]['_contents'].includes(`${searchItem}.js`)) {
        return key;
      }
    }
  }
  return null;
},
    removeAccents(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }, 
    setMode(key) {
      this.$state.activeMode = key
    },
    getRandom() {
    const keys = Object.keys(this.items);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const contents = this.items[randomKey]._contents;
    const randomContent = contents[Math.floor(Math.random() * contents.length)];
this.$router.push({
    path: `/${randomKey}/${randomContent.replace('.js', '')}`
})
       }
  },
  watch: {
    $route(to, from) {
      this.$state.isOpen = false;
/*             this.$state.isSearching = false
      this.$state.searchedResults = {};
      this.$refs.masterSearcher.value = '' */
    },
  },
};
</script>  
<style lang="scss">

hr {
  border: 0;
  border-bottom: 1px solid #333;
}
 .floatmaster {
  display: none;
  background: none;
  border: 0;
  position: absolute;
  right: 0;
  z-index: 99999;
  padding: 0;
      @media only screen and (max-width: 980px) {
  display: block;
  bottom: 0;
  top: 0;

    }   
}
.backdropper {
  background: rgba(0,0,0,0.4);
    top: 59px;
    right: 0;
    left: 250px;
    bottom: 0;
    position: fixed;
    display: none; 
     &.menued {
  display: block;

    }       

}
.content-container {
  max-width: 1366px;
  margin: 0px auto;
 
  &.index {
  max-width: 1366px;
  //margin: 0 auto;

  }
  &.menued {
   // padding: 0 20px;
    .meganav {
      transform: translateX(0);
      background: #000;
      right: 0;
    }
  }
    @media only screen and (max-width: 980px) {
      padding: 0;

    }      
}
html {
  box-sizing: border-box;
  font-family: arial, helvetica, sans-serif;
  * {
    color: #ddd;
    color: #333;
    //color: #a4a8ad;
  }
  p {
    color: #676c6f;
    strong {
      color: #676c6f;
    }
  }
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
.renav {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  right: 0;
  align-items: center;
  bottom: 0;
  //background: #1f2325;
  display: none;
  > div {
   color: #888;
  strong {
    color: #888;
    display:none;
  }
  }
      @media only screen and (max-width: 980px) {
  display: none;

    }  
}
header {
  //background: rgba(55, 53, 47, 0.08);
  //background: #000;
  background: #070b0d;
  //border-right: 1px solid #262626;
  //border-bottom: 1px solid #262626;
  position: fixed;
  top: 0px;
  //height: 60px;
  left: 0px;
   // border-right: 2px solid #333;
   right: 0;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  //justify-content: space-between;
  z-index: 999999;
  padding: 10px;
  cursor: pointer;
  //border-bottom: 1px solid #333;

      @media only screen and (max-width: 980px) {
  
      padding: 0;
          }   
  svg {
    //width: 60px;
    padding: 15px;
    //height: 60px;
    //display: none;
      path {
      fill: #aaa;
    }
  }
  h1 {
    text-align: left;
    margin: 0;
    display: flex;
    align-items: center;
    padding: 15px;
    padding-bottom: 10px;
    position: relative;
    z-index: 99;
    //flex-direction: row-reverse;
    width: 100%;
      
    margin-right: 10px;
    border-radius: 6px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
 
    @media only screen and (max-width: 980px) {

      min-width: max-content;
      gap: 15px;
      flex-direction: row-reverse;
    }    
    i {
      font-style:normal;
      max-width: max-content;
      @media only screen and (max-width: 980px) {
        font-size: 26px;
      }          
    }
    svg {
      position: absolute;
      left: -10px;
      display: none;
         @media only screen and (max-width: 980px) {
        //display: none;
        }
    }
    a {
      color: #ddd;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 18px;
      //text-decoration: none;
      font-weight: lighter;
      //line-height: 60px;
      width: 100%;
      @media only screen and (max-width: 980px) {
        font-size: 16px;
      }            
      span {
        font-weight: 600;
        color: #D3D3D3;
        display: block;
        padding-right: 2px;
        font-size: 16px;
      @media only screen and (max-width: 980px) {
        font-size: 14px;
      }              
      }
    }
  }
}

.nav-logo {
  max-width: 250px;
  gap: 10px;
  background: #1C1C1C;
  border-radius: 6px;
  position: absolute;
  top: 10px;
  &:hover {
    background: #262626;
  }
        @media only screen and (max-width: 980px) {
          position: relative;
          min-width: 100%;
          border-radius: 0;
          top: 0;
          left: 0;
          right: 0;
          backface-visibility: hidden;
  p { display:none; }

    }    
}

body {
  font-family: arial, helvetica, sans-serif;
  background: rgb(245 246 250);
  background: #f7f5f0;
  background: rgb(247, 246, 243);
  background: #000;
  background: #070b0d;
  //background: linear-gradient(to right, #1C1C1C, #000);
  margin: 0;
  font-size: 15px;
    padding-left: 270px;
    padding-right: 10px;
    padding-top: 80px;

        @media only screen and (max-width: 980px) {
  padding-top: 70px;
    padding-left: 0px;
    padding-right: 0px;

    }   
}

p {
  margin-top: 0;
  line-height: 1.4;
  //color: #262626;
}

em {
  background: rgba(253, 216, 53, 0.9);
  font-style: normal;
  font-weight: bold;
  color: #111;
}

a {
  color: #2e78d2;
  text-decoration: none;
  &:hover {
   // text-decoration: underline;
  }
}

.chart h2 {
  margin: 0;
  font-size: 18px;
  //min-width: 300px;
  font-weight: 400;
  font-family: Helvetica, Arial, sans-serif;
  //font-weight: lighter;
  //color: #888;
  //padding-right: 120px;
  //border-bottom: 1px solid #eee;
  //padding-bottom: 15px !important;
          @media only screen and (max-width: 980px) {
              padding-right: 120px;

          }
  i {
    display: block;
    font-size: 14px;
    font-family: Helvetica, Arial, sans-serif;
    font-style: normal;
    color: #888;
    margin-top: 10px;
    a {
      color: #888;
    }
  }
  span {
    font-weight: 600;
    color: #262626;
  }
}

.__nuxt-error-page {
  background: #000;
  .title {
    color: #D3D3D3;
  }
}

canvas {
  cursor: pointer;
}

.chart {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  .updatedPill {
    display: none;
  }
  > * {
    flex: 1;
  }
}


 .toolbar {
  position: absolute;
  right: 0;
  svg {
    padding: 5px;
    width: 36px;
    margin: 0 10px;
  }
 }

 .top-actions {
  border-radius: 6px;
  //height: 60px;
  display: flex;
  gap: 10px;
  flex: 1;
    padding-left: 330px;
    padding-right: 70px;
   margin: 0 auto;
      @media only screen and (max-width: 980px) {
          display: none;

    }       
  > div {
      flex: 1;
      display: flex;
      border-radius: 6px;
      background: #1C1C1C;
      
      > * { flex: 1; }
      &:first-child {
              flex: 4;
      padding-left: 10px;

      }
      button {
        background: transparent;
      max-width: max-content;
      border: 0;
          display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    svg {
      fill: #888;
      padding: 10px;
    }    
      }
    &:hover {
      background: #1C1C1C;
    }      
      > * {
        flex: 1;
      }
  
  }
  button {
     color: #888;
    padding: 0;
    border: 0;
    cursor: pointer;
    //background: transparent;
    &.active {
            background: #262626;
         svg {
      fill: #ddd;
     }
    }
    &:hover {
          svg {
      fill: #ddd;
     }
    }
    svg {
      fill: #888;
      padding: 10px;
    }
  }
  input {
    background: transparent;
    border: 0;
    color: #eee;
    font-size: 20px;
    height: 60px;
    &:focus {
      outline: 0;
    }
  }
 }

 .view-mode {
  overflow: hidden;
  max-width: 207px;
  button {
    max-width: 100% !important;
  }
  &:hover {
    background: #1C1C1C !important;
  }
 }

 .random-mode {
    padding-left: 10px;
    padding-right: 30px;
    max-width: max-content;
 }

 
</style>
