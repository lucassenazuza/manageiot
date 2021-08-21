
<template>
  <div>
    <Title :msg="title_name" />
    <div style="height: 80vh; width: 100%; margin-top: 30px">
      <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[-18.915921, -48.266129]"
        @move="log('move')"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-control-layers />

        <l-marker
          v-for="(coord, index) in lista"
          :key="index"
          :lat-lng="coord"
          @moveend="log('moveend')"
        >
          <l-tooltip> Vou Colocar Informaçãoes </l-tooltip>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import Title from '../components/Title.vue'

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    Title
  },
  data() {
    return {
      title_name: "Localização dos Hardwares",
      zoom: 15,
      iconWidth: 25,
      iconHeight: 40,
      lista: [
        [-18.920363, -48.256915],
        [-18.920472, -48.256911],
        [-18.920582, -48.256931],
        [-18.920692, -48.256921],
        [-18.920712, -48.256901],
      ],
    };
  },
  computed: {
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
  methods: {
    log(a) {
      console.log(a);
    },
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
  },
};
</script>
