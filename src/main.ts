import { createApp } from "vue"
import App from "./App.vue"

//element-plus
import ElementPlus from "element-plus"
import "./styles/style.css"

//styles
import "element-plus/dist/index.css"

//router
import router from "./router"

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount("#app")
