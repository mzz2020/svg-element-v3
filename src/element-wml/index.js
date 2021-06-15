// svg
import CustomSvg from './CustomSvg.vue'

// 单个导出
export const _default = {
  svg: CustomSvg
}
// 全局导出
export default {
  install(vue) {
    Object.keys(_default).map(name => {
      vue.component(`ml-${name.toLowerCase()}`, _default[name])
    })
  }
}
