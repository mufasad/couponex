import { createWebHistory, createRouter } from "vue-router"

const Home = () => import("./views/Home.vue")

const history = createWebHistory()

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  }
]

const router = createRouter({ history, routes })

export default router
