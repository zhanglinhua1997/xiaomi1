<template>
  <div>
    <van-tabbar v-model="active" v-show="$store.state.tabbar">
      <van-tabbar-item to="/home/tj" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/class" icon="orders-o">分类</van-tabbar-item>
      <van-tabbar-item to="/shop" icon="shopping-cart-o"
        >购物车</van-tabbar-item
      >

      <van-tabbar-item to="/my" icon="manager-o">我的 </van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style></style>
