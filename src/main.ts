
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createLayoutSystem } from '@/vue-dynamic-layout-system'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createLayoutSystem())

app.mount('#app')

