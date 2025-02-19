import { TransformAssetUrlsOptions } from './assetUrl'
export interface Attr {
  name: string
  value: string
}
export interface ASTNode {
  tag: string
  attrs: Attr[]
}
export declare function urlToRequire(
  url: string,
  transformAssetUrlsOption?: TransformAssetUrlsOptions
): string
export declare function isHashUrl(url: string): boolean
export declare function isExternalUrl(url: string): boolean
export declare function isDataUrl(url: string): boolean
