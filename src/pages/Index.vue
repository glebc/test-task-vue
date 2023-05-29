<template>
  <div>
    <create-button />
    <input type="text" id="search" name="search">
  </div>
</template>

<script>
import CreateButton from '/src/components/CreateButton.vue';

export default {
  name: 'Index',
  components: {
    CreateButton,
  },
  created() {
    this.$store.dispatch('articles/fetchArticles');
  },
}
</script>
