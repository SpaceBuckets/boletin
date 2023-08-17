<template>
  <div class="pepecontainer" :class="{index}">
  
    <!-- Header and filters -->    
    <div class="flexer">
      <h2 v-if="!index"><strong>{{ staticKpi.t }}</strong>. Serie de Tiempo</h2>
      <h2 v-if="index"><strong>{{ staticKpi.t }}</strong>. {{ staticKpi.st }}</h2>
      <i v-if="index">{{ processedDate() }}</i>
   
      <!-- Aggregation -->    
      <div class="innerflexer" v-if="index === undefined">  
        <div class="subinnerflexer">
          <div class="date-agg" 
            :class="{active: selectedRange === item}"
            v-for="item in ranges" 
            @click="filters.start = startDates[item];selectedRange = item">
            {{item}} 
          </div>
        </div>

        <!-- Start & End Dates -->    
        <div class="subinnerflexer">
          <div class="date-agg" 
              :class="{active: filters.agg === item}"
              v-for="item in aggregations" 
              v-if="staticKpi.frec === 'Diaria' || (staticKpi.frec === 'Mensual' && item !== 'Diaria') || (staticKpi.frec === 'Anual' && item === 'Anual')"
              @click="filters.agg = item">
              {{item}}
            </div>
        </div>

        <!-- Selected Dates Display -->    
        <div class="date-display"> 
          <div>{{ kpi[0].data[0].x  }}</div>
          <div>↔</div>
          <div>{{ kpi[0].data[kpi[0].data.length - 1].x }} </div>
        </div>

        <!-- Reset Filters -->    
        <button @click="resetFilters()">Reset</button>
      </div>
    </div>
 
    <!--  Chart Containers -->    
    <div class="hypercontainer">
      <div class="chartcontainer" ref="c">
        <template v-if="defaultView">

          <!--  Dragging filter -->    
          <div v-if="index === undefined" class="ranger" :class="{dragging}" :style="{'grid-template-columns': `${axisBottom.map(c => `${c.width}px`).join(' ')} 1fr`,'cursor': recursor}">
            <div  
              v-for="i in axisBottom.length+1"  :key="`${i}-col`"
              @pointerdown="startDrag($event)"
              @pointerup="endDrag($event)"
              @mousemove="hoverling($event)"          
              :data-col-start="getCols(i)"
              :data-col-end="getCols(i) + 1"         
              :data-date-start="getColDate(getCols(i)-2)"          
              :data-date-end="getColDate(getCols(i)-1)"      
            >  
            </div>
            <div ref="reselecter" class="reselecter-cell"></div>
          </div>

          <!-- Main SVG Chart -->    
          <svg 
            id="chart" 
            :width="chartWidth" 
            :height="chartHeight" 
            :viewBox="`0 0 ${chartWidth } ${chartHeight}`"
          >
            <clipPath id="clip">
              <rect :x="`${axisBottom[0].width}px`" y="0" :height="chartHeight" :width="chartWidth-50-axisBottom[0].width"></rect>
            </clipPath>  

            <!-- Chart Axis -->    
            <g class="axis xAxis">
              <g v-for="tick in axisBottom" :transform="`translate(${tick.left},${chartHeight-20})`" :data-date="tick.value">
                  <line :y2="-(chartHeight - 20)"></line>
                  <text x="5" dy="0.71em">{{tick.value}}</text>
              </g>            
            </g>
            <g class="axis yAxis" :class="{even: axisRight.length % 2 === 0, odd: axisRight.length % 2 !== 0}">
              <g v-for="tick in axisRight" :transform="`translate(${chartWidth-30},${tick.top})`">
                  <line :x2="-(chartWidth - 30)"></line>
                  <text x="5" dy="0.32em">{{tick.value}}</text>
              </g>            
            </g>

            <!-- Chart Dimensions -->    
            <path 
              v-for="(d, rekpi) in kpi" 
              clip-path="url(#clip)"               
              :d="d.path"
              :key="`${rekpi}`"
              :style="{
                'stroke': d.color || '#2E78D2',
                'stroke-width': d.borderWidth || '1.5',
                }"
            />
          </svg>   
        </template>
      </div>
 
      <!-- Chart Sidebar -->    
      <charts-genericLineSidebar v-if="!index" :data="data"/>
    </div>

    <!-- Index Legends -->    
    <div class="legends" v-if="index" style="min-height:14px;">
      <div class="single-legend" v-for="(kpi,parent) in kpi" :key="`${kpi.label}`">
        <span class="circle" :style="{background: kpi.color }"></span> <span>{{kpi.label}}</span> 
      </div>
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
      kpi: require(`~/static/data/${this.data}.json`).dimensions, 
      staticKpi: JSON.parse(JSON.stringify(require(`~/static/data/${this.data}.json`))),
      startX: '',
      dragDates: [],
      axisBottom: [],
      axisRight: [],      
      dragging: false,
      defaultView: false,
      animation: true,
      zoomLevel: 0,
      chartHeight: null,
      chartWidth: null,
      recursor: 'crosshair',
      ranges: ['Max','8A','4A','12M','6M'],
      aggregations: ['Diaria','Mensual','Anual'],
      selectedRange: 'Max',
      filters: {
        start: null,
        end: null,
        agg: null,
      },
     }
  },
  mounted() { 
    this.$nextTick(() => {
   
    //Set chart dimensions based on container
    this.chartHeight = this.$refs.c.clientHeight
    this.chartWidth = this.$refs.c.clientWidth
    
    //Set filter defaults 
    this.filters.start = this.$state.kpidates[this.data]
    this.filters.agg = this.staticKpi.frec
       });    
  },
  watch: {
    //Refetch data based on filter change
    filters: {
      handler: 'refreshData',
      deep: true,
    },    
  },  
  computed: {
    startDates() {
      const date = new Date(this.kpi[0].data[this.kpi[0].data.length - 1].x);
      const subtractDate = (years, months) => (date.setFullYear(date.getFullYear() - years, date.getMonth() - months), date.toISOString().slice(0, 10));
      return {
        '6M': subtractDate(0, 5),
        '12M': subtractDate(1, 0),
        '4A': subtractDate(3, 0),
        '8A': subtractDate(7, 0),
        'Max': null,
      };
    },
  },  
  methods: {  
    getCols(i) {
      return Math.ceil(i % (this.axisBottom.length+1)) || this.axisBottom.length+1;
    },
    getColDate(i) {
      return this.axisBottom[i]?.date ?? this.kpi[0].data[this.kpi[0].data.length - 1].x;
    },        
    processedDate() {
      const date = new Date(this.kpi[0].data[this.kpi[0].data.length - 1].x);
      return this.staticKpi.frec === 'Mensual' ? date.toLocaleString('es', {month: 'long', year: 'numeric' }).replaceAll("de", '') :
            this.staticKpi.frec === 'Anual' ? `Año ${date.toLocaleDateString('es', {year: 'numeric' }).replaceAll("de", '')}` :
            date.toLocaleDateString('es', {day: 'numeric', month: 'long', year: 'numeric' }).replaceAll("de", '');
    },
    resetFilters(){
      this.filters.start = null
      this.filters.end = null
      this.filters.agg = this.staticKpi.frec
    },    
    refreshData() {
      const { start, end, agg } = this.filters;

      //Filter by start and end date range
      const filter = (data, start, end) => data.filter(item => (!start || item.x >= start) && (!end || item.x <= end));

      //Aggregate by daily, monthly and yearly
      const aggregate = (data, period, fruc) =>
        Object.entries(data.reduce((groups, { x, y }) => {
          const key = x.substr(0, period);
          groups[key] = groups[key] || { sum: 0, count: 0 };
          groups[key].sum += y;
          groups[key].count++;
          return groups;
        }, {})).map(([k, { sum, count }]) => ({
          x: period === 4 ? k + '-01-01' : period === 7 ? k + '-01' : k,
          y: parseFloat((fruc === 'mean' ? sum / count : sum).toFixed(2))
        }));

      //Assign filtered values to kpi dimensions
      this.kpi = Object.values(this.staticKpi.dimensions).map(({ label, color, data }) => {
            let filteredData = start || end ? filter(data, start, end) : data;
            if (agg) {
              const period = agg.toLowerCase() === 'anual' ? 4 : agg.toLowerCase() === 'mensual' ? 7 : this.staticKpi.frec === 'Diaria' ? 10 : 7;
              filteredData = aggregate(filteredData, period, this.staticKpi.fruc);
            }
            return { label, color, data: filteredData };
        });

        this.generateChart();

    },
    generateChart() {
      this.zoomLevel = 0

      const timeIntervals = [
        {interval: d3.timeDay, format: '%Y'}, // show year at zoom level 0
        {interval: d3.timeMonth, format: '%b %Y'}, // show month at zoom level 1
        {interval: d3.timeDay, format: '%d %b %Y'} // show day at zoom level 2
      ];
      //Use start and end dates to set selected domain 
      const parseTime = d3.timeParse("%Y-%m-%d")
      const scaleX = d3.scaleTime().domain([parseTime(this.kpi[0].data[0].x),parseTime(this.kpi[0].data[this.kpi[0].data.length - 1].x)]).range([0, this.$refs.c.clientWidth-50]).nice(timeIntervals[this.zoomLevel].interval)

      //create the x axis object with value, translate and cell width
      this.axisBottom = scaleX.ticks().flatMap((d, i, ticks) => ([{
        value: d3.timeFormat(timeIntervals[this.zoomLevel].format)(d),
        date: d.toISOString().substring(0, 10),
        left: scaleX(d),
        width: i > 0 ? scaleX(d) - scaleX(ticks[i-1]) : scaleX(d),
      }]));

      //get min and max values to set selected domain
      const valuesData = this.kpi.flatMap(d => d.data.map(i => i.y));
      const [minValue, maxValue] = [this.kpi.min ?? d3.min(valuesData)*0.9, this.kpi.max ?? d3.max(valuesData)*1.05];

      const scaleY = d3.scaleLinear().domain([minValue, maxValue]).range([this.$refs.c.clientHeight-30, 10]).nice();

      //create the y axis object with value and translate
      this.axisRight = scaleY.ticks().map(d => ({ value: d, top: scaleY(d) }));       

      // create a path generator based on chart type and add it to each dimension
      let pathGenerator = d3.line().x(d => scaleX(parseTime(d.x))).y(d => scaleY(d.y)).defined(d => d.y !== null);

      if (this.kpi.type === 'bar') { pathGenerator = d3.area().x(d => scaleX(parseTime(d.x))).y0(scaleY(0)).y1(d => scaleY(d.y)); } 
      if (this.kpi.type === 'area') { pathGenerator = d3.area().x(d => scaleX(parseTime(d.x))).y0(scaleY(minValue)).y1(d => scaleY(d.y)).curve(d3.curveBasis); }
  
      this.kpi = this.kpi.map(d => ({ ...d, path: pathGenerator(d.data) }));

      // create a path generator based on chart type and add it to each dimension
      this.defaultView = true  

    },    
    startDrag(e) {
      this.dragging = true;
      this.startX = e.clientX;
      this.$refs.reselecter.style.gridColumnStart = e.target.dataset.colStart;
      this.$refs.reselecter.style.gridColumnEnd = e.target.dataset.colEnd;
      this.$refs.reselecter.style.display = "block";
      this.recursor = 'col-resize'
      this.dragDates[0] = e.target.dataset.dateStart
    },
    endDrag(e) {
      this.dragging = false;
      this.startX = '';
      this.$refs.reselecter.style.display = "none";
      this.dragDates[1] = e.target.dataset.dateEnd
      this.dragDates = this.dragDates.sort()
            if (this.kpi[0].data.length > 14) {
          this.zoomLevel = Math.min(this.zoomLevel + 1, 2);
          this.filters.start = this.dragDates[0]
          this.filters.end = this.dragDates[1]
      } 

      this.recursor = 'crosshair'
     },
    hoverling(e) {
      if (this.dragging) {
        var xDir = this.startX - e.clientX;
        this.$refs.reselecter.style.gridColumnStart = xDir > 0 ? e.target.dataset.colStart : this.$refs.reselecter.style.gridColumnStart;
        this.$refs.reselecter.style.gridColumnEnd = xDir < 0 ? e.target.dataset.colEnd : this.$refs.reselecter.style.gridColumnEnd;
       }
    },
  }
}
</script>

 <style lang="scss">

