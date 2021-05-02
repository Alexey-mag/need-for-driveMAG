<template>
  <div class="order__model" v-if="getCars">
    <div class="model__car_class_switch"></div>
    <div class="model__container">
    <div class="model__car_card" v-for="car in getCars" :key="car.id" @click="selectCar(car)">
    <div class="model__car_name">
      {{car.name.toUpperCase().split(',')[1] ? car.name.toUpperCase().split(',')[1] : car.name}}
    </div>
      <div class="model__car_cost">
        {{car.priceMin}} - {{car.priceMax}} ₽
      </div>
        <img class="model__car_image" :src="'https://api-factory.simbirsoft1.com' + car.thumbnail.path" alt="">
    </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
export default {
  name: "Model",
  computed: {
    ...mapGetters('model', ['getCars'])
  },
  methods: {
    selectCar(car) {
      this.$store.dispatch('model/setCar', car)
    }
  },
  mounted() {
    this.$store.dispatch('model/fetchModels')
  }
};
</script>

<style scoped lang="scss">
.order__model {
  grid-area: 5 / 1 / 26 / 32;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(21, 1fr);
  border-right: 1px solid $main-light-gray;
}
  .model__car_class_switch {
    grid-area: 1 / 3 / 4 / 26;
  }
  .model__container {
    grid-area: 4 / 3 / 22 / 26;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
  }
  .model__car_card {
    position: relative;
    width: 50%;
    height: 224px;
    min-width: 250px;
    border: 1px solid $main-light-gray;
    cursor: pointer;
    padding: 16px;
    &:hover {
      border: 1px solid $main-gray;
    }
    &:active {
      border: 1px solid $main-green;
    }
  }
  .model__car_image {
    width: 256px;
    height: 116px;
    right: 0;
    bottom: 0;
    position: absolute;
  }
  .model__car_name {
    font-size: 18px;
    line-height: 21px;
    color: $main-black;
  }
  .model__car_cost {
    font-size: 14px;
    line-height: 16px;
    color: $main-gray;
  }
div::-webkit-scrollbar {
  width: 0.7em;
}

div::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

div::-webkit-scrollbar-thumb {
  background-color: $main-gray;
  border-radius: 5px;
}
</style>
