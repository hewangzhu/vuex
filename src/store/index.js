import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        app
    },
    getters     //向外'暴露'状态
})
 export default store


