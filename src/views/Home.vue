<template>
  <div class="home">

    <div class="cloumns is-flex is-justify-content-space-around">
      <div class="column is-one-quarter">
        <router-link to="/info"><Card :img_src="img_src_chart" :alt="alt_chart" /></router-link>
      </div>
      <div class="column is-one-quarter">
        <router-link to="/map"><Card :img_src="img_src_map" :alt="alt_map" /></router-link>
      </div>
      <div class="column is-one-quarter">
        <router-link to="/dashboard"><Card :img_src="img_src_dashboard" :alt="alt_dashboard" /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      img_src_chart: "/img/hardware-card.png",
      alt_chart: "Gráfico",
      img_src_map: "/img/map-card.jpeg",
      alt_map: "Mapa",
      img_src_dashboard: "/img/chart-card.png",
      alt_dashboard: "Dashboard",
    };
  },
  methods: {},
};
</script>

