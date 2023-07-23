<template>
  <div>
<!--      <div v-if="edit" class="dashtitle" style="display:none">
      <h2>Dashboard <span>Builder</span></h2>
      <div style="display:flex;">
      <button @click="clearBoard(savedCells)">Reset <span>↻</span></button>
      <div >
       <button @click="saveDB()">Grabar URL »</button>

      <input  type="text" :value="`${boardID}`" />
      </div>

      </div>

    </div> -->

    <div
      class="container-grid"
      :key="updated"
      :style="{ 'grid-template-columns': `repeat(${columnAmount}, 1fr)` }"
    >
      <i
        @pointerdown="startDrag($event)"
        @pointerup="endDrag($event)"
        @mousemove="hoverling($event)"
        v-for="cells in 90"
        :data-row-start="Math.ceil(cells / columnAmount)"
        :data-row-end="Math.ceil(cells / columnAmount) + 1"
        :data-col-start="getColStart(cells)"
        :data-col-end="getColStart(cells) + 1"
        :key="`cells-${cells}`"
        :class="{ active: edit }"
      ></i>
      <div ref="selecter" class="selecter-cell"></div>
      <section
        v-for="(item, parent) in savedCells"
        :ref="parent"
        :style="{
          'grid-area': item.area,
        }"
        :key="parent"
      >
        <button class="delete" v-if="edit" @click="$delete(savedCells, parent)">
          <svg
            stroke="#ccc"
            stroke-width="12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <line x1="15" y1="15" x2="85" y2="85" />
            <line x1="85" y1="15" x2="15" y2="85" />
          </svg>
        </button>
        <div class="seleccionador" v-if="!item.hasChart">
          <h2>Nuevo Chart</h2>
          <div class="buttonmagic">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 40V24H15V40H8ZM20.5 40V8H27.5V40H20.5ZM33 40V18H40V40H33Z"
                fill="#ccc"
              />
            </svg>
            <button @click="modalOpen = parent">Agregar Chart</button>
          </div>
          <div
            class="backdropper"
            @click="modalOpen = ''"
            :class="{ active: modalOpen === parent }"
          ></div>
          <div class="wrapper modal" :class="{ active: modalOpen === parent }">
            <h3>Agregar Nuevo Chart</h3>
            <button class="delete" @click="modalOpen = ''">
              <svg
                stroke="#ccc"
                stroke-width="12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <line x1="15" y1="15" x2="85" y2="85" />
                <line x1="85" y1="15" x2="15" y2="85" />
              </svg>
            </button>
            <div>
              <label for="">
                Tipo de Chart
                <span>Seleccione la clase de gráfico que desea agregar.</span>
              </label>
              <div class="settiper">
                <div
                  :class="{ active: item.type === 'Line' }"
                  @click="$set(savedCells[parent], 'type', 'Line')"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.05 22.7L15.3 13.95L6 20.7V17L15.6 10L24.35 18.75L42 6V9.7L24.05 22.7ZM24.05 42L11.65 30L6 34.05V30.35L11.95 26.1L24.2 38L32.8 31.15H42V34.15H33.8L24.05 42Z"
                      fill="#ccc"
                    />
                  </svg>

                  Línea
                </div>
                <div
                  :class="{ active: item.type === 'Table' }"
                  @click="$set(savedCells[parent], 'type', 'Table')"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41 41.95H9C8.2 41.95 7.5 41.65 6.9 41.05C6.3 40.45 6 39.75 6 38.95V9C6 8.2 6.3 7.5 6.9 6.9C7.5 6.3 8.2 6 9 6H41C41.8 6 42.5 6.3 43.1 6.9C43.7 7.5 44 8.2 44 9V38.95C44 39.75 43.7 40.45 43.1 41.05C42.5 41.65 41.8 41.95 41 41.95ZM9 16.05H41V9H9V16.05ZM16.5 19.05H9V38.95H16.5V19.05ZM33.5 19.05V38.95H41V19.05H33.5ZM30.5 19.05H19.5V38.95H30.5V19.05Z"
                      fill="#ccc"
                    />
                  </svg>

                  Tabla
                </div>
                <div
                  :class="{ active: item.type === 'Kpi' }"
                  @click="$set(savedCells[parent], 'type', 'Kpi')"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9502 40.0502L13.9502 32.0502H5.9502L6.7002 29.0502H14.7002L17.2502 18.9502H9.2502L10.0002 15.9502H18.0002L20.0002 7.9502H22.9502L20.9502 15.9502H31.1002L33.1002 7.9502H36.0502L34.0502 15.9502H42.0502L41.3002 18.9502H33.3002L30.7502 29.0502H38.7502L38.0002 32.0502H30.0002L28.0002 40.0502H25.0502L27.0502 32.0502H16.9002L14.9002 40.0502H11.9502ZM17.6502 29.0502H27.8002L30.3502 18.9502H20.2002L17.6502 29.0502Z"
                      fill="#ccc"
                    />
                  </svg>

                  KPI
                </div>
              </div>
            </div>
            <div>
              <label for=""
                >Categoría e Indicador
                <span
                  >Seleccione la información a graficar en el nuevo chart.</span
                >
              </label>
              <div>
                <select
                  required
                  @change="selectedCat = $event.target.value"
                  name="kpis"
                  id="cars"
                >
          
 
                  <option :selected="i === 'Todos'" :key="i" v-for="(parentOption, i) in kpeis" :value="i">{{i}}</option>
 
                </select>
                <select
                  required
                  @change="$set(savedCells[parent], 'kpi', $event.target.value)"
                  name="kp11is"
                  id="car33s"
                                    multiple="multiple"
                  style="height:135px"
                >
        
                  <option :selected="kpiOption.kpi === 'emae'" :key="u" v-for="(kpiOption, u) in kpeis[selectedCat]" :value="kpiOption.kpi">{{kpiOption.t}}</option>
                </select>
              </div>
            </div>
            <div>
              <label for=""
                >Periodo de Tiempo
                <span>Seleccione el rango de fechas a filtrar.</span>
              </label>
              <div>
                <select
                  required
                  @change="$set(savedCells[parent], 'kpi', $event.target.value)"
                  name="kpi33s"
                  id="car3s"
                >
                  <option value="" selected disabled hidden>
                    Seleccionar Fechas
                  </option>
                  <option value="emae">EMAE</option>
                  <option value="isac">ISAC</option>
                  <option value="ipi">IPI</option>
                  <option value="ucii">UCII</option>
                  <option value="deficit">Deficit Fiscal</option>
                  <option value="balanza">Balanza Comercial</option>
                  <option value="subsidios">Subsidios Economicos</option>
                  <option value="desempleo">Desempleo</option>
                  <option value="embi">Riesgo Pais</option>
                  <option value="tasa">Tasas de Interes</option>
                  <option value="ipc">Inflacion</option>
                  <option value="reservas">Reservas Internacionales</option>
                  <option value="cambio">Cambio USD/Peso</option>
                  <option value="acero">Produccion de Acero</option>
                  <option value="acero">Produccion de Gas</option>
                  <option value="acero">Produccion de Petroleo</option>
                  <option value="cereales">Produccion de Cereales</option>
                </select>
              </div>
            </div>
            <section style="display: flex; justify-content: space-between">
              <button @click="modalOpen = ''">Cancelar</button>
              <button @click="saveChart(parent)">Agregar Chart</button>
            </section>
          </div>
        </div>
        <!--         <nuxt-link :to="{ name: `kpi-kpi`, params: { kpi: item.kpi } }">        </nuxt-link>
 -->
        <component
          :is="`charts-generic${item.type}`"
          :data="item.kpi"
          :title="item.title"
          :subtitle="item.subtitle"
          :key="`chart-${item.kpi}`"
        />
