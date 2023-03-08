import { createApp } from 'vue'
import { createPinia } from 'pinia'

//logger
import './plugin/log/logger'
import log from 'loglevel'

//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//import './assets/main.css' Vuetifyを利用するのでコメントアウト
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import App from './App.vue'
import router from './plugin/router'

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


log.info("application started")
log.debug("**** ENV SETTING ****", import.meta.env)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
