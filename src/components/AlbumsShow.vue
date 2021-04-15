<template>
  <div id="albums-show">
    <div class="top-section">
    <div>
      <img :src="albums[id].image" />
    </div>
    <div class="text-info">
      <h1>{{ albums[id].album }}</h1>
      <p>{{ albums[id].artist }}</p>
      <p>{{ albums[id].year }}</p>
    </div>
    </div>
    <button @click="$emit('delete:album', albums[id].id )">Remove from the Collection</button>
  </div>
</template>

<script>
export default {
  name: "albums-show",
  props: {
    albums: Array
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
};
</script>



<style scoped>
#albums-show {
  color: white;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  margin-top: 40px;
  /* flex-direction: column; */
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