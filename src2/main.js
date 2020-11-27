import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'
import App from './App.vue'
import store from './vuex/store.js'
Vue.use(Vuex);

new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App },

})