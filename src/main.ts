
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
const app = createApp(App)
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'
import '@fortawesome/fontawesome-free/css/all.css';

app.use(createPinia())
app.use(router)

app.mount('#app')
