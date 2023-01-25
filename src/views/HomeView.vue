<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <TradingChart :data="data"/> -->
    <!-- <Chart :data="data"/> -->
    <Chart/>
  </div>
</template>

<script>
// @ is an alias to /src
// import TradingChart from "@/components/TradingChart.vue";
import Chart from "../components/Chart.vue";
// import data from "../data/data.json";

export default {
  name: "HomeView",
  components: {
    // TradingChart,
    Chart,
  },
  data() {
    return {
      // data,
    };
  },
};
</script>
