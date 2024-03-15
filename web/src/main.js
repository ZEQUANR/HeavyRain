import { createApp } from "vue"
import ArcoVue from "@arco-design/web-vue"
import ArcoVueIcon from "@arco-design/web-vue/es/icon"
import router from "./router"
import store from "./store"
import App from "./App.vue"
import "@arco-design/web-vue/dist/arco.css"
import "@/api/interceptor"

// import "./assets/main.css"

const app = createApp(App)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(router)
app.use(store)
app.mount("#app")
