import axiosApi from "../shared/axios";

export default {
  namespaced: true,
  state: {
    cities: [],
    currentCity: null,
    currentPoint: null,
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
    },
    getLocationStatus(state) {
      if (state.currentCity && state.currentPoint) {
        return { id: 1, isDisabled: false };
      }
      return { id: 1, isDisabled: true };
    }
  },
  mutations: {
    setCities(state, payload) {
      payload.map(el => {
        el.coords = [];
        return el;
      });
      state.cities = payload;
    },
    setCity(state, payload) {
      state.currentCityPoints = [];
      state.currentPoint = null;
      state.currentCity = payload;
    },
    setPoints(state, payload) {
      payload.map(el => {
        el.coords = [];
        return el;
      });
      state.currentCityPoints = payload;
    },
    setPoint(state, payload) {
      state.currentPoint = payload;
    },
    addCoordsToPoint(state, payload) {
      state.currentCityPoints.map(el => {
        if (el.id === payload.id) {
          el.coords = payload.coords;
          return el;
        }
        return el;
      });
    },
    clearCity(state) {
      state.currentCity = null;
      state.currentPoint = null;
    },
    clearPoint(state) {
      state.currentPoint = null;
    }
  },
  actions: {
    async fetchPointCoords(context, payload) {
      let editedCoords = {};
      const pointsWithCoords = await axiosApi({
        url:
          "https://geocode-maps.yandex.ru/1.x/?apikey=a77bd471-3a16-4a8c-8604-aa8285380d79&format=json&geocode=" +
          payload.cityId.name +
          "+" +
          payload.address,
        method: "get"
      })
        .then(response => {
          const pointCoords =
            response.data.response.GeoObjectCollection.featureMember[0]
              .GeoObject.Point;
          const coords = Object.values(pointCoords.pos.split(" "));
          editedCoords = {
            id: payload.id,
            coords: coords
          };
        })
        .catch(err => {
          throw err;
        });
      await Promise.resolve(pointsWithCoords)
        .then(() => {
          this.commit("order/addCoordsToPoint", editedCoords);
        })
        .catch(err => {
          throw err;
        });
    },
    async fetchCityCoords(context, payload) {
      let cityForMapComponent = null;
      const cityWithCoords = await axiosApi({
        url:
          "https://geocode-maps.yandex.ru/1.x/?apikey=a77bd471-3a16-4a8c-8604-aa8285380d79&format=json&geocode=" +
          payload.name,
        method: "get"
      })
        .then(response => {
          const pointCoords =
            response.data.response.GeoObjectCollection.featureMember[0]
              .GeoObject.Point;
          payload["coords"] = Object.values(pointCoords.pos.split(" "));
          cityForMapComponent = payload;
        })
        .catch(err => {
          throw err;
        });
      await Promise.resolve(cityWithCoords)
        .then(() => {
          this.commit("order/setCity", cityForMapComponent);
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
      this.commit("shared/setLoading", true);
      await context.dispatch("fetchCityCoords", payload);
      await axiosApi({
        url: "/api/db/point?cityId=" + payload.id,
        method: "get"
      })
        .then(response => {
          context.commit("setPoints", response.data.data);
        })
        .catch(err => {
          throw err;
        });
      const pointsWithCoords = await context.getters.getPoints.map(el => {
        return context.dispatch("fetchPointCoords", el);
      });
      Promise.all(pointsWithCoords).then(() => {
        this.commit("shared/setLoading", false);
        this.commit("shared/setMapStatus", true);
      });
    },
    async setPoint({ commit }, payload) {
      this.commit("total/setCityId", payload);
      this.commit("total/setPointId", payload);
      await commit("setPoint", payload);
    },
    clearCity({ commit }) {
      commit("clearCity");
    },
    clearPoint({ commit }) {
      commit("clearPoint");
    }
  }
};
