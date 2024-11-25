import { plugin } from "postcss";
import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
    key: 'tabIndexing',
    storage: window.localStorage,
    reducer: (state) => ({
        tabIndexing: state.tabIndexing
    })
})

const store = createStore({
    module: {

    },
    state: {
        tabIndexing: {
            tabIndex: 0,
            navLink: 0
        }
    },
    mutations: {
        setstateTabIndexing(state, payload) {
            state.tabIndexing.tabIndex = payload
        },
        setnavLink(state, payload) {
            state.tabIndexing.navLink = payload
        }
    },
    actions: {

    },
    getters: {

    },
    plugins: [vuexLocal.plugin]
})

export default store;

export const useStore = () => {
    return store;
}