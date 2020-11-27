import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        bmi:0,
        health:''
    },
    mutations: {
        getbmi(state, bmi) {
            state.bmi = bmi
        },
        gethealth(state, health) {
            state.health = health
        }
    },
        getters: {
        showBmi(state){
            return state.bmi
        },
            showHealth(state){
            return state.health
            }
        }


})

export  default store