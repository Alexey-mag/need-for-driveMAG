<template>
  <div class="location">
    <div class="location__form">
      <form name="order_form" class="location__from">
        <autocomplete-app
          :get-items="getCities"
          :get-item="getCity"
          :label="labelCity"
          @setvalue="setCity"
        ></autocomplete-app>
        <autocomplete-app
          :label="labelPoint"
          :get-items="getPoints"
          :get-item="getPoint"
          placeholder="Начните вводить пункт выдачи"
          @setvalue="setPoint"
        ></autocomplete-app>
      </form>
      <span>Выбрать на карте</span>
    </div>
    <div class="location__map">Map</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AutocompleteApp from "@/components/Order/AutocompleteApp";
export default {
  name: "Location",
  components: { AutocompleteApp },
  data() {
    return {
      labelCity: "Город",
      labelPoint: "Пункт Выдачи",
      filteredCities: [],
      toggle: false
    };
  },
  computed: {
    ...mapGetters("order", ["getCities", "getPoints", "getCity", "getPoint"])
  },
  methods: {
    setCity(val) {
      this.$store.dispatch("order/setCity", val);
      this.$store.dispatch("order/fetchCurrentCityPoints", val.id);
    },
    setPoint(val) {
      this.$store.dispatch("order/setPoint", val);
    }
  }
};
</script>

<style scoped lang="scss">
.location {
  grid-area: 5 / 1 / 26 / 32;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(21, 1fr);
  border-right: 1px solid $main-light-gray;
}
.location__form {
  grid-area: 1 / 3 / 6 / 13;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 250px;
}
.location__map {
  grid-area: 6 / 3 / 17 / 26;
  background-color: darkgoldenrod;
}
</style>
