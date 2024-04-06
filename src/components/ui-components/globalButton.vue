<script setup>


</script>


<template>

<button class="global-button">
  Войти
</button>

</template>


<style scoped lang="scss">

.global-button{
  background-color: $button-default;
  width: 100%;
  @include font(16px, 20px, 600);
  padding: 8px;
  color: $white;
  border-radius: 8px;
  transition: background-color ease 0.3s;

  &:hover{
    background-color: #0b9b66;
  }
}



</style>