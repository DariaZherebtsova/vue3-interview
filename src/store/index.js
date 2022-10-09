import { createStore } from 'vuex';
import api from '@/api/api';
import { users } from '@/mock_data/users.js';

const store = createStore({
  state: {
    users: [],
    selectedCountry: 'default',
    selectedScoreRange: 'default',
    isLoading: false,
  },
  getters: {
    filtredByCountry(state) {
      return state.users.filter(
        (user) => user.country === state.selectedCountry
      );
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setLoading(state, loading) {
      state.isLoading = loading;
    },
  },
  actions: {
    async getUsers(context) {
      context.commit('setLoading', true);
      return api
        .getUsers()
        .then((result) => {
          context.commit('setUsers', result.fields);
        })
        .catch((err) => {
          console.log('---catch', err);
          // mock data
          context.commit('setUsers', users);
        })
        .finally(() => {
          context.commit('setLoading', false);
        });
    },
  },
});

export default store;
