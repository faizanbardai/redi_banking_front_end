import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    user: { firstName: '', lastName: '', email: '', address: '', phone: '' },
};

const getters = {
    user: (state) => state.user,
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
});
