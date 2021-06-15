<template>
  <el-container class="container">
    <el-header><tool-bar popperClass="tool-bar-popper" /></el-header>
    <el-container>
      <el-aside></el-aside>
      <el-container>
        <el-container>
          <el-main></el-main>
          <el-aside width="160"></el-aside>
        </el-container>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import ToolBar from '@/components/toolBar.vue'
export default {
  name: 'Home',
  components: {
    ToolBar
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  .el-header {
    background-color: $gray-1000;
    height: 30px !important;
    line-height: 28px;
    text-align: left;
    padding-left: 80px;
    + .el-container {
      > .el-aside {
        background-color: $gray-1000;
        width: 50px !important;
        + .el-container {
          .el-main {
            background-color: #fff;
          }
          .el-aside {
            width: 160px !important;
            background-color: $gray-1000;
          }
          .el-footer {
            height: 40px !important;
            background-color: $gray-1000;
          }
        }
      }
    }
  }
}
</style>
