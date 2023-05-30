<template>
  <div class="index-page">
    <Loader
      v-if="!isLoaded"
    />
    <div class="index-page__top">
      <create-button
        @click="isModalOpened = true"
      />
      <div class="search-container">
        <input
          v-model="searchQuery"
          type="text"
          id="search"
          name="search"
          class="search-container__input"
          placeholder="Найти статью"
        >
        <img 
          src="src/assets/icons/search.svg"
          class="search-container__icon"
        />
      </div>
    </div>
    <div class="articles-container">
      <article-item
        v-for="article in filteredData"
        :item="article"
        :key="article.id"
      />
      <div v-for="category in categories">
        {{ category.title }}
        <article-item
          :item="category.nestedArticles"
        />
      </div>
    </div>
    <Modal
      v-if="isModalOpened"
      @close="isModalOpened = false"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import CreateButton from '/src/components/CreateButton.vue';
import ArticleItem from '/src/components/ArticleItem.vue';
import Loader from '/src/components/Loader.vue';
import Modal from '/src/components/Modal.vue';

export default {
  name: 'Index',
  components: {
    Modal,
    Loader,
    CreateButton,
    ArticleItem,
  },
  data() {
    return {
      isLoaded: false,
      isModalOpened: false,
      searchQuery: '',
    };
  },
  async created() {
    await this.fetchArticles();
    this.isLoaded = true;
  },
  computed: {
    ...mapGetters('articles', ['articles']),
    ...mapGetters('categories', ['categories']),
    filteredData() {
      return this.articles.filter(item =>
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
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
    .search-container {
      margin-left: 16px;
      flex-grow: 1;
      position: relative;
      &__input {
        border: 1px solid #D9DDE6;
        border-radius: 4px;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        padding-left: 16px;
      }
      &__icon {
        position: absolute;
        right: 16px;
        top: 11px;
      }
    }
  }
  .articles-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
  }
}
</style>