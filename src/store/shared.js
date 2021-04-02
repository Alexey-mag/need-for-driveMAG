export default {
    namespaced: true,
    state: {
        counter: 1,
        isBurgerActive: false,
        slides: [
            {
                id: 1,
                imgSrc: './images/Back1.jpg',
                title: 'Бесплатная парковка',
                desc: 'Оставляйте машину на платных городских парковках и ' +
                    'разрешенных местах, не нарушая ПДД, а также в аэропортах.',
                buttonText: 'Подробнее',
                background: 'background: linear-gradient(90deg,' +
                    ' #13493F 0%, #0C7B1B 100%);'
            },
            {
                id: 2,
                imgSrc: './images/Back2.jpg',
                title: 'Страховка',
                desc: 'Полная страховка страховка автомобиля',
                buttonText: 'Подробнее',
                background: 'background: linear-gradient(90deg,' +
                    ' #132949 0%, #0C7B67 100%);'
            },
            {
                id: 3,
                imgSrc: './images/Back3.jpg',
                title: 'Бензин',
                desc: 'Полный бак на любой заправке города за наш счёт',
                buttonText: 'Подробнее',
                background: 'background: linear-gradient(90deg,' +
                    ' #493013 0%, #7B0C3B 100%);'
            },
            {
                id: 4,
                imgSrc: './images/Back4.jpg',
                title: 'Обслуживание',
                desc: 'Автомобиль проходит еженедельное ТО',
                buttonText: 'Подробнее',
                background: 'background: linear-gradient(90deg,' +
                    ' #281349 0%, #720C7B 100%);'
            }
        ],
        menuItems: [
            {
                id: 1,
                name: 'Парковка'
            },
            {
                id: 2,
                name: 'Страховка'
            },
            {
                id: 3,
                name: 'Бензин'
            },
            {
                id: 4,
                name: 'Обслуживание'
            }
        ]
    },
    getters: {
        getBurgerStatus(state) {
            return state.isBurgerActive
        },
        menuItems(state) {
            return state.menuItems
        },
        slides(state) {
            return state.slides
        }
    },
    mutations: {
        toggleBurgerMenu(state) {
            state.isBurgerActive = !state.isBurgerActive
        },
        counterUp(state) {
            if (state.counter === state.slides.length) {
                state.counter = 1
            } else {
                state.counter++
            }
        },
        counterDown(state) {
            if (state.counter === 1) {
                state.counter = state.slides.length
            } else {
                state.counter--
            }
        }
    },
    actions: {
        toggleBurgerMenu({commit}) {
            commit('toggleBurgerMenu')
        },
        counterUp({commit}) {
            commit('counterUp')
        },
        counterDown({commit}) {
            commit('counterDown')
        }
    }
}