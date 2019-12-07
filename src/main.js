import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.scss'
import BootstrapVue from 'bootstrap-vue'

// widget setup
// (optional) 'Custom elements polyfill'
import 'document-register-element/build/document-register-element'
// vue-custom-element by karol-f
import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)
Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.customElement('vue-widget', App)
