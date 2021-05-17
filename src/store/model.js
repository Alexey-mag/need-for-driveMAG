import axiosApi from "../shared/axios";

export default {
  namespaced: true,
  state: {
    cars: [],
    car: null,
    category: [],
    id: 2
  },
  getters: {
    getCars(state) {
      return state.cars;
    },
    getCar(state) {
      return state.car;
    },
    getModelStatus(state) {
      const status = !state.car;
      return { id: state.id, isDisabled: status };
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
      try {
        const { data } = await axiosApi({
          url: "/car",
          method: "get"
        });
        context.commit("setCars", data.data);
        this.commit("shared/setLoading", false);
      } catch (e) {
        this.commit("shared/setLoading", false);
        throw e;
      }
    },
    setCar({ commit }, payload) {
      this.commit("total/setCarId", payload);
      commit("setCar", payload);
    }
  }
};
