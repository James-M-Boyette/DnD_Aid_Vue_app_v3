// Bootstrap Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import bootstrap from "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// CSS Stylings
import "./assets/css/main.css";

const app = createApp(App).use(router).mount("#app");
import "bootstrap/dist/js/bootstrap.js";
