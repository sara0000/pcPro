import Vue from 'vue';
import  Vuex from 'vuex';
import status from './modules/status/index';
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
  //  将store分割成模块，每个模块有自己的state,mutation,action
    dataStatus:status
  }
})
