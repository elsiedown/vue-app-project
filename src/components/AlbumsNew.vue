

<template>
  <div id="albums-new">
    <h1>Add a New Album</h1>
    <form @submit.prevent="handleSubmit">
      <label>Artist</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidArtist }"
        v-model="album.artist"
        @focus="clearStatus"
        @keypress="clearStatus"
      />
      <label>Album</label>
      <input
        type="text"
        v-model="album.album"
        :class="{ 'has-error': submitting && invalidAlbum }"
        @focus="clearStatus"
      />
      <label>Album Cover</label>
      <input
        type="text"
        v-model="album.image"
        :class="{ 'has-error': submitting && invalidImage }"
        @focus="clearStatus"
      />
      <p v-if="error && submitting" class="error-message">
        Please fill in all the fields!
      </p>
      <button>Add Album</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "albums-new",
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      album: {
        album: "",
        artist: "",
        image: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.submitting = true;
      this.clearStatus();

      if (this.invalidArtist || this.invalidAlbum || this.invalidImage) {
        this.error = true;
        return;
      }
      this.$emit("add:album", this.album);
      this.employee = {
        artist: "",
        album: "",
        image: ""
      };
      this.error = false;
      this.success = true;
      this.submitting = false;
      this.$router.push({ name: "home" });
    },
    clearStatus() {
      this.success = false;
      this.error = false;
    }
  },
  computed: {
    invalidArtist() {
      return this.album.artist === "";
    },

    invalidAlbum() {
      return this.album.album === "";
    },
    invalidImage() {
      return this.album.image === "";
    }
  }
};
</script>

<style scoped>
#albums-new {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 60px;
}

form {
  margin-bottom: 2rem;
  color: black;
  width: 200px;
}

.error-message {
  color: red;
}

button {
  background-color: white;
  color: black;
  border: none;
}
</style>