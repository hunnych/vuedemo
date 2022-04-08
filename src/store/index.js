import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ContactUs: null,
  },
  mutations: {
    SET_CONTACT_US(state, payload) {
      console.log("here");
      state.ContactUs = payload;
    },
  },
  actions: {
    async getContactUsData({ commit }) {
      await EventService.getContactUs().then((result) => {
        commit("SET_CONTACT_US", result.data);
      });
    },
  },
});
