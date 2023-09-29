import {createStore} from "vuex";
import product from "./modules/product";
import selling from "./modules/selling";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        product,
        selling
    },
});
