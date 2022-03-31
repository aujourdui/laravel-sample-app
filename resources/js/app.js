require("./bootstrap");

import VueRouter from "vue-router";
import router from "./routes";

// import { createApp } from "vue";
import Vue from "vue";

// window.Vue = require("vue");

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

Vue.use(VueRouter);

// const app = Vue.createApp({}s);
// const app = createApp({});

// app.use(router);

// app.mount("#app");

const app = new Vue({
    el: "#app",
    router,
});
