// initial state
const state = () => ({
  count: 0,
});

// getters
const getters = {
  getCount: (state) => {
    return state.count;
  },
};

// actions
const actions = {};

// mutations
const mutations = {
  incrementCounter: (state) => {
    return (state.count += 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
