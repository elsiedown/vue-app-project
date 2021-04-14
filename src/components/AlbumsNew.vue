<template>
  <div id="albums-new">
    <form @submit.prevent="handleSubmit">
      <label>Artist</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidArtist }"
        v-model="album.artist"
      />
      <label>Album</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidAlbum }"
        v-model="album.album"
      />
      <label>image</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidImage }"
        v-model="album.image"
      />

      <p v-if="error && submitting" class="error-message">
        Please fill out all required fields
      </p>
      <p v-if="success" class="success-message">
        Album added to Elsie's collection
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
      album: {
        album: '',
        artist: '',
        image: '',
      },
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
  color: black;
  width: 200px;
}

[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>