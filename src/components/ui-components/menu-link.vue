<script lang="ts" setup>


interface Props {
  link: string
  text: string
}

const props = defineProps({
  linkTo: {
    required: true,
    type: String,
  },
  textVisibility: {
    type: Boolean,
    required: true
  }
})


</script>

<template>

  <div class="menu-link__container">
    <router-link :class="[{active : $route.path.includes(linkTo)}, {hidden : !textVisibility}]" class="menu-link" :to="linkTo">
      <slot class="menu-link__icon" name="icon"/>
      <div class="menu-link__text">
        <slot/>
      </div>
    </router-link>
  </div>

</template>


<style lang="scss" scoped>

.menu-link {
  @include font(16px, 24px, 600);
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 16px;
  border-radius: 6px;
  color: $accent-primary;


  &.hidden{
    .menu-link__text{
      display: none;
    }
  }


  &.active {
    background-color: #e4ecfd;
  }

  &:hover {
    background-color: #e4ecfd;
  }

}


</style>