import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueRouter from 'vue-router'
import {
    routes
} from './routes/routes.js'
import VueResource from 'vue-resource'
import GSignInButton from 'vue-google-signin-button'
import VueCookie from 'vue-cookie'
// var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin


const loggedUser = {
    user: null
}

loggedUser.install = function() {
    Object.defineProperty(Vue.prototype, '$loggedUser', {
        get() {
            return loggedUser
        }
    })
}

Vue.use(GSignInButton)
Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueCookie);

Vue.use(loggedUser)


const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App),
})