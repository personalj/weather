export default {
    setCities(state, data) {
        const city = state.cities && state.cities.find(item => item.name === data.name);
        const cityInfo = {
            lon: data.coord.lon,
            lat: data.coord.lat,
            name: data.name
        }

        if (!city) {
            !state.cities.length ? state.cities.unshift(cityInfo) : state.cities.splice(1, 0, cityInfo)
            localStorage.setItem('cities', JSON.stringify(state.cities));
            if (state.cities.length === 1) {
                this.commit('cities/setDefaultCity', state.cities[0]);
            }
        }
    },
    setActiveCity(state, city) {
        state.activeCity = city;
    },
    setDefaultCity(state, defaultCity) {
        state.defaultCity = defaultCity;
        localStorage.setItem('default_city', JSON.stringify(defaultCity));

        state.cities = state.cities.filter(item => item.name !== defaultCity.name);
        state.cities.unshift(defaultCity);
        localStorage.setItem('cities', JSON.stringify(state.cities));
    },
    setCurrentCity(state, city) {
        state.currentCity = city;
    },
    deleteCity(state, city) {
        if (state.defaultCity && state.defaultCity.name === city.name) {
            state.defaultCity = null;
            localStorage.removeItem('default_city');
        }
        if (state.activeCity && state.activeCity.name === city.name) {
            state.activeCity = null;
        }
        state.cities = state.cities.filter(item => item.name !== city.name);
        localStorage.setItem('cities', JSON.stringify(state.cities));
    },
}
