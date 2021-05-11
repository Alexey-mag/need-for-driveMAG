import axiosApi from "../shared/axios";

export default {
  namespaced: true,
  state: {
    cars: [],
    car: null,
    category: []
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
      this.commit("total/setCarId", payload);
      commit("setCar", payload);
    }
  }
};
