<script lang="ts" setup>
import MenuLink from "@/components/ui-components/menu-link.vue";
const menuData: object = [
  {
    title: 'Навигация',
    links: [
      {
        title: 'Заказы',
        link: '/orders',
      },
      {
        title: 'Сотрудники',
        link: '/employees',
      },
      {
        title: 'Личный кабинет',
        link: '/profile',
      },
    ],
  },
  {
    title: 'Быстрые действия',
    links: [
      {
        title: 'Ваша ссылка',
        link: '/1',
      }
    ],
  },
]
const emit = defineEmits(['changeMenuVisibility'])
function changeMenuVisibility(){
  emit('changeMenuVisibility')
}

</script>


<template>
  <div class="menu-container">
    <div class="menu__wrapper">
      <div class="menu__top">
        <div class="menu__logo">
          BitNet System
        </div>
        <nav v-for="(item,idx) in menuData" class="menu__block">
          <div class="menu__title">
            {{ item.title }}
          </div>
          <ul v-for="(link, index) in item.links" class="menu__buttons">
            <menu-link :link-to="link.link">
              {{ link.title }}
            </menu-link>
          </ul>
        </nav>
      </div>
      <div class="menu__bottom">
        <div class="menu__bottom-top">
          <menu-link @click="changeMenuVisibility">Скрыть меню</menu-link>
        </div>
        <div class="menu__bottom-bottom">
          <menu-link link-to="/settings">Настройки</menu-link>
          <menu-link link-to="/settings">Выйти</menu-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.menu {

  &-container{
    height: 100%;
    padding: 20px;
    background: $bg-primary;
    border-radius: 24px;
    border: 1px solid $border-color;

  }

  &__wrapper {
    height: 100%;
    justify-content: space-between;
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 40px;


    &::-webkit-scrollbar{
      background-color: $bg-secondary;
      width: 5px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track{

    }
    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background-color: $accent-primary;
    }


  }

  &__logo {
    @include font(18px, 20px, 800);
    text-align: center;
    padding: 18px;
    background-color: $accent-primary;
    color: $text-secondary;
    border-radius: 6px;
  }

  &__block {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 40px;
    border-bottom: 1px solid #a1a8b7;

    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }
  }

  &__title {
    font-size: 18px;
    line-height: 26px;

  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__bottom{
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-top{
      margin-top: auto
    }

  }
}


</style>