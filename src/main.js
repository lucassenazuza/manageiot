import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import VueApexCharts from "vue3-apexcharts";


axios.defaults.baseURL = 'http://127.0.0.1:8000';

createApp(App).use(store)
    .use(VueApexCharts).use(router).mount('#app')
