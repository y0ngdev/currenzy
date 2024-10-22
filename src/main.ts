import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import vueMeta from 'vue-meta'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.use(vueMeta)

app.mount('#app')
