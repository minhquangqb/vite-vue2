'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.hasDefaultExport = exports.rewriteDefault = void 0
const parser_1 = require('@babel/parser')
const magic_string_1 = __importDefault(require('magic-string'))
const defaultExportRE = /((?:^|\n|;)\s*)export(\s*)default/
const namedDefaultExportRE = /((?:^|\n|;)\s*)export(.+)as(\s*)default/
/**
 * Utility for rewriting `export default` in a script block into a variable
 * declaration so that we can inject things into it
 */
function rewriteDefault(input, as, parserPlugins) {
  if (!hasDefaultExport(input)) {
    return input + `\nconst ${as} = {}`
  }
  const replaced = input.replace(defaultExportRE, `$1const ${as} =`)
  if (!hasDefaultExport(replaced)) {
    return replaced
  }
  // if the script somehow still contains `default export`, it probably has
  // multi-line comments or template strings. fallback to a full parse.
  const s = new magic_string_1.default(input)
  const ast = parser_1.parse(input, {
    sourceType: 'module',
    plugins: parserPlugins,
  }).program.body
  ast.forEach((node) => {
    if (node.type === 'ExportDefaultDeclaration') {
      s.overwrite(node.start, node.declaration.start, `const ${as} = `)
    }
    if (node.type === 'ExportNamedDeclaration') {
      node.specifiers.forEach((specifier) => {
        if (
          specifier.type === 'ExportSpecifier' &&
          specifier.exported.type === 'Identifier' &&
          specifier.exported.name === 'default'
        ) {
          const end = specifier.end
          s.overwrite(
            specifier.start,
            input.charAt(end) === ',' ? end + 1 : end,
            ``
          )
          s.append(`\nconst ${as} = ${specifier.local.name}`)
        }
      })
    }
  })
  return s.toString()
}
exports.rewriteDefault = rewriteDefault
function hasDefaultExport(input) {
  return defaultExportRE.test(input) || namedDefaultExportRE.test(input)
}
exports.hasDefaultExport = hasDefaultExport
//# sourceMappingURL=rewriteDefault.js.map
