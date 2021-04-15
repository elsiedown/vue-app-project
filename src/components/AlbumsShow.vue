<template>
  <div id="albums-show">
    <div class="top-section">
      <div>
        <img :src="albums[index].image" />
      </div>
      <div class="text-info">
        <h1>{{ albums[index].album }}</h1>
        <p>{{ albums[index].artist }}</p>
        <p>{{ albums[index].year }}</p>
      </div>
    </div>
    <button @click="$emit('delete:album', albums[index].id)">
      Remove from the Collection
    </button>
  </div>
</template>

<script>
export default {
  name: "albums-show",
  props: {
    albums: Array
  },
  computed: {
    id: function() {
      return this.$route.params.id;
    },
    index: function() {
      return this.albums.findIndex(album => album.id == this.id);
    }
  }
};
</script>



<style scoped>
#albums-show {
  color: white;
  margin-top: 40px;
}

.top-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: 350px;
  width: 350px;
  object-fit: cover;
  margin-right: 80px;
}

p {
  margin: 0;
  font-size: 25px;
}

h1 {
  font-size: 50px;
  top: 0;
  margin: 0;
}

button {
  margin-top: 90px;
  background-color: white;
  color: pink;
  border: none;
}
</style>