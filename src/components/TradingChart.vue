<template>
<trading-vue :data="this.$data"></trading-vue>
</template>




<script>
import TradingVue from "trading-vue-js";
import data from "../data/ohlcv.json";
export default {
  name: "app",
  components: { TradingVue },
  data() {
    return {
      data: data,
    };
  },
};
</script>