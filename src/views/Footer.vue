<template>
    <el-button type="text" @click="open">Copyright © 2018 Shangyunliang. All rights reserved.</el-button>
</template>

<script>
  export default {
    name: 'AppFooter',
    methods: {
      open() {
        this.$alert('<a href="https://github.com/Shangyunliang/play" target="__black">https://github.com/Shangyunliang/play</a>',
          '欢迎Star 😁', {
          confirmButtonText: '确定',
          dangerouslyUseHTMLString: true,
          callback: action => {
            console.log('点击事件完成')
          },

        });
      }
    }
  }
</script>