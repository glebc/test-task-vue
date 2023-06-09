<template>
  <div class="index-page">
    <Loader
      v-if="!isLoaded"
    />
    <div class="index-page__top flex">
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
        v-for="article in searchQuery ? filteredData : paginatedData"
        :item="article"
        :key="article.id"
      />
      <div v-for="category in categories">
        <div class="articles-container__category-title">
          {{ category.title }}
          <span class="articles-container__category-count">
            ({{ category.nestedArticles.length }})
          </span>
        </div>
        <article-item
          v-for="item in category.nestedArticles"
          :item="item"
        />
      </div>
    </div>
    <Modal
      v-if="isModalOpened"
      @close="isModalOpened = false"
    />
    <div
      v-if="isLoaded"
      class="paginator"
    >
      <button
        :disabled="currentPage === 1"
        class="paginator__button"
        @click="previousPage"
      >
        <img src="src/assets/icons/left.svg" />
      </button>
      <button
        v-if="currentPage !== 1"
        class="paginator__page flex"
        @click="currentPage = 1"
      >
        1
      </button>
      <button
        v-if="currentPage !== totalPages"
        class="paginator__current-page paginator__page"
      >
        {{ currentPage }}
      </button>
      <div>
        ...
      </div>
      <button
        class="paginator__last-page paginator__page"
        :class="{ 'paginator__current-page': currentPage === totalPages }"
        @click="currentPage = totalPages"
      >
        {{ totalPages }}
      </button>
      <button
        :disabled="currentPage === totalPages"
        class="paginator__button"
        @click="nextPage"
      >
        <img src="src/assets/icons/right.svg" />
      </button>
    </div>
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
      currentPage: 1,
      itemsPerPage: 16,
      totalItems: 0,
    };
  },
  async created() {
    await this.fetchArticles();
    this.isLoaded = true;
  },
  watch: {
    articles() {
      this.totalItems = this.articles.length;
    },
    isModalOpened(value) {
      document.body.classList.toggle('overflow-hidden', value);
    },
  },
  computed: {
    ...mapGetters('articles', ['articles']),
    ...mapGetters('categories', ['categories']),
    filteredData() {
      return this.articles?.filter(item =>
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.articles?.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  methods: {
    ...mapActions('articles', ['fetchArticles']),
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
}
</script>

<style scoped lang="scss">
.index-page {
  padding: 65px;
  &__top {
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
    &__category-title {
      margin-bottom: 16px;
    }
    &__category-count {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #A0A6BF;
      margin-left: 8px;
      vertical-align: super;
    }
  }
  .paginator {
    margin-top: 54px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    &__button {
      border: 0;
      background: #fff;
      cursor: pointer;
      width: 5px;
      height: 9px;
      &:first-child {
        margin-right: 7px;
      }
    }
    &__page {
      width: 34px;
      height: 34px;
      align-items: center;
      justify-content: center;
      margin-right: 7px;
      border: 0;
      border-radius: 5px;
      background: #fff;
      cursor: pointer;
    }
    &__current-page {
      background: #30344612;
    }
    &__last-page {
      margin-left: 7px;
    }
  }
}
</style>