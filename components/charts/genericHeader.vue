<template>
  <section class="newheader">
      <h1><strong>{{ kpi.t }}</strong>. {{kpi.st}}</h1>

        
      <p v-html="kpi.sd"> </p>
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
      kpi: require(`~/static/data/${this.data}.json`),
    };
  },
  created() {},
  methods: {
 
  },
};
</script>

 <style lang="scss" scoped>


.newheader h1 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 20px;
  padding-right: 100px;
  font-weight: normal;
  strong {
    font-weight: bold;
  }
}
p {
    padding-right: 100px;

}
</style>