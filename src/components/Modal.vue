<template>
  <form 
    class="modal"
    @submit="submit"
  >
    <div class="modal__content flex">
      <div class="flex">
        <div class="modal__title">
          Новая категория
        </div>
        <input
          v-model="category.title"
          placeholder="Название"
          class="modal__input"
        />
        <select
          v-model="category.parentCategory"
          class="modal__input"
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
          v-model="nestedArticle"
          class="modal__input"
          @change="category.nestedArticles.push(nestedArticle)"
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
      </div>
      <div>
        <hr>
        <div class="modal__action-buttons flex">
          <button
            class="button-submit"
            type="submit"
          >
            Сохранить
          </button>
          <button
            class="button-submit"
            @click="$emit('close')"
          >
            Отменить
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { required } from '@vuelidate/validators';

export default {
  name: 'CategoryModal',
  data() {
    return {
      category: {
        title: '',
        parentCategory: '',
        nestedArticles: [],
      },
      nestedArticle: null,
    };
  },
  validations: {
    category: {
      title: { required },
    },
    nestedArticles: { required },
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
  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 16px;
  }
  &__content {
    justify-content: space-between;
    width: 826px;
    height: 690px;
    border-radius: 10px;
    background-color: #fefefe;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border: 1px solid #888;
    flex-flow: column;
    > .flex {
      flex-flow: column;
    }
  }
  &__input {
    border: 1px solid #D9DDE6;
    border-radius: 4px;
    height: 46px;
    color: #A0A6BF;
    padding-left: 12px;
    margin-bottom: 16px;
  }
  select {
    appearance: none;
    background: url(src/assets/icons/chevron_down.svg) no-repeat calc(100% - 12px);
    padding-right: 12px;
  }
  hr {
    background: #BFC3D5;
    margin-bottom: 16px;
  }
  &__action-buttons {
    button {
      flex: 1;
      width: 376px;
      height: 44px;
      border: 0;
      background: #0A0E2012;
      border-radius: 5px;
      cursor: pointer;
      &:first-child {
        margin-right: 24px;
        color: white;
        background: #ED5252;
      }
    }
  }
}
</style>
