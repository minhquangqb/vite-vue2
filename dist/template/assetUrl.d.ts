import { ASTNode } from './utils'
export interface AssetURLOptions {
  [name: string]: string | string[]
}
export interface TransformAssetUrlsOptions {
  /**
   * @deprecated
   * If base is provided, instead of transforming relative asset urls into
   * imports, they will be directly rewritten to absolute urls.
   */
  base?: string
  forceRequire?: boolean
}
declare const _default: (
  userOptions?: AssetURLOptions | undefined,
  transformAssetUrlsOption?: TransformAssetUrlsOptions | undefined
) => {
  postTransformNode: (node: ASTNode) => void
}
export default _default
