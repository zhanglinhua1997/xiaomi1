<template>
  <div>
    <van-nav-bar
      :title="$route.name"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="password2"
        type="password"
        name="password2"
        label="验证密码"
        placeholder="验证密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    onSubmit(params) {
      let that = this;
      this.$axios
        .get("http://127.0.0.1:3000/register", { params })
        .then((res) => {
          if (res.data == 200) {
            Toast({
              message: "注册成功",
              onOpened() {
                that.$router.push("/login");
              },
            });
          } else {
            Toast("注册失败");
          }
        });
    },
  },
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
