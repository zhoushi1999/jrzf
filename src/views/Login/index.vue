<template>
  <div>
    <van-nav-bar
      title="账号登录"
      left-arrow
      @click-left="$router.back()"
    ></van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '账号不能为空' },
          { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '不符合账号规则' },
        ]"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '密码不能为空' },
          { pattern: /^[0-9]*$/, message: '不符合密码格式' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <p class="zhuce">还没有账号，去注册~</p>
  </div>
</template>

<script>
import { getLogin } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: 'itheima',
      password: '123456'
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await getLogin(values)
        console.log(res)
        this.$toast.success('发送成功')
        this.$store.commit('setUser', res.data.body)
        this.$router.push('/my')
      } catch (err) {
        console.log(err)
        this.$toast.fail('发送失败')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-button {
  background-color: #21b97a;
}
.van-field {
  height: 80px;
  line-height: 80px;
  font-size: 20px;
}
.zhuce {
  font-size: 10px;
  text-align: center;
}
</style>
