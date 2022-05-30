<template>
  <div>
    <div class="meganav"       :class="{index: $route.path === '/'}">
      <input type="text" placeholder="Search...">
      <button>Random
       </button> 
      <div class="meganavsection" v-for="(parent, i) in nav">
        <div>
        {{i.replace(/-/g, ' ')}} <svg viewBox="0 0 100 100" class="triangle" style="width: 0.6875em; height: 0.6875em; fill: rgba(55, 53, 47, 0.45);  transform: rotateZ(180deg);"><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon></svg>

        </div>
           <nuxt-link v-for="kpi in parent" :key='`${i}-${kpi}`' :to="{ name: `${i}-kpi`, params: { kpi: kpi, parent: i } }" >

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
  //color: #eee;
  &:hover {
        background: rgba(55, 53, 47, 0.08);

  }
  &.nuxt-link-active {
    background: rgba(55, 53, 47, 0.08);
    color: rgb(55, 53, 47);
    //color: #fff;
    font-weight: bold;
 
  }
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
  width: 240px;
  z-index: 999;
  &.index {
    display: none;
  }
  input {
    margin-left: 15px;
  }
  > div {
    margin-top: 20px;
    > div {
      text-transform: uppercase;
    font-size: 11.5px;
    letter-spacing: 0.03em;
      color: rgba(55, 53, 47, 0.5);
      //color: #ccc;
    font-weight: 600;
    padding: 0 15px 5px;
    }
  }
}
</style>

 