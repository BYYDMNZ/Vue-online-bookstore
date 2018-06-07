import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    bookItems:[],
    currentUser:{
        userid:1,
        username:"叶倩",
        phone:"13416141472",
        type:0,
        address:"广东广州华南农业大学华山区宿舍4栋"
      },
    currentBook:null,
    isLogin:false,
  },
  getters:{
    //获取属性的状态
  },
  mutations:{
    //改变属性的状态
    setBookItems(state,data){
      state.bookItems = data
    },
    setCurrent(state,data){
      state.currentUser = data
      state.isLogin = true
    },
    setCurrentBook(state,data){
      if(data!=null)
         state.currentBook = data
      else
         state.currentBook = null
    },
  },
  actions:{
    //应用mutations
  }
})
