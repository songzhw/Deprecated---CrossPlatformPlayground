/*
  action
  {
    type, apiId,
  }
 */
import {doFetch} from "../../core/HttpEngine";
import {loginSucc} from "../F8Reducer";

export const httpMiddleware = store => next => action => {
  // 为了要加await, 没办法只得再在方法上加async, 所以变成了这种形式
  return (async () => {
    console.log(`szw myMiddleware1 : action = ${JSON.stringify(action)}`)

    const {apiId} = action
    let response = await doFetch(apiId)
    let json = response.json()
    console.log(`szw myMiddleware2 result = ${JSON.stringify(json)}`)
    let result = next(loginSucc(json))
    console.log(`szw myMiddleware3 result = ${JSON.stringify(result)}`)
    return result
  })()

}