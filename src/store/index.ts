import { createStore } from 'vuex';
import api from '@/api/api';
import type { User } from './types';
import { users } from '@/mock_data/users.js';
import { checkUserScore } from './utils';

const store = createStore({
  state: {
    users: [],
    selectedCountry: null,
    selectedScoreRange: null,
    isLoading: false,
  },
  getters: {
    filtredUsers(state) {
      if (state.selectedCountry === null && state.selectedScoreRange === null) {
        return state.users;
      }

      if (state.selectedCountry !== null && state.selectedScoreRange !== null) {
        return state.users.filter(
          (user: User) =>
            user.country === state.selectedCountry &&
            checkUserScore(user.score, state.selectedScoreRange)
        );
      }

      if (state.selectedCountry !== null) {
        return state.users.filter(
          (user: User) => user.country === state.selectedCountry
        );
      }

      if (state.selectedScoreRange !== null) {
        return state.users.filter((user: User) =>
          checkUserScore(user.score, state.selectedScoreRange)
        );
      }
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setLoading(state, loading) {
      state.isLoading = loading;
    },
    setSelectedCountry(state, country) {
      state.selectedCountry = country;
    },
    setSelectedScoreRange(state, scoreRange) {
      state.selectedScoreRange = scoreRange;
    },
  },
  actions: {
    async getUsers(context) {
      context.commit('setLoading', true);
      return api
        .getUsers()
        .then((result) => {
          context.commit('setUsers', result);
        })
        .catch((err) => {
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
