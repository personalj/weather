import actions from './actions'
import mutations from  './mutations'

export default {
    state: {
        cities: JSON.parse(localStorage.getItem('cities')) || [],
        defaultCity:  JSON.parse(localStorage.getItem('default_city')) || null,
        activeCity: null,
        currentCity: null,
    },
    mutations: {
        ...mutations
    },
    actions: {
        ...actions
    },
    getters: {
        cities(state) {
            return state.cities;
        },
        activeCity(state) {
            return state.activeCity;
        },
        defaultCity(state) {
            return state.defaultCity;
        },
        currentCity(state) {
            return state.currentCity;
        }
    },
    namespaced: true,
};
