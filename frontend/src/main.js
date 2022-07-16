import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import "./assets/custom.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
axios.defaults.baseURL ='http://localhost:3000/api'
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
