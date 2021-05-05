<template>
  <div class="order__additional">
    <div v-if="getRates" class="additional__container">
      <div class="additional__form_block">
      <p class="additional__label">Цвет</p>
      <el-radio-group v-model="radioColorsSelected">
        <el-radio
          v-for="color in getCar.colors"
          :key="color"
          :label="color"
        ></el-radio>
      </el-radio-group>
      </div>
      <div class="additional__form_block">
      <p class="additional__label">Дата аренды</p>
      <div class="additional__date_container">
        <p class="additional__date_label">C</p>
        <el-date-picker
          v-model="dateFrom"
          type="datetime"
          editable
          :clearable="true"
          format="dd-MM-yyyy HH:mm"
          placeholder="Введите дату и время"
        >
        </el-date-picker>
      </div>
        <div class="additional__date_container">
        <p class="additional__date_label">По</p>
        <el-date-picker
          v-model="dateTo"
          type="datetime"
          editable
          :clearable="true"
          format="dd-MM-yyyy HH:mm"
          placeholder="Введите дату и время"
        >
        </el-date-picker>
        </div>
      </div>
        <div class="additional__form_block">
          <p class="additional__label">Тариф</p>
      <el-radio-group v-model="radioRateSelected">
        <el-radio
                v-for="rate in getRates"
                :key="rate.id"
                :label="rate.rateTypeId.name + ', ' +  rate.price + '₽/' + rate.rateTypeId.unit"
        ></el-radio>
      </el-radio-group>
        </div>
      <div class="additional__form_block">
        <el-checkbox-group v-model="addOptions" class="additional__chechbox">
          <el-checkbox v-for="opt in getOptions" :key="opt.name" :label="opt.name"></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Additional",
  data() {
    return {
      radioColorsSelected: "Любой",
      radioRateSelected: '',
      addOptions: [],
      dateTo: "",
      dateFrom: ""
    };
  },
  computed: {
    ...mapGetters("model", ["getCar"]),
    ...mapGetters('additional', ['getRates', 'getOptions', 'getRate'])
  },
  watch: {
    radioColorsSelected(radio) {
      this.$store.dispatch("model/setColor", radio);
    },
    addOptions() {
      this.$store.dispatch('additional/setOption', this.addOptions)
    },
    radioRateSelected() {
      this.$store.dispatch('additional/setRate', this.radioRateSelected.split(',')[0])
    }
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch("additional/fetchRates");
  }
};
</script>

<style lang="scss">
.order__additional {
  grid-area: 5 / 1 / 26 / 32;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(21, 1fr);
  border-right: 1px solid $main-light-gray;
}
.additional__container {
  grid-area: 2 / 3 / 16 / 11;
  min-width: 300px;
  display: flex;
  flex-direction: column;
}
  .additional__form_block {
    margin-bottom: 32px;
  }
  .additional__label {
    width: 100%;
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }
.additional__date_label {
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  margin-right: 8px;
}
  .additional__date_container {
    display: inline-flex;
    align-items: flex-end;
    right: 0;
  }
  .additional__chechbox {
    display: flex;
    flex-direction: column;
  }
  .el-checkbox__label {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer !important;
    color: $main-gray;
    margin-bottom: 8px;
  }
</style>
