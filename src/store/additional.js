import axiosApi from "../shared/axios";

export default {
  namespaced: true,
  state: {
    addOptions: [
      {
        name: "Полный бак",
        price: 500,
        optName: "isFullTank",
        optValue: false
      },
      {
        name: "Детское кресло",
        price: 200,
        optName: "isNeedChildChair",
        optValue: false
      },
      {
        name: "Правый руль",
        price: 1600,
        optName: "isRightWheel",
        optValue: false
      }
    ],
    rates: [],
    rate: null,
    price: null,
    rentDuration: null,
    dateTo: null,
    dateFrom: null,
    color: null,
    id: 3
  },
  getters: {
    getColor(state) {
      return state.color;
    },
    getRates(state) {
      return state.rates;
    },
    getOptions(state) {
      return state.addOptions;
    },
    getRate(state) {
      return state.rate;
    },
    getPrice(state) {
      return state.price;
    },
    getRentDuration(state) {
      return state.rentDuration;
    },
    getAdditionalStatus(state) {
      const status = (!(state.rate &&
          state.price &&
          state.rentDuration &&
          state.dateFrom &&
          state.dateTo &&
          state.color))
      return { id: state.id, isDisabled: status }
    }
  },
  mutations: {
    setColor(state, payload) {
      state.color = payload;
    },
    setDateFrom(state, payload) {
      state.dateFrom = payload;
    },
    setDateTo(state, payload) {
      state.dateTo = payload;
    },
    setRentDuration(state, payload) {
      state.rentDuration = payload;
    },
    setPrice(state, payload) {
      state.price = payload;
    },
    setRates(state, payload) {
      state.rates = payload;
    },
    setRate(state, payload) {
      state.rate = payload
      this.commit("total/setRate", state.rate);
    },
    setOption(state, payload) {
      state.addOptions.map(el => {
        payload.includes(el.name) ? el.optValue = true : el.optValue = false
        return el;
      });
      this.commit("total/setOptions", state.addOptions);
    }
  },
  actions: {
    async fetchRates({ commit }) {
      try {
        const {data} = await axiosApi({
          url: "/rate",
          method: "get"
        })
        commit("setRates", data.data);
      } catch (e) {
        throw e
      }
    },
    setRate({ commit }, payload) {
      commit("setRate", payload);
    },
    setOption({ commit }, payload) {
      commit("setOption", payload);
    },
    setPrice({ commit }, payload) {
      this.commit("total/setPrice", payload);
      commit("setPrice", payload);
    },
    setRentDuration({ commit }, payload) {
      commit("setRentDuration", payload);
    },
    setDateFrom({ commit }, payload) {
      commit("setDateFrom", payload);
      this.commit("total/setDateFrom", payload);
    },
    setDateTo({ commit }, payload) {
      commit("setDateTo", payload);
      this.commit("total/setDateTo", payload);
    },
    setColor({ commit }, payload) {
      this.commit("total/setColor", payload);
      commit("setColor", payload);
    }
  }
};
