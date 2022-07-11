<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow @click-left="$router.back()" />
    <van-cell-group inset>
      <van-cell title="房源信息" />
      <van-cell
        title="小区名称"
        value="请输入小区名称"
        is-link
        @click="$router.push('/search')"
      />
      <van-field v-model="value" label="租金" placeholder="请输入组金/月"
        ><template #extra> <p>￥/月</p> </template></van-field
      >
      <van-field v-model="value" label="建筑面积" placeholder="请输入建筑面积"
        ><template #extra> <p>㎡</p> </template></van-field
      >
      <van-cell title="户型" value="请选择" is-link @click="isHouseShow = true">
      </van-cell>
      <van-cell
        title="所在楼层"
        value="请选择"
        is-link
        @click="isHouseShow = true"
      />
      <van-cell
        title="朝向"
        value="请选择"
        is-link
        @click="isHouseShow = true"
      />
      <van-cell title="房屋标题" />
      <van-field
        v-model="value"
        placeholder="请输入标题（例如：整租 小区名 2室 5000元"
      />
      <van-cell title="房屋图像"/>
    </van-cell-group>
    <!-- 底部样式 -->

    <van-row>
      <van-col span="12"
        ><van-button type="default" block>默认按钮</van-button></van-col
      >
      <van-col span="12"
        ><van-button type="primary" block>主要按钮</van-button></van-col
      >
    </van-row>
    <van-popup
      v-model="isHouseShow"
      position="bottom"
      :style="{ height: '30%' }"
      ><van-nav-bar
        class="fbfy"
        left-text="取消"
        right-text="确定"
        @click-left="isHouseShow = false"
      />
      <van-picker :columns="columns" />
      <van-picker :columns="columns1" />
      <van-picker :columns="columns2" />
    </van-popup>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      value: '',
      isHouseShow: false,
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
      columns1: [],
      columns2: []
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.fbfy {
  background-color: #fff;
}
</style>
