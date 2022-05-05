<template>
  <div>
       <div class="headbert" >
      <h1>Tachame la Macro</h1>
      <div>
        <p style="max-width: 35%;">
          <em>Febo asoma; ya sus rayos, iluminan el histórico contexto.</em> Esta colección de indicadores intenta develar de donde viene y hacia donde va la macroeconomía Argentina.
        </p>
        <br>
        <svg id="sun" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="504px" height="504px" viewBox="-165 -165 330 330">
            <g  fill="#fcbf49" stroke="#843511" stroke-width="1.5">
              <g id="rays-16">
                <g id="rays-8">
                  <g id="rays-4">
                    <g id="rays-2">
                      <path d="M -8,0 L -2,159.5 c 0,0 0,3 2,3 s 2,-3 2,-3 L 8,0"/>
                      <path d="M -4,0 L 0,109.5 L 4,0" fill="#843511" stroke="none"/>
                      <g transform="rotate(11.5)">
                        <path d="M -4.5,53.5 C -9.5,75 1.5,89.5 -4,108.5 S -1,140.5 0,148.5 -5,160 -3,161.5 5,158 5.5,147 -1.5,131.25 5,108 1,77 8,56"/>
                        <path d="M -1,58 C -4,79 6,90.5 0,109 C 8,95 -2,81 3,59" fill="#843511" stroke="none"/>
                      </g>
                    </g>
                    <use xlink:href="#rays-2" transform="rotate(180)"/>
                  </g>
                  <use xlink:href="#rays-4" transform="rotate(90)"/>
                </g>
                <use xlink:href="#rays-8" transform="rotate(45)"/>
              </g>
              <use xlink:href="#rays-16" transform="rotate(22.5)"/>
              <circle r="65" stroke-width="1"/>
              <g id="face_right" fill="#843511" stroke="none">
                <path id="eyebrow_nose" d="M 41,-14 C 29.5,-24 15,-25.5 7,-18 A 140,50 10 0,0 8.5,8.5 C 8,8.5 7,9 6.5,9.5 A 80,50 10 0,1 4,-19 C 15,-28 30,-29 41,-14"/>
                <path id="uppalpebra" d="M 23,-17 C 16.5,-17 15,-15.5 12,-13 S 7.5,-11 7,-10.5 S 7,-8.5 8,-9 S 11,-10.5 14,-13 S 20,-15.5 23,-15.5 C 32,-15.5 37,-8 38,-8.5 S 33,-17 23,-17"/>
                <path id="upeyecontour" d="M 34.5,-8.5 C 28,-15.5 16,-16 11,-8 H 13 C 18,-16 30,-12.5 31,-9 v 1"/>
                <circle id="pupil" class="rupil" cx="22" cy="-9" r="4.5"/>
                <path id="loweyecontour" d="M 11,-8 C 16,-3.5 27,-3 34.5,-8.5 L 31,-9 C 26,-3.5 18,-4 13,-8 v -1"/>
                <path id="lowpalpebra" d="M 35,-6 C 26.5,0.5 18,0 13,-3 S 8,-7 9,-7 S 11,-6 15,-4 S 25,-2 35,-6"/>
                <path id="nose" d="M 10.5,9 A 3,3 0 1,1 6.5,12 C 6,13 4,16 0,16 h -1 l 1,1.5 C 1,17.5 4,17.5 6,16 A 4.5,4.5 0 1,0 10.5,9"/>
                <path id="uplip1" d="M 16.5,30 C 12,27 10,22.5 5,22.5 C 4,22.5 2,23 0,24 h -1 L 0,25.5 C 2,25.5 5,23 8.5,25 S 14,29 16.5,30"/>
                <path id="midlip" d="M 15,30 C 5,27 3,29 0,29 h -1 l 1,2 C 4,31 6,28 15,30"/>
                <path id="uplip2" d="M 16.5,30 C 5.5,29 9,35.5 0,35.5 h -1 L 0,37 C 11,37 6,31 16.5,30"/>
                <path id="chin" d="M 9,46 a 9,9 0 0,0 -18,0 a 9.25,9.25 0 0,1 18,0"/>
              </g>
              <use class="left" xlink:href="#face_right" transform="scale(-1,1)"/>
            </g>
          </svg>
        <div class="capis" style="max-width: 30%;">
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
   <actividad-box/>
      <monetaria-box/>

      <precios-box/>

   <externo-box/>

   </div>
</template>

<script>
export default {
  name: "IndexPage",
   data() {
    return {

    }
   },
  methods: {
    changeClick(kpi) {
      this.$state.currActive = kpi
       this.$state.real.datasets[0].data = this.$state.kpis[kpi]['d']
      this.$state.real.datasets[1].data = this.$state.kpis[kpi]['t']
      this.$state.real.datasets[2].data = this.$state.kpis[kpi]['b']
      this.$state.real.labels = this.$state.kpis[kpi]['dates']
      this.$state.currDesc = this.$state.kpis[kpi].desc,
       this.$state.updated++
     }    
  }   
};
</script>


<style lang="scss">

@keyframes rotatesun {
		0% {
				 transform:translateX(0) translateY(0) rotate(0) ;
		}
		25% {
				 transform: translateX(-100px) translateY(100px) translateX(180deg) ;
		}
		50% {
				 transform: translateX(-200px) translateY(200px) rotate(360deg) ;
		}    
		75% {
				 transform: translateX(-100px) translateY(100px) translateX(180deg) ;
		}   
		100% {
				 transform: translateX(0) translateY(0) rotate(0) ;
		}  
}
@keyframes rotatepup {
		0% {
				 transform:translateX(0) ;
		}
		25% {
				 transform: translateX(-2px) ;
		}
		50% {
				 transform: translateX(0) ;
		}    
		75% {
				 transform: translateX(2px) ;
		}   
		100% {
				 transform: translateX(0) ;
		}       
}
  #sun {
    position: absolute;
    top: -300px;
    right: -50px;
    width: 800px;
    height: auto;
    transform-origin: center;
    padding: 20px;
    //transition: 5s ease-in;
    transform: translateY(0%) rotate(180deg);
    animation: rotatesun 550s infinite linear;
    &:hover {
      //transform: translateY(-25%)
    }
  }

.left .rupil {
   animation: rotatepup 2s infinite ease-in;

}
.headbert {
  height: 420px;
  width: 100%;
  //max-width: 1440px;
  margin: 0px auto;
  margin-bottom: 0px;
  background: radial-gradient(at 70% 100px, #fff,#c1d9ef,  #89b6e0);
  position: relative;
  padding: 20px;
  overflow: hidden;
  display: none;
   &:after {
    content:"";
    background: #000;
    height: 50%;
    display: none;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 9;
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
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 10px;
    padding: 0;
  }
  p {
    color: #000;
    font-size: 17px;
  }
}

.capis {
  display: flex;
  flex-wrap: wrap;
  > * {
    flex: 1;
    max-width: 180px;
    margin-bottom: 15px;
    margin-right: 100px;
    h2 {
      min-width: auto !important;
      margin-bottom: 0;
    }
  }
}





.chartitle {
   position: absolute;
   margin: 0;
   color: #888;
   background: transparent;
   z-index: 1;
   font-weight: 500;
   font-size: 12px;
   top: 2px;
   left:12px;
 }
</style>
