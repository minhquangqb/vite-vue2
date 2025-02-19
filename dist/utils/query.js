'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.parseVueRequest = void 0
const querystring_1 = __importDefault(require('querystring'))
function parseVueRequest(id) {
  const [filename, rawQuery] = id.split(`?`, 2)
  const query = querystring_1.default.parse(rawQuery)
  if (query.vue != null) {
    query.vue = true
  }
  if (query.src != null) {
    query.src = true
  }
  if (query.index != null) {
    query.index = Number(query.index)
  }
  if (query.raw != null) {
    query.raw = true
  }
  return {
    filename,
    query,
  }
}
exports.parseVueRequest = parseVueRequest
//# sourceMappingURL=query.js.map
