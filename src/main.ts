import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import VueCookies from 'vue-cookies'
import { createHead } from '@unhead/vue'
import posthog from './plugins/posthog'

const app = createApp(App)
const head = createHead()

app.use(VueCookies).use(router).use(head).use(posthog)

router.isReady().then(() => app.mount('#app'))
