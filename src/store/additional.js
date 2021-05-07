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
    rentDuration: null
  },
  getters: {
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
      if (state.rate && state.price && state.rentDuration) {
        return { id: 3, isDisabled: false };
      } else {
        return { id: 3, isDisabled: true };
      }
    }
  },
  mutations: {
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
      state.rate = state.rates.find(el => {
        if (el.rateTypeId.name === payload) {
          return el;
        }
      });
    },
    setOption(state, payload) {
      state.addOptions.map(el => {
        if (payload.includes(el.name)) {
          el.optValue = true;
        } else {
          el.optValue = false;
        }
        return el;
      });
    }
  },
  actions: {
    async fetchRates({ commit }) {
      await axiosApi({
        url: "/api/db/rate",
        method: "get"
      })
        .then(resp => {
          commit("setRates", resp.data.data);
        })
        .catch(err => {
          throw err;
        });
    },
    setRate({ commit }, payload) {
      commit("setRate", payload);
    },
    setOption({ commit }, payload) {
      commit("setOption", payload);
    },
    setPrice({ commit }, payload) {
      commit("setPrice", payload);
    },
    setRentDuration({ commit }, payload) {
      commit("setRentDuration", payload);
    }
  }
};
