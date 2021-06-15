<template>
  <el-dropdown :popperClass="popperClass" :placement="placement" :trigger="trigger" :show-arrow="showArrow" :offset="0">
    <el-button :type="btnType" :size="size">
      {{label}}<i v-if="showIcon" class="el-icon-arrow-down" :class="icon"></i>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    // 显示位置
    placement: {
      type: String,
      default: 'bottom-start'
    },
    // 显示大小
    size: {
      type: String,
      default: 'tool-mini'
    },
    // 按钮类型
    btnType: {
      type: String,
      default: 'svg-tool'
    },
    // 按钮文本
    label: {
      type: String,
      default: '点击按钮'
    },
    // 是否显示按钮图标
    showIcon: {
      type: Boolean,
      default: false
    },
    // 按钮图标
    icon: {
      type: String,
      default: 'el-icon--right'
    },
    // 触发方式
    trigger: {
      type: String,
      default: 'click'
    },
    // 自定义类名
    popperClass: {
      type: String,
      default: ''
    },
    // 是否显示箭头
    showArrow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
