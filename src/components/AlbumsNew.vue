

<template>
  <div id="albums-new">
    <h1>Add to the Collection</h1>
    <form @submit.prevent="handleSubmit">
      <label>Artist</label>
      <input
        type="text"
        placeholder="eg. Coldplay"
        :class="{ 'has-error': submitting && invalidArtist }"
        v-model="album.artist"
        @focus="clearStatus"
        @keypress="clearStatus"
      />
      <label>Album</label>
      <input
        type="text"
        placeholder="eg. Parachutes"
        v-model="album.album"
        :class="{ 'has-error': submitting && invalidAlbum }"
        @focus="clearStatus"
      />
      <label>Album Cover</label>
      <input
        type="text"
        placeholder="eg. URL Link"
        v-model="album.image"
        :class="{ 'has-error': submitting && invalidImage }"
        @focus="clearStatus"
      />
      <label>Release Date</label>
      <input
        type="text"
        placeholder="eg. 2000"
        v-model="album.year"
        :class="{ 'has-error': submitting && invalidYear }"
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
        image: "",
        year: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.submitting = true;
      this.clearStatus();

      if (
        this.invalidArtist ||
        this.invalidAlbum ||
        this.invalidImage ||
        this.invlaidYear
      ) {
        this.error = true;
        return;
      }
      this.$emit("add:album", this.album);
      this.employee = {
        artist: "",
        album: "",
        image: "",
        year: ""
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
    },
    invalidYear() {
      return this.album.year === "";
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
  width: 300px;
}

.error-message {
  color: red;
}

label {
  color: white;
}

::placeholder {
  color: white;
}

button {
  background-color: white;
  color: pink;
  border: none;
  margin-top: 30px;
}
</style>