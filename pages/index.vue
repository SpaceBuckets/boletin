<template>
  <div class="pepeboard">

 

<div v-if="$state.activeMode === 'grid'">
  
        <div class="mastersection">
          <template v-for="(key, parent) in $state.savedIndex">
             <nuxt-link class="mincharto" :to="`kpi/${parent}`" :key="`${$state.updated}-${parent}`" v-if="key.feat">
                  <charts-genericLine :index="true" :data="parent" />
              </nuxt-link> 
          </template>

        </div>        
 </div>
 
<div v-if="$state.activeMode === 'table'">


<div class="mastertable">

<section>
  <h2>Indicadores Económicos y Sociales de Argentina</h2>
  <div>

  <table v-if="`${$state.updated}`">
    <thead>
      <tr>
        <th v-for="(column, index) in tableColumns"
          :key="index"
          :class="{'sort-asc': column.field === currentSort && currentSortDir === 'asc', 'sort-desc': column.field === currentSort && currentSortDir === 'desc'}"
          @click="sortTable(column.field)"
        >
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key) in $state.savedIndex" :key="key" @click="handleRow(key)">
        <td><strong>{{ value.t }}</strong>. {{ value.st }}</td>
        <td>{{ value.fu }}</td>
        <td>{{ value.fd }}</td>
        <td>{{ value.frec }}</td>
        <td>{{ value.ul }}</td>
        <td>
          {{ value.u ? Math.round((Date.now() - Date.parse(value.u)) / (24 * 60 * 60 * 1000)) + ' ' + (Math.round((Date.now() - Date.parse(value.u)) / (24 * 60 * 60 * 1000)) === 1 ? 'día' : 'días') : '-' }}
        </td>  
      </tr>
    </tbody>
  </table>
    </div>

</section>
           </div>
 </div>

  </div>
</template>

<script>
import megatable from '~/static/kpitable.json'

export default {
  name: "IndexPage",
  data() {
    return {
      items: megatable,   
    currentSort: 'u', // By default, sort by the 'ul' property
    currentSortDir: 'desc', // By default, sort in descending order    
          tableColumns: [
        { label: 'Indicador', field: 't' },
        { label: 'Fuente', field: 'fu' },
        { label: 'Método', field: 'fd' },
        { label: 'Frecuencia', field: 'frec' },
        { label: 'Último Dato', field: 'ul' },
        { label: 'Actualizado', field: 'u' },
      ],     

      savedCells: {
        1213: {
          area: "1 / 1 / 2 / 3",
          kpi: "header",
          type: "Header",
          hasChart: true,
        },
        1234: {
          area: "1 / 3 / 2 / 4",
          kpi: "sol",
          type: "Sol",
          hasChart: true,
        },
        1257: {
          area: "1 / 5 / 2 / 6",
          kpi: "comment",
          type: "Comment",
          hasChart: true,
        },
        3515: {
          area: "3 / 1 / 5 / 5",
          kpi: "emae",
          type: "Line",
          hasChart: true,
        },
        3557: {
          area: "3 / 5 / 5 / 7",
          kpi: "emae",
          type: "Line",
          hasChart: false,
        },
        5715: {
          area: "5 / 1 / 7 / 5",
          kpi: "cambio",
          type: "Line",
          hasChart: true,
        },
        5757: {
          area: "5 / 5 / 7 / 7",
          kpi: "cambio",
          type: "Table",
          hasChart: true,
        },
        7914: {
          area: "7 / 1 / 9 / 4",
          kpi: "balanza",
          type: "Line",
          hasChart: true,
        },
        7947: {
          area: "7 / 4 / 9 / 7",
          kpi: "deficit",
          type: "Line",
          hasChart: true,
        },
        91114: {
          area: "9 / 1 / 11 / 4",
          kpi: "ipc",
          type: "Line",
          hasChart: true,
        },
      },
    };
  },
  methods: {
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
    getSortedItems(resort) {
      // Convert the items object to an array
      if (resort === 'original') {
        var itemsArray = Object.values(this.$state.savedIndex);
      }
      if (resort === 'results') {
        var itemsArray = Object.values(this.$state.searchedResults);
      }
      //console.log(itemsArray)
      // Sort the array based on the currentSort and currentSortDir
      return itemsArray.sort((a, b) => {
        const aValue = a[this.currentSort];
        const bValue = b[this.currentSort];

        if (this.currentSortDir === 'asc') {
          return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
        } else {
          return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
        }
      });
    },
    handleRow(pepe) {
      var searchTermParent = this.findRootParent(pepe)
      this.$router.push({ path: `/${searchTermParent}/${pepe}` })
  
    },    
    sortTable(column) {
      if (column === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      } else {
        this.currentSortDir = 'asc';
        this.currentSort = column;
      }
    },
  },
 
};
</script>

