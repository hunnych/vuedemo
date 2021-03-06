import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";
import "./assets/scss/material-dashboard.scss";
// import MaterialDashboard from "./material-dashboard";
import Vuelidate from "vuelidate";
import VModal from "vue-js-modal";
/* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Vue.use(FontAwesomeIcon);
Vue.use(VueMaterial);
Vue.use(Vuelidate);
Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
