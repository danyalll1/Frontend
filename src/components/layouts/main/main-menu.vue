<script lang="ts" setup>
import MenuLink from "@/components/ui-components/menu-link.vue";
import folderIcon from  '@/assets/img/main-menu/Folder.svg'
import usersIcon from  '@/assets/img/main-menu/Users.svg'
import gridIcon from  '@/assets/img/main-menu/profile.svg'
import settingsIcon from  '@/assets/img/main-menu/Settings.svg'
import signOutIcon from  '@/assets/img/main-menu/signOut.svg'
import hideMenu from '@/assets/img/main-menu/hideMenu.svg'

const props = defineProps({
  menuVisibility:{
    type: Boolean,
    required: true,
  }
})


const menuData: object = [
  {
    title: 'Навигация',
    links: [
      {
        title: 'Заказы',
        link: '/orders',
        icon: folderIcon
      },
      {
        title: 'Сотрудники',
        link: '/employees',
        icon: usersIcon
      },
      {
        title: 'Личный кабинет',
        link: '/profile',
        icon: gridIcon
      },
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
      </div>
      <div class="menu__center">
        <nav v-for="(item,idx) in menuData" class="menu__block">
          <div :class="[{hidden : !menuVisibility}]" class="menu__title">
            {{ item.title }}
          </div>
          <ul v-for="(link, index) in item.links" class="menu__buttons">
            <menu-link :text-visibility="menuVisibility" :link-to="link.link">
              <template v-slot:icon>
                <component name="icon" :is="link.icon"/>
              </template>
              {{ link.title }}
            </menu-link>
          </ul>
        </nav>
      </div>
      <div class="menu__bottom">
        <div class="menu__bottom-top">
          <menu-link :text-visibility="menuVisibility" @click="changeMenuVisibility">
            <template v-slot:icon>
              <component :is="hideMenu"/>
            </template>
            Скрыть меню
          </menu-link>
        </div>
        <div class="menu__bottom-bottom">
          <menu-link :text-visibility="menuVisibility" link-to="/settings">
            <template v-slot:icon>
              <component :is="settingsIcon" />
            </template>
            Настройки
          </menu-link>
          <menu-link :text-visibility="menuVisibility" link-to="/auth">
            <template v-slot:icon>
              <component :is="signOutIcon" />
            </template>
            Выйти
          </menu-link>
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
    padding-right: 8px;
    background: $bg-primary;
    border-radius: 24px;
    border: 1px solid $border-color;

  }

  &__wrapper {
    height: 100%;
    justify-content: space-between;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__top{
    max-height: 260px;
  }

  &__center{
    height: 100%;
    overflow-y:  auto;
    overflow-x: hidden;

    &::-webkit-scrollbar{
      background-color: $bg-tertiary;
      width: 8px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track{

    }
    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background-color: $scroll-thumb-color;
    }

  }

  &__bottom{
    max-height: 172px;
    height: 100%
  }

  &__logo {
    @include font(18px, 20px, 800);
    text-align: center;
    padding: 18px;
    background-color: $accent-primary;
    color: $text-secondary;
    border-radius: 6px;
    overflow: hidden;
  }

  &__block {
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
    width: max-content;
    visibility: visible;
    font-size: 18px;
    line-height: 26px;
    transition:  opacity ease 0.3s ;


    &.hidden{
      opacity: 0;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__bottom{
    padding-right: 8px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-top{
      margin-top: auto
    }

  }
}


</style>