<!--         <component
          v-if="item.hasChart && edit"
          edit
          :is="`charts-generic${item.type}`"
          :data="item.kpi"
        /> -->
      </section>
    </div>
 
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  props: {
    data: {
      type: Object,
      required: false,
    },
    edit: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      columnAmount: 8,
      kpeis: require(`~/static/kpis.json`),
      selectedCat: 'Todos',
      dragging: false,
      saredUrl: false,
      modalOpen: "",
      startX: "",
      startY: "",
      boardID: "",
      savedCells: {},
      updated: 0,
    };
  },
  created() {
    this.savedCells = this.data;

          this.boardID = this.$route.path;

    //console.log(this.kpeis)
    //console.log(this.savedCells)
  },

  methods: {
    async saveDB() {
      var uiui = this.uniqueId()
      await this.$supabase.from("data").insert({ url: uiui, object: this.savedCells });
      this.boardID =uiui


       
      this.$router.replace({path: uiui});

       //history.pushState({},null,`${this.$route.path.replace("/","")}/${uiui}`)

    },
    uniqueId() {
      var idStrLen = 6;
      var idStr = (Math.floor(Math.random() * 25) + 10).toString(36);
      do {
        idStr += Math.floor(Math.random() * 35).toString(36);
      } while (idStr.length < idStrLen);
      return idStr;
    },
 
    clearBoard(cells) {
      for (let cell in cells) {
        this.$delete(this.savedCells, cell);
      }
      this.boardID = "";
      this.$router.replace({path: ''});
    },
    saveChart(parent) {
      console.log(this.savedCells[parent])
      this.$set(this.savedCells[parent], "hasChart", true);
      this.modalOpen = false;
      //console.log(this.savedCells);
    },
    setRandom(cell) {
      const types = ["Line", "Kpi"];
      const kpis = [
        "emae",
        "isac",
        "ipi",
        "ucii",
        "deficit",
        "balanza",
        "subsidios",
        "desempleo",
        "embi",
        "tasa",
        "ipc",
        "reservas",
        "cambio",
        "acero",
        "gas",
        "petroleo",
      ];

      this.$set(
        this.savedCells[cell],
        "kpi",
        kpis[(kpis.length * Math.random()) | 0]
      );
      this.$set(this.savedCells[cell], "hasChart", true);
    },
    getColStart(i) {
      var pepe = Math.ceil(i % this.columnAmount);
      if (pepe === 0) {
        pepe = this.columnAmount;
      }
      return pepe;
    },
    startDrag(e) {
      this.dragging = true;
      this.startX = e.clientX;
      this.startY = e.clientY;

      this.$refs.selecter.style.gridRowStart = e.target.dataset.rowStart;
      this.$refs.selecter.style.gridRowEnd = e.target.dataset.rowEnd;
      this.$refs.selecter.style.gridColumnStart = e.target.dataset.colStart;
      this.$refs.selecter.style.gridColumnEnd = e.target.dataset.colEnd;
      this.$refs.selecter.style.display = "block";
    },
    endDrag(e) {
      this.dragging = false;
      this.startX = "";
      this.startY = "";

      const cellId =
        this.$refs.selecter.style.gridRowStart +
        this.$refs.selecter.style.gridRowEnd +
        this.$refs.selecter.style.gridColumnStart +
        this.$refs.selecter.style.gridColumnEnd;

      var newCell = {
        area: `${this.$refs.selecter.style.gridRowStart} / ${this.$refs.selecter.style.gridColumnStart} / ${this.$refs.selecter.style.gridRowEnd} / ${this.$refs.selecter.style.gridColumnEnd}`,
        kpi: "emae",
        type: "Line",
        hasChart: false,
      };
      this.$refs.selecter.style.gridRowStart = "";
      this.$refs.selecter.style.gridRowEnd = "";
      this.$refs.selecter.style.gridColumnStart = "";
      this.$refs.selecter.style.gridColumnEnd = "";
      this.$refs.selecter.style.display = "none";

      this.$set(this.savedCells, cellId, newCell);

      console.log(this.savedCells);
    },
    hoverling(e) {
      if (this.dragging === true) {
        var yDir = this.startY - e.clientY;
        var xDir = this.startX - e.clientX;
        if (xDir > 0) {
          this.$refs.selecter.style.gridColumnStart = e.target.dataset.colStart;
        }
        if (xDir < 0) {
          this.$refs.selecter.style.gridColumnEnd = e.target.dataset.colEnd;
        }
        if (yDir > 0) {
          this.$refs.selecter.style.gridRowStart = e.target.dataset.rowStart;
        }
        if (yDir < 0) {
          this.$refs.selecter.style.gridRowEnd = e.target.dataset.rowEnd;
        }
      }
    },
  },
};
</script>

