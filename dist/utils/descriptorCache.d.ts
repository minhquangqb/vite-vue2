import { SFCDescriptor } from '@vue/component-compiler-utils'
import { ResolvedOptions } from '../index'
export declare function createDescriptor(
  source: string,
  filename: string,
  { root, isProduction, vueTemplateOptions }: ResolvedOptions
): SFCDescriptor
export declare function getPrevDescriptor(
  filename: string
): SFCDescriptor | undefined
export declare function setPrevDescriptor(
  filename: string,
  entry: SFCDescriptor
): void
export declare function getDescriptor(
  filename: string,
  errorOnMissing?: boolean
): SFCDescriptor | undefined
export declare function setDescriptor(
  filename: string,
  entry: SFCDescriptor
): void
