export enum Category {
  beauty = "福利",
  android = "Android",
  ios = "iOS",
  frontend = "前端",
  all = "all",
  video = "休息视频",
  more = "拓展资源"
}
// 今日干货
export const API_TODAY = "today"
// 哪些日子有干货数据
export const API_RELEASE_DATE = "day/history"

// 获取某一日的干货数据. example : http://gank.io/api/day/2015/08/07
export function apiOneDay(year: number, month: number, day: number): string {
  return `day/${year}/${month}/${day}`
}

/*
 * @param count : >= 1
 * @param page  : >= 1
 *
 * example : http://gank.io/api/data/Android/10/2
 */
export function getPageForCategory(category: Category, count: number, page: number) {
  return `data/${category}/${count}/${page}`
}


export const doFetch = (apiName: string) => {
  return fetch(`http://gank.io/api/${apiName}`)
}


