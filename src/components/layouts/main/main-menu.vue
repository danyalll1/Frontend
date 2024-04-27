<script setup>



</script>


<template>
  <div class="menu__wrapper">
    <div class="menu__logo">
      BitNet System
    </div>
    <nav class="menu__block">
      <div class="menu__title">
        Навигация
      </div>
      <ul class="menu__buttons">
        <li class="menu__button">
          <div class="icon">icon</div>
          Сотрудники
        </li>
        <li class="menu__button">
          <div class="icon">icon</div>
          Личный кабинет
        </li>
        <li class="menu__button">
          <div class="icon">icon</div>
          Заказы
        </li>
      </ul>
    </nav>
    <nav class="menu__block">
      <div class="menu__title">
        Быстрые действия
      </div>
      <ul class="menu__buttons">
        <li class="menu__button">
          <div class="icon">icon</div>
          Сотрудники
        </li>
        <li class="menu__button">
          <div class="icon">icon</div>
          Личный кабинет
        </li>
        <li class="menu__button">
          <div class="icon">icon</div>
          Заказы
        </li>
      </ul>
    </nav>


  </div>



</template>


<style lang="scss" scoped>
  .menu{


    &__wrapper{
      padding: 20px;
      background: #fdfdfd;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    &__logo{
      text-align: center;
      padding: 18px;
      background-color: #0057f7;
      color: #fdfdfd ;
      border-radius: 8px;
    }

    &__block{
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding-bottom: 40px;
      border-bottom: 1px solid #a1a8b7;
      &:last-child{
        border-bottom: none;
      }
    }

    &__title{
      font-size: 18px;
      line-height: 26px;

    }

    &__buttons{
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    &__button{
      display: flex;
      gap: 4px;
      align-items: center;
      padding: 12px 16px;
    }
  }


</style>