import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import router from "./routes/router"; // <---

createApp(App).use(router).mount("#app");
