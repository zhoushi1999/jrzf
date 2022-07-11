<template>
  <div>
    <!-- 搜素框 -->
    <van-search
      shape="round"
      v-model="value"
      show-action
      label="北京"
      placeholder="请输入小区和地址"
    >
      <template #action>
        <div @click="$router.push('/map')">
          <van-icon name="location-o" size="24px" />
        </div>
      </template>
      <template #left>
        <div @click="$router.push('/home')">
          <van-icon name="arrow-left" color="#fff" />
        </div>
      </template>
      <template #label>
        <div @click="$router.push('/city')">北京</div>
      </template>
    </van-search>
    <!-- tab -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" title="区域">
        <van-picker title="标题" :columns="columns" value-key="label" />
        <div class="bd">
          <van-button type="default" class="qx">取消</van-button
          ><van-button type="primary" class="qd">确定</van-button>
        </div>
      </van-dropdown-item>
      <van-dropdown-item v-model="value" title="方式">
        <van-picker :columns="columns1" value-key="label" />
        <div class="bd">
          <van-button type="default" class="qx">取消</van-button
          ><van-button type="primary" class="qd">确定</van-button>
        </div></van-dropdown-item
      >
      <van-dropdown-item v-model="value" title="租金">
        <van-picker title="标题" :columns="columns2" value-key="label" />
        <div class="bd">
          <van-button type="default" class="qx">取消</van-button
          ><van-button type="primary" class="qd">确定</van-button>
        </div></van-dropdown-item
      >
      <van-dropdown-item v-model="value" title="筛选" @open="show = true">
      </van-dropdown-item>
    </van-dropdown-menu>
    <van-popup
      v-model="show"
      position="right"
      :style="{ width: '80%', height: '100%' }"
      ><House></House>
    </van-popup>
    <!-- 底部样式 -->
    <van-card
      v-for="(item, index) in houseData"
      :key="index"
      :price="item.price + '元/月'"
      :desc="item.desc"
      :title="item.title"
      :thumb="beseURL + item.houseImg"
      ><template #tags>{{ item.tags[0] }}</template></van-card
    >
  </div>
</template>

<script>
import { areaInfo, housesCondition, housesData } from '@/api/city'
import House from './components/House'
export default {
  created () {
    this.areaInfo()
    this.housesCondition()
    this.housesData()
  },
  data () {
    return {
      beseURL: 'http://liufusong.top:8080',
      houseData: [],
      show: false,
      value: '',
      id: '',

      columns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ],
      columns1: [],
      columns2: []
    }
  },
  methods: {
    // 北京的id
    async areaInfo () {
      try {
        const res = await areaInfo()
        console.log(1, res)
        this.id = res.data.body.value
      } catch (err) { console.log(err) }
    },

    // 获取房屋查询条件
    async housesCondition () {
      try {
        const res = await housesCondition()
        console.log(2, res)
        this.columns = [res.data.body.area, res.data.body.subway]
        this.columns1 = res.data.body.rentType
        this.columns2 = res.data.body.price
        res.data.body.area.children[0].children = [{ label: '' }]
        res.data.body.subway.children[0].children = [{ label: '' }]
      } catch (err) { console.log(err) }
    },
    // 根据条件查询房屋
    async housesData () {
      try {
        const res = await housesData()
        console.log(3, res)
        this.houseData = res.data.body.list
      } catch (err) { console.log(err) }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { House }
}
</script>

<style scoped lang='less'>
.van-search {
  height: 46px;
  line-height: 46px;
  text-align: center;
}
.bd {
  display: flex;
  bottom: 0;
}
.van-button {
  height: 50px;
}
.qx {
  width: 130px;
}
.qd {
  width: 260px;
}
</style>
