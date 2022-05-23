import {
  MicroCMSListContent,
  MicroCMSListResponse,
  MicroCMSQueries,
} from 'microcms-js-sdk'

export type Queries = MicroCMSQueries

export type TocTypes = {
  text: string
  id: string
  name: string
}

export type BodyEntity = {
  fieldId: 'richEditor' | 'html' | 'markdown'
  richText?: string
  html?: string
  markdown?: string
}

export interface IBlog extends ContentBase {
  title?: string
  category?: ICategory
  tag?: ITag[]
  toc_visible?: boolean
  body?: BodyEntity[]
  description?: string
  ogimage?: IMicroCmsImageType
  related_blogs: IBlog[]
}

export interface ICategory extends ContentBase {
  name?: string
}

export interface ITag extends ContentBase {
  name?: string
}

export type MicroCmsResponse<T> = MicroCMSListResponse<T>

export type ContentBase = MicroCMSListContent

export interface IMicroCmsImageType {
  url: string
  height: number
  width: number
}

export interface IDraftResponse {
  blog: IBlog
  toc: TocTypes[]
  body: string
}

export type Response<T = any> = {
  data: T
  headers: any
}

export interface IHttpClient {
  get: <T extends object, R = Response<T>>(path: string) => Promise<R>
}
