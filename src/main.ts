
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createLayoutSystem } from '@/vue-dynamic-layout-system'

// import styles
import './assets/styles.css'
import DefaultLayout from './layouts/DefaultLayout.vue'
import BlankLayout from './layouts/BlankLayout.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createLayoutSystem({
  layouts: {
    default: DefaultLayout,
    fif: BlankLayout
  }
}))

app.mount('#app')

