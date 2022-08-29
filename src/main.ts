import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import ActionCable from 'actioncable'

const app = createApp(App)

const cable = ActionCable.createConsumer('/cable');
app.config.globalProperties.$cable = cable;

app.use(router)
app.use(ElementPlus)

app.use(VueGoogleMaps, {
    load: {
        key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        // language: 'de',
    },
})

app.mount('#app')
