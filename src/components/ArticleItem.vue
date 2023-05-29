<template>
  <div class="article-item">
    <img :src="item.imgSrc" />
    <div class="article-item__title">
      {{ item.title }}
    </div>
    <p class="article-item__description">
      {{ item.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.article-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #BFC3D5;
  border-radius: 10px;
  width: 291px;
  height: 295px;
  margin-right: 24px;
  margin-bottom: 24px;
  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 8px;
  }
  &__description {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #6A6E7E;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
