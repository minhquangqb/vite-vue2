'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.transformStyle = void 0
const component_compiler_utils_1 = require('@vue/component-compiler-utils')
async function transformStyle(
  code,
  filename,
  descriptor,
  index,
  pluginContext
) {
  const block = descriptor.styles[index]
  // vite already handles pre-processors and CSS module so this is only
  // applying SFC-specific transforms like scoped mode and CSS vars rewrite (v-bind(var))
  const result = component_compiler_utils_1.compileStyle({
    source: code,
    filename,
    id: `data-v-${descriptor.id}`,
    map: pluginContext.getCombinedSourcemap(),
    scoped: !!block.scoped,
    trim: true,
  })
  if (result.errors.length) {
    result.errors.forEach((error) =>
      pluginContext.error({ id: filename, message: error })
    )
    return null
  }
  return {
    code: result.code,
    map: result.map,
  }
}
exports.transformStyle = transformStyle
//# sourceMappingURL=style.js.map
