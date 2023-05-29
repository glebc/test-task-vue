<template>
  <div class="index-page">
    <Loader
      v-if="!isLoaded"
    />
    <div class="index-page__top">
      <create-button />
      <input
        type="text"
        id="search"
        name="search"
        class="search-input"
      >
    </div>
    <div class="articles-container">
      <article-item
        v-for="article in articles"
        :item="article"
        :key="article.id"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import CreateButton from '/src/components/CreateButton.vue';
import ArticleItem from '/src/components/ArticleItem.vue';
import Loader from '/src/components/Loader.vue';

export default {
  name: 'Index',
  components: {
    Loader,
    CreateButton,
    ArticleItem,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  async created() {
    await this.fetchArticles();
    this.isLoaded = true;
  },
  computed: {
    ...mapGetters('articles', ['articles']),
  },
  methods: {
    ...mapActions('articles', ['fetchArticles']),
  },
}
</script>

<style scoped lang="scss">
.index-page {
  padding: 65px;
  &__top {
    display: flex;
    margin-bottom: 48px;
    .search-input {
      border: 1px solid #D9DDE6;
      border-radius: 4px;
      margin-left: 16px;
      flex-grow: 1;
    }
  }
  .articles-container {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>