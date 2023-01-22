/* eslint-disable import/named */
import {
  MglGeojsonLayer,
  MglVectorLayer,
  MglMap,
  MglMarker,
  MglPopup,
  MglScaleControl
} from "v-mapbox";
import Vue from "vue";

// Map
Vue.component("MglMap", MglMap);

// Controls
Vue.component("MglScaleControl", MglScaleControl);

// Layers
Vue.component("MglGeojsonLayer", MglGeojsonLayer);
Vue.component("MglVectorLayer", MglVectorLayer);

// Marker & Popup
Vue.component("MglMarker", MglMarker);
Vue.component("MglPopup", MglPopup);
