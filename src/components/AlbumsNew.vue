<template>
  <div id="albums-new">
    <form @submit.prevent="handleSubmit">
      <label>Artist</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidName }"
        v-model="album.artist"
      />
      <label>Album</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidEmail }"
        v-model="album.album"
      />
      <label>image</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidEmail }"
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
  name: "albums-new"
};
</script>

<style scoped>
</style>