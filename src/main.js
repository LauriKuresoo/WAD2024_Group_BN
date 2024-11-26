import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import header from './components/header.vue'


const app = createApp(App)
app.component('header-item', header)
app.use(store).use(router)
app.mount('#app')
//createApp(App).use(store).use(router).mount('#app')
