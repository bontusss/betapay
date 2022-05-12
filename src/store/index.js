// state: { status, user }
// actions: { login, logout, register }
// mutations: { loginSuccess, loginFailure, logout, registerSuccess, registerFailure }

import { createStore } from "vuex";
import { auth } from "./auth.module";

const store = createStore({
  modules: {
    auth,
  },
});

export default store;
