<template>
  <div class="order__autocomplete">
    <label style="padding-right: 5px;">{{
      label
    }}
    <input
      v-model="search"
      class="autocomplete__input"
      type="text"
      :placeholder="placeholder"
      @blur="toggle = false"
      @focus="toggle = true"
    />
    </label>
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
  name: "AutocompleteApp",
  props: {
    getItems: Array,
    getItem: Object,
    label: String,
    placeholder: String
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
  },
  watch: {
    getItems() {
        this.search = ''
    }
  },
  created() {
    this.search = this.getItem.name;
  },
  methods: {
    selectItem(item) {
      this.search = item.name;
      const currentItemObj = this.getItems.find(el => {
        return el.name === this.search;
      });

      this.$emit("setvalue", currentItemObj);
      this.toggle = false;
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
  width: auto;
  border: none;
  border-bottom: 1px solid $main-gray;
  background: transparent;
  transition: all 0.2s ease;
  text-align: start;

  &:focus {
    outline: none !important;
    border-bottom: 1px solid blue;
  }
}

.location__form__cities {
  position: absolute;
  width: 100%;
  height: 200px;
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
</style>
