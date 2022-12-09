import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// import './assets/css/main.css'
// import './assets/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/css/styles.css'
// import './assets/css/bootstrap.min.css'
// import './assets/css/main.css'
// import './assets/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
// import './assets/vendor/fontawesome-free/css/all.min.css'
// import './assets/vendor/glightbox/css/glightbox.min.css'
// import './assets/vendor/swiper/swiper-bundle.min.css'
// import './assets/vendor/aos/aos.css'



const app = createApp(App)
app.use(router)
app.mount('#app')

