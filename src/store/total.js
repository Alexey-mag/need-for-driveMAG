import axiosApi from "../shared/axios";

export default {
  namespaced: true,
  state: {
    orderStatusId: null
  },
  getters: {},
  mutations: {
    setOrderId(state, payload) {
      state.orderStatusId = payload;
    }
  },
  actions: {
    async fetchOrderStatus({ commit }) {
      await axiosApi({
        url: "/api/db/orderStatus",
        method: "get"
      })
        .then(resp => {
          commit("setOrderId", resp.data.data);
        })
        .catch(err => {
          throw err;
        });
    }
  }
};
