import { http } from "@/services/http";

export default {
    async getWeatherByCoords({ commit }, payload) {
        try {
            const { data } = await http.get(`weather?lat=${payload.latitude}&lon=${payload.longitude}&units=metric&appid=${process.env.VUE_APP_API_KEY}`);
            commit("setCities", data);
            if (payload.current) {
                commit("setCurrentCity", data);
            }
        } catch (e) {
            commit("setError", e.message, { root: true });
        }
    },
    async getWeatherCity({ commit }, query) {
        try {
            const { data } = await http.get(`weather?q=${query}&units=metric&appid=${process.env.VUE_APP_API_KEY}`);
            if (data.name) {
                commit("setCities", data);
                commit('setActiveCity', data);
                return true;
            } else {
                return false;
            }

        } catch (e) {
            commit("setError", e.message, { root: true });
        }
    },
}
