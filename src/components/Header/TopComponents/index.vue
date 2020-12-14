<template>
  <div class="TopComponents">
    <!-- 当前激活菜单的 index   default-active-->
    <!-- mode  模式  horizontal / vertical  默认值vertical  -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <template v-for="(item) in data">
        <!-- 信息 -->
        <el-menu-item
          :index="item.id"
          :key="item.name"
          v-if="!item.chilren"
          >{{ item.name }}
        </el-menu-item>
        <!-- 二级菜单 -->
        <el-submenu  :index="item.id" :key="item.name" v-if="item.chilren">
          <!-- 二级菜单主要 -->
          <template slot="title"> {{ item.name }}</template>
          <!-- 二级菜单 的所有子项 -->
          <el-menu-item index="2-1" v-for="it in item.chilren" :key="it.name"
            >{{ it.name }}{{ it.img }}</el-menu-item
          >
        </el-submenu>
      </template>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "TopComponents",
  // 接收参数
  props: {
    data: Array,
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-menu--horizontal > .el-submenu .el-submenu__title {
  line-height: 36px;
  height: 36px;
  font-size: 12px;
}
.el-menu--horizontal > .el-submenu .el-submenu__title,.el-menu--horizontal>.el-menu-item {
  line-height: 36px;
  height: 36px;
  font-size: 12px;
}
</style>