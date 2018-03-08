<template>
  <el-container>
    <el-header><app-header @handleChangeCollapse="handleChangeCollapse"></app-header></el-header>
    <el-container>
      <el-aside width="200px"><app-menu :isCollapse="isCollapse"></app-menu></el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import AppHeader from './Header.vue';
  import AppMenu from './Menu.vue';
  // console.log(AppHeader);
  export default {
    name: "Main",
    data() {
      return {
        isCollapse: false,
      }
    },
    components: {
      AppHeader,
      AppMenu,
    },
    methods: {
      handleChangeCollapse: function(flag){
        console.log(flag);
        this.isCollapse = flag
      }
    },
  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    @height: 100vh;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: calc(100vh - 60px);
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: calc(100vh - 120px);
  }

</style>
