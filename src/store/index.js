import Vuex from "vuex";
import counter from "./modules/counter";

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    counter,
  },
  strict: debug,
});
