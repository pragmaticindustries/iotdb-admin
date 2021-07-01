import { createStore } from 'vuex';
import moduleA from './moduleA';

export default createStore({
    state: () => ({
        isLogin: true,
    }),
    mutations: {
        setLogin(state, islogin) {
            state.isLogin = islogin;
        },
    },
    actions: {
        async fetchIsLogin({ commit }) {
            commit('setLogin', true);
        },
    },
    modules: {
        a: moduleA,
    },
});
