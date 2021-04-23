import axiosApi from "../shared/axios";

export default {
  namespaced: true,
  state: {
    cities: [],
    currentCity: {name: 'Ульяновск'},
    points: [],
    currentPoint: {},
    currentCityPoints: []
  },
  getters: {
    getCities(state) {
      return state.cities;
    },
    getPoints(state) {
      return state.currentCityPoints;
    },
    getCity(state) {
      return state.currentCity;
    },
    getPoint(state) {
      return state.currentPoint;
    }
  },
  mutations: {
    setCities(state, payload) {
      state.cities = payload;
    },
    setCity(state, payload) {
      state.currentCity = payload;
    },
    setPoints(state, payload) {
      state.points = payload;
    },
    setPoint(state, payload) {
      state.currentPoint = payload;
    },
    setCityPoints(state, payload) {
      state.currentCityPoints = payload;
    }
  },
  actions: {
    async fetchCity({ commit }) {
      await axiosApi({
        url: "/api/db/city",
        method: "get"
      })
        .then(response => {
          commit("setCities", response.data.data);
        })
        .catch(err => {
          throw err;
        });
    },
    async fetchPoints(context) {
      await axiosApi({
        url: "/api/db/point",
        method: "get"
      })
        .then(response => {
          context.commit("setPoints", response.data.data);
        })
        .catch(err => {
          throw err;
        });
    },
    async fetchCurrentCityPoints(context, payload) {
      await axiosApi({
        url: "/api/db/point?cityId=" + payload,
        method: "get"
      })
        .then(response => {
          context.commit("setCityPoints", response.data.data);
        })
        .catch(err => {
          throw err;
        });
    },
    async setCity({ commit }, payload) {
      await commit("setCity", payload);
    },
    async setPoint({ commit }, payload) {
      await commit("setPoint", payload);
    }
  }
};
