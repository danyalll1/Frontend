<script setup>
  import formInput from '@/components/ui-components/formInput.vue'
  import globalButton from '@/components/ui-components/globalButton.vue'
  import formCheckBox from  '@ui/formCheckBox.vue'

</script>

<template>
  <div class="layout">
    <form class="form">
      <div class="form__title">
          Авторизация
      </div>
      <div class="form__inputs">
        <formInput/>
        <formInput/>
        <div class="form__inputs-checkbox">
          <formCheckBox/>
          Запомнить данные
        </div>
      </div>
      <globalButton></globalButton>
      <div class="form__links">
        <a href="" class="form__link">Зарегистрироваться</a>
        <a href="" class="form__link">Восстановление пароля</a>
      </div>
    </form>
  </div>
</template>


<style lang="scss" scoped>
.layout {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $bg-primary;
  padding: 16px;

}
.form {
  max-width: 460px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  background: $bg-secondary;
  padding: 32px;
  flex-direction: column;
  gap: 32px;

  &__title{
    @include font(24px, 33px, 500);
    color: $white;
    text-align: center;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-checkbox{
      display: flex;
      gap: 8px;
      @include  font(14px, 19px, 400);
      color: $white;
    }

  }

  &__links{
    display: flex;
    justify-content: space-between;

    a{
      text-decoration: underline;
      color: $white;
      @include font(14px, 19px, 400)
    }

  }

}
</style>