<template>
  <div>
    <!-- 搜素框 -->
    <van-search
      v-model="value"
      show-action
      label="北京"
      placeholder="请输入小区或地址"
      @click="$router.push('/city')"
    >
      <template #icon><i class="icon icon-ditu"></i> </template>
      <template #action
        ><van-icon name="location-o" size="24px" @click="$router.push('/map')"
      /></template>
    </van-search>
    <!-- //轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in rotationCharts" :key="item.id">
        <img :src="beseURL + item.imgSrc" />
      </van-swipe-item>
    </van-swipe>
    <!-- 九宫格 -->
    <van-grid>
      <van-grid-item text="整租"
        ><template #icon> <i class="iconfont icon-daohang-shouye"></i></template
      ></van-grid-item>
      <van-grid-item text="合租"
        ><template #icon> <i class="iconfont icon-duoren"></i></template
      ></van-grid-item>
      <van-grid-item text="地图找房"
        ><template #icon> <i class="iconfont icon-ditu"></i></template
      ></van-grid-item>
      <van-grid-item text="去出租"
        ><template #icon> <i class="iconfont icon-shouye1"></i></template
      ></van-grid-item>
    </van-grid>
    <!-- 租房小组 -->
    <van-cell-group>
      <van-cell title="租房小组"
        ><template #default>
          <p @click="$router.push('/publishinghouses')">更多</p>
        </template></van-cell
      >
    </van-cell-group>

    <van-grid direction="horizontal" :column-num="2">
      <van-grid-item v-for="item in getGroupsList" :key="item.id">
        <van-image width="50" height="50" :src="beseURL + item.imgSrc" />
        <div>
          <p>{{ item.title }}</p>
          <p>{{ item.desc }}</p>
        </div></van-grid-item
      ></van-grid
    >
  </div>
</template>

<script>
import { rotationChart, getGroups } from '@/api/home'
export default {
  created () {
    this.rotationChart()
    this.getGroups()
  },
  data () {
    return {
      value: '', rotationCharts: [], beseURL: 'http://liufusong.top:8080', getGroupsList: []
    }
  },
  methods: {
    onSearch () { },
    // 得到首页轮播图
    async rotationChart () {
      try {
        const res = await rotationChart()
        this.rotationCharts = res.data.body
      } catch (err) { console.log(err) }
    },
    // 租房小组内容
    async getGroups () {
      try {
        const res = await getGroups()
        console.log(res)
        this.getGroupsList = res.data.body
      } catch (err) { console.log(err) }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  width: 100%;
  height: 212px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-search {
  position: fixed;
  z-index: 1;
  width: 100%;
  padding-top: 30px;
  background-color: rgba(0, 0, 0, 0);
}
img {
  height: 212px;
}
/deep/.iconfont {
  // width: 50px;
  // height: 50px;
  // background: #1eb878;
  border-radius: 50%;
  font-size: 35px !important;
}
.van-grid-item_text {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}
.van-cell {
  // margin-top: 20px;
  background-color: #f5f7f9;
  font-size: 15px;
  color: #333333;
}
p {
  font-size: 13px;
}
</style>
