import {IAction} from "../core/CoreProps";
import {ITodayResponse} from "../core/data/ResponseData";
import {ISectionListData} from "../core/data/ViewData";

export const REQUEST_TODAY = 'REQUEST_TODAY'
export const requestToday = () => ({
  type: REQUEST_TODAY,
})

export const RESPONSE_TODAY = "RESPONSE_TODAY"
export const responseToday = (resp: ITodayResponse) => ({
  type: RESPONSE_TODAY,
  payload: resp
})

const initState = {
  payload: {}
}

export default (state = initState, action: IAction) => {
  switch (action.type) {
    case RESPONSE_TODAY:
      let {payload} = action
      let sections = extractTodayData(payload)
      return {payload: sections}
    default:
      return state
  }
}

function extractTodayData(resp: ITodayResponse) : ISectionListData[] {
  // 源数据 {'Android': [{}, {}], 'iOS': [{}]  }
  // 预期  [  {key:'Android', data: [{}, {}] },  {key: 'iOS', data: [{}] }  ]
  // console.log(`szw 00 ${JSON.stringify(resp)}`)
  let {results} = resp
  let mapped : ISectionListData[] = []
  for( let key in results){ // key分别是Android, ios, 福利
    let oneItem = {key: key, data: []}
    oneItem["data"] = results[key]
    mapped.push(oneItem)
  }
  return mapped
}