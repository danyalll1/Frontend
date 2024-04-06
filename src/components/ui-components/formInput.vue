<script lang="ts" setup>
import {ref} from "vue";

let invalid:Ref<boolean> = ref(false)

</script>


<template>
    <div  class="form-input__container">
        <div :class="{error: invalid}" class="form-input__input">
          <input placeholder="text" type="text">
        </div>
        <div :class="{error: invalid}" class="form-input__status">
          Обязательное поле
        </div>
    </div>
</template>


<style lang="scss" scoped>
  .form-input{

    &__status{
      overflow: hidden;
      transition: max-height ease-in 0.3s, color ease 0.3s;
      max-height: 0;
      @include font(12px, 16px, 400);
      padding: 8px 12px 0;
      color: transparent;


      &.error{
        max-height: 24px;
        color: $error-secondary;
      }

    }

    &__input{
      height: 45px;
      background-color: $white;
      padding: 8px 16px;
      border-radius: 8px;
      border: solid 2px transparent;
      transition: border ease 0.3s;

      input{
        @include font(16px, 20px, 400);

        &::placeholder{
          color: $text-grey;
        }
      }



      &.error{
        border: solid 2px $error;
      }

    }
  }

</style>