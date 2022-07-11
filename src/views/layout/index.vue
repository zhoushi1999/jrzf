<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">
        首页
        <template #icon><i class="iconfont icon-shouye"></i></template
      ></van-tabbar-item>
      <van-tabbar-item replace to="/findroom" icon="search"
        >找房
        <template #icon><i class="iconfont icon-chazhaofangyuan"></i></template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/consulation" icon="search"
        >咨询 <template #icon><i class="iconfont icon-tuwenzixun"></i></template
      ></van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="search"
        >我的<template #icon><i class="iconfont icon-wode"></i></template
      ></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/.iconfont {
  font-size: 22px !important;
}
</style>
