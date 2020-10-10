<template>
  <div>
    <van-nav-bar :title="$route.name" />
    <div class="top">
      <van-row>
        <van-col span="5">
          <van-image
            round
            width="80px"
            height="80px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
        /></van-col>
        <van-col span="19">
          <div v-if="$store.state.username">
            <h3 v-text="$store.state.username"></h3>
            <span @click="$store.state.username = ''">退出</span>
          </div>
          <di v-else>
            <router-link to="/login">登录</router-link>
            <router-link to="/res">注册</router-link>
          </di>
        </van-col>
      </van-row>
    </div>

    <van-cell-group>
      <van-cell to="/shop" title="我的订单" is-link />
      <van-cell to="/xiangq" title="我的收藏" is-link />
      <van-cell to="dizhi" title="我的地址" is-link />
      <van-cell title="设置" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top {
  background-color: orange;
}
.van-image {
  float: right;
  margin-left: 50px;
}
.van-col {
  height: 80px;
  line-height: 80px;
}
a {
  color: white;
  padding-left: 10px;
  font-size: 20px;
}
h3 {
  height: 20px;
  color: white;
  font-size: 20px;
}
</style>
