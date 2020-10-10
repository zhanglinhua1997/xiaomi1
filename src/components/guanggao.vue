<template>
  <div>
    <h1>广告{{ num }}秒后关闭</h1>
    <button @click="btn">关闭</button>
    <img
      class="animated fadeInUpBig delay-2s"
      src="../assets/img/3.gif"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 10,
      cleardata: null,
    };
  },
  methods: {
    btn() {
      this.$router.push("/home/tj");
    },
  },
  //取消标签栏
  created() {
    this.cleardata = setInterval(() => {
      if (this.num == 0) {
        this.$router.push("/home/tj");
        console.log("跳转页面");
      } else {
        this.num--;
      }
    }, 1000);
    this.$store.state.tabbar = false;
  },
  //最后销毁函数

  destroyed() {
    this.$store.state.tabbar = true;
  },
  //销毁生命周期函数之前停止
  beforeDestroy() {
    //销毁vue数据与方法
    clearInterval(this.cleardata);
  },
};
</script>

<style scoped>
button {
  font-size: 20px;
  position: absolute;
  right: 5px;
  top: 5px;
}
h1 {
  color: white;
  font-size: 30px;
}
div {
  background-color: #db614d;
  position: fixed;
  height: 100%;
  width: 100%;
}
img {
  margin-top: 150px;
}
</style>
