<template>
  <div class="megacontainer">
     <div class="flexer">
      <h2><strong>{{ kpi.t }}</strong>. Serie de Tiempo</h2>
      <div class="innerflexer" v-if="index === undefined">   
          <div v-if="defaultView" class="date-display"> {{ allDates[dateIndex[0]] }}&nbsp;&#8211&nbsp;{{ allDates[dateIndex[1]] }} </div>
          <button @click="remount()">Reset</button>
       </div>
    </div>
    <div class="chartcontainer" ref="c">
      <template v-if="defaultView">
        <div v-if="index === undefined" class="ranger" :class="{dragging}" :style="{'grid-template-columns': `${this.cells.slice(0, -1).map(c => `${c}px`).join(' ')} 1fr`,'cursor': recursor}">
         <div  
            v-for="cell in cells.length"  :key="`${cell}-col`"
            @pointerdown="startDrag($event)"
            @pointerup="endDrag($event)"
            @mousemove="hoverling($event)"          
            :data-col-start="getCols(cell)"
            :data-col-end="getCols(cell) + 1"         
            :data-date-start="getColDate(getCols(cell)-2)"          
            :data-date-end="getColDate(getCols(cell)-1)"      
          >  
          </div>
          <div ref="reselecter" class="reselecter-cell"></div>
        </div>
        <svg 
          id="chart" 
          :class="{animation}"
          :width="$refs.c.clientWidth" 
          :height="$refs.c.clientHeight" 
          :viewBox="`0 0 ${$refs.c.clientWidth } ${$refs.c.clientHeight}`"
        >
          <clipPath id="clip">
            <rect :x="`${cells[0]}px`" y="0" :height="$refs.c.clientHeight" :width="$refs.c.clientWidth-50-cells[0]"></rect>
          </clipPath>  

          <g class="axis xAxis"><g :transform="`translate(0,${$refs.c.clientHeight-20})`" v-for="(ticks,u) in axisBottom" v-html="ticks.outerHTML" :key="`${u}`"></g></g>
          <g class="axis yAxis" :transform="`translate(${$refs.c.clientWidth-30},0)`"><g v-for="(ticks,j) in axisRight" v-html="ticks.outerHTML" :key="`${j}`"></g></g>

          <path 
            v-for="(d, rekpi) in kpi.dimensions" 
            clip-path="url(#clip)"               
            :d="d.path"
            :key="`${rekpi}`"
            :style="{
              'stroke': d.color ? d.color : '#333',
              'stroke-width': d.borderWidth ? d.borderWidth : '1.5',
              }"
          />
        </svg>   
      </template>
    </div>
    <div class="legends" v-if="index" style="min-height:14px;">
      <template v-if="kpi">
        <div class="single-legend" v-for="(kpi,parent) in kpi.dimensions" :key="`${kpi.label}`">
          <span class="circle" :style="{background: kpi.color }"></span> {{kpi.label}}
        </div>
      </template>
    </div>  
  </div>

