<template>
  <div>
    <div class="meganav" :class="{index: $route.path === '/'}">
    <div class="meganavsection nochild">
              <div> <nuxt-link to="/home">Home</nuxt-link>    </div>

    </div>
      <div class="meganavsection nochild">
        <div> <nuxt-link to="/">Dashboard</nuxt-link>    </div>
      </div>
      <div class="meganavsection open" @click="sectionOpen = i" v-for="(parent, i) in nav" :class="{open: sectionOpen === i}" :key="">
        <div>
        {{i.replace(/-/g, ' ')}} <svg viewBox="0 0 100 100" class="triangle" style="width: 0.6875em; height: 0.6875em; fill: #888;"><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon></svg>

        </div>
           <nuxt-link v-for="kpi in parent" :key='`${i}-${kpi}`' :to="{ name: `kpi-kpi`, params: { kpi: kpi, parent: i } }" >

            {{kpi}}
          </nuxt-link>
      </div>

    </div>
 
  </div>
</template>

<script>
import meganav from '~/json/kpisnav.json'

export default {
  name: "Details",
  data() {
    return {
      sectionOpen: '',
      nav: meganav
    };
  },
  
};
</script>

<style lang="scss">

.meganav a {
  display: block;
  color: rgba(25, 23, 17, 0.6);
  padding: 4px 15px;
  text-decoration: none;
  color: #eee;
  padding-left: 25px;
  &:hover {
    color: rgba(253, 216, 53, 1) !important;

  }
  &.nuxt-link-exact-active {
     color: rgba(253, 216, 53, 1) !important;
    color: #fff;
    font-weight: bold;
 
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

 .meganav div.nochild {
   margin-bottom: 15px !important;
 }
.meganav {
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  //background: rgb(247, 246, 243);
  padding: 15px 0;
  overflow: auto;
  padding-bottom: 50px;
  padding-top: 25px;
  width: 220px;
  z-index: 999;
 
  &.index {
   //transform: translateX(-100%)
  }
  input {
    margin-left: 15px;
  }
  > div {
    margin-bottom: 20px;
    > div {
      text-transform: uppercase;
    font-size: 11.5px;
    letter-spacing: 0.03em;
      color: rgba(55, 53, 47, 0.5);
    color: #eee;
    font-weight: 600;
    padding: 0 15px 5px;
    }
  }
}

.meganavsection {
  cursor: pointer;
  > a { display: none; }
  &.open > a { display: block; }
  &.open svg { transform: rotateZ(180deg); }
}

</style>

 