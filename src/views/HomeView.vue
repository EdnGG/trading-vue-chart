<template>
  <div class="home">
    <h1>Home</h1>
    <TradingChart/>
  </div>
</template>

<script>
// @ is an alias to /src
import TradingChart from "@/components/TradingChart.vue";

export default {
  name: "HomeView",
  components: {
    TradingChart,
  },
};
</script>
