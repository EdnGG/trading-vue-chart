<template>
  <!-- Utiliza los datos del JSON para mostrar la información en la vista -->
  <div>
    <p>{{ data.name }}</p>
    <p>{{ data.price }}</p>
    <p>{{ data.volume }}</p>
  </div>
</template>
<script>
export default {
  props: ["data"],
  mounted() {
    console.log(this.data);
  },
  computed: {
    // aqui puedes crear computed properties para procesar los datos del json de manera mas eficiente
  },
};
</script>