<style lang="scss">

.pepeboard {
 h1 {
    color: #D3D3D3;
    font-size: 22px;
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: normal;
    //font-family: "montserrat"
}
h1 + p {
    color: #999;
    margin-bottom: 15px;
    strong {
          color: #999;

    }
}
}
.mastersection {
  display: flex;
  gap: 15px;
  //border-bottom: 1px solid #333;
  //padding-bottom: 20px;
  flex-wrap: wrap;
  @media only screen and (max-width: 980px) {
    //display: block;
  }
  > * {
    flex: 1;
        min-width: calc(50% - 10px);
                max-width: calc(50% - 10px);

  }
}
.pepeboard {
  //max-width: 1366px;
  margin: 0;
  
}
.pepeboard > a {
  color: #D3D3D3;
  margin-top: 0;
  padding-top: 20px;
  font-weight: normal;
  margin-bottom: 15px;
  font-size: 18px;
  display: block;
  &:first-of-type { padding-top: 0; }
  &:hover {
    text-decoration: underline;
  }
}
.mincharto {
  position: relative;
        max-width: calc(50% - 10px);
        min-width: calc(50% - 10px);
  min-height: 400px;
  max-height: 420px;
  background: #fff;
  padding: 20px;
  border-radius: 6px;
  //margin-bottom: 15px;
  text-decoration: none;
  display: block;
  overflow: hidden;
  &.mega {
    width: 100%;
  min-height: 465px;
  max-height: 465px;    
  }
  @media only screen and (max-width: 980px) {
    min-width: 100% !important;
    max-width: 100% !important;
    border-radius: 0 !important;
    display: flex !important;
    padding: 15px !important;
  }
  .updatedPill {
    display: block !important;
  }
  .rangeselector {
    display: none !important;
  }
}

.rewelcome {
  border: 1px solid #333;
  border-radius: 2px;
  color: #D3D3D3;
  padding: 15px;
  font-size: 16px;
  position: relative;
  left: 0;
  padding-right: 25%;
  background: #000;
  strong,
  p {
    color: #D3D3D3;
    margin: 0;
  }
  h1 {
    color: #D3D3D3;
    margin: 0;
    margin-bottom: 10px;
    font-weight: normal;
    font-size: 30px;
  }
  svg {
    position: absolute;
    top: 0;
    width: 75px;
    height: auto;
    right: 20px;
    padding: 5px;
  }
}

.mastertable {
  background: #fff;
  border-radius: 6px;
  padding: 20px;
  h2 {
        border-bottom: 1px solid #eee;
    //margin-bottom: 15px;
    padding-bottom: 15px !important;
    
  }
  table {
    width: 100%;
    border-spacing: 0; border-collapse: collapse;

  
  }
  th,td {
    padding: 10px 15px;
    border-bottom: 1px solid #eee;
    text-align: left;
     &:nth-child(2) {
      max-width: 200px;
    }

  }
  tr:not(:only-child) {
    cursor: pointer;
    &:hover {
      background: #fafafa;
    }
  }
}

.mastertable thead th {
  position: sticky;
  top: 0;
  background-color: #fff; /* To ensure the header covers the content when scrolling */
  z-index: 10;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
}

.mastertable tbody {
  display: block;
  max-height: 600px; /* Adjust this value to control the height of the tbody */
  overflow-y: auto;
}

.mastertable thead,
.mastertable tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

.mastertable th:first-child,
.mastertable td:first-child {
  width: 420px;
  padding-left: 0;
  word-wrap: break-word;
}

.mastertable thead th.sort-asc::after,
.mastertable thead th.sort-desc::after {
  content: "";
  display: inline-block;
  margin-left: 3px;
  vertical-align: middle;
  width: 0;
  height: 0;
  border-style: solid;
}

.mastertable thead th.sort-asc::after {
  border-width: 4px 4px 0 4px;
  border-color: #888 transparent transparent transparent;
}

.mastertable thead th.sort-desc::after {
  border-width: 0 4px 4px 4px;
  border-color: transparent transparent #888 transparent;
}

.pepecell {
  padding: 20px;
  background: #1C1C1C;
  border-radius: 6px;
  margin-bottom: 10px;
  p {
    margin-bottom: 0 !important;
  }
}
</style>