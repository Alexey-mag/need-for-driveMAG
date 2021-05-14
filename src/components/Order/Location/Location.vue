<template>
  <div class="location">
    <div class="location__form_container">
      <form name="order_form" class="location__form">
        <autocomplete-city
          :get-items="getCities"
          :get-item.sync="city"
          :label="labelCity"
          placeholder="Начните вводить город..."
          @setValue="setCity"
          @clear="clearCity"
        ></autocomplete-city>
        <autocomplete-city
          :label="labelPoint"
          :get-items="getPoints"
          :get-item.sync="point"
          placeholder="Начните вводить пункт выдачи..."
          @setValue="setPoint"
          @clear="clearPoint"
        ></autocomplete-city>
      </form>
      <span>Выбрать на карте</span>
    </div>
    <div class="location__map">
      <map-app></map-app>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AutocompleteCity from "@/components/Order/Location/AutocompleteCity";
import MapApp from "@/components/Order/MapApp";

export default {
  name: "Location",
  components: { MapApp, AutocompleteCity },
  data() {
    return {
      labelCity: "Город",
      labelPoint: "Пункт Выдачи",
      filteredCities: [],
      toggle: false
    };
  },
  computed: {
    ...mapGetters("order", ["getCities", "getPoints", "getCity", "getPoint"]),
    city: {
      get() {
        return this.getCity;
      },
      set(value) {
        this.$store.dispatch("order/setCity", value);
      }
    },
    point: {
      get() {
        return this.getPoint;
      },
      set(value) {
        this.$store.dispatch("order/setPoint", value);
      }
    }
  },
  methods: {
    setCity(val) {
      this.$store.dispatch("order/setCity", val);
    },
    setPoint(val) {
      this.$store.dispatch("order/setPoint", val);
    },
    clearCity() {
      this.$store.dispatch("order/clearCity");
    },
    clearPoint() {
      this.$store.dispatch("order/clearPoint");
    }
  }
};
</script>

<style scoped lang="scss">
.location {
  grid-area: 1 / 1 / 22 / 33;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(21, 1fr);
}
.location__form_container {
  grid-area: 1 / 3 / 6 / 13;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 370px;
}
.location__form {
  margin-top: 16px;
  width: 100%;
  height: auto;
}
.location__map {
  grid-area: 6 / 3 / 17 / 26;
  position: relative;
}
</style>
