<template>
  <div class="main__container">
    <div
      class="main__content"
    >
      <div class="main__header">
        <p class="main__text_green">
          Need for drive
        </p>
        <p class="main__text_city">
          Ульяновск
        </p>
      </div>
      <div class="main__main">
        <p class="main__text_bold-black">
          Каршеринг
        </p>
        <p class="main__text_bold-green">
          Need for drive
        </p>
        <p class="main__text_gray">
          Поминутная аренда авто твоего города
        </p>
        <router-link tag="button" class="main__button">Забронировать</router-link>
      </div>
      <div class="main__footer">
        <p class="main__text_footer">
          © 2016-2019 «Need for drive»
        </p>
        <p class="main__text_phone">
          8 (495) 234-22-44
        </p>
      </div>
    </div>
    <div :class="{ main__burger: !getBurgerStatus, main__burger__active: getBurgerStatus}">
      <div
        class="main__burger__button"
        @click="toggleBurgerMenu"
      >
        <span class="main__burger__lines" />
      </div>
    </div>

    <nav
      class="main__burger__nav"
      :class="{main__burger__nav__active: getBurgerStatus}"
    >
      <p
        v-for="menuItem in menuItems"
        :key="menuItem.id"
        class="main__burger__menu_item"
      >
        {{ menuItem.name.toUpperCase() }}
      </p>
      <div class="main__icons_set">
        <img src="@/assets/telegram_white.svg">
        <img src="@/assets/facebook_white.svg">
        <img src="@/assets/instagram_white.svg">
      </div>
    </nav>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'MainPage',
    data() {
        return {
            // isActive: false
        }
    },
    computed: {
        ...mapGetters('shared', ['menuItems', 'getBurgerStatus']),
    },
    methods: {
        ...mapActions('shared', ['toggleBurgerMenu']),
        // toggleMenu() {
        //     this.isActive = !this.isActive
        // }
    }
}
</script>

<style scoped lang="scss">
  p {
    font-style: normal;
  }
  .main__text_green {
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    color: $main-green;
  }
    .main__text_bold-black {
      font-weight: bold;
      font-size: 70px;
      line-height: 66px;
      color: $main-black;
    }

    .main__text_bold-green {
      font-weight: bold;
      font-size: 70px;
      line-height: 66px;
      color: $main-green;
    }

    .main__text_gray {
      font-style: normal;
      font-weight: 300;
      font-size: 26px;
      line-height: 30px;
      color: $main-gray;
      margin-top: 34px;
    }

    .main__text_footer {
      font-weight: normal;
      font-size: 13px;
      line-height: 15px;
      color: $main-gray;
    }

    .main__text_phone {
      font-weight: normal;
      font-size: 13px;
      line-height: 15px;
      color: $main-black;
    }

    .main__text_phone:hover {
    color: $main-green;
      cursor: pointer;
    }

    .main__text_city {
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: $main-gray;
    }

    .main__button {
      background: linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%);
      background-blend-mode: darken;
      border-radius: 8px;
      width: 250px;
      height: 48px;
      display: flex;
      justify-content: center;
      text-align: center;
      color: $main-light-gray;
      align-items: center;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      margin-top: 60px;
      border: none;
      cursor: pointer;
    }
    .main__button:hover {
      filter: brightness(0.9);
    }
    .main__button:active {
      filter: brightness(0.8);
    }
    .main__container {
        width: 752px;
        position: relative;
      overflow: hidden;
    }
    .main__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 64px;
      position: absolute;
      height: 100vh;
      padding: 32px 64px 32px 64px;
      right: 0;
      left: 0;
    }

    .main__header {
      display: flex;
      justify-content: space-between;
    }

    .main__footer {
      display: flex;
      justify-content: space-between;
    }

    .main__main {
      display: flex;
      flex-flow: column;
      height: auto;
    }
    .main__burger {
        width: 64px;
        height: 100vh;
        background-color: $main-black;
        display: flex;
        justify-content: center;
    }

    .main__burger__button {
        position: fixed;
        top: 32px;
        left: 16px;
        width: 24px;
        height: 32px;
        cursor: pointer;
        z-index: 350;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .main__burger__nav {
        position: fixed;
        align-items: start;
        justify-content: center;
        top: 0;
        z-index: 340;
        display: flex;
        flex-flow: column;
        height: 100vh;
        padding-left: 15%;
        background-color: $main-black;
        overflow-y: auto;
        left: -100%;
        -webkit-transition: 0.8s;
        transition: 0.8s;
    }

    .main__burger__nav__active {
      left: 0;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      width: 53vw;
    }

    .main__burger__menu_item {
        font-style: normal;
        margin-top: 0.5em;
        font-weight: 500;
        font-size: 32px;
        color: #FFFFFF;
        cursor: pointer;
        z-index: 300;
    }

    .main__burger__menu_item:hover {
        color: $main-green;
    }
    .main__icons_set {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      width: 150px;
      margin-top: 38px;
    }
    .main__burger__lines::before,
    .main__burger__lines::after,
    .main__burger__lines {
        position: absolute;
        width: 24px;
        height: 3px;
        background-color: #FFFFFF;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .main__burger__lines {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .main__burger__lines::before {
        content: '';
        top: -8px;
    }

    .main__burger__lines::after {
        content: '';
        top: 8px;
    }

    .main__burger__active .main__burger__lines {
        background-color: $main-black;
    }

    .main__burger__active .main__burger__lines::before {
        top: 0;
        z-index: 300;
        transform: rotate(45deg);
    }

    .main__burger__active .main__burger__lines::after {
        top: 0;
        transform: rotate(-45deg);
    }

    .main__burger__overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10;
    }

    .main__burger__overlay__active {
        display: block;
        background-color: rgba(0, 0, 0, 0.8);
    }
</style>
