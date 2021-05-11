import axiosApi from "../shared/axios";

export default {
  namespaced: true,
  state: {
    order: {
      orderStatusId: null,
      cityId: {},
      pointId: {},
      carId: {},
      color: "",
      dateFrom: null,
      dateTo: null,
      rateId: {},
      price: null
    },
    confirmedOrder: null
  },
  getters: {
    getOrder(state) {
      return state.order;
    },
    getConfirmedOrder(state) {
      return state.confirmedOrder;
    }
  },
  mutations: {
    setOrderId(state, payload) {
      state.order.orderStatusId = payload;
    },
    setCityId(state, payload) {
      state.order.cityId = payload.cityId;
    },
    setPointId(state, payload) {
      state.order.pointId = {
        address: payload.address,
        id: payload.id,
        name: payload.name
      };
    },
    setCarId(state, payload) {
      state.order.carId = payload;
    },
    setColor(state, payload) {
      state.order.color = payload;
    },
    setRate(state, payload) {
      state.order.rateId = payload;
    },
    setPrice(state, payload) {
      state.order.price = payload;
    },
    setDateTo(state, payload) {
      state.order.dateTo = Number(payload);
    },
    setDateFrom(state, payload) {
      state.order.dateFrom = Number(payload);
    },
    setOptions(state, payload) {
      payload.map(el => {
        state.order[el.optName] = el.optValue;
      });
    },
    setOrder(state, payload) {
      state.confirmedOrder = payload;
    }
  },
  actions: {
    async fetchOrderStatus({ commit }) {
      await axiosApi({
        url: "/api/db/orderStatus",
        method: "get"
      })
        .then(resp => {
          commit("setOrderId", resp.data.data[0]);
        })
        .catch(err => {
          throw err;
        });
    },
    setCityId({ commit }, payload) {
      commit("setCityId", payload);
    },
    setPointId({ commit }, payload) {
      commit("setPointId", payload);
    },
    setCarId({ commit }, payload) {
      commit("setCarId", payload);
    },
    setColor({ commit }, payload) {
      commit("setColor", payload);
    },
    async pushOrder(context) {
      const data = JSON.parse(JSON.stringify(context.state.order));
      await axiosApi({
        url: "/api/db/order",
        method: "post",
        data: data
      })
        .then(response => {
          context.commit("setOrder", response.data.data);
        })
        .catch(err => {
          throw err;
        });
    },
    clearConfirmedOrder({ commit }) {
      commit("setOrder", null);
    }
  }
};
