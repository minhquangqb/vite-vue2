'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.transformVueJsx = void 0
const core_1 = require('@babel/core')
const fs_1 = __importDefault(require('fs'))
// todo hmr
function transformVueJsx(code, id, jsxOptions) {
  const plugins = [],
    babelrcExists = fs_1.default.existsSync('./.babelrc')
  if (/\.tsx$/.test(id)) {
    plugins.push([
      require.resolve('@babel/plugin-transform-typescript'),
      { isTSX: true, allowExtensions: true },
    ])
  }
  const result = core_1.transform(code, {
    presets: [[require.resolve('@vue/babel-preset-jsx'), jsxOptions]],
    sourceFileName: id,
    filename: id,
    sourceMaps: true,
    plugins,
    babelrc: babelrcExists,
    configFile: false,
  })
  return {
    code: result.code,
    map: result.map,
  }
}
exports.transformVueJsx = transformVueJsx
//# sourceMappingURL=jsxTransform.js.map
