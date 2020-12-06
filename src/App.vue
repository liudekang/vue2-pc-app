<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      @select="handleSelect" 
    >
      <el-menu-item index="/home">
        <router-link to="/home">首页</router-link></el-menu-item
      >
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="/abort">
          <router-link to="/abort">Go to Bar</router-link></el-menu-item
        >
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
    </el-menu>
    <div class="main">
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(555, key, keyPath);
    },
  },
  mounted() {
    const {path,name}=this.$route;
    this.activeIndex=path
    console.log('hr--',4666,this.$route,path,this.activeIndex,name);

// this.$router.push(path)
    
  }
};
</script>

<style>
#app {
  margin: 20px;
  display: flex;
}
.main {
  padding: 10px;
  border: 1px solid #ccc;
  flex: 1;
  overflow: hidden;
}
.is-active{
  background:red;
}
</style>
