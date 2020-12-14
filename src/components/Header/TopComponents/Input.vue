<template>
  <div class="logo">
    <div class="imgs">
      <img :src="img" alt="">
    </div>
    <el-input placeholder="请输入内容" v-model="input2">
      <template slot="append"><i class="iconfont icon-wangluo"></i></template>
    </el-input>
      <ul class="phone">
        <li>境内：95010 </li>
        <li>（或）400-830-6666 </li>
        <li>香港（中国）：+ 852-3008-3295 </li>
        <li>境外：+ 86-21-3406-4888 </li>
      </ul>
  </div>
</template>

<script>
import Image from "@/assets/logo.png"
export default {
  name: "Logo",
  data() {
    return {
      input2: "",
      img:Image
    };
  },
};
</script>

<style>
.logo {
  width: 1180px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.imgs{
  width: 203px;
  height: 34px;
}
.imgs > img{
  width: 100%;
  height: 100%;
  display: block;
}
.el-input{
  width: 424px;
  height: 34px;
}
.phone{
  width: 300px;
  height: 52px;
  overflow: hidden;
  text-align: end;
}
.phone > li {
  line-height: 26px;
}
.icon-wangluo{
  color: blue;
}
</style>