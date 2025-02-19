import { ModuleNode, HmrContext } from 'vite'
import { ResolvedOptions } from './index'
/**
 * Vite-specific HMR handling
 */
export declare function handleHotUpdate(
  { file, modules, read, server }: HmrContext,
  options: ResolvedOptions
): Promise<ModuleNode[] | void>
