'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.createRollupError = void 0
function createRollupError(id, error) {
  error.id = id
  error.plugin = 'vite-plugin-vue2'
  return error
}
exports.createRollupError = createRollupError
//# sourceMappingURL=error.js.map
