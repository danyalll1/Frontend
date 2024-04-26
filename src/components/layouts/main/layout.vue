<script setup>

  import '../../main-menu.vue'
  import MainMenu from "@/components/main-menu.vue";


</script>


<template>

  <div class="container">
    <div class="container__menu">
      <slot name="menu"></slot>
      <main-menu></main-menu>
    </div>
    <div class="container__page">
      <slot name="layout"></slot>

    </div>
  </div>


</template>

<style lang="scss" scoped>
  .container{
    height: 100vh;
    padding: 16px;

    display: flex;
    gap: 40px;

    &__menu{

      width: 100%;
      max-width: 300px;
      background: darkblue;
    }

    &__page{

      width: 100%;
      background: #fdfdfd;
    }
  }

</style>