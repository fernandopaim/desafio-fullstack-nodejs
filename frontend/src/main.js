import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


if (process.env.NODE_ENV !== 'production') {
    Vue.config.productionTip = false
    Vue.config.devtools = true
    Vue.config.performance = true
}

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Inicialize Vue.js
new Vue({
    name: 'Vue',
    render: h => h(App)
}).$mount('#app')
