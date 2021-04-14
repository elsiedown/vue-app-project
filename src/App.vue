<template>
  <div id="app">
    <navbar />
    <h1>Elsie's Tunes</h1>
    <router-view :albums="albums"></router-view>
  </div>
</template>

<script>
// import AlbumsIndex from "./components/AlbumsIndex.vue";
// import AlbumsNew from "./components/AlbumsNew.vue";
import Navbar from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      albums: [
        {
          id: 1,
          artist: "Elder Island",
          album: "The Omnitone Collection",
          image:
            "https://images.roughtrade.com/product/images/files/000/161/822/original/20000000052293.jpg?1542373431"
        },
        {
          id: 2,
          artist: "Tierra Whack",
          album: "Whack World",
          image:
            "https://media.pitchfork.com/photos/5b18380bd25b7272360c56d9/1:1/w_600/Tierra%20Whack_Whack%20World%20EP.jpg"
        },
        {
          id: 3,
          artist: "Billie Eilish",
          album: "Dont Smile at Me",
          image:
            "https://i.pinimg.com/originals/78/6e/a3/786ea3d49748ab17966e4301f0f73bb6.jpg"
        }
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Karantina:wght@700&display=swap");

html,
body {
  background-color: pink;
  margin: auto 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: pink;
  width: 100vw;
  height: 100vh;
}

h1 {
  color: white;
  font-family: "Karantina", cursive;
  font-size: 120px;
  margin-top: 5px;
}
</style>
