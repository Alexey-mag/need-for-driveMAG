import axiosApi from "../shared/axios";

export default {
  namespaced: true,
  state: {
    cities: [],
    currentCity: {},
    points: [],
    currentPoint: null,
    currentCityPoints: [],
    pointsWithCoords: []
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
    },
    getPointsWithCoords(state) {
      return state.pointsWithCoords
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
    },
    addPointCoords(state, payload) {
      state.pointsWithCoords.push(payload)
    }
  },
  actions: {
    async fetchPointCoords({commit}, payload) {
      await axiosApi({
        url: "https://geocode-maps.yandex.ru/1.x/?apikey=a77bd471-3a16-4a8c-8604-aa8285380d79&format=json&geocode=" + payload.cityId.name + '+' + payload.address,
        method: "get"
      })
          .then(response => {
            const pointCoords = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point
            // payload = {...payload, ...pointCoords }
            payload['coords'] = Object.values(pointCoords.pos.split(' '))
            // commit('addPointCoords', payload)
          })
          .catch(err => {
            throw err;
          });
    },
    async fetchCity(context) {
      await axiosApi({
        url: "/api/db/city",
        method: "get"
      })
        .then(response => {
          context.commit("setCities", response.data.data);
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
    async setCity(context, payload) {
      this.commit('shared/setLoading', true)
      await context.commit("setCity", payload);
      await axiosApi({
        url: "/api/db/point?cityId=" + payload.id,
        method: "get"
      })
          .then(response => {
            context.commit("setCityPoints", response.data.data);
          })
          .catch(err => {
            throw err;
          });
      const pointsWithCoords = await context.getters.getPoints.map(el => {
        return context.dispatch('fetchPointCoords', el)
      })
      this.commit('shared/setLoading', false)
    },
    async setPoint({ commit }, payload) {
      await commit("setPoint", payload);
    }
  }
};
