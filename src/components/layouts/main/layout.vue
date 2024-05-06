<script lang="ts" setup>
import MainMenu from "@/components/layouts/main/main-menu.vue";
import BreadCrumbs from "@/components/layouts/main/bread-crumbs.vue";
import AccountInfo from "@/components/layouts/main/account-info.vue";
import {ref} from "vue";

let menuVisible = ref<Boolean>(true)

function changeMenuVisibility(){
  menuVisible.value = !menuVisible.value
}


</script>


<template>

  <div class="container">
    <div v-if="menuVisible" class="container__menu">
      <main-menu @changeMenuVisibility="changeMenuVisibility"></main-menu>
    </div>
    <div class="container__page">
      <div class="container__page-header">
        <bread-crumbs/>
        <account-info/>
      </div>

      <slot></slot>
    </div>
  </div>


</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  padding: 16px;

  display: flex;
  gap: 40px;

  &__menu {
    width: 100%;
    max-width: 300px;

    &.hidden{
      width: 0;
    }

  }

  &__page {
    width: 100%;

    &-header {
      gap: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  }
}

</style>