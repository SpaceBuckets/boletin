<template>
  <div class="pepeboard">
<!--       <div class="rewelcome">
        <p>
           <strong>Febo asoma; ya sus rayos, iluminan el histórico contexto.</strong> Esta colección de 47 indicadores intenta develar de dónde viene y hacia dónde va la macroeconomía de la República Argentina.

        </p>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="504px" height="504px" viewBox="-165 -165 330 330">
	<title>Sun of May</title>
	<title>Sun of May as represented on the flag of Argentina</title>

	<g id="sun" fill="#fcbf49" stroke="#843511" stroke-width="1.5">
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
			<circle id="pupil" cx="22" cy="-9" r="4.5"/>
			<path id="loweyecontour" d="M 11,-8 C 16,-3.5 27,-3 34.5,-8.5 L 31,-9 C 26,-3.5 18,-4 13,-8 v -1"/>
			<path id="lowpalpebra" d="M 35,-6 C 26.5,0.5 18,0 13,-3 S 8,-7 9,-7 S 11,-6 15,-4 S 25,-2 35,-6"/>
			<path id="nose" d="M 10.5,9 A 3,3 0 1,1 6.5,12 C 6,13 4,16 0,16 h -1 l 1,1.5 C 1,17.5 4,17.5 6,16 A 4.5,4.5 0 1,0 10.5,9"/>
			<path id="uplip1" d="M 16.5,30 C 12,27 10,22.5 5,22.5 C 4,22.5 2,23 0,24 h -1 L 0,25.5 C 2,25.5 5,23 8.5,25 S 14,29 16.5,30"/>
			<path id="midlip" d="M 15,30 C 5,27 3,29 0,29 h -1 l 1,2 C 4,31 6,28 15,30"/>
			<path id="uplip2" d="M 16.5,30 C 5.5,29 9,35.5 0,35.5 h -1 L 0,37 C 11,37 6,31 16.5,30"/>
			<path id="chin" d="M 9,46 a 9,9 0 0,0 -18,0 a 9.25,9.25 0 0,1 18,0"/>
		</g>
		<use xlink:href="#face_right" transform="scale(-1,1)"/>
	</g>
</svg>
    </div>  --> 
    <!--     <charts-kpiBoard edit :data="savedCells"/>
 -->

    <template v-for="(indexItem, i) in savedIndex">
        <h2>{{ indexItem.title }}</h2>
        <div class="mastersection">
           <nuxt-link class="mincharto" v-for="indexChart in savedIndex[i].items" :to="`kpi/${indexChart}`" :key="`a-${indexChart}`">
                <charts-genericLine :data="indexChart" />
            </nuxt-link> 
        </div>
    </template>

<!-- <div class="retabler">
  <h2><strong>Indicadores macroeconomicos de Argentina</strong> ({{items.length}})
    </h2>
    <table>
  <tr>
    <th>Indicador</th>
    <th>Descripcion</th>
    <th>Categoria</th>
    <th>Fuente</th>
    <th>Ultima Actualizacion</th>
  </tr>
  <tr v-for="(parent, i) in items">
    <td>{{parent.kpi}}</td>
    <td>{{parent.desc}}</td>
    <td>{{parent.cat}}</td>
    <td>INDEC</td>
    <td>Mayo 2022</td>
  </tr>
</table>
</div> -->

           
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
          title: "Dólar vs. Peso",
          items: ["cambio", "tcrm"],
        },
        {
          title: "Actividad Económica",
          items: ["emae", "ucii"],
        },
        {
          title: "Política Monetaria",
          items: ["tasa", "basemonetaria"],
        },
        {
          title: "Cuentas Nacionales",
          items: ["deficit", "balanza"],
        },
        {
          title: "Precios y Salarios",
          items: ["ipc", "desempleo"],
        },
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
};
</script>

<style lang="scss">
 
.mastersection {
  display: flex;
  gap: 15px;
  border-bottom: 1px solid #333;
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
.mincharto {
  position: relative;
  width: 50%;
  min-height: 400px;
  max-height: 420px;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 15px;
  text-decoration: none;
display: block;
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