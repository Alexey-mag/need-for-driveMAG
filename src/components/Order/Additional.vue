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
            @change="setStoreColor(color)"
          ></el-radio>
        </el-radio-group>
      </div>
      <div class="additional__form_block">
        <p class="additional__label">Дата аренды</p>
        <div class="additional__date_container">
          <p class="additional__date_label">C</p>
          <el-date-picker
            v-model="dateFrom"
            :picker-options="optionsDateFrom"
            type="datetime"
            editable
            :clearable="true"
            format="dd-MM-yyyy HH:mm"
            placeholder="Введите дату и время"
            @change="setStoreDateFrom"
          >
          </el-date-picker>
        </div>
        <div class="additional__date_container">
          <p class="additional__date_label">По</p>
          <el-date-picker
            v-model="dateTo"
            :picker-options="optionsDateTo"
            type="datetime"
            editable
            :clearable="true"
            format="dd-MM-yyyy HH:mm"
            placeholder="Введите дату и время"
            @change="setStoreDateTo"
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
            :label="
              rate.rateTypeId.name"
            @change="setStoreRate(rate)"
          >{{rateRadioLabel(rate)}}</el-radio>
        </el-radio-group>
      </div>
      <div class="additional__form_block">
        <p class="additional__label">Доп услуги</p>
        <el-checkbox-group v-model="addOptions" class="additional__checkbox">
          <el-checkbox
            v-for="opt in getOptions"
            :key="opt.name"
            :label="opt.name"
            @change="setStoreOptions()"
            >{{optionCheckboxLabel(opt)}}</el-checkbox
          >
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
      radioColorsSelected: "",
      addOptions: [],
      radioRateSelected: '',
      dateTo: "",
      dateFrom: "",
      optionsDateFrom: {
        disabledDate: el => {
          return el < new Date().setHours(0, 0, 0, 0)
        }
      },
      optionsDateTo: {
        disabledDate: el => {
          return el < this.dateFrom
        }
      }
    };
  },
  computed: {
    ...mapGetters("model", ["getCar"]),
    ...mapGetters("additional", [
      "getRates",
      "getOptions",
      "getRate",
      "getPrice",
      "getRentDuration"
    ]),
    rateTotal: {
      get() {
        return this.getPrice;
      },
      set(val) {
        this.$store.dispatch("additional/setPrice", val);
      }
    },
    rentDuration: {
      get() {
        return this.getRentDuration
      },
      set(val) {
        this.$store.dispatch('additional/setRentDuration', val)
      }
    }
  },
  watch: {
    getCar() {
      this.radioColorsSelected = this.getCar.colors[0]
    }
  },
  async mounted() {
    await this.$store.dispatch("additional/fetchRates");
  },
  methods: {
    setStoreDateTo() {
      if (!this.dateTo) {
        this.rentDuration = null;
        this.rateTotal = null;
      }
      this.$store.dispatch("additional/setDateTo", this.dateTo);
      if (this.radioRateSelected && this.dateFrom && this.dateTo) {
        this.calculateRent();
      }
    },
    setStoreDateFrom() {
      if (!this.dateFrom) {
        this.rentDuration = null;
        this.rateTotal = null;
      }
      this.$store.dispatch("additional/setDateFrom", this.dateFrom);
      if (this.radioRateSelected && this.dateFrom && this.dateTo) {
        this.calculateRent();
      }
    },
    setStoreOptions() {
      this.$store.dispatch("additional/setOption", this.addOptions);
      this.calculateRent();
    },
    setStoreColor(color) {
      this.$store.dispatch('additional/setColor', color)
    },
    setStoreRate(rate) {
      this.$store.dispatch(
              "additional/setRate",
              rate
      );
      this.calculateRent();
    },
    rateRadioLabel(rate) {
      return `${rate.rateTypeId.name}, ${rate.price} ₽/${rate.rateTypeId.unit}`
    },
    optionCheckboxLabel(opt) {
      return`${opt.name},${opt.price}₽`
    },
    calculateRent() {
      let adds = 0;
      this.getOptions.filter(el => {
        if (el.optValue === true) {
          adds += el.price;
        }
      });
      if (this.dateFrom !== "" && this.dateTo !== "") {
        const amount = this.dateTo - this.dateFrom;
        if (amount < 0) {
          this.rateTotal = null;
          this.rentDuration = null;
        } else {
          switch (this.getRate.rateTypeId.unit) {
            case "сутки": {
              let units = Math.floor(amount / 1000 / 60 / 60 / 24);
              if (units === 0) {
                units = 1;
              }
              this.rentDuration = { units: units, name: "д" };
              this.rateTotal = units * this.getRate.price + adds;
              break;
            }
            case "7 дней": {
              let units = Math.ceil(amount / 1000 / 60 / 60 / 24 / 7);
              this.rentDuration = { units: units, name: "нед" };
              this.rateTotal = units * this.getRate.price + adds;
              break;
            }
            case "мин": {
              const units = Math.floor(amount / 1000 / 60);
              this.rentDuration = { units: units, name: "мин" };
              this.rateTotal = units * this.getRate.price + adds;
              break;
            }
          }
        }
      }
    }
  }
};
</script>

<style lang="scss">
.order__additional {
  grid-area: 1 / 1 / 22 / 33;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(21, 1fr);
}
.additional__container {
  grid-area: 2 / 3 / 16 / 11;
  min-width: 250px;
  display: flex;
  flex-direction: column;
}
.additional__form_block {
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
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
  padding-bottom: 3px;
}
.additional__date_container {
  display: inline-flex;
  align-items: flex-end;
  right: 0;
  padding-top: 10px;
  margin-left: auto;
}
.additional__checkbox {
  display: flex;
  flex-direction: column;
}
</style>
