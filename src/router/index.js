import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: "/guanggao",
  },
  {
    path: "/home",
    name: "首页",
    component: () => import("../views/home"),
    children: [{
        path: "tj",
        name: "推荐",
        component: () => import("../views/home/tj.vue")
      },
      {
        path: "phone",
        name: "手机",
        component: () => import("../views/home/phone.vue")
      },
      {
        path: "zn",
        name: "智能",
        component: () => import("../views/home/zn.vue")
      },
      {
        path: "watch",
        name: "电视",
        component: () => import("../views/home/watch.vue")
      },
      {
        path: "bjb",
        name: "笔记本",
        component: () => import("../views/home/bjb.vue")
      },
      {
        path: "jiaju",
        name: "家具",
        component: () => import("../views/home/jiaju.vue")
      },
      {
        path: "shyp",
        name: "生活用品",
        component: () => import("../views/home/shyp.vue")
      },
    ]
  },
  {
    path: "/search",
    name: "搜索",
    component: () => import("../components/search"),
  },
  {
    path: "/class",
    name: "分类",
    component: () => import("../views/class"),
  },
  {
    path: "/shop",
    name: "购物车",
    component: () => import("../views/shop"),
  },
  {
    path: "/my",
    name: "我的",
    component: () => import("../views/my"),
  },

  {
    path: "/login",
    name: "登录",
    component: () => import("../components/login"),
  },
  {
    path: "/res",
    name: "注册",
    component: () => import("../components/res"),
  },
  {
    path: "/xiangq",
    name: "详情页",
    component: () => import("../components/xiangq"),
  },
  {
    path: "/guanggao",
    name: "广告业",
    component: () => import("../components/guanggao"),
  },
  {
    path: "/dizhi",
    name: "地址",
    component: () => import("../components/dizhi"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;