<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="0">展开收起侧边栏</el-menu-item>
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-menu-item index="2">我的工作台</el-menu-item>
    <el-menu-item index="3">消息中心</el-menu-item>
    <el-menu-item index="4">订单管理</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        isCollapse: false
      };
    },
    methods: {
      handleSelect(key, keyPath) {
       if(key == 0) {
         this.isCollapse = !this.isCollapse
         this.$emit('handleChangeCollapse', this.isCollapse)
       }
      }
    }
  }
</script>

<style>
  .el-header {
    padding: 0;
  }
</style>
