import { ParserPlugin } from '@babel/parser'
/**
 * Utility for rewriting `export default` in a script block into a variable
 * declaration so that we can inject things into it
 */
export declare function rewriteDefault(
  input: string,
  as: string,
  parserPlugins?: ParserPlugin[]
): string
export declare function hasDefaultExport(input: string): boolean
