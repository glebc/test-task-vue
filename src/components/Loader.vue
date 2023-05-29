<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: 'Loader',
}
</script>

<style scoped lang="scss">
.loader {
  border: 6px solid #FFF;
  border-radius: 50%;
  border-top: 6px solid #ED5252;
  width: 36px;
  height: 36px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
