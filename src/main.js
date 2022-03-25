import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { dom } from "@fortawesome/fontawesome-svg-core";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

library.add(fas)
library.add(fab)
library.add(far)
dom.watch()




const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);

app.mount("#app");
