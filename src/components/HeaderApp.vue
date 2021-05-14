<template>
  <header class="main__header">
    <p class="main__text_green">
      Need for drive
    </p>
    <div class="main__header__city">
      <img :src="'/images/main_map.svg'" alt="" />
      <p class="main__text_city">
        {{ getCity ? getCity.name : "" }}
      </p>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderApp",
  computed: {
    ...mapGetters("order", ["getCity"])
  }
};
</script>

<style scoped lang="scss">
.main__header {
  display: flex;
  justify-content: space-between;
}
.main__text_green {
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: $main-green;
}
.main__header__city {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main__text_city {
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: $main-gray;
  margin-left: 6px;
}
// ---------------------------------568-------------------------------------
@media screen and (max-width: $mobile) {
  .main__header {
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>
