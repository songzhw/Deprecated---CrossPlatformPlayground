/*
  action
  {
    type, apiId, nextType
  }
 */
import {axios} from '../../core/HttpEngine'

export const httpMiddleware = store => next => action => {
  const {apiId, nextType} = action
  console.log(`szw middle1 ${JSON.stringify(action)}`)
  axios.get(apiId)
    .then(rawResp => {
      let json = rawResp.data
      console.log(`szw middle2 ${JSON.stringify(json)}`)
      let result = next(createRespAction(nextType, json))
      console.log(`szw middle3 ${JSON.stringify(result)}`)
      return result
    })
    .catch(error => console.log(`szw HttpMiddleware error = ${JSON.stringify(error)}`))

}

export const createRequestAction = (type, nextType, apiId) => {
  return {
    type, nextType, apiId
  }
}

const createRespAction = (type, resp) => ({
  type: type,
  ...resp
})
