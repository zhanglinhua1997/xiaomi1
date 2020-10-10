<template>
  <div>
    <!-- Swiper -->
    <lunbo :imglist="imgs"></lunbo>

    <!-- Swiper JS -->

    <router-link to="/xiangq" tag="a">
      <van-card
        price="1999.00"
        desc="描述信息"
        title="小米10"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </router-link>

    <div class="aa"></div>
  </div>
</template>

<script>
import lunbo from "../../components/lunbo";
export default {
  data() {
    return {
      imgs: [
        {
          img: require("../../assets/img/11.jpg"),
        },
        {
          img: require("../../assets/img/22.jpg"),
        },
      ],
    };
  },
  components: {
    lunbo,
  },
};
</script>

<style scoped>
.aa {
  height: 50px;
}
</style>
