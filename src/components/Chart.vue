
<template>
    <div>
      <apexchart width="90%" height="200" type="line" :options="options" :series="series"></apexchart>
    </div>

</template>


<script>

// import VueApexCharts from 'vue-apexcharts'

export default {
  data: function() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 23, 44, 66, 60, 99, 91]
      }]
    }
  }
}
</script>