import { TransformPluginContext } from 'rollup'
import { SFCDescriptor } from '@vue/component-compiler-utils'
export declare function transformStyle(
  code: string,
  filename: string,
  descriptor: SFCDescriptor,
  index: number,
  pluginContext: TransformPluginContext
): Promise<{
  code: string
  map: any
} | null>
