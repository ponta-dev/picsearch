import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router, setBeforeRouter} from './plugin/router'

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

// storeの設定
const pinia = createPinia()
app.use(pinia)

// ルーターの設定
app.use(router)
setBeforeRouter()

app.use(vuetify)

app.mount('#app')
