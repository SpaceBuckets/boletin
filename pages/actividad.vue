<template>
  <div class="pepeboard">
 
 

    <template v-for="(indexItem, i) in savedIndex">
<!--         <h2>{{ indexItem.title }}</h2>
 -->        <div class="mastersectione">
           <div class="minchartoe" v-for="indexChart in savedIndex[i].items" :key="`a-${indexChart}`">
                <charts-genericLineHeader :data="indexChart" />
            </div> 
        </div>
    </template>

           
  </div>
</template>

<script>
import megatable from '~/static/tableObject.json'

export default {
  name: "IndexPage",
  data() {
    return {
      items: megatable,      
      savedIndex: [
 
        {
          title: "Actividad Económica",
          items: ["emae", "cambio","tcrm",'balanza',"tasa","basemonetaria",'ipc','petroleo'],
        },
 
      ],
    
    };
  },
};
</script>

<style lang="scss" scoped>
.searcher {
  //background: red;
  color: #eee;
  max-width: 1240px;
  margin: 0 auto 20px;
  border-bottom: 1px solid #333;
  padding-bottom: 20px;
  input {
    background: #333;
    font-size: 20px;
    width: 100%;
    border: 0;
    border-radius: 2px;
    padding: 10px;
  }
  p {
    color: #eee;
    display: none;
    strong {
      color: #eee;
    }
  }
}
 .meganav {
  display:none !important;
 }
.mastersectione {
  display: block;
  gap: 15px;
  //border-bottom: 1px solid #333;
  padding-bottom: 20px;
  @media only screen and (max-width: 980px) {
    display: block;
  }
  > * {
    flex: 1;
  }
}
.pepeboard {
  //max-width: 1440px;
  margin: 0;
}
.pepeboard > h2 {
  color: #eee;
  margin-top: 0;
  padding-top: 20px;
  font-weight: normal;
  &:first-of-type { padding-top: 0; }
}
.minchartoe {
  position: relative;
  width: 100%;
  //min-height: 400px;
  //max-height: 420px;
  background: #fff;
  padding: 0;
  border-radius: 4px;
  margin-bottom: 15px;
  text-decoration: none;
  display: block;
  max-width: 1240px;
  overflow: hidden;
  margin: 0 auto 20px;
  @media only screen and (max-width: 980px) {
    width: 100%;
    display: flex;
  }
  .rangeselector {
    display: none !important;
  }
}

.rewelcome {
  border: 1px solid #333;
  border-radius: 2px;
  color: #eee;
  padding: 15px;
  font-size: 16px;
  position: relative;
  left: 0;
  padding-right: 25%;
  background: #000;
  strong,
  p {
    color: #eee;
    margin: 0;
  }
  h1 {
    color: #eee;
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

.retabler {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  h2 {
        margin: 0;
    font-size: 18px;
    min-width: 300px;
    font-weight: 400;
    font-family: Helvetica, Arial, sans-serif;
    color: #888;
    padding-right: 90px;
    margin-bottom: 20px;
  }
  table {
    width: 100%;
    border-spacing: 0; border-collapse: collapse;
  }
  th,td {
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    text-align: left;
     &:nth-child(2) {
      max-width: 200px;
    }
    &:first-child {
      max-width: max-content;
    }
  }
  tr {
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>