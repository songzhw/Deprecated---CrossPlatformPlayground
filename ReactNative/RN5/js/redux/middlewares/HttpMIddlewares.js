/*
  action
  {
    type, apiId, nextType
  }
 */
import {loginSucc} from "../F8Reducer";
import {axios} from '../../core/HttpEngine'

export const httpMiddleware = store => next => action => {
  console.log(`szw myMiddleware1 : action = ${JSON.stringify(action)}`)

  const {apiId, nextType} = action
  axios.get(apiId)
    .then(rawResp => {
      let json = rawResp.data
      console.log(`szw myMiddleware2 result = ${JSON.stringify(json)}`)
      let nextAction = {
        type: nextType,
        ...json
      }
      let result = next(nextAction)
      console.log(`szw myMiddleware3 result = ${JSON.stringify(result)}`)
      return result
    })

}