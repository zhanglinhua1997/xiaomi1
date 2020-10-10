import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//公共样式
import "./assets/css/base.css";
import "./assets/font/iconfont.css";
//全局引入
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
import "swiper/css/swiper.min.css";
import axios from "axios";
Vue.prototype.$axios = axios;
//动画第三方包
import "animate.css";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
