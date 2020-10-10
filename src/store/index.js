import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabbar: true, //底部导航控制
    username: "",

  },
  mutations: {},
  actions: {},
  modules: {
    shop: {
      state: {
        lists: [] //购物车数据
      },

      mutations: {
        add(state, obj) {
          //判断如果加入数据在，购物车中存在，数量加1
          //获取不到相同的id返回-1
          let index = state.lists.findIndex(val = val.id == obj.id);
          if (index != "-1") {
            // 存在数据，数量加一
            state.lists[index].num += 1
          } else {
            //不存在数据，数据添加购物车
            obj.ischeck = true
            state.lists.push(obj)
          }
          this.lists.push(obj)
        }
      }
    }
  }
})