<template>
  <div id="app">
    <navbar />
    <router-view
      :albums="albums"
      @add:album="addAlbum"
      @delete:album="deleteAlbum"
    ></router-view>
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
          id: 0,
          artist: "Elder Island",
          album: "The Omnitone Collection",
          image:
            "https://images.roughtrade.com/product/images/files/000/161/822/original/20000000052293.jpg?1542373431",
          year: 2019
        },
        {
          id: 1,
          artist: "Tierra Whack",
          album: "Whack World",
          image:
            "https://media.pitchfork.com/photos/5b18380bd25b7272360c56d9/1:1/w_600/Tierra%20Whack_Whack%20World%20EP.jpg",
          year: 2018
        },
        {
          id: 2,
          artist: "Billie Eilish",
          album: "Dont Smile at Me",
          image:
            "https://i.pinimg.com/originals/78/6e/a3/786ea3d49748ab17966e4301f0f73bb6.jpg",
          year: 2017
        },
        {
          id: 3,
          artist: "Ben Howard",
          album: "Keep Your Head Up",
          image:
            "https://upload.wikimedia.org/wikipedia/en/f/f2/KeepYourHeadUp.jpg",
          year: 2011
        },
        {
          id: 4,
          artist: "ABRA",
          album: "Rose",
          image: "https://f4.bcbits.com/img/a0869976939_10.jpg",
          year: 2017
        },
        {
          id: 5,
          artist: "Arlo Parks",
          album: "Sophie",
          image:
            "https://www.turntablekitchen.com/_uploads/ArloParks_TurnTableArtworkFont_CYMK.jpg",
          year: 2019
        },
        {
          id: 6,
          artist: "Babeheaven",
          album: "Home For Now",
          image:
            "https://media.pitchfork.com/photos/5fb54c3c2c244fead4faa8d4/1:1/w_320/Home%20for%20Now_Babeheaven.jpg",
          year: 2020
        },
        {
          id: 7,
          artist: "Chance the Rapper",
          album: "Coloring Book",
          image:
            "https://media.pitchfork.com/photos/5929b5bb13d197565213ace9/1:1/w_600/c5e30897.jpg",
          year: 2016
        },
        {
          id: 8,
          artist: "Collard",
          album: "Unholy",
          image:
            "https://diy-magazine.s3.amazonaws.com/d/diy/Artists/C/Collard/unholy_album-cover.jpg",
          year: 2020
        }
      ]
    };
  },
  methods: {
    addAlbum(album) {
      const lastId =
        this.albums.length > 0 ? this.albums[this.albums.length - 1].id : 0;
      const id = lastId + 1;
      const newAlbum = { ...album, id };

      this.albums = [...this.albums, newAlbum];
    },
    deleteAlbum(id) {
      this.albums = this.albums.filter(albums => albums.id !== id);
      this.$router.push({ name: "home" });
    }
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
  margin-top: 0;
}
</style>
