// import { createRouter, createWebHashHistory } from "vue-router";
import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";

const routes = [
    {
        path: "/",
        component: ExampleComponent,
        name: "home",
    },
];

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes,
// });

const router = new VueRouter({
    routes,
});

export default router;
