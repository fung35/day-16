import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        result: '',
        enter: '',
    },
    mutations:{
        calculate(state,value){
            if(value === '='){
                state.result = eval(state.enter);
                state.enter += value
            }
            else if(value === 'c'){
                state.enter = state.result = ''
            }
            else{
                state.enter += value
            }
        }
    }
})

export  default store