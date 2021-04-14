<template>
  <div id="albums-show">
    <div v-for="album in albums" :key="album.id">
      <p>{{album.artist}}</p>
      <p>{{album.album}}</p>
      <img :src="album.image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'albums-show',
  props: {
    album: Object,
  },
};
</script>



<style scoped>

</style>