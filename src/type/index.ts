export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'patch'
  | 'PATCH'
  | 'put'
  | 'PUT'
  | 'options'
  | 'OPTIONS'
  | 'head'
  | 'HEAD'

export interface AxiosRequestConfig {
  url: string
  method?: string
  data?: any
  params?: any
  headers?: any
}
