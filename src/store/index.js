import {createStore} from "vuex";
import product from "./modules/product";
import selling from "./modules/selling";
import reviews from "./modules/reviews";
import username from "./modules/usersname";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        product,
        selling,
        reviews,
        username,
    },
});
