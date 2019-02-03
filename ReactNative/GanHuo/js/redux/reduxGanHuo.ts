import {IAction} from "../core/CoreProps";
import {IListResponse, ITodayResponse} from "../core/data/ResponseData";
import {ISectionListData} from "../core/data/ViewData";
import {Category} from "../core/httpEngine";

export const REQUEST_TODAY = 'REQUEST_TODAY'
export const requestToday = () => ({
  type: REQUEST_TODAY,
})

export const RESPONSE_TODAY = "RESPONSE_TODAY"
export const responseToday = (resp: ITodayResponse) => ({
  type: RESPONSE_TODAY,
  payload: resp
})

export const REQUEST_CATEGORY = 'REQUEST_CATEGORY'
export const requestCategory = (category: Category, count: number, page: number) => ({
  type: REQUEST_CATEGORY,
  payload: {category, count, page}
})

export const RESPONSE_CATEGORY = "RESPONSE_CATEGORY"
export const responseCategory = (resp: IListResponse) => ({
  type: RESPONSE_CATEGORY,
  payload: resp
})

const initState = {
  payload: {}
}

export default (state = initState, action: IAction) => {
  switch (action.type) {
    case RESPONSE_TODAY:
    case RESPONSE_CATEGORY:
      let {payload} = action
      return payload
    default:
      return state
  }
}

export function extractTodayData(results: any) : ISectionListData[] {
  // 源数据 {'Android': [{}, {}], 'iOS': [{}]  }
  // 预期  [  {key:'Android', data: [{}, {}] },  {key: 'iOS', data: [{}] }  ]
  // console.log(`szw 00 ${JSON.stringify(resp)}`)
  let mapped : ISectionListData[] = []
  for( let key in results){ // key分别是Android, ios, 福利
    let oneItem = {key: key, data: []}
    oneItem["data"] = results[key]
    mapped.push(oneItem)
  }
  return mapped
}