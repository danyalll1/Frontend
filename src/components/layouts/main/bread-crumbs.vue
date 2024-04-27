<script lang="ts" setup>



</script>


<template>
  <div class="bread-crumbs">
   <h1 class="bread-crumbs__title">
     {{$route.name}}
   </h1>
  </div>
</template>


<style lang="scss" scoped>
.bread-crumbs{
  border-radius: 16px;
  padding: 27px 31px;
  border: solid 1px green;
  background-color: white;
  width: 100%;

  ul{
    background: red;
    display: flex;
    gap: 8px;
  }

  h1{
    line-height: 24px;
    font-size: 22px;
  }
}


</style>