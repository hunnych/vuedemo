import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ContactUs: null,
    NotificationMessageSuccess: null,
    NotificationMessageFailed: null,
  },
  mutations: {
    SET_CONTACT_US(state, payload) {
      console.log("here set contact us");
      state.ContactUs = payload;
    },
    SET_NOTIFICATION(state, payload) {
      state.NotificationMessageSuccess = payload;
      setTimeout(() => state.NotificationMessageSuccess = null, 5000);
    },
  },
  actions: {
    async getContactUsData({ commit }) {
      await EventService.getContactUs().then((result) => {
        commit("SET_CONTACT_US", result.data);
      });
    },
    async AddContactUsData({ dispatch, commit }, requestData) {
      await EventService.AddContactUs(requestData).then(() => {
        commit("SET_NOTIFICATION", "Details submitted successfully");
        dispatch("getContactUsData");
      });
    },
    async RemoveContactUs({ commit }, id) {
      await EventService.DeleteContactUs(id).then(() => {
        commit("SET_NOTIFICATION", "Record deleted successfully");
      });
    },
  },
});
