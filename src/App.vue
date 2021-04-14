<template>
  <div id="app" class="small-container">
    <h1>Elsie's Tunes</h1>
    <albums-index v-bind:albums="albums" />
    <albums-show />
    <albums-new />
  </div>
</template>

<script>
import AlbumsIndex from './components/AlbumsIndex.vue'
import AlbumsShow from './components/AlbumsShow.vue'
import AlbumsNew from './components/AlbumsNew.vue'

export default {
  name: 'App',
  components: {
    AlbumsIndex,
    AlbumsShow,
    AlbumsNew,
  },
  data() {
    return {
      albums: [
        {
          id: 1,
          artist: 'Elder Island',
          album: 'The Omnitone Collection',
          image: 'https://images.roughtrade.com/product/images/files/000/161/822/original/20000000052293.jpg?1542373431',
        },
        {
          id: 2,
          artist: 'Tierra Whack',
          album: 'Whack World',
          image: 'https://media.pitchfork.com/photos/5b18380bd25b7272360c56d9/1:1/w_600/Tierra%20Whack_Whack%20World%20EP.jpg',
        },
        {
          id: 3,
          artist: 'Billie Eilish',
          album: 'Dont Smile at Me',
          image: 'https://i.pinimg.com/originals/78/6e/a3/786ea3d49748ab17966e4301f0f73bb6.jpg',
        },
      ],
    }
  },
}
</script>

<style>

html, body {
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
}
</style>