.pepecontainer {
  display: flex;
  height: 100%;
  gap: 15px;
  flex-direction: column;
  .hypercontainer {
    height: 100%;
    max-height:470px;
    gap: 20px;
    overflow: hidden;
    > * { flex: 1; }
  }
  &.index .chartcontainer {
    width: calc(100% - 0px);
  }
}

.chartcontainer {
  height: 100%;
  position: relative;
  float: left;
  width: calc(100% - 320px);
  margin-right:20px;
  @media only screen and (max-width: 980px) {
    min-height: 300px;
    width: calc(100% - 0px);
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
  &.animation path { transition: all .4s linear;  }
  path { 
    fill: none;
    stroke-linejoin: round;    
  }
  &.area path { fill: rgba(46,120,210,0.05); }
  text { 
    color: #aaa;   
    fill: #aaa; 
    font-size: 15px;
  }
  line{
    stroke: #ddd;
    stroke-width: 0.5px;
    stroke-dasharray: 2px;
  }
}

.legends {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  @media only screen and (max-width: 980px) {
    flex-wrap: wrap;
    margin-bottom: 10px;
    justify-content: flex-start;
    span + span { min-width: max-content; }
  }     
  .single-legend {
    flex: 1;
    display: flex;
    align-items:center;
    max-width: max-content;
    font-size: 12px;
    color: #888;
    span { color: #888; }
    .circle {
      display: inline-block;
      min-width: 12px;
      min-height: 12px;
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

@media only screen and (max-width: 980px) {

  .index .flexer  > * { flex: 1; max-width: 100%; }
  
} 

.flexer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  @media only screen and (max-width: 980px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 5px;
    padding-bottom: 10px;
  }     
  > * { flex: 1; max-width: max-content; }
  i {
    font-style: normal;
    font-size: 14px;
    text-transform: capitalize;
    color: #aaa;
  }
  .innerflexer {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    @media only screen and (max-width: 980px) {
      flex-wrap: wrap;
      margin-top: 5px;
    }       
    > * { flex: 1; color: #aaa; border-radius: 1px; }
    .subinnerflexer {
      display: flex;
      align-items: center;
      outline: 1px solid #eee;
      gap: 0px;
      font-size: 14px;
      @media only screen and (max-width: 980px) {
        & + .subinnerflexer { display: none; }
      }       
      > * { flex: 1; color: #bbb; border-radius: 1px; }      
    }
  }
  .date-agg {
    padding: 5px 12px;
    max-width: max-content;
    user-select: none;
    cursor: pointer;
    text-transform: capitalize;
    &.active { background: #eee;color:#888 }
    @media only screen and (max-width: 980px) {
      max-width: 100%;
      text-align: center;
    }
    i {
      color: #bbb;
      font-style: normal;
      line-height: 0;
    }
  }
  .date-display {
    outline: 1px solid #eee;
    padding: 5px 15px;
    max-width: max-content;
    user-select: none;
    text-align: center;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content:space-between;
    @media only screen and (max-width: 980px) {
      max-width: 100%;
      text-align: center;
    }    
    > div {
      flex: 1;
      color: #bbb;
      min-width: max-content;
    }
    i {
      color: #aaa;
      font-style: normal;
      line-height: 0;
    }
  }
  button {
    max-width: max-content;
    outline: 1px solid #eee;
    background: #fff;
    border: none;
    cursor: pointer;
    padding: 5px 12px;
    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
      color: #aaa;
    }
    &:hover { background: #f5f5f5; }
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
    &:hover { background: #f3f3f330; }
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

#chart g[data-date="1990"] line,
#chart g[data-date="2000"] line,
#chart g[data-date="2004"] line,
#chart g[data-date="2016"] line,
#chart g[data-date="2020"] line,
#chart g[data-date="2024"] line {
    stroke-dasharray: 0px;
}

@for $year from 1980 through 2030 {
  g[data-date="#{$year}"] ~ g[data-date="#{$year}"] { opacity: 0; }
}

.axis.yAxis.even g:nth-child(2n+1),
.axis.yAxis.odd g:nth-child(2n+2) {
  opacity: 0;
}
 
</style>