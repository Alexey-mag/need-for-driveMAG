<template>
  <div>
    <div v-if="(buttonView === 'withText')">
      <button
        v-if="getConfirmedOrder"
        class="price__button price__button_cancel"
        @click="reset"
      >
        Отменить
      </button>
      <button
        v-else
        class="price__button"
        :class="buttonClass"
        :disabled="buttonActive"
        @click="toNextComp"
      >
        {{ currentComponent.buttonText }}
      </button>
    </div>
    <div v-if="(buttonView === 'roundIcon')">
      <button
        v-if="getConfirmedOrder"
        class="el-icon-error button__icon button__icon_cancel"
        @click="reset"
      ></button>
      <button
        v-else
        :class="iconClass"
        :disabled="buttonActive"
        class="el-icon-success button__icon"
        @click="toNextComp"
      ></button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'ButtonNext',
  props: {
    buttonView: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters('shared', ['currentComponent', 'orderComponents']),
    ...mapGetters('total', ['getConfirmedOrder']),
    buttonActive() {
      if (this.currentComponent.id === this.orderComponents.length) {
        return this.currentComponent.isDisabled
      } else {
        return this.orderComponents[this.currentComponent.id].isDisabled
      }
    },
    buttonClass() {
      if (this.currentComponent.id === this.orderComponents.length) {
        return {
          price__button_disabled: this.currentComponent.isDisabled,
        }
      } else {
        return {
          price__button_disabled: this.orderComponents[this.currentComponent.id]
            .isDisabled,
        }
      }
    },
    iconClass() {
      if (this.currentComponent.id === this.orderComponents.length) {
        return {
          button__icon_disabled: this.currentComponent.isDisabled,
        }
      } else {
        return {
          button__icon_disabled: this.orderComponents[this.currentComponent.id]
                  .isDisabled,
        }
      }
    }
  },
  methods: {
    ...mapMutations('shared', ['toNextStep', 'invertPriceVisible']),
    ...mapActions('total', ['clearConfirmedOrder']),
    toNextComp() {
      this.toNextStep()
    },
    reset() {
      this.clearConfirmedOrder()
    }
  },
}
</script>

<style lang="scss">
.price__button {
  background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
  background-blend-mode: darken;
  border-radius: 8px;
  width: 100%;
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
.price__button_cancel {
  background: linear-gradient(90deg, #493013 0%, #7b0c3b 100%) !important;
}
.price__button_disabled {
  background: $main-light-gray !important;
  color: white;
  cursor: initial !important;
}
.button__icon {
  font-size: 45px;
  position: absolute;
  color: $main-green;
  bottom: 25px;
  right: 105px;
  cursor: pointer !important;
  z-index: 3000;
  background-color: Transparent !important;
  background-repeat: no-repeat !important;
  border: none;
  overflow: hidden;
}
  .button__icon_disabled {
      color: $main-light-gray !important;
      cursor: initial !important;
  }
    .button__icon_cancel {
        color: rgba(123, 12, 59, 1);
    }
</style>
