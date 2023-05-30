<template>
  <div class="article-item flex">
    <div class="flex items-center">
      <button
        class="article-item__like"
        :disabled="isArticleLiked"
        @click="like(item.id)"
      >
        <img 
          :src="`src/assets/icons/${isArticleLiked ? 'like_active' : 'like'}.svg`"
        />
      </button>
      <span class="article-item__likes-count">
        {{ item.likes }}
      </span>
    </div>
    <img
      :src="item.imgSrc"
      class="article-item__img"
    />
    <div class="article-item__title">
      {{ item.title }}
    </div>
    <div class="article-item__description">
      {{ item.description }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Article',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isArticleLiked: false,
    };
  },
  methods: {
    ...mapActions('articles', ['likeArticle']),
    like(id) {
      this.likeArticle(id);
      this.isArticleLiked = true;
    }
  },
}
</script>

<style scoped lang="scss">
.article-item {
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #BFC3D5;
  border-radius: 10px;
  margin-bottom: 8px;
  &__like {
    border: 0;
    background: #fff;
    padding: 0;
  }
  &__likes-count {
    font-size: 12px;
    line-height: 15px;
    color: #A0A6BF;
    margin-left: 6px;
    height: 100%;
    margin-top: 5px;
  }
  &__img {
    width: 100%;
  }
  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 8px;
  }
  &__description {
    font-size: 14px;
    line-height: 22px;
    color: #6A6E7E;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
}
</style>
