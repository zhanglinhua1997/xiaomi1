<template>
  <div>
    <van-button @click="$router.go(-1)" type="default">返回</van-button>
  </div>
</template>

<script>
export default {
  //取消标签栏
  created() {
    this.$store.state.tabbar = false;
  },
  destroyed() {
    this.$store.state.tabbar = true;
  },
};
</script>

<style></style>
