<template>
  <div class="order">
    <div class="order__header">
      <HeaderApp />
    </div>
    <nav class="order__nav">
      <ul style="list-style: none; display: flex;">
        <li
          v-for="component in orderComponents"
          :key="component.id"
          @click="changeCurrentComponent(component)"
        >
          {{ component.tag }}
        </li>
      </ul>
      <!--      <router-link :to="{ name: 'Location' }">Location /</router-link>-->
      <!--      <router-link :to="{ name: 'Model' }">Model /</router-link>-->
      <!--      <router-link :to="{ name: 'Additional' }">Additional /</router-link>-->
      <!--      <router-link :to="{ name: 'Total' }">Total /</router-link>-->
    </nav>
    <keep-alive>
      <component
        :is="orderComponents[0].name"
        v-if="currentComponent === orderComponents[0].name"
      ></component>
      <component
        :is="orderComponents[1].name"
        v-if="currentComponent === orderComponents[1].name"
      ></component>
      <component
        :is="orderComponents[2].name"
        v-if="currentComponent === orderComponents[2].name"
      ></component>
      <component
        :is="orderComponents[3].name"
        v-if="currentComponent === orderComponents[3].name"
      ></component>
    </keep-alive>
    <!--    <router-view></router-view>-->
    <price />
  </div>
</template>

<script>
import Price from "@/components/Order/Price";
import Location from "@/components/Order/Location";
import Model from "@/components/Order/Model";
import Additional from "@/components/Order/Additional";
import Total from "@/components/Order/Total";
import HeaderApp from "@/components/HeaderApp";
export default {
  name: "Order",
  components: { Price, Location, Additional, Model, Total, HeaderApp },
  data() {
    return {
      orderComponents: [
        {
          id: 1,
          name: "Location",
          tag: "Местоположение"
        },
        {
          id: 2,
          name: "Model",
          tag: "Модель"
        },
        {
          id: 3,
          name: "Additional",
          tag: "Дополнительно"
        },
        {
          id: 4,
          name: "Total",
          tag: "Итого"
        }
      ],
      currentComponent: "Location"
    };
  },
  methods: {
    changeCurrentComponent(component) {
      this.currentComponent = component.name;
    }
  }
};
</script>

<style scoped lang="scss">
.order__nav ul li {
  cursor: pointer;
}
.order {
  display: grid;
  grid-template-columns: repeat(43, 1fr);
  grid-template-rows: repeat(25, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  height: 100vh;
  width: calc(100vw - 64px);
}
.order__header {
  grid-area: 2 / 3 / 3 / 42;
}
.order__nav {
  grid-area: 4 / 1 / 5 / 44;
  border-top: 1px solid $main-light-gray;
  border-bottom: 1px solid $main-light-gray;
  padding-left: calc(100%/43*2);
}
</style>
