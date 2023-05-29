<template>
  <button 
    class="create-button"
    @click="$emit('click')"
  >
    Создать категорию
    <div>+</div>
  </button>
</template>

<script>
export default {
  name: 'CreateButton',
}
</script>

<style scoped lang="scss">
.create-button {
  background: #ED5252;
  color: #FFF;
  padding: 9px 16px 11px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  &:hover {
    background: #F06C6C;
  }
  &:active {
    background: #D54A4A;
  }
  div {
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }
}
</style>
