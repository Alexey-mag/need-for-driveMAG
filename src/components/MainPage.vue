<template>
  <div class="main__container">
    <div class="main__content">
      <HeaderApp></HeaderApp>
      <main class="main__main">
        <h1 class="main__text_bold-black">
          Каршеринг
        </h1>
        <h2 class="main__text_bold-green">
          Need for drive
        </h2>
        <p class="main__text_gray">
          Поминутная аренда авто твоего города
        </p>
        <router-link class="main__button" to="/order">
          Забронировать
        </router-link>
      </main>
      <footer class="main__footer">
        <p class="main__text_footer">
          © 2016-2019 «Need for drive»
        </p>
        <p class="main__text_phone">
          8 (495) 234-22-44
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp";

export default {
  name: "MainPage",
  components: { HeaderApp }
};
</script>

<style scoped lang="scss">
p {
  font-style: normal;
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

  &:hover {
    color: $main-green;
    cursor: pointer;
  }
}
.main__button {
  background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
  background-blend-mode: darken;
  border-radius: 8px;
  width: 250px;
  height: 48px;
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: $main-light-gray;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-top: 60px;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }
}

.main__container {
  width: calc(50vw - 64px);
  position: relative;
  display: flex;
}

.main__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: inherit;
  padding: 32px 64px 32px 64px;
}

.main__footer {
  display: flex;
  justify-content: space-between;
}

.main__main {
  display: flex;
  flex-flow: column;
  height: auto;
  margin-right: -64px;
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

// --------------------------------1340------------------------------------
@media screen and (max-width: $desktop-min) {
  .main__container {
    width: calc(60vw - 64px);
  }
}

// --------------------------------1023------------------------------------
@media screen and (max-width: $tablet) {
  .main__container {
    width: calc(100vw - 84px);
  }
  .main__content {
    width: calc(100% - 84px);
    padding-left: 32px;
    padding-right: 32px;
  }
}

// ---------------------------------568-------------------------------------
@media screen and (max-width: $mobile) {
  .main__container {
    width: 100vw;
    flex-direction: column;
    align-items: stretch;
  }
  .main__content {
    width: auto;
    padding: 16px 16px 0 16px;
    margin: 0;
  }

  .main__main {
    margin: 0;
    .main__text_bold-black,
    .main__text_bold-green {
      font-size: 32px;
      line-height: 100%;
    }
    .main__text_bold-green {
      margin-top: 6px;
    }
    .main__text_gray {
      font-size: 18px;
      line-height: 21px;
      margin-top: 16px;
    }
  }
  .main__footer {
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    background-color: $main-black;
    margin: 0 -16px;
    height: 72px;
    padding-right: 16px;
    .main__text_phone {
      color: $main-green;
    }
    .main__text_footer {
      color: $main-light-gray;
    }
  }
  .main__button {
    width: 100vw;
    border-radius: unset;
    align-self: center;
    margin-top: 32px;
  }
}
</style>
