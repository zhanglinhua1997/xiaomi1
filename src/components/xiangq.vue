<template>
  <div>
    <van-button @click="$router.go(-1)" type="default">返回</van-button>
    <lunbo :imglist="imgs"></lunbo>
    <div>
      <h1>{{ goods.name }}</h1>
      <div class="font">
        小米10是小米公司旗下的手机，是一部"为了梦想打造的高端旗舰手机"，也是小米十年集大成之作，于2020年2月13日在国内正式发布
        ，于2020年3月27日在海外正式发布 。 小米10采用左上角挖孔曲面屏设计
        ，长度162.6毫米，宽度74.8毫米，厚度8.96毫米，重量208克，提供"钛银黑"、"蜜桃金"、"冰海蓝"三种配色可选
      </div>
    </div>
    <div class="price">￥{{ goods.price }}</div>
    <van-goods-action>
      <van-goods-action-icon
        icon="chat-o"
        text="首页"
        @click="$router.push('/home/tj')"
      />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="num"
        @click="$router.push('/shop')"
      />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />

      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="btnshop(goods)"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import lunbo from "../components/lunbo";
export default {
  data() {
    return {
      imgs: [
        {
          img: require("../assets/img/1.jpg"),
        },
        {
          img: require("../assets/img/2.jpg"),
        },
      ],
      num: 0,
      goods: {
        id: 1,
        name: "小米10",
        price: "1999",
        num: 1,
      },
    };
  },
  components: {
    lunbo,
  },
  methods: {
    btnshop() {
      this.num++;
    },
    getshop() {
      //把数据添加到vuex购物车里
      this.$store.shop.commit("add", this.goods);
      console.log("购物车操作");
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

<style scoped>
.price {
  margin-bottom: 50px;
}
img {
  height: 200px;
  width: 100%;
}
h1 {
  font-size: 30px;
  color: red;
}
.font {
  font-size: 20px;
}
.price {
  font-size: 40px;
  color: red;
}
</style>
