<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.back()" />
    <van-index-bar>
      <van-index-anchor index="A" />热门
      <van-cell
        :title="item.label"
        v-for="(item, index) in cityHots"
        :key="index"
      />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      ...
    </van-index-bar>
  </div>
</template>

<script>
import { getCiry, cityHot } from '@/api/city'
export default {
  created () {
    this.getCiry()
    this.cityHot()
  },
  data () {
    return { indexList: [], citylist: [], cityHots: [] }
  },
  methods: {
    // 城市列表
    async getCiry () {
      try {
        const res = await getCiry(1)
        console.log(1, res)
        this.citylist = res.data.body
        this.$store.commit('cityData', res.data.body)
      } catch (err) { console.log(err) }
    },
    // 热门城市
    async cityHot () {
      try {
        const res = await cityHot()
        console.log(2, res)
        this.cityHots = res.data.body
      } catch (err) { console.log(err) }
    }
  },
  computed: {

  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
