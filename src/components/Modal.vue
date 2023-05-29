<template>
  <div class="modal">
    <div class="modal__content">
      <input 
        v-model="category.title"
        placeholder="Название"
      />
      <select
        v-model="category.parentCategory"
      >
        <option disabled value="">Родительская категория (необязательно)</option>
        <option
          v-for="category in categories"
          :key="category.title"
        >
          {{ category.title }}
        </option>
      </select>
      <select
        v-model="category.nestedArticles"
      >
        <option disabled value="">Вложенные статьи</option>
        <option
          v-for="article in articles"
          :key="article.id"
          :value="article"
        >
          {{ article.title }}
        </option>
      </select>
      <button @click="submit">Сохранить</button>
      <button @click="$emit('close')">Отменить</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CategoryModal',
  data() {
    return {
      category: {
        title: '',
        parentCategory: '',
        nestedArticles: []
      },
    };
  },
  computed: {
    ...mapGetters('categories', ['categories']),
    ...mapGetters('articles', ['articles']),
  },
  methods: {
    ...mapActions('categories', ['addCategory']),
    submit() {
      this.addCategory(this.category);
      this.$emit('close');
    },
  },
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  &__content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
    display: flex;
    flex-flow: column;
  }
}
</style>
