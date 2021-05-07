import axiosApi from "../shared/axios";

export default {
  namespaced: true,
  state: {
    cars: [],
    car: null,
    category: [],
    color: null
  },
  getters: {
    getCars(state) {
      return state.cars;
    },
    getCar(state) {
      return state.car;
    },
    getModelStatus(state) {
      if (state.car) {
        return { id: 2, isDisabled: false };
      } else {
        return { id: 2, isDisabled: true };
      }
    },
    getCarCategory(state) {
      return state.category;
    },
    getColor(state) {
      return state.color;
    }
  },
  mutations: {
    setCars(state, payload) {
      state.cars = payload;
      const cats = ["Все модели"];
      payload.forEach(el => {
        if (cats.includes(el.categoryId.name)) {
        } else {
          cats.push(el.categoryId.name);
        }
      });
      state.category = cats;
    },
    setCar(state, payload) {
      if (payload.colors.includes("Любой")) {
        state.car = payload;
      } else {
        payload.colors.unshift("Любой");
        state.car = payload;
      }
    },
    setColor(state, payload) {
      state.color = payload;
    }
  },
  actions: {
    async fetchModels(context) {
      this.commit("shared/setLoading", true);
      await axiosApi({
        url: "/api/db/car",
        method: "get"
      })
        .then(response => {
          context.commit("setCars", response.data.data);
          this.commit("shared/setLoading", false);
        })
        .catch(err => {
          throw err;
        });
    },
    setCar({ commit }, payload) {
      commit("setCar", payload);
    },
    setColor({ commit }, payload) {
      commit("setColor", payload);
    }
  }
};
