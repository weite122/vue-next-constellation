import Vuex from 'vuex'
import state from './state'
import mutations from './mutataions'

export default Vuex.createStore({
  state,
  mutations,

});
