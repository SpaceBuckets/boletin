<template>
  <section class="chart">
    <h2>
       <strong>Descripción Metodológica</strong>
    </h2>
    <div class="numcontain" style="position: absolute;top: 55px;bottom: 15px;left: 20px;right:15px; padding-right:50px;">
       
      <div v-html="chart.c"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      chart: require(`~/json/confluence/${this.data}.json`),
    };
  },
  created() {},
  methods: {
 
  },
};
</script>

 <style lang="scss" scoped>
a { 
  text-align: center;
}
 .numcontain {
   display: flex;
 
 }
 h2 {
   margin-bottom: 0 !important;
   max-height: 20px;
   overflow: hidden;
 }
h4 {
  font-size: 24px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  text-transform: capitalize;
 }
h5 {
  font-size: 20px;
  margin: 0;
  text-align: center;
  color: #009966;
    svg { 
      fill: #009966; 
       }
  &.negative {
    color: #b22222;
    svg { 
      fill: #b22222; 
      transform: rotate(180deg)
      }

  }
}
</style>