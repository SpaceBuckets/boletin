<template>
  <div id="map"></div>
</template>

<script>
export default {
  mounted() {
    

   this.loadMap()


  },
  created() {
this.$mapbox.addLayer({
        id: 'ekrof.36nq12yp',
        type: 'fill',
        source: {
            type: 'vector',
            url: 'mapbox://ekrof.36nq12yp' //  Mapbox tileset Map ID
        },
        'source-layer': 'shapefile-de-pozos-4f4e9z', // name of tilesets
        'paint': {
            'fill-color': '#088',
            'fill-opacity': 0.8,
            'fill-outline-color': '#000'
        }
    });
  },
  methods: {
    loadMap() {
      this.map = new this.$mapbox.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [-40, -41],
        zoom: 4,
        maxZoom: 16,
        minZoom: 2,        
        projection: 'mercator' // starting projection
      })

    }
  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  left: 0;
}
</style>