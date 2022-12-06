import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

import './assets/css/styles.css'
import './assets/css/bootstrap.min.css'


const app = createApp(App)
app.use(router)
app.mount('#app')