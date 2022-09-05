<template>
  <div class="pepeboard">
    <div class="admin-contain">
      <h2>New Post</h2>
      <hr />
      <br />
      <div class="mainflex">
        <div class="pepeflex">
          <div style="max-width: 100px; min-width: auto">
            <input type="text" placeholder="KPI" v-model="newpost.kpi" />
          </div>
          <div style="max-width: 300px; min-width: auto">
            <input type="text" placeholder="Title" v-model="newpost.title" />
          </div>
          <div>
            <input type="text" placeholder="Subtitle" v-model="newpost.subtitle" />
          </div>
          <div style="max-width: 100%; min-width: 100%">
            <textarea placeholder="Description" v-model="newpost.description" />
          </div>
          <div>
            <select name="categories" id="categories" v-model="newpost.category">
              <option value="" disabled selected hidden>Category</option>
              <option v-for="category in categories" :value="category">
                {{ category }}
              </option>
            </select>
          </div>
          <div>
            <input type="text" placeholder="Fuente" v-model="newpost.fuente" />
          </div>
          <div>
            <input type="text" placeholder="Fuente URL" v-model="newpost.fuenteURL" />
          </div>
          <div class="submit-container">
            <button class="submit" @click="testApi()">Create Post</button>
          </div>
        </div>
        <div class="postsidebar">
          <div style="margin-bottom: 15px">
            <select name="cars" id="cars" v-model="newpost.selectedParser">
              <option value="" disabled selected hidden>Parser</option>

              <option value="datosGobarAPI">DatosGobarAPI</option>
              <option value="datosGobarCSV">DatosGobarCSV</option>
              <option value="scrapeBCRA">scrapeBCRA</option>
              <option value="genericXLS">genericXLS</option>
              <option value="parseWorldBank">parseWorldBank</option>
            </select>
          </div>

          <div v-if="newpost.selectedParser === 'genericXLS'" style="display: flex; gap: 5px; margin-bottom: 10px">
            <input type="text" placeholder="URL" v-model="selectedMethod['genericXLS']['url']">
            <input type="text" placeholder="Sheet" v-model="selectedMethod['genericXLS']['sheet']">
            <input type="text" placeholder="Date Column" v-model="selectedMethod['genericXLS']['date']">
          </div>

          <div v-if="newpost.selectedParser === 'datosGobarCSV'" style="display: flex; gap: 5px; margin-bottom: 10px">
            <input type="text" placeholder="URL" v-model="selectedMethod['datosGobarCSV']['url']">
            <input type="text" placeholder="Date Column" v-model="selectedMethod['datosGobarCSV']['date']">

          </div>

          <div class="values">
            <div
              v-for="(item, parent) in selectedMethod[newpost.selectedParser].items"
              style="display: flex; gap: 5px; margin-bottom: 10px"
            >
              <input
                type="text"
                placeholder="Name"
                style="max-width: 100px"
                v-model="selectedMethod[newpost.selectedParser].items[parent]['name']"
              />
              <input
                type="text"
                placeholder="ID"
                v-model="selectedMethod[newpost.selectedParser].items[parent]['id']"
              />
              <button class="deleteitem" @click="$delete(selectedMethod[newpost.selectedParser].items, parent)">x</button>
            </div>
            <button
              class="additem"
              @click="
                selectedMethod[newpost.selectedParser].items.push({ name: '', id: '' })
              "
            >
              Add Metric
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      categories: require(`~/static/categories.json`),
      newpost: {
        kpi: "",
        title: "",
        subtitle: "",
        description: "",
        category: "",
        fuente: "",
        fuenteURL: "",
        selectedParser: "datosGobarAPI",
      },
      selectedMethod: {
        datosGobarAPI: {
          items: [
            {
              name: "",
              id: "",
            },
          ],
        },
        datosGobarCSV: {
          url: "",
          date: '',
          items: [
            {
              name: "",
              id: "",
            },
          ],
        },
        scrapeBCRA: {
          items: [
            {
              name: "",
              serie: "",
            },
          ],
        },
        genericXLS: {
          url: "",
          sheet: '',
          date: '',
          items: [
            {
              name: "",
              id: "",
            },
          ],
        },
        parseWorldBank: {
          items: [
            {
              name: "",
              id: "",
            },
          ],
        },
      },
    };
  },
  updated() {
  },
  methods: {
    async testApi() {
      console.log("◷ Running...")
    if(this.newpost.selectedParser === 'genericXLS' || this.newpost.selectedParser === 'datosGobarCSV') { 
      this.newpost['items'] = this.selectedMethod[this.newpost.selectedParser]

    } else {
      this.newpost['items'] = this.selectedMethod[this.newpost.selectedParser].items
    }
      const pepe = await this.$axios.post(`/api/test`, this.newpost);
      window.location.reload(true);
    },
  },
};
</script>

<style lang="scss">
.admin-contain {
  background: #fafafa;
  padding: 25px 30px;
  position: relative;
  hr {
    border-bottom: 0;
    border-top: 1px dashed #ccc;
  }
  h2 {
    margin: 0;
    margin-bottom: 20px;
  }
  label {
    display: inline-block;
    margin-bottom: 3px;
    font-size: 16px;
  }
  select,
  input {
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 2px;
    font-size: 16px;
    &:focus {
      outline: 0;
      background: #00ff000a;
    }
  }
}

.pepeflex {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  > * {
    flex: 1;
    min-width: calc(33% - 15px);
  }
}

textarea {
  display: block;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 10px;
  font-size: 16px;

  width: 100%;
  resize: none;
  height: 150px;
  font-family: arial, helvetica, sans-serif;
  &:focus {
    outline: 0;
    background: #00ff000a;
  }
}

.submit-container {
  padding-top: 20px;
  border-top: 1px dashed #ccc;
}
.submit {
  border: 0;
  background: green;
  color: #fff;
  border-radius: 4px;
  padding: 12px 20px;
  cursor: pointer;
  z-index: 9999;
  width: 100%;
  font-size: 16px;
  &:hover {
    background: darkgreen;
  }
}

.values {
  min-width: 100%;
}

.mainflex {
  display: flex;
  gap: 20px;
  > div {
    flex: 1;
    &:last-child {
      max-width: 300px;
    }
  }
}

.postsidebar {
  border-left: 1px dashed #ccc;
  padding-left: 20px;
}

.additem {
  border: 1px dashed #ccc;
  background: transparent;
  cursor: pointer;
  padding: 10px 20px;
  color: #aaa;
  border-radius: 4px;
  width: 100%;
  &:hover {
    background: darkgreen;
    color: #fff;
  }
}

.deleteitem {
  border: 0;
  cursor: pointer;
  color: #aaa;
  cursor: pointer;
  background: transparent;
  padding: 0 5px;
  &:hover {
    color: darkred;
  }
}
</style>