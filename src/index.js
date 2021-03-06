import "babel-polyfill";
import "./assets/styles/global.scss";

import Vue from "vue";
import App from "./App.vue";

const app = new Vue({
  el: "#app",
  components: {
    App
  },
  template: "<App/>"
});
