<template>
  <div>
    <!-- 户型 -->
    <div>
      <h1>户型</h1>
      <div class="huxing">
        <van-row type="flex">
          <van-col span="6"><p>1室</p></van-col>
          <van-col span="6"><p>2室</p></van-col>
          <van-col span="6"><p>3室</p></van-col>
          <van-col span="6"><p>4室</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>

          <!-- <van-col span="6"><p>2</p></van-col> -->
        </van-row>
      </div>
    </div>
    <van-divider
      :style="{ color: '#333', borderColor: '#333', padding: '0 0 0 50px' }"
    />
    <!-- 朝向 -->
    <div>
      <h1>朝向</h1>
      <div class="huxing">
        <van-row type="flex">
          <van-col span="6"><p>东</p></van-col>
          <van-col span="6"><p>西</p></van-col>
          <van-col span="6"><p>南</p></van-col>
          <van-col span="6"><p>被</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>

          <!-- <van-col span="6"><p>2</p></van-col> -->
        </van-row>
      </div>
    </div>
    <van-divider
      :style="{ color: '#333', borderColor: '#333', padding: '0 0 0 50px' }"
    />
    <!-- 楼层 -->
    <div>
      <h1>楼层</h1>
      <div class="huxing">
        <van-row type="flex">
          <van-col span="6"><p>1室</p></van-col>
          <van-col span="6"><p>2室</p></van-col>
          <van-col span="6"><p>3室</p></van-col>

          <!-- <van-col span="6"><p>2</p></van-col> -->
        </van-row>
      </div>
    </div>
    <van-divider
      :style="{ color: '#333', borderColor: '#333', padding: '0 0 0 50px' }"
    />
    <!-- 房屋亮点 -->
    <div>
      <h1>房屋亮点</h1>
      <div class="huxing">
        <van-row type="flex">
          <van-col span="6"><p>东</p></van-col>
          <van-col span="6"><p>西</p></van-col>
          <van-col span="6"><p>南</p></van-col>
          <van-col span="6"><p>被</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
          <van-col span="6"><p>4室+</p></van-col>
        </van-row>
      </div>
    </div>
    <!-- 底部 -->
    <div class="dibu">
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
    </div>
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
.huxing {
  padding-left: 50px;
  padding-right: 60px;
}
.van-col {
  width: 90px;
  padding-right: 20px;
  padding-bottom: 10px;
}
p {
  color: #333;
  border: 1px solid #dddddd;
  height: 32px;
  text-align: center;
  line-height: 32px;
  font-size: 15px;
  // width: 72px;
}
.dibu {
  position: fixed;
  // bottom: 0;
}
h1 {
  font-size: 15px;
  padding: 20px;
}
</style>
