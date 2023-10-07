import axios from 'axios';

export default {
    state: {
        users: [],
    },
    getters: {
        allUsers: (state) => state.users,
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                const response = await axios.get('https://api.escuelajs.co/api/v1/users');
                const users = response.data;
                commit('setUsers', users);
            } catch (error) {
                console.error('Помилка при завантаженні користувачів:', error);
            }
        },
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
    },
}
