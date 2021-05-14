<template>
  <div class="order__autocomplete">
    <div class="autocomplete__form_block">
      <label class="autocomplete__label" style="padding-right: 5px;"
        >{{ label }}
        <input
          v-model="search"
          class="autocomplete__input"
          type="text"
          :placeholder="placeholder"
          @change="toggle = true"
          @blur="toggle = false"
          @focus="toggle = true"
        />
      </label>
      <div class="autocomplete__icon_clear" @click="clearInput"></div>
    </div>
    <div v-if="toggle" class="location__form__cities">
      <div
        v-for="item in filteredItemsIn"
        :key="item.id"
        class="location__form__city"
      >
        <span @click="selectItem(item)" @mousedown.prevent>{{
          item.name
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AutocompleteCity",
  props: {
    getItems: {
      type: Array,
      require: true
    },
    getItem: {
      type: Object,
      default: null
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      search: "",
      filteredItems: [],
      toggle: false
    };
  },
  computed: {
    filteredItemsIn() {
      if (this.search) {
        const filteredItems = [];
        const count = this.search.length;
        const items = this.getItems;
        items.forEach(el => {
          if (
            el.name.toLowerCase().substr(0, count) === this.search.toLowerCase()
          ) {
            filteredItems.push(el);
          }
        });
        return filteredItems;
      }
      return this.getItems;
    }
    // search: {
    //   get() {
    //     return this.getItem
    //   },
    //   set(val) {
    //     this.setValue(val)
    //   }
    // }
  },
  watch: {
    getItems() {
      this.search = ""; // очищаем список точек при смене города
    },
    getItem() {
      if (!this.getItem) {
        this.search = "";
      }
    }
  },
  created() {
    if (this.getItem) {
      this.search = this.getItem.name;
    }
  },
  methods: {
    selectItem(item) {
      this.search = item.name;
      this.$emit("setValue", item);
      this.toggle = false;
    },
    clearInput() {
      this.search = "";
      this.$emit("clear");
    }
  }
};
</script>

<style scoped lang="scss">
div::-webkit-scrollbar {
  width: 0.5em;
}

div::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

div::-webkit-scrollbar-thumb {
  background-color: $main-gray;
  border-radius: 5px;
}
.autocomplete__input {
  border: none;
  border-bottom: 1px solid $main-gray;
  background: transparent;
  transition: all 0.2s ease;
  text-align: start;
  line-height: 16px;
  font-size: 14px;
  font-weight: 300;
  margin-left: 10px;
  width: 250px;
  text-indent: 8px;
  outline: none;
  position: absolute;
  right: 0;

  &:focus {
    outline: none !important;
    border-bottom: 1px solid $main-green;
  }
}

.location__form__cities {
  position: absolute;
  width: 250px;
  right: 0;
  height: auto;
  max-height: 200px;
  z-index: 99;
  overflow-y: scroll;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.location__form__city {
  color: $main-gray;
  cursor: pointer;

  &:hover {
    color: $main-green;
  }
}
.autocomplete__form_block {
  position: relative;
  margin-bottom: 12px;
}
.autocomplete__icon_clear {
  background: url("~@/assets/location_clear.svg");
  width: 8px;
  height: 8px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
.autocomplete__label {
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
}
</style>
