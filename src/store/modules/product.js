import axios from "axios";

export default {
    state: {
        products: [],
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
    },
    actions: {
        async fetchProducts({ commit }) {
            try {
                const response = await axios.get('https://test-api-mudmykola.vercel.app/product-api.json');
                commit('setProducts', response.data);

                localStorage.setItem('products', JSON.stringify(response.data));
            } catch (error) {
                console.error('Ошибка при загрузке продуктов:', error);
            }
        },
    },
    getters: {
        allProducts: (state) => state.products,
    },
}
