'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          },
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.setDescriptor = exports.getDescriptor = exports.setPrevDescriptor = exports.getPrevDescriptor = exports.createDescriptor = void 0
const path_1 = __importDefault(require('path'))
const slash_1 = __importDefault(require('slash'))
const hash_sum_1 = __importDefault(require('hash-sum'))
const component_compiler_utils_1 = require('@vue/component-compiler-utils')
const vueTemplateCompiler = __importStar(require('vue-template-compiler'))
const cache = new Map()
const prevCache = new Map()
function createDescriptor(
  source,
  filename,
  { root, isProduction, vueTemplateOptions }
) {
  const descriptor = component_compiler_utils_1.parse({
    source,
    compiler:
      (vueTemplateOptions === null || vueTemplateOptions === void 0
        ? void 0
        : vueTemplateOptions.compiler) || vueTemplateCompiler,
    filename,
    sourceRoot: root,
    needMap: true,
  })
  // v2 hasn't generate template and customBlocks map
  // ensure the path is normalized in a way that is consistent inside
  // project (relative to root) and on different systems.
  const normalizedPath = slash_1.default(
    path_1.default.normalize(path_1.default.relative(root, filename))
  )
  descriptor.id = hash_sum_1.default(
    normalizedPath + (isProduction ? source : '')
  )
  cache.set(filename, descriptor)
  return descriptor
}
exports.createDescriptor = createDescriptor
function getPrevDescriptor(filename) {
  return prevCache.get(filename)
}
exports.getPrevDescriptor = getPrevDescriptor
function setPrevDescriptor(filename, entry) {
  prevCache.set(filename, entry)
}
exports.setPrevDescriptor = setPrevDescriptor
function getDescriptor(filename, errorOnMissing = true) {
  if (cache.has(filename)) {
    return cache.get(filename)
  }
  if (errorOnMissing) {
    throw new Error(
      `${filename} has no corresponding SFC entry in the cache. ` +
        `This is a vite-plugin-vue2 internal error, please open an issue.`
    )
  }
}
exports.getDescriptor = getDescriptor
function setDescriptor(filename, entry) {
  cache.set(filename, entry)
}
exports.setDescriptor = setDescriptor
//# sourceMappingURL=descriptorCache.js.map
