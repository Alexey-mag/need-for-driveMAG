export default {
  namespaced: true,
  state: {
    counter: 1,
    isBurgerActive: false,
    loading: false,
    isMapReady: false,
    slides: [
      {
        id: 1,
        imgSrc: "./images/Back1.jpg",
        title: "Бесплатная парковка",
        desc:
          "Оставляйте машину на платных городских парковках и " +
          "разрешенных местах, не нарушая ПДД, а также в аэропортах.",
        buttonText: "Подробнее",
        background:
          "background: linear-gradient(90deg," + " #13493F 0%, #0C7B1B 100%);"
      },
      {
        id: 2,
        imgSrc: "./images/Back2.jpg",
        title: "Страховка",
        desc: "Полная страховка страховка автомобиля",
        buttonText: "Подробнее",
        background:
          "background: linear-gradient(90deg," + " #132949 0%, #0C7B67 100%);"
      },
      {
        id: 3,
        imgSrc: "./images/Back3.jpg",
        title: "Бензин",
        desc: "Полный бак на любой заправке города за наш счёт",
        buttonText: "Подробнее",
        background:
          "background: linear-gradient(90deg," + " #493013 0%, #7B0C3B 100%);"
      },
      {
        id: 4,
        imgSrc: "./images/Back4.jpg",
        title: "Обслуживание",
        desc: "Автомобиль проходит еженедельное ТО",
        buttonText: "Подробнее",
        background:
          "background: linear-gradient(90deg," + " #281349 0%, #720C7B 100%);"
      }
    ],
    menuItems: [
      {
        id: 1,
        name: "Парковка"
      },
      {
        id: 2,
        name: "Страховка"
      },
      {
        id: 3,
        name: "Бензин"
      },
      {
        id: 4,
        name: "Обслуживание"
      }
    ],
    orderComponents: [
      {
        id: 1,
        name: "Location",
        tag: "Местоположение",
        isActive: true,
        isDisabled: true,
        buttonText: "Выбрать модель"
      },
      {
        id: 2,
        name: "Model",
        tag: "Модель",
        isActive: false,
        isDisabled: true,
        buttonText: "Дополнительно"
      },
      {
        id: 3,
        name: "Additional",
        tag: "Дополнительно",
        isActive: false,
        isDisabled: true,
        buttonText: "Итого"
      },
      {
        id: 4,
        name: "Total",
        tag: "Итого",
        isActive: false,
        isDisabled: true,
        buttonText: "Заказать"
      }
    ],
    currentComponent: null
  },
  getters: {
    orderComponents(state) {
      return state.orderComponents;
    },
    currentComponent(state) {
      if (state.currentComponent) {
        return state.currentComponent;
      } else {
        return state.orderComponents[0]
      }
    },
    isMenuOpen(state) {
      return state.isBurgerActive;
    },
    menuItems(state) {
      return state.menuItems;
    },
    slides(state) {
      return state.slides;
    },
    loading(state) {
      return state.loading;
    },
    mapStatus(state) {
      return state.isMapReady;
    }
  },
  mutations: {
    setComponentStatus(state, payload) {
      const components = state.orderComponents.map(el => {
        if (el.id === payload.id) {
          el.isDisabled = payload.isDisabled
          return el
        }
        return el
      })
      state.orderComponents = components
    },
    setCurrentComponent(state, payload) {
      const components = state.orderComponents.map(el => {
        if (el.name === payload.name) {
          el.isActive = true;
          state.currentComponent = el;
          return el;
        } else {
          el.isActive = false
          return el;
        }
      });
      state.orderComponents = components;
    },
    toggleBurgerMenu(state) {
      state.isBurgerActive = !state.isBurgerActive;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setMapStatus(state, payload) {
      state.isMapReady = payload;
    },
    toNextStep(state) {
      let nextComponentId = {...state.currentComponent.id}
      nextComponentId+=1
      state.currentComponent = state.orderComponents.find(el => {
        el.id = nextComponentId
      })
    }
  },
  actions: {
    toggleBurgerMenu({ commit }) {
      commit("toggleBurgerMenu");
    },
    setCurrentComponent({ commit }, payload) {
      commit("setCurrentComponent", payload);
    },
    setComponentStatus({commit}, payload) {
      commit('setComponentStatus', payload)
    },
    toNextStep({commit}) {
      commit('toNextStep')
    }
  }
};
