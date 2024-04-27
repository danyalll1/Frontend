<script  setup>



</script>


<template>

  <div class="account">
    <div class="account__user">
        <div class="account__user-image">
          image
        </div>
        <div class="account__user-text">
          <div class="account__user-name">
            name
          </div>
          <div class="account__user-email">
            email
          </div>
        </div>
    </div>
    <div class="account__buttons">
      <button>1</button>
      <button>2</button>
    </div>
  </div>


</template>


<style lang="scss" scoped>
  .account{
    height: 100%;
    padding: 15px;
    border: solid 1px green;
    background-color: white;
    border-radius: 16px;
    display: flex;
    gap: 24px;
    align-items: center;

    &__user{
      display: flex;
      align-items: center;
      gap: 12px;

      &-text{
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      &-name{
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
      }

    }

    &__buttons{
      display: flex;
      gap: 12px ;

      button{
        padding: 16px;
        height: 48px;
        width: 48px;
        background-color: #0057f7;
        border-radius: 8px;
        color: white;
      }

    }

  }



</style>