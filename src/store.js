import { createStore } from "vuex";

const store = createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    setIsLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
  },
});

export default store;