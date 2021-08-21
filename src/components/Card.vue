<template>
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="img_src" :alt="place_holder">
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      <strong>Informações e Estatísticas sobre os Hardwares</strong>
      <br>
    </div>
  </div>
</div>
</template>


<script>
export default {
    name: "Card",
    props: ["img_src", "place_holder"]
}
</script>

<style scoped>

.card {
  transition: box-shadow .2s;
  border-radius:10px;
  border: 1px solid #ccc;
  background: #fff;
  float: left;
  
}
.card:hover {
  box-shadow: 0 0 11px rgba(36, 28, 28, 0.2); 
}
</style>