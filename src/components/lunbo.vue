<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container swipertj">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in imglist" :key="index">
          <img :src="item.img" alt="" />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination pagination"></div>
    </div>

    <!-- Swiper JS -->
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  data() {
    return {};
  },
  props: ["imglist"],
  mounted() {
    new Swiper(".swipertj", {
      pagination: {
        el: ".pagination",
      },
    });
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
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
</style>
