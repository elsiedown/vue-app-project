<template>
  <div id="albums-index">
    <div v-for="album in albums" :key="album.id">
      <!-- <p>{{album.artist}}</p>
      <p>{{album.album}}</p> -->
      <img :src="album.image">
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

</style>