<style lang="scss">
.buttonmagic {
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    width: 60px;
    height: auto;
    margin-bottom: 5px;
    margin-top: 10px;
    rect {
      fill: #ddd;
      stroke: #ddd;
    }
  }
}

.settiper {
  display: flex;
  gap: 15px;
  > div {
    cursor: pointer;
    flex: 1;
    //background: #eee;
    padding: 5px 15px 10px;
    border-radius: 2px;
    color: #666;
    border: 1px solid #ddd;

    text-align: center;
    svg {
      padding: 5px;
    }
    &.active {
      background: rgba(253, 216, 53, 1);
      color: #111;
      svg {
        path {
          fill: #111;
        }
      }
      &:hover {
        background: rgba(253, 216, 53, 1);
      }
    }
    &:hover {
      background: #eee;
      color: #111;

      svg {
        path {
          fill: #111;
        }
      }
    }
  }
}

.container-grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  position: relative;
  //background: #000;
  gap: 8px;
  gap: 10px;
  //column-gap: 0;

  //  border-left: 1px dashed #444;
  // border-top: 1px dashed #444;
  margin: 0px 0 0 0;
  max-width: 1366px;
  margin: 0 auto;
  @media only screen and (max-width: 980px) {
    display: block;
    border: 0;
    margin-top: 0;

  }  
  > i {
    //  border-right: 1px dashed #444;
    //  border-bottom: 1px dashed #444;
    height: 133px;
    pointer-events: none;
    cursor: pointer;
    @media only screen and (max-width: 980px) {
      display: none;

    }      
    &.active {
      pointer-events: all;
    }
    &:hover {
      background: #111;
    }
  }
  .selecter-cell {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 0, 0.3);
    display: none;
    pointer-events: none;
  }
  > section {
    background: #fff;
    background: #151a1e;
    background: #fff;
    border-radius: 6px;
    //border-radius: 0;
    //border-radius: 6px;
    //border: 1px solid #1c2126;
    //border: 1px solid #eee;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    padding: 20px;
    padding-bottom: 15px;
    //margin-bottom: 1px;
    //margin-right: 1px;
    overflow: hidden;
 
    @media only screen and (max-width: 980px) {
      position: relative;
      float: left;
      width: calc(100% - 0px);
      border-radius: 0;
      margin-bottom: 10px;
      padding: 20px 15px;
    }      
    a {
      //text-decoration: none;
    }
    .chart h2 {
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding: 0;
      margin-bottom: 15px;
      min-width: 100%;
      height: 20px;
    }
    button.delete {
      background: none;
      border: 0;
      position: absolute;
      right: 8px;
      top: 8px;
      cursor: pointer;
      width: 40px;
      height: 40px;
      z-index: 9;
      padding: 12px;
      svg {
        width: 100%;
        height: auto;
      }
      &:hover svg {
        stroke: #ba000d;
      }
    }
  }
}

