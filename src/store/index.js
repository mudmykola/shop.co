import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
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
        const response = await axios.get('/product.json');
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
});

export default store;
