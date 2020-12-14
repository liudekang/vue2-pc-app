<template>
  <div class="top">
    <nav>
      <div>
        <p @click="add">让旅行更幸福</p>
        <p><i class="iconfont icon-wangluo"></i> Language</p>
      </div>
      <TopComponentsIndex v-if="falg" :data="topData" />
    </nav>
    <div class="InputLogo">
      <Logo />
    </div>
  </div>
</template>

<script>
// 获取接口
import { get } from "@/AxiosApi/server.js";
// 获取数据
import { topMock } from "@/MockAPI/TopMock";
// 引入top组件
import TopComponentsIndex from "@/components/Header/TopComponents";
// 引入logo组件
import Logo from "@/components/Header/TopComponents/Input";
export default {
  name: "Top",
  // 注册组件
  components: {
    TopComponentsIndex,
    Logo,
  },
  data() {
    return {
      topData: [],
      falg: false,
    };
  },
  async mounted() {
    // 获取数据后渲染
    const data = await get("/api");
    this.topData = data.list.data;
    this.falg = true;
  },
  methods: {
    
  },
};
</script>

<style lang="scss">
.top {
  width: 100%;
  height: 36px;
  background: #f4f4f4;
}
nav {
  width: 1180px;
  height: 36px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    > p {
      &:nth-child(2) {
        padding: 0 13px;
      }
    }
  }
}
.InputLogo {
  width: 100%;
  height: 80px;
  background: #fff;
}
</style>