</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'newLine',
  props: ['title', 'subtitle', 'data','index'],  
  data() {
    return {
      kpi: require(`~/static/data/${this.data}.json`), 
      dates: require(`~/static/data/${this.data}.json`).dimensions, 
      startX: '',
      dateStart: '',
      dateEnd: '', 
      dateIndex: [],
      allDates: [],
      cells: [],
      maxValue: '',
      minValue: '',
      axisBottom: [],
      axisRight: [],      
      dragging: false,
      inverseSelection: false,
      defaultView: false,
      animation: true,
      maxZoom: false,
      recursor: 'crosshair'
    }
  },
  mounted() { 
    if (this.kpi.dimensions[0].data.length > 2000) { this.animation = false }
    this.remount() 
  },
  methods: {
    setMinMax() {
      const subset = this.kpi.dimensions.flatMap(d => d.data.slice(this.dateIndex[0], this.dateIndex[1] + 1).map(i => i.y));
      this.maxValue = Math.max(...subset);
      this.minValue = Math.min(...subset);
    },    
    getCols(i) {
      return Math.ceil(i % this.cells.length) || this.cells.length;
    },
    getColDate(i) {
      if (i < 0) { i = 0 }
      if (this.axisBottom[i]) { return this.axisBottom[i]['__data__'].toISOString().substring(0, 10)  }
      else { return this.allDates[this.allDates.length-1] }  
    },    
    remount() { 
      this.allDates = this.dates[0].data.slice().map(item => item.x).sort((a, b) => new Date(a) - new Date(b))
 
      //reset min and max dates for brushing
      this.dateIndex.splice(0)
      this.maxZoom = false

      //get global min start date 
      if(this.$state.kpidates[this.data]) { 
        this.dateStart = this.$state.kpidates[this.data]
        
        this.dateIndex.push(this.allDates.findIndex(date => date.startsWith(this.dateStart.slice(0, 7))))
        this.dateIndex.push(this.allDates.length-1)
        this.dateIndex.sort(function(a, b) { return a - b; });

      } else {
        this.dateIndex.push(0)
        this.dateIndex.push(this.allDates.length-1)
      }

      //create chart and enable render
      this.generateChart()
      this.defaultView = true    
    },
    generateChart() {
      //create X axis with start and end dates
      const parseTime = d3.timeParse("%Y-%m-%d")
      this.dateStart = parseTime(this.allDates[this.dateIndex[0]])
      this.dateEnd = parseTime(this.allDates[this.dateIndex[1]])
      const scaleX = d3.scaleTime().domain([this.dateStart,this.dateEnd]).range([10, this.$refs.c.clientWidth-50])
      this.axisBottom = [...d3.create("svg").call(d3.axisBottom(scaleX).tickPadding(5).tickSizeInner(-this.$refs.c.clientHeight))._groups[0][0].children].slice(1);

      //set cell width sizes by substracting X axis tick translates
      this.cells = this.axisBottom.map((item, index) => {
        const value = Number(item.attributes[2].value.match(/-?\d+(\.\d+)?/)[0]);
        const previousValue = Number(this.axisBottom[index - 1]?.attributes[2].value.match(/-?\d+(\.\d+)?/)[0]);
        return previousValue ? value - previousValue : value;
      }).concat('initial');

      //create Y axis with min and max values
      this.setMinMax() 
      const scaleY = d3.scaleLinear().domain([this.minValue*0.9, this.maxValue*1.05]).range([this.$refs.c.clientHeight-30, 10]).nice();
      this.axisRight = [...d3.create("svg").call(d3.axisRight(scaleY).tickPadding(5).tickSizeInner(-this.$refs.c.clientWidth))._groups[0][0].children].slice(1);

      //draw a line for each of the chart kpi
      const pathGenerator = d3.line().x(d => scaleX(parseTime(d.x))).y(d => scaleY(d.y)).defined(d => d.y !== null)
;

      for (let i in this.kpi.dimensions) {
          this.kpi.dimensions[i] = { 
            ...this.kpi.dimensions[i],
            path: pathGenerator(this.kpi.dimensions[i].data)
          }   
      }
    },    
    startDrag(e) {
      this.dragging = true;
      this.startX = e.clientX;
      this.$refs.reselecter.style.gridColumnStart = e.target.dataset.colStart;
      this.$refs.reselecter.style.gridColumnEnd = e.target.dataset.colEnd;
      this.$refs.reselecter.style.display = "block";
      this.recursor = 'col-resize'
      this.dateStart = e.target.dataset.dateStart
      this.dateStartInverted = e.target.dataset.dateEnd
     },
    endDrag(e) {
      this.defaultView = false;
      this.dragging = false;
      this.startX = '';
      this.$refs.reselecter.style.display = "none";
      this.dateEnd = e.target.dataset.dateEnd

      if (this.inverseSelection) { 
        this.dateEnd = e.target.dataset.dateStart
        this.dateStart = this.dateStartInverted
      }  
 
      //Reset dateIndex and try to find exact dates
      this.dateIndex.splice(0)
      this.dateIndex.push(this.allDates.findIndex(date => date.startsWith(this.dateStart.slice(0, 7))))
      this.dateIndex.push(this.allDates.reduceRight((lastIndex, date, index) => lastIndex === -1 && date.startsWith(this.dateEnd.slice(0, 7)) ? index : lastIndex, -1))

 
      this.dateIndex.sort(function(a, b) { return a - b; });

      if (this.dateIndex[0] !== this.dateIndex[1]) {
        this.generateChart()
      } 
      
      this.recursor = 'crosshair'
      this.defaultView = true;
    },
    hoverling(e) {
      if (this.dragging) {
        var xDir = this.startX - e.clientX;
        this.$refs.reselecter.style.gridColumnStart = xDir > 0 ? e.target.dataset.colStart : this.$refs.reselecter.style.gridColumnStart;
        this.$refs.reselecter.style.gridColumnEnd = xDir < 0 ? e.target.dataset.colEnd : this.$refs.reselecter.style.gridColumnEnd;
        this.inverseSelection = xDir > 0;
       }
    },
  }
}
</script>

 <style lang="scss">

 .chartcontainer {
  height: 100%;
  position: relative;

      @media only screen and (max-width: 980px) {
      min-height: 300px;

    }   
 }
 
 h2 {
  border: 0;
  padding-bottom: 0 !important;
  margin-top: 0;
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: normal;
}

#chart {
  pointer-events:none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  user-select:none;  
  //overflow: visible;
  &.animation path {
        transition: all .4s linear; 
  }
  path { 
    fill: none;
    stroke-linejoin: round;    
  }
  text { 
    color: #aaa;    
    font-size: 15px;
  }
  line{
    stroke: #ddd;
    stroke-width: 0.5px;
    stroke-dasharray: 2px;
  }
  .yAxis line {
        //stroke-dasharray: 2px;

  }
}

.legends {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  .single-legend {
    flex: 1;
    display: flex;
    align-items:center;
    max-width: max-content;
    font-size: 12px;
    color: #888;
    .circle {
      display: inline-block;
      width: 12px;
      height: 12px;
      background:#0074D9;
      border-radius: 50px;
      margin-right: 5px;
    }    
  }

}

.megacontainer {
  height:100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
 
}

 .flexer {
  display: flex;
  justify-content: space-between;
  > * { flex: 1; max-width: max-content; }
  .innerflexer {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    > * { flex: 1; color: #aaa; border-radius: 1px; }
  }
  .date-display {
    background: rgb(245,245,245);
    padding: 5px 12px;
  }
  button {
    max-width: max-content;
    background: rgb(245,245,245);
    border: none;
    cursor: pointer;
    padding: 5px 12px;
    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
      color: #aaa;
    }
    &:hover {
      background: #f5f5f5;
    }
  }
}
 
 

.ranger {
  display: grid;
  position: absolute;
  top: 0;
  left: 0px;
  right: 50px;
  bottom: 25px;
  > div {
    flex: 1;
    display: grid;
    &:first-child { pointer-events: none; }
    &:hover { background: #f3f3f350; }
    &.reselecter-cell {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 0, 0.15);
      border-left: 2px solid rgba(255, 255, 0, .25);
      border-right: 2px solid rgba(255, 255, 0, .25);
      display: none;
      pointer-events: none;
    }
  }
  &.dragging > div:hover { background: transparent; } 
}

 </style>