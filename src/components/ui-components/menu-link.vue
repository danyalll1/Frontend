<script lang="ts" setup>


  interface Props {
    link: string
    text: string
  }

  const props = defineProps({
    linkTo:{
      required: true,
      type: String,
    }
  })




</script>

<template>

  <div  class="menu-link__container">
    <router-link :class="{active : $route.path.includes(linkTo)}" class="menu-link" :to="linkTo">
      {{}}
      <slot name="icon">
        icon
      </slot>
      <slot>

      </slot>
    </router-link>
  </div>

</template>


<style lang="scss" scoped>

  .menu-link{
    @include font(16px, 24px, 600);
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 12px 16px;
    border-radius: 6px;
    color: $accent-primary ;

    &.active{
      background-color: #e4ecfd;
    }

    &:hover{
      background-color: #e4ecfd;
    }

  }


</style>