import { createApp } from 'vue'
import { createPinia } from 'pinia'

//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//import './assets/main.css' Vuetifyを利用するのでコメントアウト
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