.seleccionador {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    position: absolute;
    top: 20px;
    left: 20px;
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: lighter;
    color: #888;
  }
  .backdropper {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
    &.active {
      display: block;
    }
  }
  .wrapper.modal {
    display: none;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 650px;
    width: 100%;
    background: #fff;
    border-radius: 3px;
    padding: 25px;
    z-index: 999;
    h3 {
      margin-top: 0;
    }
    &.active {
      display: block;
    }
    > section {
      border-top: 1px solid #eee;
      padding-top: 20px;
    }
    > div {
      display: flex;
      border-top: 1px solid #eee;
      padding-top: 20px;
      margin-bottom: 20px;
      //padding-bottom: 20px;
      > * {
        flex: 1;
      }
    }
    label {
      //display: none;
      font-weight: bold;
      flex: 0.8;
      font-family: Helvetica, Arial, sans-serif;
      padding-right: 40px;
      font-size: 14px;
      span {
        display: block;
        font-weight: lighter;
        padding-top: 5px;
        color: #888;
      }
    }
  }
  button {
    border: 0;
    //background: #edebe4;
    padding: 10px 20px;
    border-radius: 50px;
    color: #666;
    cursor: pointer;
    &:last-of-type {
      background: #009966;
      color: #fff;
    }
    &:hover {
      color: #111;
      background: rgba(253, 216, 53, 1);
    }
  }
  select {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 2px;
    width: 100%;
    //max-width: 200px;
    &:last-of-type,
    &:first-of-type:last-of-type {
      margin: 0;
    }
  }
}

select,
select option {
  color: #262626;
  font-size: 14px;
}

select:invalid,
select option[value=""] {
  color: #999999;
}
.dashtitle {
  margin: 15px 0 15px;
  display: flex;
  justify-content: space-between;
/*   position: fixed;
  z-index: 9999;
  right: 0;
  top: 0;
  height: 60px;
  padding: 14px 20px; */
  button {
    background: #fdd835 !important;
    padding: 8px 15px;
    border: 0;
    color: #111;
    border-radius: 2px;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
      background: #333;
    }
  }
  input {
    background: #333;
    border-left: 1px solid #222;
    padding: 8px 15px;
    border: 0;
    color: #fff;
    margin-left: -5px;
    width: 112px;
    &:focus {
      outline: 0;
    }
  }

  h2 {
    color: #ddd;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 21px;
    text-decoration: none;
    font-weight: 400;
    margin: 0;
    align-self: flex-end;
    span,
    strong {
      color: #ddd;
      font-weight: lighter;
    }
  }
}
</style>