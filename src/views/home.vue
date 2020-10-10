<template>
  <div>
    <van-row class="tops">
      <van-col span="3" class="iconname1"
        ><span class="iconfont icon-xiaomi"></span
      ></van-col>
      <van-col span="18"
        ><van-search @focus="btn" placeholder="请输入搜索商品"
      /></van-col>
      <van-col span="3"><van-icon name="contact"/></van-col>
    </van-row>

    <!-- 标签栏 -->
    <!-- Swiper -->
    <div class="swiper-container swiperhome">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <router-link to="/home/tj">推荐</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/home/phone">手机</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/home/zn">智能</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/home/watch">电视</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/home/bjb">笔记本</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/home/jiaju">家具</router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/home/shyp">生活用品</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <!-- Swiper JS -->
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  methods: {
    btn() {
      this.$router.push("/search");
    },
  },
  mounted() {
    new Swiper(".swiperhome", {
      slidesPerView: 6,
      spaceBetween: 20,
      freeMode: true,
    });
  },
};
</script>

<style scoped>
.swiper-slide[data-v-7eb2bc79] {
  font-size: 12px;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
  height: 35px;
  line-height: 35px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.tops {
  background-color: whitesmoke;
  text-align: center;
}
.iconfont icon-xiaomi {
  font-size: 25px;
}
.iconname1 {
  display: block;
  color: orange;
  font-size: 25px;
}
.van-icon {
  font-size: 20px;
  line-height: 44px;
}
.van-search {
  padding: 5px;
}
a {
  height: 35px;
  line-height: 35px;
}
</style>
