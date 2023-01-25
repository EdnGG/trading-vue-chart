<template>
  <div>
    {{ chartData }}
    <trading-vue :data="chartData"></trading-vue>
  </div>
</template>

<script>
import TradingVue from "trading-vue-js";
import data from "../data/data.json";

export default {
  name: "app",
  components: { TradingVue },
  data() {
    return {
      localData: data.onchart,
    };
  },
  computed: {
    chartData() {
      return this.localData.map((item) => {
        return {
          // label: item.label,
          data: item.data,
        };
      });
    },
  },
};
</script>
