<template>
  <div v-if="getCars" class="order__model">
    <div class="model__car_class_switch">
      <el-radio-group v-model="radioSelected" text-color="#FFFFFF">
        <el-radio
          v-for="cat in getCarCategory"
          :key="cat"
          :label="cat" />
      </el-radio-group>
    </div>
    <div class="model__container">
      <div
        v-for="car in filteredCars"
        :key="car.id"
        class="model__car_card"
        @click="selectCar(car)">
        <div class="model__car_name">
          {{ getCarName(car) }}
        </div>
        <div class="model__car_cost">
          {{ car.priceMin }} - {{ car.priceMax }} ₽
        </div>
        <img
          class="model__car_image"
          :src="imgPath(car)"
          alt=""
          @error="defaultImage" />
      </div>
    </div>
    <div class="model__loading">
      <loader v-if="loading" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Loader from "../Loader";

export default {
  name: "Model",
  components: { Loader },
  data() {
    return {
      radioSelected: "",
      imgDefPath: require('@/assets/default-car.jpg')
    };
  },
  computed: {
    ...mapGetters("model", ["getCars", "getCarCategory", "getCar"]),
    ...mapGetters("shared", ["loading"]),
    filteredCars() {
      if (this.radioSelected === "Все модели" || this.radioSelected === "") {
        return this.getCars;
      } else {
        return this.getCars.filter(el => {
          if (el.categoryId.name === this.radioSelected) {
            return el;
          }
        });
      }
    }
  },
  mounted() {
    this.fetchModels();
  },
  methods: {
    ...mapActions("model", ["fetchModels", "setCar"]),
    ...mapMutations("additional", ["setColor"]),
    imgPath(car) {
      return `${process.env.VUE_APP_API_IMG}${car.thumbnail.path}`;
    },
    getCarName(car) {
      return car.name.toUpperCase().split(",")[1]
        ? car.name.toUpperCase().split(",")[1]
        : car.name;
    },
    selectCar(car) {
      this.setColor("Любой");
      this.setCar(car);
    },
    defaultImage(e) {
      e.target.src = this.imgDefPath;
    }
  }
};
</script>

<style lang="scss">
.order__model {
  grid-area: 1 / 1 / 22 / 33;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(21, 1fr);
  position: relative;
}
.model__car_class_switch {
  grid-area: 1 / 3 / 4 / 26;
  display: flex;
  align-items: center;
  width: 100%;
}

.model__container {
  grid-area: 4 / 3 / 22 / 26;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: center;
}
.model__loading {
  display: flex;
  align-self: center;
  justify-self: center;
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

// --------------------------------1023------------------------------------
@media screen and (max-width: $tablet) {
  .order__model {
    grid-area: 1 / 1 / 22 / 45;
  }
  .model__container {
    grid-area: 4 / 3 / 22 / 44;
  }
  .model__car_class_switch {
    grid-area: 1 / 3 / 4 / 30;
  }
}
// --------------------------------568------------------------------------
@media screen and (max-width: $mobile) {
  .model__car_card {
    height: 180px;
  }
}
</style>
