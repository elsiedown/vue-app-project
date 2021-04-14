<template>
  <div id="albums-index">
    <div v-for="album in albums" :key="album.id">
      <!-- <p>{{album.artist}}</p>
      <p>{{album.album}}</p> -->
      <img :src="album.image">
    </div>
    <div class="add-div">
          <router-link to="/new"
      ><img src="../assets/plus-sign.png" class="add" alt="add-sign"
    /></router-link>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'albums-index',
  props: {
    albums: Array,
  },
};
</script>



<style scoped>

#albums-index {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

div {
  padding: 20px;
}

img {
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.add-div {
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add {
    height: 80px;
    width: 80px;
}

</style>