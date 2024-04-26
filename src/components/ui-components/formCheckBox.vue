<script lang="ts" setup>




const a = ref<number>(4)

const getData = computed(() => {
  return  a + 1
})



let check = ref<boolean>(false)
  function clickEventHandler(){
      check.value = !check.value
  }


</script>


<template>

 <div  class="checkbox-container">
   <input @click="clickEventHandler"  type="checkbox">
   <svg :class="{active: check}"  class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
     <path d="M1 4.41667L5.62088 8.5C8.11208 5.76633 9.5088 4.23367 12 1.5" stroke="#02B877" stroke-width="2"/>
   </svg>
 </div>
</template>


<style scoped lang="scss">



  input{
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }

  .checkbox-container{
    border: 1px solid transparent;
    position: relative;
    background-color: $white;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    transition: border-color ease 0.3s;

    &:hover{
      border: 1px solid $button-hover;
    }
  }

  .checkbox__icon{
    width: 0;
    transition: width ease-in 0.1s;



    &.active{
      width: 100%;
    }

  }



</style>