<template>
  <div id="nav">
    <router-link to="/"><img src="../assets/disco.png" class="disco" alt="disco=logo"/></router-link>
    <router-link to="/new">Add</router-link>
  </div>
</template>
<script>

export default {
  name: 'nav',
};
</script>



<style scoped>

#nav {
 top: 0;
 display: flex;
 margin: 0;
}

.disco {
  height: 40px;
  width: 40px;
  margin-left: 20px;
}


</style>