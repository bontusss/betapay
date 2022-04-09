import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bulma/css/bulma.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://betapay-pms.herokuapp.com/api/'

const app = createApp(App);
app.use(router);

app.mount("#app");
