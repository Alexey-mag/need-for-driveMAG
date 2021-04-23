<template>
  <div class="menu__main">
    <div class="main__burger" />
    <div
      class="main__burger__button"
      :class="{ main__burger__button_active: isMenuOpen }"
      @click="toggleBurgerMenu"
    >
      <span class="main__burger__lines" />
    </div>
    <div
      class="main__language-toggle"
      :class="{ 'main__language-toggle-mobile': isMenuOpen }"
      @click="languageToggle"
      v-text="lang"
    />
    <nav
      class="main__burger__nav"
      :class="{ main__burger__nav__active: isMenuOpen }"
    >
      <p
        v-for="menuItem in menuItems"
        :key="menuItem.id"
        class="main__burger__menu_item"
        @click="toHomePage"
      >
        {{ menuItem.name.toUpperCase() }}
      </p>
      <div class="main__icons_set">
        <span class="icon-telegram_white" />
        <span class="icon-facebook_white" />
        <span class="icon-instagram_white" />
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Menu",
  data() {
    return {
      lang: "Рус"
    };
  },
  computed: {
    ...mapGetters("shared", ["menuItems", "isMenuOpen"])
  },
  methods: {
    ...mapActions("shared", ["toggleBurgerMenu"]),
    languageToggle() {
      if (this.lang === "Рус") {
        this.lang = "Eng";
      } else {
        this.lang = "Рус";
      }
    },
    toHomePage() {
      this.$router.push("/");
      this.toggleBurgerMenu();
    }
  }
};
</script>

<style scoped lang="scss">
.main__burger {
  width: $burger-width;
  height: 100vh;
  background-color: $main-black;
}

.main__burger__button {
  position: fixed;
  top: 32px;
  left: 18px;
  width: 24px;
  height: 32px;
  cursor: pointer;
  z-index: 350;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.main__burger__lines::before,
.main__burger__lines::after,
.main__burger__lines {
  position: absolute;
  width: 24px;
  height: 3px;
  background-color: #ffffff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.main__burger__lines {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.main__burger__lines::before {
  content: "";
  top: -8px;
}

.main__burger__lines::after {
  content: "";
  top: 8px;
}
.main__burger__button_active .main__burger__lines {
  background-color: $main-black;
}

.main__burger__button_active .main__burger__lines::before {
  top: 0;
  z-index: 300;
  transform: rotate(45deg);
}

.main__burger__button_active .main__burger__lines::after {
  top: 0;
  transform: rotate(-45deg);
}
.main__language-toggle {
  height: 48px;
  width: 48px;
  position: fixed;
  bottom: 16px;
  left: 7px;
  text-align: center;
  display: flex;
  color: $main-green;
  align-items: center;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  justify-content: center;

  &:hover {
    border: 1px solid $main-light-gray;
    border-radius: 50%;
    color: $main-light-gray;
    cursor: pointer;
  }
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
  overflow: hidden;
  width: 50vw;
}

.main__burger__menu_item {
  font-style: normal;
  margin-top: 0.5em;
  font-weight: 500;
  font-size: 32px;
  color: #ffffff;
  cursor: pointer;
  z-index: 300;

  &:hover {
    color: $main-green;
  }
}

.main__icons_set {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 150px;
  margin-top: 38px;
  color: $main-light-gray;
}

.icon-telegram_white,
.icon-instagram_white,
.icon-facebook_white {
  font-size: 32px;

  &:hover {
    color: $main-green;
    cursor: pointer;
  }
}

// --------------------------------1023------------------------------------
@media screen and (max-width: $tablet) {
  .main__burger__nav__active {
    width: 100vw;
  }
  .main__burger {
    width: $burger-width-max;
  }
  .main__burger__button {
    left: 28px;
  }
  .main__language-toggle {
    left: 17px;
  }
}
// ---------------------------------568-------------------------------------
@media screen and (max-width: $mobile) {
  .main__burger__nav {
    padding-left: 28px;
    padding-top: 80px;
    justify-content: start;

    .main__burger__menu_item {
      font-size: 22px;
      line-height: 26px;
    }
  }
  .main__language-toggle {
    opacity: 0;
  }
  .main__language-toggle-mobile {
    z-index: 400;
    opacity: 1;
  }
  .main__burger__lines,
  .main__burger__lines::before,
  .main__burger__lines::after {
    background-color: $main-black;
  }
  .main__burger__button_active {
    .main__burger__lines::before,
    .main__burger__lines::after {
      background-color: $main-light-gray;
    }
  }
  .main__burger {
    display: none;
  }
}
</style>
