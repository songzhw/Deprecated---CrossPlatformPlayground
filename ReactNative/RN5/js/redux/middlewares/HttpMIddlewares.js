/*
  action
  {
    type, apiId, nextType
  }
 */
import {axios} from '../../core/HttpEngine'

export const httpMiddleware = store => next => action => {
  const {apiId, nextType} = action
  axios.get(apiId)
    .then(rawResp => {
      let json = rawResp.data
      return next(createRespAction(nextType, json))
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
