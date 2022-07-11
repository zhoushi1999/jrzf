<template>
  <div>
    <!-- 登录后 -->
    <div class="login" v-if="user && user.token">
      <!-- 背景图 -->
      <img src="http://liufusong.top:8080/img/avatar.png" alt="" class="bjt" />
      <!-- 登录框 -->
      <div class="dlk">
        <div class="tx">
          <img
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt=""
            class="touxiang"
          />
        </div>
        <div class="yk">
          <p>{{ loginData.nickname }}</p>
        </div>
        <div>
          <button class="btn" @click="btn" v-if="user && user.token">
            退出
          </button>
        </div>
        <div class="bianji">编辑个人资料</div>
      </div>
    </div>
    <!-- 未登录 -->
    <div class="notlogin" v-else>
      <!-- 背景图 -->
      <img
        src="http://liufusong.top:8080/img/profile/bg.png"
        alt=""
        class="bjt"
      />
      <!-- 登录框 -->
      <div class="dlk">
        <div class="tx">
          <img
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt=""
            class="touxiang"
          />
        </div>
        <div class="yk"><p>游客</p></div>
        <div>
          <button class="btn" @click="$router.push('/login')">去登录</button>
        </div>
      </div>
    </div>

    <!-- 下面的公共样式 -->
    <van-grid column-num="3">
      <van-grid-item text="我的收藏"
        ><template #icon> <i class="iconfont icon-shoucang"></i> </template
      ></van-grid-item>
      <van-grid-item text="我的出租"
        ><template #icon> <i class="iconfont icon-shouye"></i> </template
      ></van-grid-item>
      <van-grid-item text="看房记录"
        ><template #icon> <i class="iconfont icon-jilu"></i> </template
      ></van-grid-item>
      <van-grid-item text="成为房主"
        ><template #icon> <i class="iconfont icon-fkfangqia-"></i> </template
      ></van-grid-item>
      <van-grid-item text="个人资料"
        ><template #icon> <i class="iconfont icon-geren1"></i> </template
      ></van-grid-item>
      <van-grid-item text="联系我们"
        ><template #icon> <i class="iconfont icon-kefu"></i> </template
      ></van-grid-item>
    </van-grid>
    <div class="db">
      <img
        src="http://liufusong.top:8080/img/profile/join.png"
        alt=""
        class="bbtp"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUser } from '@/api/user'
export default {
  async created () {
    // 用户的信息需要有token值才能拿到
    if (this.user.token && this.user) {
      try {
        const res = await getUser()
        console.log(res)
        this.loginData = res.data.body
      } catch (err) { console.log(err) }
    }
  },
  data () {
    return {
      // isLogin: true,
      loginData: []
    }
  },
  methods: {
    // 点击退出登录按钮有二种情况
    async btn () {
      try {
        await this.$dialog.confirm({ message: '确定退出吗' })
        this.$store.commit('setUser', {})
      } catch (err) { console.log(err) }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.notlogin {
  height: 300px;
  position: relative;
  .bjt {
    height: 192px;
  }
  .yk {
    font-size: 13px;
  }
  .btn {
    font-size: 15px;
    color: #fff;
    background-color: #21b97a;
    border: 1px solid #21b97a;
    border-radius: 10%;
    width: 69px;
    height: 30px;
  }
  .dlk {
    position: absolute;
    background: #fff;
    box-shadow: 0 0 10px 3px #ddd;

    // background-color: red;
    width: 319px;
    height: 165px;
    text-align: center;
    top: 135px;

    left: 30px;
  }
  .tx {
    height: 40px;
  }
  .touxiang {
    height: 60px;
    width: 60px;
    transform: translate(0, -50%);
  }
}

.login {
  height: 300px;
  position: relative;
  .bjt {
    width: 100%;
    height: 100%;
  }
  .yk {
    padding-top: 20px;
    font-size: 13px;
    height: 20px;
  }
  .bianji {
    font-size: 12px;
    color: #999999;
    padding-top: 20px;
  }
  .btn {
    font-size: 12px;
    color: #fff;
    background-color: #21b97a;
    border: 1px solid #21b97a;
    border-radius: 30px;
    width: 54px;
    height: 20px;
  }
  .dlk {
    position: absolute;
    background: #fff;
    box-shadow: 0 0 10px 3px #ddd;

    // background-color: red;
    width: 319px;
    height: 165px;
    text-align: center;
    top: 135px;

    left: 30px;
  }
  .tx {
    height: 20px;
  }
  .touxiang {
    height: 60px;
    width: 60px;
    transform: translate(0, -50%);
  }
}
.bbtp {
  width: 345px;
  height: 85px;
  padding-left: 12px;
  padding-top: 22px;
}
.van-grid {
  padding-top: 20px;
}
</style>
