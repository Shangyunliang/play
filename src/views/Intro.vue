<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/login' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="mt20">
            <h1>Shangyunliang</h1>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Intro',
    data: function () {
      return {

      }
    },
    methods: {},
    mounted: function () {

    },
  }
</script>

<style scoped>
    .mt20 {
        margin-top: 20px;
    }
</style>