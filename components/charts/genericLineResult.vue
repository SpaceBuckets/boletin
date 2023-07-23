<template>
<div class="pepecontainer" :class="{index}">
    <div class="flexer">
      <h2 v-if="!index"><strong>{{ kpi.t }}</strong>. Serie de Tiempo</h2>
      <h2 v-if="index"><strong>{{ kpi.t }}</strong>. {{ kpi.st }}</h2>
      <i v-if="index">
{{ processedDate() }}      </i>
   
      <div class="innerflexer">  

        <div class="subinnerflexer">
          <div class="date-agg" 
            :class="{active: selectedRange === item}"
            v-for="item in ranges" 
            @click="handleRange(item)"> 
            {{item}} 
          </div>
 
        </div>
        <div class="subinnerflexer">

         <div class="date-agg" 
              :class="{active: dataAggFrec === item}"
              v-for="item in aggregations" 
              v-if="staticKpi.frec === 'Diaria' || (staticKpi.frec === 'Mensual' && item !== 'Diaria') || (staticKpi.frec === 'Anual' && item === 'Anual')"
              @click="handleAgg(item)">
              {{item}}
            </div>
              </div>

          <div v-if="defaultView" class="date-display"> 
            <template v-if="kpi.frec === 'Mensual'">
              <div>{{ allDates[dateIndex[0]].slice(0, 7)  }}</div>
              <div>↔</div>
              <div>{{ allDates[dateIndex[1]].slice(0, 7) }} </div>
            </template>
            <template v-else>
              <div>{{ allDates[dateIndex[0]]}}</div>
              <div>↔</div>
              <div>{{ allDates[dateIndex[1]] }} </div>
            </template>            
          </div>
          <button @click="remount()">Reset</button>
       </div>
    </div>
    <div class="hypercontainer">
 
    <div class="chartcontainer" ref="c">
      <template v-if="defaultView">
 
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
        <svg 
          id="chart" 
          :class="{animation, [kpi.type]: true }"
          :width="chartWidth" 
          :height="chartHeight" 
          :viewBox="`0 0 ${chartWidth } ${chartHeight}`"
        >
          <clipPath id="clip">
            <rect :x="`${axisBottom[0].width}px`" y="0" :height="chartHeight" :width="chartWidth-50-axisBottom[0].width"></rect>
          </clipPath>  

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

          <path 
            v-for="(d, rekpi) in kpi.dimensions" 
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
 
   <charts-genericLineSidebar v-if="!index" :data="data" :metadata="false"/>

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
      staticKpi: JSON.parse(JSON.stringify(require(`~/static/data/${this.data}.json`))),
      startX: '',
      dateStart: '',
      dateEnd: '', 
      dateIndex: [],
      allDates: [],
      axisBottom: [],
      axisRight: [],      
      dragging: false,
      inverseSelection: false,
      defaultView: false,
      animation: true,
      maxZoom: false,
      zoomLevel: 0,
      chartHeight: 0,
      chartWidth: 0,
      recursor: 'crosshair',
      ranges: ['Max','8A','4A','12M','6M'],
      selectedRange: 'Max',
      dataAggFrec: require(`~/static/data/${this.data}.json`).frec,
      dataAggFruc: require(`~/static/data/${this.data}.json`).fruc,
      aggregations: ['Diaria','Mensual','Anual']
    }
  },
  
  mounted() { 
 
    if (this.kpi.dimensions[0].data.length > 2000) { this.animation = false }

 
      this.chartHeight = this.$refs.c.clientHeight
      this.chartWidth = this.$refs.c.clientWidth
      this.remount(false) 
    
 
  },
  computed: {
    startDates() {
      const lastDate = new Date(this.staticKpi.dimensions[0].data.slice(-1)[0].x);
      const formatDate = (date) => date.toISOString().slice(0, 10);

      return {
        '6M': formatDate(new Date(lastDate.getFullYear(), lastDate.getMonth() - 5, 1)),
        '12M': formatDate(new Date(lastDate.getFullYear() - 1, lastDate.getMonth(), 1)),
        '4A': formatDate(new Date(lastDate.getFullYear() - 3, lastDate.getMonth(), 1)),
        '8A': formatDate(new Date(lastDate.getFullYear() - 7, lastDate.getMonth(), 1)),
        'Max': formatDate(new Date(1970, 0, 1)),
      };
    },
  },  
  methods: {  
    
      processedDate() {
        var pepe = new Date(this.kpi.dimensions[0].data[this.kpi.dimensions[0].data.length-1].x).toLocaleDateString('es', {day: 'numeric', month: 'long', year: 'numeric' }).replaceAll("de",'')

        if(this.kpi.frec === 'Mensual') {
          const lastDate = new Date(this.kpi.dimensions[0].data.slice(-1)[0].x + "T00:00:00");

          //lastDate.setMonth(lastDate.getUTCMonth());
          var pepe = lastDate.toLocaleString('es', {month: 'long', year: 'numeric' }).replaceAll("de",'');

        } 
        if(this.kpi.frec === 'Anual') {
          var pepe = `Año ${new Date(this.kpi.dimensions[0].data[this.kpi.dimensions[0].data.length-1].x).toLocaleDateString('es', {year: 'numeric' }).replaceAll("de",'')}`
        }         
        return pepe
      },    
    aggregateData(data) {
      const groupBy = this.dataAggFrec === 'Anual' ? d => d.x.substring(0, 4) : this.dataAggFrec === 'Mensual' ? d => d.x.substring(0, 7) : d => d.x.substring(0, 10);
      
      return Array.from(d3.rollup(data, 
        v => ({ 
          x: v[0].x,          
          y: this.dataAggFruc === "mean" ? d3.mean(v, d => d.y) : d3.sum(v, d => d.y)
        }), 
        groupBy
      ).values()).sort((a, b) => a.x - b.x);
    },
    handleAgg(item) {
      this.dataAggFrec = item
      this.kpi.dimensions = this.staticKpi.dimensions.map(d => ({ ...d }));

      if(item !== this.staticKpi.frec) {
        this.kpi.dimensions = this.kpi.dimensions.map(d => ({ ...d, data: this.aggregateData(d.data) }));
      }

      this.remount(true)
 
    },    
    filterDateData(data,startDate) {
      const filteredData = data.filter(({ x }) => new Date(x) >= new Date(startDate));
      return Array.from(
        d3.rollup(
          filteredData,
          (v) => ({ x: v[0].x, y: v[0].y }),
          (d) => d.x
        ).values()
      ).sort((a, b) => new Date(a.x) - new Date(b.x));
    },
    handleRange(item) {
      this.selectedRange = item
      this.kpi.dimensions = this.staticKpi.dimensions.map(d => ({ ...d }));
      this.kpi.dimensions = this.kpi.dimensions.map(d => ({ ...d, data: this.filterDateData(d.data,this.startDates[item]) }));

      this.remount(true)
    },
    getCols(i) {
      return Math.ceil(i % (this.axisBottom.length+1)) || this.axisBottom.length+1;
    },
    getColDate(i) {
      return this.axisBottom[i]?.date ?? this.allDates[this.allDates.length - 1];
    },    
    remount(ranged) { 
      this.allDates = this.kpi.dimensions[0].data.slice().map(item => item.x).sort((a, b) => new Date(a) - new Date(b))

      //reset min and max dates for brushing
      this.dateIndex.splice(0)
      this.maxZoom = false
      this.zoomLevel = 0

      //get global min start date 
      if(this.$state.kpidates[this.data] && !ranged) { 

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

    
  
    },
    generateChart() {
      const parseTime = d3.timeParse("%Y-%m-%d")
      //console.log(this.yearlyData(this.kpi.dimensions[0].data))
      const timeIntervals = [
        {interval: d3.timeDay, format: '%Y'}, // show year at zoom level 0
        {interval: d3.timeMonth, format: '%b %Y'}, // show month at zoom level 1
        {interval: d3.timeDay, format: '%d %b %Y'} // show day at zoom level 2
      ];
 
      //get start and end dates to set selected domain
      this.dateStart = parseTime(this.allDates[this.dateIndex[0]])
      this.dateEnd = parseTime(this.allDates[this.dateIndex[1]])
 
      const scaleX = d3.scaleTime().domain([this.dateStart,this.dateEnd]).range([0, this.$refs.c.clientWidth-50]).nice(timeIntervals[this.zoomLevel].interval)
        
      //create the x axis object with value, translate and cell width
      this.axisBottom = scaleX.ticks().flatMap((d, i, ticks) => ([{
        value: d3.timeFormat(timeIntervals[this.zoomLevel].format)(d),
        date: d.toISOString().substring(0, 10),
        left: scaleX(d),
        width: i > 0 ? scaleX(d) - scaleX(ticks[i-1]) : scaleX(d),
      }]));
      //get min and max values from all dimensions to set selected domain
      const valuesData = this.kpi.dimensions.flatMap(d => d.data.slice(this.dateIndex[0], this.dateIndex[1] + 1).map(i => i.y));
      const [minValue, maxValue] = [this.kpi.min ?? d3.min(valuesData)*0.9, this.kpi.max ?? d3.max(valuesData)*1.05];

      const scaleY = d3.scaleLinear().domain([minValue, maxValue]).range([this.$refs.c.clientHeight-30, 10]).nice();

      //create the y axis object with value and translate
      this.axisRight = scaleY.ticks().map(d => ({ value: d, top: scaleY(d) }));       

      // create a path generator based on chart type

      let pathGenerator = d3.line().x(d => scaleX(parseTime(d.x))).y(d => scaleY(d.y)).defined(d => d.y !== null);

      if (this.kpi.type === 'bar') {
        pathGenerator = d3.area().x(d => scaleX(parseTime(d.x))).y0(scaleY(0)).y1(d => scaleY(d.y));
      } 
      if (this.kpi.type === 'area') {
        //pathGenerator = d3.area().x(d => scaleX(parseTime(d.x))).y0(scaleY(0)).y1(d => scaleY(d.y)).curve(d3.curveBasis);
        //pathGenerator = d3.area().x(d => scaleX(parseTime(d.x))).y0(scaleY(Math.min(0, minValue))).y1(d => scaleY(d.y)).curve(d3.curveBasis);
          //pathGenerator = d3.area().x(d => scaleX(parseTime(d.x))).y0(scaleY(0)).y1(d => scaleY(d.y)).curve(d3.curveBasis).defined(d => d.y !== null);
            pathGenerator = d3.area().x(d => scaleX(parseTime(d.x))).y0(scaleY(minValue)).y1(d => scaleY(d.y)).curve(d3.curveBasis);

      }
  

 
      this.kpi.dimensions = this.kpi.dimensions.map(d => ({ ...d, path: pathGenerator(d.data) }));
      this.defaultView = true  

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
        this.zoomLevel = Math.min(this.zoomLevel + 1, 2);
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

 <style lang="scss" scoped>

.pepecontainer {
  display: flex;
  height: 100%;
  gap: 15px;
  flex-direction: column;
.hypercontainer {
  //display: flex;
  height: 100%;
  max-height:470px;
  min-height:470px;
    gap: 20px;
    overflow: hidden;
   > * {
    flex: 1;
  }
 
}
&.index .chartcontainer {
  width: calc(100% - 0px);

}
}



 .chartcontainer {
  max-height:375px;
  min-height:375px;
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
  //overflow: visible;
  &.animation path {
        transition: all .4s linear; 
  }
  path { 
    fill: none;
    stroke-linejoin: round;    
  }
  &.area path {
    fill: rgba(46,120,210,0.05);
  }
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
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  @media only screen and (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
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
    //background: rgb(245,245,245);
    padding: 5px 12px;
    max-width: max-content;
    user-select: none;
    cursor: pointer;
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
/* #chart .xAxis g:nth-child(even) line,
#chart .xAxis g:nth-child(even) text {
    fill: transparent;
    stroke: transparent;
} */
#chart g[data-date="1990"] line,
#chart g[data-date="2000"] line,
#chart g[data-date="2004"] line,
#chart g[data-date="2016"] line,
#chart g[data-date="2020"] line,
#chart g[data-date="2024"] line{
    stroke-dasharray: 0px;
}

@for $year from 1980 through 2030 {
  g[data-date="#{$year}"] ~ g[data-date="#{$year}"] {
    opacity: 0;
  }
}
.axis.yAxis.even g:nth-child(2n+1),
.axis.yAxis.odd g:nth-child(2n+2) {
  opacity: 0;
}
 
 </style>