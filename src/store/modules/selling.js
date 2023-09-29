import axios from "axios";

export default {
    state: {
        sellings: [],
    },
    mutations: {
        setSellings(state, sellings) {
            state.sellings = sellings;
        },
        addToSellings(state, selling) {
            state.sellings.push(selling);
            localStorage.setItem("sellings", JSON.stringify(state.sellings));
        },
    },
    actions: {
        async fetchSellings({ commit }) {
            try {
                const response = await axios.get(
                    "https://test-api-mudmykola.vercel.app/selling-api.json"
                );
                commit("setSellings", response.data);

                localStorage.setItem("sellings", JSON.stringify(response.data));
            } catch (error) {
                console.error("Ошибка при загрузке продажів:", error);
            }
        },

        clearSellings({ commit }) {
            commit("setSellings", []);
            localStorage.removeItem("sellings");
        },
    },
    getters: {
        allSellings: (state) => state.sellings,
    },
};
