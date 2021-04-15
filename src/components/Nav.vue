<template>
  <div id="navbar">
    <router-link to="/"
      ><img src="../assets/disco.png" class="disco" alt="disco=logo"
    /></router-link>
    <h1>Elsie's Tunes</h1>
    <router-link to="/new"
      ><img src="../assets/plus-sign.png" class="add" alt="add-sign"
    /></router-link>
  </div>
</template>
<script>
export default {
  name: "navbar"
};
</script>



<style scoped>
#navbar {
  top: 0;
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: space-between;
}

.disco {
  height: 40px;
  width: 40px;
  margin-left: 20px;
}

.add {
  height: 40px;
  width: 40px;
  margin-right: 20px;
}

h1 {
  margin-top: 0;
}
</style>