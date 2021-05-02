<template>
  <div class="order">
    <div class="order__header">
      <HeaderApp />
    </div>
    <nav class="order__nav">
      <ul class="order__steps">
        <li
          v-for="component in orderComponents"
          :key="component.id"
          class="order__step__container"
        >
          <button class="order__step" @click="changeCurrentComponent(component)">
            {{ component.tag }}
          </button>
          <div class="order__arrow" />
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
    <Price />
  </div>
</template>

<script>
import Price from "@/components/Order/Price";
import Location from "@/components/Order/Location/Location";
import Model from "@/components/Order/Model";
import Additional from "@/components/Order/Additional";
import Total from "@/components/Order/Total";
import HeaderApp from "@/components/HeaderApp";
import { mapGetters } from "vuex";
export default {
  name: "Order",
  components: { Price, Location, Additional, Model, Total, HeaderApp },
  methods: {
    changeCurrentComponent(component) {
      this.$store.dispatch('shared/setCurrentComponent', component.name);
    }
  },
  computed: {
    ...mapGetters("shared", ["orderComponents", "currentComponent"])
  }
};
</script>

<style scoped lang="scss">
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
  padding-left: calc(100% / 43 * 2);
}
.order__steps {
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
}
.order__step__container {
  display: flex;
  &:nth-child(4) .order__arrow {
    display: none;
  }
}
.order__step {
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-right: 16px;
  cursor: pointer;
  border: none;
  background-color: inherit;
}
.order__arrow {
  align-self: center;
  margin-right: 16px;
  height: 8px;
  width: 6px;
  background: url("~@/assets/order_arrow.svg");
}
</style>
