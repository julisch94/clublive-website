import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import VueCookies from 'vue-cookies'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

app.use(VueCookies).use(router).use(head)

router.isReady().then(() => app.mount('#app'))
