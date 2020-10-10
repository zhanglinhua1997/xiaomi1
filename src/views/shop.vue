<template>
  <div>
    <van-nav-bar :title="$route.name" />
    <div v-for="(item, index) in lists" :key="index">
      <van-card
        :price="item.price"
        desc="描述信息"
        :title="item.name"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-button size="mini" @click="item.num <= 0 ? 0 : item.num--"
            >-</van-button
          >
          <input type="text" v-model="item.num" class="num" />
          <van-button size="mini" @click="item.num++">+ </van-button>
        </template>

        <template #footer>
          <van-checkbox class="check" v-model="item.ischeck"></van-checkbox>

          <van-button size="mini" class="del" @click="del(index)"
            >删除
          </van-button>
        </template>
      </van-card>
    </div>

    <!-- 提交订单 -->
    <van-submit-bar :price="sum * 100" button-text="提交订单">
      <van-checkbox v-model="checks">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          ischeck: true,
          name: "小米10",
          price: 1999.00,
          num: 1,
        },
                {
          ischeck: true,
          name: "小米10",
          price: 1999.00,
          num: 1,
        },
                {
          ischeck: true,
          name: "小米10",
          price: 1999.00,
          num: 1,
        },

      ],
    };
  },
  methods: {
    del(index) {
      this.lists.splice(index, 1);
    },
  },
  computed: {
    checks: {
      get() {
        //第一次页面加载中，判断ischeck的状态，全部为true,返回true
        return this.lists.every((item) => {
          return item.ischeck; //只有选项中全部为true，返回true，否则为false
        });
      },
      set(val) {
        //遍历所有数据中的数据
        this.lists.forEach((item) => {
          return (item.ischeck = val);
        });
      },
    },
    sum() {
      // reduce()返回计算的总价格
      // total总价格累加  item 数据中的对象
      return this.lists.reduce((total, item) => {
        //判断选项
        if (!item.ischeck) return total; //选项为false时，不让他计算总价格
        return total + parseInt(item.price) * parseInt(item.num);
      }, 0); //总价格的默认参数值为0
    },
  },
};
</script>

<style scoped>
.van-submit-bar {
  bottom: 50px;
}
.check {
  position: absolute;
  top: 50%;
  left: 5px;
  margin-top: -20px;
}
.del {
  position: absolute;
  right: 20px;
  bottom: 5px;
}
.num {
  width: 30px;
}
</style>
