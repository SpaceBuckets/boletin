<template>
  <div>
    <div class="headbert">
      <div style="display: flex">
        <div>
          <h1>Tachame la Macro</h1>

          <p>
            <em>Febo asoma; ya sus rayos, iluminan el histórico contexto.</em>
            Esta colección de indicadores intenta develar de donde viene y hacia
            donde va la macroeconomía Argentina.
          </p>
        </div>
        <div class="capis">
          <div>
            <div>Población</div>
            <h2>45.4M</h2>
            <div>Censo 2020</div>
          </div>

          <div>
            <div>PBI per capita</div>
            <h2>$1,015M</h2>
            <div>Dato 2020</div>
          </div>

          <div>
            <div>HDI</div>
            <h2>0.845</h2>
            <div>Dato 2020</div>
          </div>
          <div>
            <div>GINI</div>
            <h2>42.9</h2>
            <div>Dato 2020</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-container">
      <div class="navigator">
        <h5>Indicadores</h5>
        <div class="separator" v-for="(kpi, i) in $state.indicadores">
          <div v-if="i === 'actividad'">Actividad Económica</div>
          <div v-if="i === 'precios'">Precios y Salarios</div>
          <div v-if="i === 'monetaria'">Política Monetaria</div>
          <div v-if="i === 'externo'">Sector Externo</div>
          <label v-for="(pepe, e) in kpi">
            <input
              type="checkbox"
              :checked="$state.selectedkpis.includes(e)"
              @click="setCheck(e)"
            />

            <span>{{ pepe }}</span>
          </label>
        </div>
      </div>
      <div>
        <section
          v-for="(repepes, currActive) in $state.selectedkpis"
          :ref="repepes"
        >
          <component :is="`${repepes}`" />
        </section>

        <!--         <actividad-box />
        <monetaria-box />

        <precios-box />

        <externo-box /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {};
  },
  methods: {
    setCheck(kpi) {
      if (this.$state.selectedkpis.includes(kpi)) {
        this.$state.selectedkpis.splice(
          this.$state.selectedkpis.indexOf(kpi),
          1
        );
      } else {
        this.$state.selectedkpis.push(kpi);
        this.$nextTick(() => {
          var element = this.$refs[kpi];
          var top = element[0].offsetTop-150;
          console.log(top)
          window.scrollTo({
  top: top,
   behavior: 'smooth'
});
        });
      }
    },
    changeClick(kpi) {
      this.$state.currActive = kpi;
      this.$state.real.datasets[0].data = this.$state.kpis[kpi]["d"];
      this.$state.real.datasets[1].data = this.$state.kpis[kpi]["t"];
      this.$state.real.datasets[2].data = this.$state.kpis[kpi]["b"];
      this.$state.real.labels = this.$state.kpis[kpi]["dates"];
      (this.$state.currDesc = this.$state.kpis[kpi].desc),
        this.$state.updated++;
    },
  },
};
</script>


<style lang="scss">
.section-container {
  display: flex;
  gap: 10px;
  padding-bottom: 400px;
  > div {
    flex: 1;
  }
}

.navigator {
  background: #fff;
  max-width: 290px;
  border-radius: 2px;
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  overflow: auto;
  .separator > div {
    padding: 8px 30px 8px 15px;
    background: #f7f5f0;
    font-size: 14px;
    color: #555;
  }
  label {
    list-style: none;
    padding: 10px 30px 10px 15px;
    display: block;
    border-bottom: 1px solid #f7f5f0;
    font-size: 14px;
    line-height: 1.4;
    span {
      color: #555;
    }
    cursor: pointer;
    input:checked + span {
      //background: rgba(253, 216, 53, 0.7);
      font-style: normal;
      font-weight: bold;
      color: #111;
    }
    &:hover {
      color: #111;
    }
  }
}
@keyframes rotatesun {
  0% {
    transform: translateX(0) translateY(0) rotate(0);
  }
  25% {
    transform: translateX(-100px) translateY(100px) translateX(180deg);
  }
  50% {
    transform: translateX(-200px) translateY(200px) rotate(360deg);
  }
  75% {
    transform: translateX(-100px) translateY(100px) translateX(180deg);
  }
  100% {
    transform: translateX(0) translateY(0) rotate(0);
  }
}
@keyframes rotatepup {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
}

.left .rupil {
  animation: rotatepup 2s infinite ease-in;
}
.headbert {
  width: 100%;
  border-radius: 2px;
  //max-width: 1440px;
  //box-shadow: 0px 0px 15px 5px rgba(109,145,179,0.5);
  margin: 0 auto 10px;
  background: #fff;
  position: relative;
  padding: 20px 25px;
  overflow: hidden;
  display: none;
  > div {
    display: flex;
    > * {
      flex: 1;
    }
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
    padding: 0;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 500;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
  }
  p {
    color: #262626;
    font-size: 16px;
    margin: 0;
  }
}

.capis {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  > * {
    flex: 1;
    max-width: max-content;
    h2 {
      min-width: auto !important;
      margin-bottom: 0;
    }
  }
}

h5 {
  font-family: montserrat;
  padding: 20px 15px;
  padding-bottom: 5px;
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
}
</style>
