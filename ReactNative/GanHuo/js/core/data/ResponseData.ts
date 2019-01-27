import {Category} from "../httpEngine";

export interface ITodayResponse {
  category: string[],
  error: false,
  results: any
}

export interface IGanHuoItem {
  _id: string,
  createdAt: string,
  publishedAt: string,
  desc: string,
  images: string[] | undefined,
  type: Category,
  url: string,
  who: string
}