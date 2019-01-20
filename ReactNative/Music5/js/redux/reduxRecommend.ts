export const FETCH_RECOMMEND_HOME = 'FETCH_RECOMMEND_HOME'
export const fetchRecomendHome = () => ({
  type: FETCH_RECOMMEND_HOME,
})

export const ON_GET_RECOMMEND_HOME = 'ON_FETCH_RECOMMEND_HOME'
export const onFetchedRecommendHome = (resp: IRecommendResponse) => ({
  type: ON_GET_RECOMMEND_HOME,
  payload: resp
})

const initState = {
  payload: {},
}

export default (state = initState, action: IActionOnFetch) => {
  switch (action.type) {
    case ON_GET_RECOMMEND_HOME:
      let {payload} = action
      return payload
    default:
      return state
  }
}

export interface IActionOnFetch {
  type: string,
  payload: any
}

export interface IRecommendResponse {
  banners: IBanner[],
  recommend: IRecommendedMusicList[],
  news: INewMusic[]
}

interface IBanner {
  img: string,
  title: string,
  id: number
}

interface IRecommendedMusicList {
  img: string,
  title: string,
  id: number
}


interface INewMusic {
  img: string,
  title: string,
  id: number
}
