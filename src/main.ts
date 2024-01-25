import { createApp } from 'vue'
import { createPinia } from 'pinia'
import GlobalComponents from './global'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(GlobalComponents)
app.mount('#app')