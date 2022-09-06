import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

const app = createApp(App).use(VueCookies).use(router)

await router.isReady()
app.mount('#app')
