export interface VueQuery {
  vue?: boolean
  src?: boolean
  type?: 'script' | 'template' | 'style' | 'custom'
  index?: number
  lang?: string
  raw?: boolean
}
export declare function parseVueRequest(
  id: string
): {
  filename: string
  query: VueQuery
}
