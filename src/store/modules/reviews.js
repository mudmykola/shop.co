import axios from 'axios';

export default {
    state: {
        reviews: [],
    },
    getters: {
        allReviews: (state) => state.reviews,
    },
    actions: {
        async fetchComments({ commit }) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/10/comments');
                const comments = response.data;
                commit('setComments', comments);
            } catch (error) {
                console.error('Помилка при завантаженні коментарів:', error);
            }
        },
    },
    mutations: {
        setComments(state, comments) {
            state.reviews = comments;
        },
    }

}
