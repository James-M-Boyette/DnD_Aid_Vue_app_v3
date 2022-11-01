// Bootstrap Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import bootstrap from "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// Actualize settings
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

// CSS Stylings
import "./assets/css/main.css";

const app = createApp(App).use(router).mount("#app");
import "bootstrap/dist/js/bootstrap.js";
