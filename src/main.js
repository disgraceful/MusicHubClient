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
import AlbumPreview from './components/shared/AlbumPreview.vue'

Vue.use(GSignInButton)
Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueCookie);



const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App),
})