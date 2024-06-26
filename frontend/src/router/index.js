import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Donate from "../views/Donate.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/donate",
        name: "Donate",
        component: Donate,
    },
    {
        path: "/:catchAll(.*)",
        name: 'NotFound',
        component: NotFound,
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;