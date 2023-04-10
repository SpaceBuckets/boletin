<template>
<div class="pepecontainer" :class="{index}">
 
    <div class="hypercontainer">
 
    <div class="chartcontainer" style="width:100%;height:50px" ref="c">
      <template v-if="defaultView">
 
 
        <svg 
          id="chart" 
          :class="{animation, [kpi.type]: true }"
          style="width:100%;height:50px"
          :viewBox="`0 0 ${chartWidth } ${chartHeight}`"
        >
          <clipPath id="clip">
            <rect :x="`${axisBottom[0].width}px`" y="0" :height="chartHeight" :width="chartWidth-50-axisBottom[0].width"></rect>
          </clipPath>  

          <path 
            v-for="(d, rekpi) in kpi.dimensions" 
            clip-path="url(#clip)"               
            :d="d.path"
            :key="`${rekpi}`"
            v-if="rekpi === 0"
            :style="{
              'stroke': d.color || '#333',
              'stroke-width': d.borderWidth || '1.5',
              }"
          />
        </svg>   
      </template>
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
      kpi: require(`~/static/data/${this.data}.json`), 
      staticKpi: JSON.parse(JSON.stringify(require(`~/static/data/${this.data}.json`))),
      dateStart: '',
      dateEnd: '', 
      dateIndex: [],
      allDates: [],
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
 
      const scaleX = d3.scaleTime().domain([this.dateStart,this.dateEnd]).range([0, this.$refs.c.clientWidth]).nice(timeIntervals[this.zoomLevel].interval)
        
      //create the x axis object with value, translate and cell width
      this.axisBottom = scaleX.ticks().flatMap((d, i, ticks) => ([{
        value: d3.timeFormat(timeIntervals[this.zoomLevel].format)(d),
        date: d.toISOString().substring(0, 10),
        left: scaleX(d),
        width: i > 0 ? scaleX(d) - scaleX(ticks[i-1]) : scaleX(d),
      }]));
      //get min and max values from all dimensions to set selected domain
      const valuesData = this.kpi.dimensions.flatMap(d => d.data.slice(this.dateIndex[0], this.dateIndex[1] + 1).map(i => i.y));
      const [minValue, maxValue] = [d3.min(valuesData), d3.max(valuesData)];

      const scaleY = d3.scaleLinear().domain([minValue, maxValue]).range([this.$refs.c.clientHeight, 0]).nice();

      //create the y axis object with value and translate
      this.axisRight = scaleY.ticks().map(d => ({ value: d, top: scaleY(d) }));       

      // create a path generator based on chart type

      let pathGenerator = d3.line().x(d => scaleX(parseTime(d.x))).y(d => scaleY(d.y)).defined(d => d.y !== null);

 
      this.kpi.dimensions = this.kpi.dimensions.map(d => ({ ...d, path: pathGenerator(d.data) }));
      this.defaultView = true  

    },    
  }
}
</script>

 <style lang="scss" scoped>

</style>