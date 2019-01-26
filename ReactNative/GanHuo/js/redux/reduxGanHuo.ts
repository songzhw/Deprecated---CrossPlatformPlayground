import {IAction} from "../core/CoreProps";

export const REQUEST_TODAY = 'REQUEST_TODAY'
export const requestToday = () => ({
  type: REQUEST_TODAY,
})

export const RESPONSE_TODAY = "RESPONSE_TODAY"
export const responseToday = (resp) => ({
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
      return payload
    default:
      return state
  }
}


// export interface IRecommendResponse {
//   banners: IBanner[],
//   recommend: IRecommendedMusicList[],
//   news: INewMusic[]
// }
//
// interface IBanner {
//   img: string,
//   title: string,
//   id: number
// }
//
// interface IRecommendedMusicList {
//   img: string,
//   title: string,
//   id: number
// }
//
//
// interface INewMusic {
//   img: string,
//   title: string,
//   id: number
// }
