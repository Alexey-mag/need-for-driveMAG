import axiosApi from "../shared/axios";

export default {
    namespaced: true,
    state: {
        cars: [],
        car: null
    },
    getters: {
        getCars(state) {
            return state.cars
        },
        getCar(state) {
            return state.car
        }
    },
    mutations: {
        setCars(state, payload) {
            state.cars = payload
        },
        setCar(state, payload) {
            state.car = payload
        }
    },
    actions: {
        async fetchModels(context) {
            await axiosApi({
                url: "/api/db/car",
                method: "get"
            })
                .then(response => {
                    context.commit('setCars', response.data.data)
                })
                .catch(err => {
                    throw err;
                });
        },
        setCar({commit}, payload) {
            commit('setCar', payload)
        }
    }
}
