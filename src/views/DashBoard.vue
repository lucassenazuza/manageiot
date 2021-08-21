<template>
  <div>

    <Title :msg="title_name" />

    <SearchBar />
    
      <div class="column  is-align-content-center is-12 mp-3" style="text-align: center">
        <h2 class="subtitle"><strong>Temperatura</strong></h2>
        <Chart />
      </div>
            <div class="column  is-12 is-align-content-center mp-3" style="text-align: center">
        <h2 class="subtitle"><strong>Humidade</strong></h2>
        <Chart />
      </div>
    </div>
</template>


<script>
import Chart from "../components/Chart.vue";
import Title from '../components/Title.vue';
import SearchBar from '../components/SearchBar';

export default {
  name: "DashBoard",
  components: {
    Chart,
    Title,
    SearchBar
  },
  data() {
    return {
      title_name: 'Dashboard',
      datacollection: null,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>