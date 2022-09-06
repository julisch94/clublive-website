import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

const app = createApp(App).use(VueCookies).use(router)

router.isReady().then(() => app.mount('#app'))
