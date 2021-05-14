<template>
  <div class="order">
    <div class="order__header">
      <header-app />
    </div>
    <nav class="order__nav">
      <div v-if="getConfirmedOrder" class="order__steps">
        <p class="order__order__number">
          Заказ номер {{ getConfirmedOrder.id }}
        </p>
      </div>
      <div v-else class="order__steps">
        <div
          v-for="comp in orderComponents"
          :key="comp.id"
          class="order__step__container"
        >
          <button
            class="order__step"
            :disabled="comp.isDisabled"
            :class="{
              order__step_active: comp.isActive,
              order__step_disabled: comp.isDisabled,
              order__step_finished: !comp.isDisabled
            }"
            @click="changeCurrentComponent(comp)"
          >
            {{ comp.tag }}
          </button>
          <div class="order__arrow" />
        </div>
      </div>
    </nav>
    <div v-for="comp of orderComponents" :key="comp.id" class="order__component_container">
      <keep-alive>
        <component
                :is="comp.name"
                v-if="currentComponent.name === comp.name"
        ></component>
      </keep-alive>
    </div>
    <price />
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
  computed: {
    ...mapGetters("shared", ["orderComponents", "currentComponent"]),
    ...mapGetters("order", ["getLocationStatus"]),
    ...mapGetters("model", ["getModelStatus"]),
    ...mapGetters("additional", ["getAdditionalStatus"]),
    ...mapGetters("total", ["getConfirmedOrder"])
  },
  watch: {
    getLocationStatus(res) {
      this.$store.dispatch("shared/setComponentStatus", res);
    },
    getModelStatus(res) {
      this.$store.dispatch("shared/setComponentStatus", res);
    },
    getAdditionalStatus(res) {
      this.$store.dispatch("shared/setComponentStatus", res);
    }
  },
  mounted() {
    this.$store.dispatch("total/fetchOrderStatus");
  },
  methods: {
    changeCurrentComponent(component) {
      this.$store.dispatch("shared/setCurrentComponent", component);
    }
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
.order__component_container {
  grid-area: 5 / 1 / 26 / 32;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(21, 1fr);
  border-right: 1px solid $main-light-gray;
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
.order__step_active {
  color: $main-green !important;
  cursor: pointer !important;
}
.order__step_disabled {
  color: $main-gray;
  cursor: initial;
}
.order__step_finished {
  color: $main-black;
}
.order__arrow {
  align-self: center;
  margin-right: 16px;
  height: 8px;
  width: 6px;
  background: url("~@/assets/order_arrow.svg");
}
.order__order__number {
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
}
</style>
